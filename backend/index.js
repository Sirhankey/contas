const express  = require('express')
const cors = require('cors')
const app = express()

const contaRoutes = require('./routes/contaRoutes')

const host = '127.0.0.1'
const port = 3333

app.use(cors("http://localhost:3333/contas"))
app.use(express.json())
app.use('/contas',contaRoutes)

app.listen(port, host,()=>{
    console.log(`Server running at http://${host}:${port}`)
})