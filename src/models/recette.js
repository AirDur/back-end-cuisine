"use strict"

const Model = require('@fmguimaraes/micronode').Model;
// import { Mongoose = require('mongoose');

class Recette extends Model {
  constructor(server) {
    super(server);

    this.collection = 'recettes';

    this.schema = {
      test: String
    };
  }
};

module.exports = Recette;