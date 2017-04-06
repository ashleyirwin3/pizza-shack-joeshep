'use strict'

const { knex } = require('../database')
const sizes = require('../sizes')


exports.seed = function(knex, Promise) {
  const sizePromises = sizes.map( (size) => {
    return knex('sizes').insert({name, inches })
})
  // Deletes ALL existing entries
  return knex('sizes').del()
    .then( () => {
      // Inserts seed entries
      return Promise.all(sizePromises)
    });
};
