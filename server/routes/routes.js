const ProductController = require('../controllers/controller');
module.exports = function(app){
    app.get('/api', ProductController.index);
    app.post('/api/products', ProductController.createProduct);
    app.get('/api/products', ProductController.findAll);
    app.get('/api/products/:id', ProductController.findOne);
    app.put('/api/products/:id', ProductController.updateProduct)
}