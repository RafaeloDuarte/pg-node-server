const router = require('express').Router()

router.use('/clusters', require('./cluster'))
//router.use('/lojas', require('./loja'))
//router.get('/categorias', require('./categoria'))
//router.get('/subcategorias', require('./subcategoria'))
//router.get('/produtos', require('./produto'))

module.exports = router