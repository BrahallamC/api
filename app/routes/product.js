const express = require('express');
const ProductController = require('../controllers/ProductController');

const router = express.Router();

router.get('/', ProductController.listall)
      .post('/', ProductController.create)
      .get('/:key/:value', ProductController.find, ProductController.show)
      .put('/:key/:value', ProductController.find, ProductController.update)
      .delete('/:key/:value', ProductController.find, ProductController.deleted)

module.exports = router;