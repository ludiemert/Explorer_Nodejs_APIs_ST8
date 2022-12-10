const knex = require("../database/knex");

class LinksController {
    async index(request, response) {
        const {movie_id} = request.params;
       // console.log(client_id);

        const links = await knex("links")
            .where({ movie_id })

        return response.json(links);
    }
}

module.exports = LinksController;