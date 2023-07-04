const express = require('express')
const router = express.Router()

const contaController = require('../controller/contaController')

router.get('/', contaController.get)

router.get('/:id', contaController.get)

router.post('/', contaController.create)

// router.put('/contas/:id', contaController.update)

// router.delete('/contas/:id', contaController.remove)

module.exports = router;