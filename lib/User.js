const Model = require("./Model");

function User(){
  let UserSchema = {
    username: String,
    password: String
  }
  Model.call(this, UserSchema);
}

Model.extend(User);

module.exports = User;