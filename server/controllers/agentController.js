const Agent = require('../models/agentModel');
// const catchAsync = require('./../utils/catchAsync');
// const AppError = require('./../utils/appError');
const factory = require('./handlerFactory');

//ROUTE HANDLERS
exports.getAllAgents = factory.getAll(Agent);
exports.getAgent = factory.getOne(Agent);
exports.createAgent = factory.createOne(Agent);
exports.updateAgent = factory.updateOne(Agent);
exports.deleteAgent = factory.deleteOne(Agent);
