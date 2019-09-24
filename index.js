"use strict"
const Micronode = require('@fmguimaraes/micronode').Server;

const Actions = require('./src/actions/actions');
const Routes = require('./src/routes/routes');
const Settings = require('./settings');
const Permissions = require('./src/constants/permissions');

class Core {
  constructor() {
    this.uNode = new Micronode(Settings, Permissions);

    let routes = new Routes(this.uNode);
    let actions = new Actions(this.uNode); 

    this.uNode.init(actions, routes);
  }
}

let core = new Core();

module.exports = core;