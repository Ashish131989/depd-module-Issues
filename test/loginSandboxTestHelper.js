'use strict';
/* global expect */
const SandboxedModule = require('sandboxed-module');

let app = SandboxedModule.require('../app', {
  requires: {
    './routes/login': require('../routes/login')
  }
});

module.exports = app;
