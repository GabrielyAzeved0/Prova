const express = require('express');
const ProdutoController = require('./controller/ProdutoController');
const routes = express.Router();

routes.get('/', (req, res) => {
    res.send('Olá mundo!')
})

routes.get('/produto', ProdutoController.index)
routes.get('/produto/:id', ProdutoController.finByid)
routes.post('/produto', ProdutoController.store)
routes.delete('/produto/:id', ProdutoController.delete)
routes.put('/produto/:id', ProdutoController.update)
module.exports = routes;