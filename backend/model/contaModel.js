const { Validator } = require('jsonschema')
const validator = new Validator()

const contaSchema = {
  type: "object",
  conta: {
    id: { type: 'string' },
    titulo: { type: 'string' },
    valor: { type: 'number' },
    grupo: { type: 'string '},
    vencimento: { type: 'string' },
    valor_fixo: { type: 'boolean' },
    mensal: { type: 'boolean' },
    pago: { type: 'boolean' },
    dta_pagamento: { type: 'string' },
    forma_pagamento: { type: 'string' },
    desconto: { type: 'number' },
    obs: { type: 'string' },
  },
  "required": ['titulo', 'valor', 'vencimento', 'valor_fixo', 'mensal']
}

const validateDataContas = (e) => {
  return validator.validate(e, contaSchema)
}

module.exports = { validateDataContas }   