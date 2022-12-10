require("express-async-errors");

const migrationsRun = require("./database/sqlite/migrations");
const AppError = require("./utils/AppError");

const { request, response } = require("express");
const express = require("express");

const routes = require("./routes");

migrationsRun();

const app = express();
app.use(express.json());

app.use(routes);

app.use(( error, request, response, next ) => {
    if(error instanceof AppError) { //error client side (erro lado cliente)
        return response.status(error.statusCode).json({
            status: "error",
            message: error.message
        });
    }

    //caso eu precise ver o erro
    console.error(error);

    // default error (erro padrão)
    return response.status(500).json({
        status: "error",
        message: "Internal server error",
    });
});




const PORT = 3333;
app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`));