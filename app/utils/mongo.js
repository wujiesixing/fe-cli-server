'use strict';

const { MongoClient } = require('mongodb');
const { mongodbUrl, mongodbDbName, mongodbCollectionName } = require('../../config/db');

class Mongo {
  constructor(url, dbName) {
    this.url = url;
    this.dbName = dbName;
    this.client = new MongoClient(this.url);
  }

  async collection() {
    await this.client.connect();
    const db = this.client.db(this.dbName);
    return db.collection(mongodbCollectionName);
  }

  close() {
    this.client.close();
  }
}

function mongo() {
  return new Mongo(mongodbUrl, mongodbDbName);
}

module.exports = mongo;
