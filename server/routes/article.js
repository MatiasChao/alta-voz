const { Router } = require('express')
const router = Router();

const articleCrl = require('../controllers/articleCrl')

router.get('/', articleCrl.getAll);

module.exports = router;