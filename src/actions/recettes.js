"use strict"

// const RESPONSES = require('@fmguimaraes/micronode';
const Action = require('@fmguimaraes/micronode').Action;

const Recette = require('../models/recette');
const RecetteValidation = require('../validations/recette');

class Recettes extends Action {
    constructor(server) {
        super(server)
        this.server = server;
        this.model = new Recette(this.server);
        this.validation = new RecetteValidation(this.server);

        this.eventEmitter.on('recette.create', this.create.bind(this));
    }

    create(req, res) {
        let test = {
          answer: "hello world"
        };
  
        this.sendAnswer(res, 200, test);
      }
};

module.exports = Recettes;