const DataStore = require("./DataStore");
const temp = DataStore.store;
// const extend = require("./extend");

function Model(schema){
  this.schema = schema;
  this.id = null;
  for(let i in this.schema){
    this[i] = null;
  }
  if(!temp[this.constructor.name]){
    temp[this.constructor.name] = [];
  }
}

Model.prototype.save = function(){
  if(!this.id){
    this.id = this.constructor.getNextId();
    temp[this.constructor.name].push(this);
  }
}

Model.prototype.destroy = function(){
  var index = this.constructor.find(this.id);
  temp[this.constructor.name].splice(index, 1);
}

Model.getNextId = function(){
  return temp[this.name].length + 1;
}

Model.find = function(id){
  for(let i = 0; i < temp[this.name].length; i++){
    if(temp[this.name][i].id === id){
      return temp[this.name][i];
    }
  }
  return null;
}

Model.extend = function(klass){
  for(let i in Model){
    klass[i] = Model[i];
  }
  for(let j in Model.prototype){
    klass.prototype[j] = Model.prototype[j];
  }
}

module.exports = Model;