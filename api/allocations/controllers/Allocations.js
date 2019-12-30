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
        console.log('allocations.controllers.find');
        if (ctx.query._q) {
            return strapi.services.allocations.search(ctx.query);
        }
        return strapi.services.allocations.find(ctx.query);
    },

    findAllocationOfOrderitemdemand(orderitemdemandId){
        console.log(orderitemdemandId);
        console.log('allocations.controllers.findAllocationOfOrderitemdemand');
    },

    async sendEmail(listEmailUsers){
        var date =  new Date();
        await strapi.plugins['email'].services.email.send({
            to: listEmailUsers,
            from: 'DoNotReplay@iberpotash.com',
            replyTo: 'DoNotReplay@iberpotash.com',
            subject: 'Truck Cancelled',
            text: 'Warning: Truck cancelled at'+" " + date
        });
    }
};
