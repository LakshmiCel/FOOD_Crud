
const mongoose = require('mongoose');
adminPassword = 'Cel@2024';
const uri = `mongodb+srv://lakshmicelestial:${encodeURIComponent(adminPassword)}@cluster0.apl8aqf.mongodb.net/?retryWrites=true&w=majority`;

const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true, uri_decode_auth: true } };

async function run() {
    try {
        await mongoose.connect(uri, clientOptions);
        await mongoose.connection.db.admin().command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        await mongoose.disconnect();
    }
}
run().catch(console.dir);
