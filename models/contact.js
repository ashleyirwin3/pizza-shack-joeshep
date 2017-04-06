'use strict'

const { bookshelf } = require('../db/database')

const Contact = bookshelf.Model.extend({
  tableName: 'contact'
})

module.exports = Contact
