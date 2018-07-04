// Initializes the `tokopro` service on path `/tokopro`
const createService = require('feathers-sequelize');
const createModel = require('../../models/tokopro.model');
const hooks = require('./tokopro.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/tokopro', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('tokopro');

  service.hooks(hooks);
};
