const { Flight } = require("./models/flight_model");

const seedFlight = [
  {
    id: 1,
    name: "France Paris",
    category: "Europe",
    image:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=873&q=80",
    price: "$$$",
    date: "02/02/23",
    boarding: "08:00 AM",
    landing: "13:00 AM",
    priceTicket: 100,
  },
  {
    id: 1,
    name: "France Paris",
    category: "Europe",
    image:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=873&q=80",
    price: "$$$",
    date: "08/12/23",
    boarding: "08:00 AM",
    landing: "13:00 AM",
    priceTicket: 100,
  },
  // {
  //   id: 2,
  //   name: "Spain Barcelona",
  //   category: "Europe",
  //   image:
  //     "https://images.unsplash.com/photo-1583422409516-2895a77efded?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  //   price: "$$$",
  //   dates: [
  //     { date: "02/02/23", price: 75 },
  //     { date: "15/03/23", price: 80 },
  //     { date: "25/04/23", price: 93 },
  //     { date: "03/05/23", price: 100 },
  //     { date: "07/06/23", price: 69 },
  //   ],
  // },
  // {
  //   id: 3,
  //   name: "Germany Berlin",
  //   category: "Europe",
  //   image:
  //     "https://images.unsplash.com/photo-1599946347371-68eb71b16afc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  //   price: "$$",
  //   dates: [
  //     { date: "02/02/23", price: 75 },
  //     { date: "15/03/23", price: 80 },
  //     { date: "25/04/23", price: 93 },
  //     { date: "03/05/23", price: 100 },
  //     { date: "07/06/23", price: 69 },
  //   ],
  // },
  // {
  //   id: 4,
  //   name: "Romania Bucharest ",
  //   category: "Europe",
  //   image:
  //     "https://images.unsplash.com/photo-1584646098378-0874589d76b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80",
  //   price: "$",
  //   dates: [
  //     { date: "02/02/23", price: 75 },
  //     { date: "15/03/23", price: 80 },
  //     { date: "25/04/23", price: 93 },
  //     { date: "03/05/23", price: 100 },
  //     { date: "07/06/23", price: 69 },
  //   ],
  // },
  // {
  //   id: 5,
  //   name: "Argentina Buenos Aires ",
  //   category: "South America",
  //   image:
  //     "https://images.unsplash.com/photo-1589909202802-8f4aadce1849?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80",
  //   price: "$$",
  //   dates: [
  //     { date: "02/02/23", price: 75 },
  //     { date: "15/03/23", price: 80 },
  //     { date: "25/04/23", price: 93 },
  //     { date: "03/05/23", price: 100 },
  //     { date: "07/06/23", price: 69 },
  //   ],
  // },
  // {
  //   id: 6,
  //   name: "Brazil Rio de Janeiro",
  //   category: "South America",
  //   image:
  //     "https://images.unsplash.com/photo-1516834611397-8d633eaec5d0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80",
  //   price: "$$$",
  //   dates: [
  //     { date: "02/02/23", price: 75 },
  //     { date: "15/03/23", price: 80 },
  //     { date: "25/04/23", price: 93 },
  //     { date: "03/05/23", price: 100 },
  //     { date: "07/06/23", price: 69 },
  //   ],
  // },
  // {
  //   id: 7,
  //   name: "Peru	Lima",
  //   category: "South America",
  //   image:
  //     "https://images.unsplash.com/photo-1585172162477-d52fa4ad9413?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1033&q=80",
  //   price: "$$$$",
  //   dates: [
  //     { date: "02/02/23", price: 75 },
  //     { date: "15/03/23", price: 80 },
  //     { date: "25/04/23", price: 93 },
  //     { date: "03/05/23", price: 100 },
  //     { date: "07/06/23", price: 69 },
  //   ],
  // },
  // {
  //   id: 8,
  //   name: "Chile Santiago",
  //   category: "South America",
  //   image:
  //     "https://images.unsplash.com/photo-1597006438013-0f0cca2c1a03?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
  //   price: "$",
  //   dates: [
  //     { date: "02/02/23", price: 75, boardin: "08:00 AM", landing: "13:00 AM" },
  //     { date: "15/03/23", price: 80 },
  //     { date: "25/04/23", price: 93 },
  //     { date: "03/05/23", price: 100 },
  //     { date: "07/06/23", price: 69 },
  //   ],
  // },
  // {
  //   id: 9,
  //   name: "Mexico",
  //   category: "North America",
  //   image:
  //     "https://images.unsplash.com/photo-1562095241-8c6714fd4178?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80",
  //   price: "$$",
  //   dates: [
  //     { date: "02/02/23", price: 75 },
  //     { date: "15/03/23", price: 80 },
  //     { date: "25/04/23", price: 93 },
  //     { date: "03/05/23", price: 100 },
  //     { date: "07/06/23", price: 69 },
  //   ],
  // },
  // {
  //   id: 10,
  //   name: "United States New York",
  //   category: "North America",
  //   image:
  //     "https://images.unsplash.com/photo-1522083165195-3424ed129620?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=997&q=80",
  //   price: "$$$",
  //   dates: [
  //     { date: "02/02/23", price: 75 },
  //     { date: "15/03/23", price: 80 },
  //     { date: "25/04/23", price: 93 },
  //     { date: "03/05/23", price: 100 },
  //     { date: "07/06/23", price: 69 },
  //   ],
  // },
  // {
  //   id: 11,
  //   name: "Canada Ottawa",
  //   category: "North America",
  //   image:
  //     "https://images.unsplash.com/photo-1610878180933-123728745d22?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
  //   price: "$$$$",
  //   dates: [
  //     { date: "02/02/23", price: 75 },
  //     { date: "15/03/23", price: 80 },
  //     { date: "25/04/23", price: 93 },
  //     { date: "03/05/23", price: 100 },
  //     { date: "07/06/23", price: 69 },
  //   ],
  // },
  // {
  //   id: 12,
  //   name: "Australia Sydney",
  //   category: "Australia",
  //   image:
  //     "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  //   price: "$",
  //   dates: [
  //     { date: "02/02/23", price: 75 },
  //     { date: "15/03/23", price: 80 },
  //     { date: "25/04/23", price: 93 },
  //     { date: "03/05/23", price: 100 },
  //     { date: "07/06/23", price: 69 },
  //   ],
  // },
  // {
  //   id: 13,
  //   name: "Thailand Bangkok",
  //   category: "Asia",
  //   image:
  //     "https://images.unsplash.com/photo-1563492065599-3520f775eeed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
  //   price: "$$",
  //   dates: [
  //     { date: "02/02/23", price: 75 },
  //     { date: "15/03/23", price: 80 },
  //     { date: "25/04/23", price: 93 },
  //     { date: "03/05/23", price: 100 },
  //     { date: "07/06/23", price: 69 },
  //   ],
  // },
  // {
  //   id: 14,
  //   name: "Japan Tokio",
  //   category: "Asia",
  //   image:
  //     "https://images.unsplash.com/photo-1532236204992-f5e85c024202?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=895&q=80",
  //   price: "$$$$",
  //   dates: [
  //     { date: "02/02/23", price: 75 },
  //     { date: "15/03/23", price: 80 },
  //     { date: "25/04/23", price: 93 },
  //     { date: "03/05/23", price: 100 },
  //     { date: "07/06/23", price: 69 },
  //   ],
  // },
  // {
  //   id: 15,
  //   name: "Philippines Manila",
  //   category: "Asia",
  //   image:
  //     "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80",
  //   price: "$",
  //   dates: [
  //     { date: "02/02/23", price: 75 },
  //     { date: "15/03/23", price: 80 },
  //     { date: "25/04/23", price: 93 },
  //     { date: "03/05/23", price: 100 },
  //     { date: "07/06/23", price: 69 },
  //   ],
  // },
  // {
  //   id: 16,
  //   name: "China Beijing",
  //   category: "Asia",
  //   image:
  //     "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  //   price: "$$$",
  //   dates: [
  //     { date: "02/02/23", price: 75 },
  //     { date: "15/03/23", price: 80 },
  //     { date: "25/04/23", price: 93 },
  //     { date: "03/05/23", price: 100 },
  //     { date: "07/06/23", price: 69 },
  //   ],
  // },
];

const seedDB = async () => {
  await Flight.deleteMany({});
  await Flight.insertMany(seedFlight);
  console.log("Seed file uploaded successfully");
};

exports.seedDB = seedDB;