'use strict';

/**
 * Read the documentation () to implement custom controller functions
 */

module.exports = {
    /**
     * delete a record.
     *
     * @return {Object}
     */
    delete(ctx) {
        console.log('trucks.controllers.delete');
        return strapi.services.trucks.delete({id: ctx.url.split('/').reverse()[0]});
        //return strapi.services.product.delete(ctx.params);
    },

    async createTrucks(ctx) {
        let responseArray = [];

        let body = ctx.request.body;
        for(let truck of body){
            let entity = await strapi.services.trucks.create(truck);
            responseArray.push(entity);
        };

        return responseArray;
    },
};
