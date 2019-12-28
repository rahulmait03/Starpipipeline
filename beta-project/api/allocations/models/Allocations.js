'use strict';

/**
 * Lifecycle callbacks for the `Allocations` model.
 */

module.exports = {
  // Before saving a value.
  // Fired before an `insert` or `update` query.
  // beforeSave: async (model) => {},

  // After saving a value.
  // Fired after an `insert` or `update` query.
  // afterSave: async (model, result) => {},

  // Before fetching all values.
  // Fired before a `fetchAll` operation.
  // beforeFetchAll: async (model) => {},

  // After fetching all values.
  // Fired after a `fetchAll` operation.
  afterFetchAll: async (model, results) => {
    console.log('models.allocations.afterFetchAll')
  },

  // Fired before a `fetch` operation.
  beforeFetch: async (model) => {
    console.log('models.allocations.beforeFetch')
  },

  // After fetching a value.
  // Fired after a `fetch` operation.
  afterFetch: async (model, result) => {
    console.log('models.allocations.afterFetch')
  },

  // Before creating a value.
  // Fired before an `insert` query.
  // beforeCreate: async (model) => {},

  // After creating a value.
  // Fired after an `insert` query.
  // afterCreate: async (model, result) => {},

  // Before updating a value.
  // Fired before an `update` query.
  // beforeUpdate: async (model) => {},

  // After updating a value.
  // Fired after an `update` query.
  afterUpdate: async (model, result) => {
    model = JSON.parse(JSON.stringify(model));
    if(model.status.toString()=='030'){
      let listOfUsers = await strapi.plugins['users-permissions'].services.user.fetchAll();
      var listEmailUsers = [];
      listOfUsers.filter(user=>{
        if(user.role.name && user.role.name.toString()=='iclManager'||user.role.name.toString()=='admin')
          listEmailUsers.push(user.email);
        if(user.role.name && user.role.name.toString()=='agencyUser' && user.agency==model.agency)
          listEmailUsers.push(user.email);
      });
      if(listEmailUsers.length>0)
       await strapi.controllers.allocations.sendEmail(listEmailUsers, model);
    }
  },

  // Before destroying a value.
  // Fired before a `delete` query.
  // beforeDestroy: async (model) => {},

  // After destroying a value.
  // Fired after a `delete` query.
  // afterDestroy: async (model, result) => {}
};
