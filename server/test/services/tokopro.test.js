const assert = require('assert');
const app = require('../../src/app');

describe('\'tokopro\' service', () => {
  it('registered the service', () => {
    const service = app.service('tokopro');

    assert.ok(service, 'Registered the service');
  });
});
