"use strict"

const Action = require('@fmguimaraes/micronode').Action;
const RESPONSES = require('../constants/responses');

const Recette = require('../models/recette');

class Recettes extends Action {
    constructor(server) {
        super(server)
        this.server = server;
        this.model = new Recette(this.server);

        this.eventEmitter.on('recette.create', this.create.bind(this));
        this.eventEmitter.on('recette.read', this.read.bind(this));
        this.eventEmitter.on('recette.update', this.update.bind(this));
        this.eventEmitter.on('recette.delete', this.delete.bind(this));
    }

    async create(req, res) {
        let code = RESPONSES.HTTP_STATUS.OK,
            newRecette = req.body,
            result = null,
            missingField = null;

        try {
            result = await this.model.create(newRecette);
            result = RESPONSES.RECETTE_CREATED;
        } catch (err) {
            code = RESPONSES.HTTP_STATUS.INTERNAL_SERVER_ERROR;
            result = RESPONSES.UNABLE_TO_CREATE_RECETTE;
            
            if(this.isValidationError(err)) {
                code = RESPONSES.HTTP_STATUS.BAD_REQUEST;
                result = RESPONSES.VALIDATION_ERROR;
                missingField = this.getMissingFieldName(err.errorMsg.errors);
            }
        }
        
        this.sendAnswer(res, code, result, missingField);
    }

    isValidationError(err) {
        return err.errorMsg.name === ERROR.MONGO.VALIDATION;
    }
};

module.exports = Recettes;