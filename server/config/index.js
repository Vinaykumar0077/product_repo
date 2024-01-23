require("dotenv").config();

module.exports = {
    PORT : process.env.PORT,
    MONGO_LOCAL_URL: process.env.MONGO_LOCAL_URL,
}