'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/3.0.0-beta.x/guides/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
    async createTrailers(ctx) {
        let responseArray = [];

        let body = ctx.request.body;
        for(let trailer of body){
            let entity = await strapi.services.trailers.create(trailer);
            responseArray.push(entity);
        };

        return responseArray;
    },
};
