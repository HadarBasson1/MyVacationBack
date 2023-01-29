const mongoose = require("mongoose");

// Flight Modal Schema
const flightSchema = new mongoose.Schema({
  id: {
    type: String,
  },
  name: {
    type: String,
  },

  category: {
    type: String,

    enum: [
      "Asia",
      "Africa",
      "North America",
      "South America",
      "Europe",
      "Australia",
    ],
  },
  image: {
    type: String,
  },
  price: {
    type: String,
  },

  date: {
    type: String,
  },

  boarding: {
    type: String,
  },

  landing: {
    type: String,
  },
  priceTicket: {
    type: Number,
  },

  info: {
    type: String,
  },

  gallery: { type: [String] },

  attractions: [
    {
      attraction: {
        type: String,
      },
      url: {
        type: String,
      },
    },
  ],
});

const Flight = mongoose.model("Flight", flightSchema);
module.exports = { Flight };
