'use strict';
const mongoose = require( 'mongoose' );
const Schema = mongoose.Schema;

var userSchema = Schema( {
  username: String,
  passphrase: String,
  age: String,
  gradyear: Number
} );

module.exports = mongoose.model( 'User', userSchema );
