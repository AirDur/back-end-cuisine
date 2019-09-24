"use strict"

const Model = require('@fmguimaraes/micronode').Model;

class Recette extends Model {
  constructor(server) {
    super(server);

    this.collection = 'recettes';

    this.schema = {
      title: {
        required: true, 
        type : String
      },
      description: {
        required: false, 
        type : String
      },
      picture: {
        required: false, 
        type : String
      },
      note: {
        required: false, 
        type : Number,
        default: 0
      },
      countNote:  {
        required: false, 
        type : String,
        default: 0
      },
      link:  {
        required: false, 
        type : String
      },
    };
  }
};

module.exports = Recette;