const { Flight } = require("../models/flight_model");

const getFlights = async (req, res) => {
  try {
    flights = await Flight.find();
    res.status(200).send(flights);
  } catch (err) {
    res.status(400).send({
      status: "fail",
      message: err.message,
    });
  }
};

const getFlightById = async (req, res) => {
  if ((req.params.id == null) | (req.params.id == undefined)) {
    res.status(400).send({
      status: "fail",
      message: err.message,
    });
  }
  try {
    flight = await Flight.findById(req.params.id);
    res.status(200).send(flight);
  } catch (err) {
    res.status(400).send({
      status: "fail",
      message: err.message,
    });
  }
};

const deleteFlightById = async (req, res) => {
  if ((req.params.id == null) | (req.params.id == undefined)) {
    res.status(400).send({
      status: "fail",
      message: err.message,
    });
  }
  try {
    var flight = await Flight.findByIdAndDelete(req.params.id);
    res.status(200).send(flight);
  } catch (err) {
    res.status(400).send({
      status: "fail",
      message: err.message,
    });
  }
};

const addFlight = async (req, res) => {
  //   console.log(req.body.Name);
  var gallery = [
    req.body.gallery_1,
    req.body.gallery_2,
    req.body.gallery_3,
    req.body.gallery_4,
  ];

  var attractions = [
    { attraction: req.body.attraction_1_name, url: req.body.attraction_1_url },
    { attraction: req.body.attraction_2_name, url: req.body.attraction_2_url },
    { attraction: req.body.attraction_3_name, url: req.body.attraction_3_url },
    { attraction: req.body.attraction_4_name, url: req.body.attraction_4_url },
    { attraction: req.body.attraction_5_name, url: req.body.attraction_5_url },
  ];
  var flight = Flight({
    id: "23",
    name: req.body.name,
    category: req.body.continent,
    image: req.body.image,
    price: req.body.price,
    date: req.body.date,
    boarding: req.body.boarding,
    landing: req.body.landing,
    priceTicket: req.body.priceTicket,
    info: req.body.info,
    gallery: gallery,
    attractions: attractions,
  });

  flight.save((error, newFlight) => {
    if (error) {
      res.status(400).send({
        status: "fail",
        error: error.message,
      });
    } else {
      res.status(200).send({
        status: "ok",
        flight: newFlight,
      });
    }
  });
};

module.exports = {
  getFlights,
  addFlight,
  getFlightById,
  deleteFlightById,
};
