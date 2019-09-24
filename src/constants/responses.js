let responses = require('@fmguimaraes/micronode').Responses;

const RESPONSES = { ...responses,

    UNABLE_TO_CREATE_RECETTE : { message: "Nous n'avons pas pu créer la recette." },
    RECETTE_CREATED : { message: "La recette a bien été crée." }
};

module.exports = RESPONSES;