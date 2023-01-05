const mongoose = require("mongoose");

// Flight Modal Schema
const flightSchema = new mongoose.Schema({
  Name: {
    type: String,
  },

  URL: {
    type: String,
  },
  Duration: {
    type: Number,
  },
  Departure: {
    type: String,
  },
  Arrivle: {
    type: String,
  },
  Price: {
    type: Number,
    min: 0,
  },
  Temperature: {
    type: Number,
    min: 0,
  },
  Continent: {
    type: String,

    enum: ["asia", "africa", "northAmerica", "southAmerica", "europe"],
  },
  Date: {
    type: String,
    // required: true,
  },
  Category: {
    type: String,
    enum: ["urban", "exotic", "nature", "shopping", "sunbathing"],
  },
});

module.exports = mongoose.model("Flights", flightSchema);
