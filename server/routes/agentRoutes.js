const express = require('express');
const agentController = require('./../controllers/agentController');

const router = express.Router(); // creating a new router

router
  .route('/')
  .get(agentController.getAllAgents)
  .post(agentController.createAgent);
router
  .route('/:id')
  .get(agentController.getAgent)
  .post(agentController.updateAgent)
  .delete(agentController.deleteAgent);

module.exports = router;
