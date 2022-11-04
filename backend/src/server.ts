const app = require('./app.js')
const db = require('./db.js')

db.sequelize.sync().then(async() => {
    await console.log('Conectado ao banco de dados!')
})

app.listen(5678, () => {
    console.log('Aplicação na porta 5678!')
})
