const mongoose = require("mongoose");
const { MongoMemoryServer } = require("mongodb-memory-server");

const mongoMemoryServer = new MongoMemoryServer();

// Connect to the in-memory database.
module.exports.connect = async () => {
    await mongoose.disconnect();
    
    const uri = await mongoMemoryServer.getUri();

    const mongooseOpts = {
        useNewUrlParser: true,
        autoReconnect: true,
        reconnectTries: Number.MAX_VALUE,
        reconnectInterval: 1000
    };

    await mongoose.connect(uri, mongooseOpts);
}

// Remove all the data for all db collections.
module.exports.clearDatabase = async () => {
    const collections = mongoose.connection.collections;

    for (const key in collections) {
        await collections[key].deleteMany();
    }
}

// Drop database, close the connection and stop mongoMemoryServer.
module.exports.closeDatabase = async () => {
    await mongoose.connection.dropDatabase();
    await mongoose.connection.close();
    await mongoMemoryServer.stop();
}