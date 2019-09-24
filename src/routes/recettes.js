"use strict"
let Route = require('@fmguimaraes/micronode').Route;

class Recettes extends Route {
  constructor(node) {
    super(node);

    this.routes = [
      { path: "/recettes", post: this.create.bind(this), tokenRequired: false },
    ];
  }

  create(req, res) {
    this.eventEmitter.emit('recette.create', req, res);
  }
};

module.exports = Recettes;