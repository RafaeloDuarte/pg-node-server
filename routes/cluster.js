const router = require('express').Router()
const ClusterController = require('../controllers/ClusterController')
const clusterController = new ClusterController()

router.get('/', clusterController.index)

module.exports = router