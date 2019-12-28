'use strict';

/**
 * Read the documentation () to implement custom controller functions
 */

module.exports = {
    async createDrivers(ctx) {
        let responseArray = [];

        let body = ctx.request.body;
        for(let driver of body){
            let entity = await strapi.services.driver.create(driver);
            responseArray.push(entity);
        };

        return responseArray;
    },
};
