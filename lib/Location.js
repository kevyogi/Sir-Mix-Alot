Model = require("./Model");

function Location(){
  let LocationSchema = {
    lng: Number,
    lat: Number
  }
  Model.call(this, LocationSchema);
}

Model.extend(Location);

module.exports = Location;