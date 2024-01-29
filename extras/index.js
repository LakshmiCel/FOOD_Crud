
const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

adminPassword = 'Cel@2024';
const mongoConnect = callback => {

    MongoClient.connect(`mongodb+srv://lakshmicelestial:${encodeURIComponent(adminPassword)}@cluster0.apl8aqf.mongodb.net/?retryWrites=true&w=majority`)
        .then((res) => {
            console.log("connected");
            callback(res);
        })
        .catch((err) => {
            console.log(err)
        });
}
module.exports = {
    mongoConnect
}