'use strict';

/**
 * Lifecycle callbacks for the `Orderitemdemand` model.
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
  beforeFetchAll: async (model) => {
    console.log('orderitemdemand.models.beforeFetchAll');
  },

  // After fetching all values.
  // Fired after a `fetchAll` operation.
  afterFetchAll: async (model, results) => {
    console.log('orderitemdemand.models.afterFetchAll');
  },

  // Fired before a `fetch` operation.
  // beforeFetch: async (model) => {},

  // After fetching a value.
  // Fired after a `fetch` operation.
  // afterFetch: async (model, result) => {},

  // Before creating a value.
  // Fired before an `insert` query.
  // beforeCreate: async (model) => {},

  // After creating a value.
  // Fired after an `insert` query.
  // afterCreate: async (model, result) => {},

  // Before updating a value.
  // Fired before an `update` query.
  beforeUpdate: async (model) => {
    console.log('orderitemdemand.models.beforeUpdate');
  },

  // After updating a value.
  // Fired after an `update` query.
  afterUpdate: async (model, result) => {
    console.log('orderitemdemand.models.afterUpdate');
    console.log(model.attributes.id);
    await strapi.controllers.allocations.findAllocationOfOrderitemdemand(model.attributes.id);
  },

  // Before destroying a value.
  // Fired before a `delete` query.
  // beforeDestroy: async (model) => {},

  // After destroying a value.
  // Fired after a `delete` query.
  // afterDestroy: async (model, result) => {}
};
