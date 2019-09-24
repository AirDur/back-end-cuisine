const responses = {
    DATABASE_ERROR : { message: "Problème avec la base de donnée. Contactez l'administrateur." },
    TOKEN_NOT_PROVIDED: { message: "Token pas fourni.", auth: false, token: null },
    INVALID_TOKEN: { message: "Problème de token", auth: false, token: null },
    INVALID_CHARACTER: { message : "Charactère invalide" },
    UNKNOW_ERROR: { message : "Erreur inconnue"},
    VALIDATION_ERROR : { message: "Problème lors de la vérification des données." },

    UNKNOW_USER: { message: "Utilisateur inconnu" },
    VALIDATION_PROBLEM_USER : { message: "Les données saisies sont incorrectes"},
    INVALID_CREDENTIAL: { message: "Les identifiants (nom d'utilisateur, mail, mot de passe) sont incorrects" },

    HTTP_STATUS : {
        OK : 200,
        BAD_REQUEST : 400,
        UNAUTHORIZED : 401,
        NOT_FOUND : 404,
        CONFLICT : 409,
        INTERNAL_SERVER_ERROR : 500,
    },
};

module.exports = responses;