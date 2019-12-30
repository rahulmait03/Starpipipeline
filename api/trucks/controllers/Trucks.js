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
};
