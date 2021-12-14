'use strict';

const express = require('express');
const { Products, Categories } = require('../model');
const apiRouter = express.Router();

apiRouter.get('/products', async (req, res) => {

  try {
    let products = await Products.findAll();
    let response = {
      productList: products,
    };
    res.status(200).send(response);
  } catch(e) {
    console.log(e);
    res.status(400).send(e.message);
  }
});

apiRouter.post('/products', async (req, res) => {
  let { name, category, price, inventory, description, img, count } = req.body;

  try {
    let product = await Products.create({
      name,
      category,
      price,
      inventory,
      description,
      img,
      count
    });
    res.status(201).send(product);
  } catch (e) {
    console.log(e);
    res.status(400).send(e);
  }
});

apiRouter.put('/products/:id', async (req, res) => {
  try{
    const id = req.params.id;
    const newProduct = req.body;
    let updatedProduct = await Products.findOne({where: { id }}).then(record => record.update(newProduct));
    res.status(200).json(updatedProduct);

  } catch (e) {
    console.log(e);
    res.status(400).send(e);
  }
});



apiRouter.post('/categories', async (req,res,next)=>{

  try {
    let rawData = {
      name: req.body.name,
      displayName: req.body.displayName,
      description: req.body.description,
    };
    let response = await Categories.create(rawData);
    res.status(201).send(response);
  } catch (e) {
    console.log(e);
    res.status(400).send(e.message);
  }
});

apiRouter.get('/categories', async (req, res, next)=>{
  
  try{
    let categories = await Categories.findAll();
    let response = {
      categoryList: categories,
    };
    res.status(200).send(response);
  }catch(e){
    console.log(e);
    res.status(400).send(e.message);
  }
});

module.exports = apiRouter;
