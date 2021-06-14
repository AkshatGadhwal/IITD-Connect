const {MongoClient} = require('mongodb');
const client = new MongoClient(process.env.DATABASE_URL_YEARBOOK, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

client.connect()

module.exports = client;