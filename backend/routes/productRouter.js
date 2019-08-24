const router = require('express').Router();
let productCollection = require('../model/productSchema');

router.route('/').get((req, res) => {
  productCollection.find()
    .then(products => res.json(products))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const name = req.body.name;
  const brand = req.body.brand;
  const form = req.body.form;
  const category = req.body.category;
  const price = req.body.price;
  const description = req.body.description;
  const descriptionBullets = req.body.descriptionBullets;
  const direction = req.body.direction;
  const quantity = req.body.quantity;
  const ingredients = req.body.ingredients;
  const warnings = req.body.warnings;
  const image = req.body.image;
  const popular = req.body.popular;

  const newProduct = new productCollection({
    name,
    brand,
    form,
    category,
    price,
    description,
    descriptionBullets,
    direction,
    quantity,
    ingredients,
    warnings,
    image,
    popular,
  });

  newProduct.save()
    .then(() => res.json('product added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:name').get((req, res) => {
  productCollection.find({name: req.params.name})
    .then( products=> res.json(products))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  productCollection.findByIdAndDelete(req.params.id)
    .then(() => res.json('product deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  productCollection.findById(req.params.id)
    .then(products => {
      products.name = req.body.name;
      products.save()
        .then(() => res.json('product updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});


module.exports = router;