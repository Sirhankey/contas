const { v4: uuidv4 } = require('uuid')
const { validateDataContas } = require('../models/contaModel')
const fs = require('fs')


//GET
function getContasPromise() {
  return new Promise((resolve, reject) => {
    fs.readFile('../banco_dados/contas.json', 'utf8', (err, data) => {
      if (err) {
        // console.log(err)
        reject(err)
      }
      else {
        let contas = JSON.parse(data)
        // console.log(contas)
        resolve(contas)
      }
    })
  })
}

const getContas = (req, res) => {
  getContasPromise()
    .then(contas => res.status(200).json(contas))
    .catch(err => res.status(500).send(err.message))
}

//POST
function addContaPromise(conta) {
  return new Promise((resolve, reject) => {
    fs.readFile('../banco_dados/contas.json', 'utf8', (err, data) => {
      if (err) {
        reject(err);
      }
      else {

        let contas = JSON.parse(data)

        if (contas.some((c) => {
          c.titulo === conta.titulo && 
          c.valor === conta.valor && 
          c.grupo === conta.grupo
        })) {
          reject(new Error('Conta já cadastrada!'))
        }

        const id = uuidv4()
        const novaConta = { id, ...conta }

        contas.push(novaConta)

        fs.writeFile('../banco_dados/contas.json', JSON.stringify(contas), (err) => {
          if (err) {
            reject(err);
          } else {
            resolve(novaConta);
          }
        })
      }
    })
  })
}

const addConta = (req, res) => {
  const conta = req.body

  const validResult = validateDataContas(conta)

  if (!validResult.valid) {
    return res.status(400).json({ message: 'Conta Inválida', errors: validResult.errors })
  }

  addContaPromise(conta)
    .then(novaConta => res.status(200).json(novaConta))
    .catch(err => res.status(500).send(err.message))
}

//PUT/PATCH
function updateContaPromise(id,conta) 
{
  return new Promise((resolve, reject) => {      
    fs.readFile('../banco_dados/contas.json', 'utf8', (err, data) => {
      if (err) {
        reject(err)
      } else {
        
        let contas = JSON.parse(data)  
        
        const index = contas.findIndex((c) => c.id === id)

        if (index === -1) {
          reject(new Error('Conta não encontrada'))
        } 
        else 
        {
          const contaUpdate = { ...contas[index], ...conta } 
          contas[index] = contaUpdate  
          
          fs.writeFile('../banco_dados/contas.json', JSON.stringify(contas), (err) => {
            if (err) {
              reject(err)
            } else {
              resolve(contaUpdate)
            }
          })
        }
      }
    })
  })
}
  
const updateConta = (req,res) =>{
  const id = req.params.id
  const conta = req.body.contaUpdate
  updateContaPromise(id,conta) 
  .then(contaUpdate => res.status(200).json(contaUpdate))
  .catch(err => res.status(500).send(err.message))

}

//DELETE
function removeContaPromise(id) 
{
  return new Promise((resolve, reject) => {
    fs.readFile('../banco_dados/contas.json', 'utf8', (err, data) => {
      if (err) {
        reject(err)
      } 
      else {
        
          const contas = JSON.parse(data)
          
          const index = contas.findIndex(c => c.id === id)

          if (index === -1) {
            reject(new Error('Conta não encontrada!'))
          } 
          else {
            
            contas.splice(index, 1)
            
            fs.writeFile('../banco_dados/contas.json', JSON.stringify(contas), err => {
              if (err) {
                reject(err)
              } else {
                resolve()
              }
            })
          }       
      }
    })
  })
}

const removeConta = (req,res)=>{      
    const id = req.params.id
    removeContaPromise(id)
    .then(() => res.status(200).json({message:'Conta Deletada!'}))
    .catch(err => res.status(500).send(err.message))
}

module.exports = { getContas, addConta, updateConta, removeConta }