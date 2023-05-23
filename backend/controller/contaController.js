const {v4:uuidv4} = require('uuid')
// const {departments} = require ('./departmentController')
const { getContas, addConta} = require('./contaFileController')

let contas = []

const getAllContas = (req,res)=>{
    try {
        getContas(req,res)
        res.status(200).json(contas)
    } catch (error) {
        
    }
}

const addContas = (req,res)=>{
    const conta = req.body
    try{
    //    if(contas.some(conta=>conta.id===req.body.id))
    //    {
    //       return res.status(400).json({message:'Conta já existe!'})         
    //    }
       
       /*
       if(!departments.includes(employee.department)) 
       {
        return res.status(404).json({message:'Invalid Department'})
       }
       */

        conta.id = uuidv4()
        contas.push(conta)
        res.status(200).json(conta)
    }
    catch(err)
    {
        console.error(err)
        res.status(500).json({message:'Server Error'})
    }
    
}

const updateContas = (req,res)=>{
    const id = req.params.id
    const conta = req.body
    
    try{
        const index = contas.findIndex((e)=>e.id===id)
        if(index === -1)
        {
            return res.status(404).json({message:'Conta não encontrada'})
        }
        contas[index] ={...contas[index],... conta}
        res.status(200).json(contas[index])
    }
    catch(err)
    {
        console.error(err)
        res.status(500).json({message:'Server Error'})
    }
}

const removeContas = (req,res)=>{      
    const id = req.params.id
    try{
        const index = contas.findIndex((e)=>e.id===id)
        if(index === -1)
        {
            return res.status(404).json({message:'Conta não encontrada'})
        }
        contas.splice(index,1)
        res.status(200).json({message:'Conta deletada!'})
    }
    catch(err)
    {
        console.error(err)
        res.status(500).json({message:'Server Error'})
    }
}

module.exports = {getContas,addContas,updateContas,removeContas}