'use strict';
const express = require('express');
const login = require('./routes/login');
let acl = new aclLib(new aclLib.memoryBackend());

acl.allow([
  {
    roles: ['NoRole'],
    allows: [
      {
        resources: [
          '/login',
          '/'
        ], permissions: ['ALL']
      }
    ]
  }
]);

let app = express();

module.exports = app;
