'use strict';

/**
 * Read the documentation () to implement custom controller functions
 */

module.exports = {
    /**
     * Retrieve records.
     *
     * @return {Array}
     */
    find(ctx) {
        console.log('orderitemdemand.controllers.find');
        if (ctx.query._q) {
            return strapi.services.orderitemdemand.search(ctx.query);
        }
        return strapi.services.orderitemdemand.find(ctx.query);
    },
};
