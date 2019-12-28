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

    async sendEmail(listEmailUsers, model){
        //get allocation data
        let truckplate = model.truckplate;
        let driveridentificationnumber = model.driveridentificationnumber;
        let trailerplate = model.trailerplate;
        let date = (new Date(model.date)).toLocaleString('en-IL',{day: '2-digit', month:'2-digit', year: 'numeric', hour12: false, hour: '2-digit', minute: '2-digit'});
        let plant = model.plant;
        let plantData = await strapi.services.plants.find({id: plant});
        let plantId = plantData._byId[Object.keys(plantData._byId)[0]].attributes.plantid;
        let plantProduct = plantData._byId[Object.keys(plantData._byId)[0]].attributes.description;
        
        //send email
        let text = 'Cancelled Truck '+truckplate+', with Trailer '+trailerplate+' and Driver '+driveridentificationnumber+', at '+date+', '+plantId+' '+plantProduct;
        strapi.plugins['email'].services.email.send({
            to: listEmailUsers,
            subject: 'Truck Cancelled',
            text: text
        });
    }
};
