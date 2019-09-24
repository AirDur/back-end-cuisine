"use strict"

const Action = require('@fmguimaraes/micronode').Action;
//todo import RESPONSES

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

    async create(req, res) {
        let answerSent = false,
            newRecette = req.body;

        try {
            await this.validation.verifyData(newRecette);
        } catch(err) {
            answerSent = true;
            this.sendAnswer(res, RESPONSES.HTTP_STATUS.BAD_REQUEST,
                        RESPONSES.UNABLE_TO_CREATE_RECETTE, err.message);
        }

        if (!answerSent) {
            let creationResponse = await this.create({ ...newRecette }, "recette");

            if (creationResponse.recette) {
                this.sendAnswer(res, RESPONSES.HTTP_STATUS.OK, creationResponse.recette);
            } else {
                this.sendAnswer(res, RESPONSES.HTTP_STATUS.INTERNAL_SERVER_ERROR, RESPONSES.UNABLE_TO_CREATE_RECETTE);
            }
        }
    }
};

module.exports = Recettes;