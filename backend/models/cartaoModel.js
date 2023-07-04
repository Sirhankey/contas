const { Validator } = require('jsonschema')
const validator = new Validator()

const cartaoSchema = {
  type: "object",
  conta: {
    id: { type: 'string' },
    titulo: { type: 'string' },
    valor: { type: 'number' },
    final: { type: 'string' },
    bandeira: { type: 'string' },
    titular: { type: 'string' },
    fechamento: { type: 'boolean' },
    vencimento: { type: 'string' },
    dta_pagamento: { type: 'string' },
    pago: { type: 'boolean' },
    obs: { type: 'string' },
  },
  "required": ['titulo', 'valor', 'final', 'bandeira', 'titular', 'fechamento', 'vencimento']
}

const validateDataCartao = (e) => {
  return validator.validate(e, cartaoSchema)
}

module.exports = { validateDataCartao }   