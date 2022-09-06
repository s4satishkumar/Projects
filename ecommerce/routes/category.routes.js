const CategoryController = require('../controllers/category.controller');

const routes = (app) =>{
    /* to get all the categories */
    app.get('/ecomm/api/v1/categories', CategoryController.getCategories);
}

// to export one thing 
// module.exports = routes;
module.exports = routes;

