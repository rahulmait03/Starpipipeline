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
        console.log('plantsavailability.controllers.delete');
        return strapi.services.plantsavailability.delete({id: ctx.url.split('/').reverse()[0]});
        //return strapi.services.product.delete(ctx.params);
    },
};
