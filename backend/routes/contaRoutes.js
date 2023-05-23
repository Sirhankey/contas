const express = require('express')
const router = express.Router()

const contaController = require('../controller/contaFileController')

router.get('/',contaController.getContas)

router.post('/add',contaController.addConta)

router.put('/:id',contaController.updateConta )

router.delete('/:id',contaController.removeConta )

module.exports= router