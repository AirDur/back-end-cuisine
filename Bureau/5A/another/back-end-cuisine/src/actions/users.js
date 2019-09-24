"use strict"

// const RESPONSES = require('@fmguimaraes/micronode');
const Action = require('@fmguimaraes/micronode').Action;
// const Action = require('@fmguimaraes/micronode').Action;s

class Users extends Action {
    constructor(server) {
        super(server)
        this.server = server;
    }
};

module.exports = Users;