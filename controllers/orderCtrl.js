'use strict'

const Order = require('../models/order')
const { knex } = require('../db/database')
const Size = () => knex('sizes')
const Topping = () => knex('toppings')

const getToppings = () =>
  Topping().select()
  .then( (rows) => rows)
  .catch( (error) => {
    throw error
  })

const getSizes = () =>
  Size().select()
  .then( (rows) => rows)
  .catch( (error) => {
    throw error
  })

module.exports.create = ({ body }, res, err) => {
  // console.log("body", body);
  Order.forge(body)
    .save()
    .then( (orderObj) => {
      res.render('index', {orderMsg: "Thanks for your order!"});
    })
    .catch( (err) => {
      console.log("errors!", err);
      Promise.all([
        Promise.resolve(err),
        getSizes(),
        getToppings()
      ])
      .then(([errors, sizes, toppings]) =>
        res.render('order', { page: 'Order', sizes, toppings, errors, body})
      )
    })
    .catch(err)
}
