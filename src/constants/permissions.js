const roles =  {
    BASE : "User",
    ADMIN : "Admin"
};

const permissions = {
    "/recettes" : {
        POST : [ "Admin" ],
    }
};

module.exports = { permissions, roles };