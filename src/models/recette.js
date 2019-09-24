"use strict"

const Model = require('@fmguimaraes/micronode').Model;

class Recette extends Model {
  constructor(server) {
    super(server);

    this.collection = 'recettes';

    this.schema = {
      titre: String,
      description: String,
      picture: String,
      note: Number,
      countNote: Number,
      link: String,
    };
  }
};

module.exports = Recette;