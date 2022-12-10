const knex = require("../database/knex");

class TagsController {
    async index(request, response) {
        const {client_id} = request.params;
       // console.log(client_id);

        const tags = await knex("tags")
            .where({ client_id })

        return response.json(tags);
    }
}

module.exports = TagsController;