const roles =  {
    BASE : "User",
    ADMIN : "Admin"
};

const permissions = {
    "/recettes" : {
        POST : [ "Admin" ],
    }
    //TODO
};

module.exports = { permissions, roles };