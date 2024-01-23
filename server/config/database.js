const {connect} = require("mongoose")
const {MONGO_LOCAL_URL} = require("./index")
function connectDataBase(){
    connect(MONGO_LOCAL_URL);
    console.log("database connected")
}

module.exports = {connectDataBase}