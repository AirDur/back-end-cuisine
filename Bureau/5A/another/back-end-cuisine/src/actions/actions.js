"use strict"

const Users = require('./users');
const Recettes = require('./recettes');

class Actions {
    constructor(server) {
        server.actions = this;
        this.recettes = new Recettes(server);
        this.users = new Users(server);
    }
};

module.exports = Actions;