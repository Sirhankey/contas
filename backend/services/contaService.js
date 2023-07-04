const contaModel = require('../models/ContaModelDB');


// Criar uma nova conta
async function createConta(newConta) {
    const createdItem = await contaModel.create(newConta);
    return createdItem;
}

// Obter uma conta por ID
async function getConta(id) {
    if (id) {
        const item = await contaModel.findByPk(id);
        return item;
    }
    const items = await contaModel.findAll()
    return items;
}

// Atualizar uma conta por ID
async function updateConta(id, updatedConta) {
    const conta = await contaModel.findByPk(id);
    if (!conta) {
        throw new Error('Conta not found');
    }
    await conta.update(updatedConta);
    return conta;
}

// Excluir uma conta por ID
async function deleteConta(id) {
    const conta = await contaModel.findByPk(id);
    if (!conta) {
        throw new Error('Conta not found');
    }
    await conta.destroy();
}

module.exports = {
    createConta,
    getConta,
    updateConta,
    deleteConta,
};
