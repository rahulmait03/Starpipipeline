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
        console.log('allocations.services.find');
        return strapi.query('Allocations').find(params, populate);
    },
};
