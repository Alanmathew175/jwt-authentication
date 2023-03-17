const mongoose = require("mongoose");

const dburl = "mongodb://127.0.0.1:27017/Posts";

const connectionParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};
module.exports = mongoose
    .connect(dburl, connectionParams)
    .then(()=> console.log('data base'))
    .catch((err) => console.log(err));