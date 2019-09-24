"use strict"
let Route = require('@fmguimaraes/micronode').Route;

class Recettes extends Route {
  constructor(node) {
    super(node);

    this.routes = [
      { path: "/recettes", post: this.create.bind(this), tokenRequired: false },
      { path: "/recettes", get: this.read.bind(this), tokenRequired: false },

      { path: "/recette/changerNote/:id", post: this.changerNote.bind(this), tokenRequired: false },

      { path: "/recette/:id", get: this.read.bind(this), tokenRequired: false },
      { path: "/recette/:id", post: this.update.bind(this), tokenRequired: false },
      { path: "/recette/:id", delete: this.delete.bind(this), tokenRequired: false }
    ];
  }

  create(req, res) {
    this.eventEmitter.emit('recette.create', req, res);
  }

  read(req, res) {
    this.eventEmitter.emit('recette.read', req, res);
  }

  update(req, res) {
    this.eventEmitter.emit('recette.update', req, res);
  }

  changerNote(req, res) {
    // ( ( note * countNote) + nouvelleNote ) / countNote+1
    //todo dans autre feature
  }

  delete(req, res) {
    this.eventEmitter.emit('recette.delete', req, res);
  }
};

module.exports = Recettes;