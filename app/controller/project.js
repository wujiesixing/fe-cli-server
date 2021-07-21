'use strict';

const Controller = require('egg').Controller;
const mongo = require('../utils/mongo');

class ProjectController extends Controller {
  async getTemplate() {
    const { ctx } = this;
    const m = mongo();
    const collection = await m.collection();
    const data = await collection.find().toArray();
    ctx.body = data;
  }
}

module.exports = ProjectController;
