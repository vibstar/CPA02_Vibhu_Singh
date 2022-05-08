'use strict';
const mongoose = require( 'mongoose' );
const Schema = mongoose.Schema;
// const ObjectId = Schema.Types.ObjectId;
// const Mixed = Schema.Types.Mixed;

var pokedexSchema = Schema( {
  id: Number,
  num: String,
  name:String,
  img: String,
  type: [String],
  height: String,
  weight: String,
  candy: String,
  candy_count: Number,
  spawn_chance: Number,
  avg_spawns: Number,
  spawn_time: String,
  multipliers: [Number],
  weaknesses: [String],
  next_evolution: [{num: String, name: String}]
} );

module.exports = mongoose.model( 'pokedexSchema', items );
