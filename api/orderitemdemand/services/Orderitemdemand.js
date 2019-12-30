'use strict';

/**
 * Read the documentation () to implement custom service functions
 */

module.exports = {
    /**
     * Promise to fetch all records
     *
     * @return {Promise}
     */
    find(params, populate) {
        console.log('orderitemdemand.services.find');
        return strapi.query('Orderitemdemand').find(params, populate);
    },
};
