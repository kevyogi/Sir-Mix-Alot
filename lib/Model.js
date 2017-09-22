const DataStore = require("./DataStore");
const extend = require("./extend");

function Model(schema){
  this.schema = schema;
  this.id = null;
  for(let i in this.schema){
    Model.prototype[i] = null;
  }
  if(!DataStore.store.Model){
    DataStore.store.Model = [];
  }
}

// extend(Model.prototype, DataStore.prototype);

module.exports = Model;