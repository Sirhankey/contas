const express  = require('express')
const app = express()
const conn = require('./database/conn')
const cors = require('cors')

const contasRoutes = require('./routes/contaRoutes')
const authenticationRoutes = require('./routes/authRoutes')

// const ContaModelDB = require('./models/ContaModelDB')
// const GrupoModelDB = require('./models/GrupoModelDB')

app.use(
    express.urlencoded({
        extended:true
    })
)
app.use(express.json())
app.use(cors("http://localhost:3334/contas"))

app.use('/login', authenticationRoutes)
app.use('/contas',contasRoutes)

// ContaModelDB.belongsTo(GrupoModelDB, { foreignKey: 'grupo_id' })

conn.sync({ force: false }) 
  .then(() => {
    console.log('sync OK')
    app.listen(3334,()=>{
      console.log('Server starting')
     })
  })
  .catch((error) => {
    console.error('Error sync:', error);
  })