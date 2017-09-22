const Model = require("./Model");
const User = require("./User");

function Account(){
  let AccountSchema = {
    user: User,
    accountNumber: Number,
    address: String,
    balance: Number
  }
  Model.call(this, AccountSchema);
}

Model.extend(Account);

module.exports = Account;