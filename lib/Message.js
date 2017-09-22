const Model = require("./Model");
const User = require("./User");

function Message(){
  let MessageSchema = {
    from: User,
    to: User,
    message: String,
    sent: Date
  }

  Model.call(this, MessageSchema);
}

Model.extend(Message);

module.exports = Message;