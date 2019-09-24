const Validation = require('./validation');

class RecetteValidation extends Validation {

    constructor(server) {
        super(server);
    }

    verifyData(recette) {
        //TODO
        return true;
    }
};

module.exports = RecetteValidation;