const { v4: uuidv4 } = require('uuid')
const { getConta, createConta, deleteConta, updateConta } = require('../services/contaService')


// Criar uma nova conta
async function create(req, res) {
    try {
        const conta = { ...req.body };
        conta.id = uuidv4()
        const createdConta = await createConta(conta);
        res.json(createdConta);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

//Obter conta
async function get(req, res) {
    try {
        console.log("INICIOU O GET")
        const { id } = req.query
        if (!id) {
            const contas = await getConta()
            return res.json(contas)
        }
        const contas = await getConta({ where: { id } })

        res.json(contas)
    }
    catch (error) {
        console.error(error)
        res.status(500).send({ message: 'Server Error' })
    }
}

// Atualizar uma conta por ID
async function update(req, res) {
    try {
        const { id } = req.query;
        const { conta } = req.body;
        const updatedConta = await updateConta(id, conta);
        res.json(updatedConta);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Excluir uma conta por ID
async function remove(req, res) {
    try {
        const { id } = req.query;
        await deleteConta(id);
        res.sendStatus(200).send("Conta removida com sucesso!");
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}




module.exports = {
    create,
    get,
    update,
    remove,
};