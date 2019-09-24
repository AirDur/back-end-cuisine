"use strict"

const Recettes = require('./recettes');

class Routes {
  constructor(server) {
    this.list = [];
    this.list.push(new Recettes(server));
  }
};

module.exports = Routes;