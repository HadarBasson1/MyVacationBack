const { Flight } = require("./models/flight_model");

const seedFlight = [
  {
    id: 1,
    name: "France Paris",
    category: "Europe",
    image:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=873&q=80",
    price: "$$",
    date: "25/02/23",
    boarding: "08:00 AM",
    landing: "11:30 AM",
    priceTicket: 250,
    info: "Nowhere else on earth makes the heart swoon like the mention of Paris. The city lures with its magnificent art, architecture, culture, and cuisine, but there’s also a quieter magic waiting to be explored: the quaint cobbled lanes, the sweet patisseries around the corner, and the cozy little bistros that beckon with a glass of Beaujolais. Get ready to make Paris your own.",
  },

  {
    id: 2,
    name: "Spain Barcelona",
    category: "Europe",
    image:
      "https://images.unsplash.com/photo-1583422409516-2895a77efded?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    price: "$$$",
    date: "02/04/23",
    boarding: "08:00 AM",
    landing: "13:00 AM",
    priceTicket: 450,
    info: "There’s nowhere in the world like Barcelona. From days spent strolling the Gothic Quarter to afternoons at the beach and nights partying ‘til dawn, the city is magnetic. While tapas and bustling mercados are worth every bit of attention they get in guidebooks, Barcelona’s true crown jewel is the work of Antoni Gaudí. His iconic creations, like the jaw-dropping Basilica of La Sagrada Familia, are instantly recognizable and have fueled millions of travel dreams. You won’t be the only tourist here (especially during the summer), but even amid the crowds you’ll find your own Mediterranean magic any time of year.",
  },
  {
    id: 3,
    name: "Germany Berlin",
    category: "Europe",
    image:
      "https://images.unsplash.com/photo-1599946347371-68eb71b16afc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    price: "$$",
    date: "02/04/23",
    boarding: "08:00 AM",
    landing: "13:00 AM",
    priceTicket: 250,
    info: "From its fashion to its architecture to its political history, Berlin has always been edgy. The Berlin Wall is a sobering reminder of the hyper-charged postwar atmosphere, and yet the graffiti art that now covers its remnants has become symbolic of social progress. Check out the Weltzeituhr (world time) Clock, topped by a model of the solar system, then turn back time by dining at the historic Zur Letzten Instanz, a 16th century restaurant that was frequented by Napoleon and Beethoven.",
  },
  {
    id: 4,
    name: "Romania Bucharest ",
    category: "Europe",
    image:
      "https://images.unsplash.com/photo-1584646098378-0874589d76b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80",
    price: "$",
    date: "20/04/23",
    boarding: "08:00 AM",
    landing: "10:00 AM",
    priceTicket: 120,
    info: "Vlad the Impaler stated his claim to Bucharest in 1459. His citadel on the Dambovita was the first of flotillas of palaces, many of which still stand. Four subway lines and a modern bus network transport visitors and commuters. Nicknamed Little Paris , Bucharest's elegant early 20th-century architecture shows French influences. Don't miss the Village Museum, Romanian Athenaeum and the Peasant Museum. You can't miss the Palace of Parliament, the second-largest building in the world (after the Pentagon).",
  },
  {
    id: 5,
    name: "Argentina Buenos Aires ",
    category: "South America",
    image:
      "https://images.unsplash.com/photo-1589909202802-8f4aadce1849?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80",
    price: "$$$",
    date: "20/04/23",
    boarding: "08:00 AM",
    landing: "16:00 PM",
    priceTicket: 520,
    info: "The birthplace of tango is, like the dance itself, captivating, seductive and bustling with electric energy. Atmospheric old neighborhoods are rife with romantic restaurants and thumping nightlife, and Buenos Aires' European heritage is evident in its architecture, boulevards and parks. Cafe Tortoni, the city's oldest bar, will transport you back to 1858, and the spectacular Teatro Colon impresses just as it did in 1908. Latin America's shopping capital offers the promise of premium retail therapy along its grand, wide boulevards.",
  },
  {
    id: 6,
    name: "Brazil Rio de Janeiro",
    category: "South America",
    image:
      "https://images.unsplash.com/photo-1516834611397-8d633eaec5d0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80",
    price: "$$$",
    date: "20/04/23",
    boarding: "07:00 AM",
    landing: "16:00 PM",
    priceTicket: 620,
    info: "With its plentiful beaches, dramatic mountains, and backdrop of samba and bossa nova rhythms, it's easy to fall in love with Rio de Janeiro. Made famous in song, Ipanema Beach is still the place to stroll, sunbathe, and be seen. The largest Art Deco statue in the world, Christ the Redeemer, beckons visitors to Corcovado Mountain. And if you're coming for Carnaval, Rio’s annual celebrations are bacchanalian extravaganzas of feasting, music, dance, and costumed revelry.",
  },
  {
    id: 7,
    name: "Peru	Lima",
    category: "South America",
    image:
      "https://images.unsplash.com/photo-1585172162477-d52fa4ad9413?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1033&q=80",
    price: "$$$",
    date: "20/05/23",
    boarding: "07:00 AM",
    landing: "16:00 PM",
    priceTicket: 520,
    info: "Lima, founded by Francisco Pizarro in 1535, is a fascinating city and a treasure trove of history. Explore ancient Incan archeological sites, or stroll through the elegant cathedrals and opulent palaces dating from Spanish colonial times. Downtown Lima is crowded, but you'll enjoy exploring the city's neighborhoods—especially the beachfront areas, which have great shopping and dining and fabulous hotels.",
  },
  {
    id: 8,
    name: "Chile Santiago",
    category: "South America",
    image:
      "https://images.unsplash.com/photo-1597006438013-0f0cca2c1a03?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    price: "$$$",
    date: "25/05/23",
    boarding: "07:00 AM",
    landing: "16:00 PM",
    priceTicket: 570,
    info: "Santiago is one of those metropolitan joys where the more you look, the more you find. Funky cafes and dance clubs dot Bellavista, Forest Park art collections range from pre-Columbian to contemporary, and architecture runs the gamut from the 16th-century San Francisco Church to mirrored office towers. Shop with the locals at Mall Panora¡mico and give your palate meals to remember with hearty Chilean fare.",
  },
  {
    id: 9,
    name: "Mexico",
    category: "North America",
    image:
      "https://images.unsplash.com/photo-1562095241-8c6714fd4178?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80",
    price: "$$$",
    date: "25/05/23",
    boarding: "07:00 AM",
    landing: "16:00 PM",
    priceTicket: 670,
    info: "With 26 UNESCO-declared world heritage sites, charming colonial towns and dozens of thrilling cities, there's plenty to explore in this country of 109 million. Outside the cities, stunning Pacific beaches, stark deserts, mangrove swamps and swimming holes provide all you need for a relaxing, romantic or adventurous vacation. Captivating, cosmopolitan and chaotic Mexico City and the 32 states offer an incredible abundance of experiences, from laid-back and leisurely to upbeat to adrenalin-charging.",
  },
  {
    id: 10,
    name: "United States New York",
    category: "North America",
    image:
      "https://images.unsplash.com/photo-1522083165195-3424ed129620?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=997&q=80",
    price: "$$$$",
    date: "25/05/23",
    boarding: "07:00 AM",
    landing: "19:00 PM",
    priceTicket: 870,
    info: "The tallest buildings, biggest museums, and best pizza—NYC is a city of superlatives, and it lives up to every one of them. From the dazzling spectacle of Broadway to MoMA’s world-class galleries, the boutiques of SoHo, and the array of restaurants offering cuisines from every corner of the world, there’s a different New York to discover every time you visit. Beyond those iconic landmarks, though, New York’s secret side awaits. You’re likely to stumble upon indie vintage shops and locals-only brunch spots even on the shortest of strolls. And when the crowds and noise are too much to take, just look up—that skyline will remind you why you came in the first place.",
  },
  {
    id: 11,
    name: "Canada Ottawa",
    category: "North America",
    image:
      "https://images.unsplash.com/photo-1610878180933-123728745d22?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    price: "$$$$",
    date: "29/01/24",
    boarding: "07:00 AM",
    landing: "20:00 PM",
    priceTicket: 870,
    info: "Canada's capital is a compact, clean, cleverly planned center of culture and politics and a destination for every season. Start downtown at the architecturally stunning National Gallery of Canada, and don't miss the Canadian Museum of Nature and the Canada Aviation and Space Museum. Rideau Canal offers boating in the summer and turns into the world’s largest skating rink when frozen in the winter. Gatineau Park attracts cyclists and walkers, while Byward Market blends old and new Ottawa.",
  },
  {
    id: 12,
    name: "Australia Sydney",
    category: "Australia",
    image:
      "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    price: "$$$$",
    date: "31/01/24",
    boarding: "07:00 AM",
    landing: "20:00 PM",
    priceTicket: 870,
    info: "With towering skyscrapers and landmarks, Sydney has all the big-city energy—but with a twist. Its easy access to nature (surf spots and bushwalks are right at your fingertips) means there’s plenty of breathing room, too. And summertime (through February) brings everyone out and exploring. The city makes the most of the weather, frontloading the calendar with events like the Sydney Festival, Chinese New Year, and WorldPride. But of course, its iconic Opera House and its cliff-top coastal walks are amazing any time of year. Take a ride up the Sydney Tower Eye, and it’ll give you a top-down view on the city and all its attractions. But leave some time to relax as locals do, whether that’s sunbathing on Bondi Beach or sipping a flat white in one of the city’s coffee shops.",
  },
  {
    id: 13,
    name: "Thailand Bangkok",
    category: "Asia",
    image:
      "https://images.unsplash.com/photo-1563492065599-3520f775eeed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    price: "$$$",
    date: "31/03/23",
    boarding: "07:00 AM",
    landing: "20:00 PM",
    priceTicket: 600,
    info: "There are cities and then there is Bangkok. Temples like Wat Pho are thronged with devotees all day. Street food sizzles all evening. The heat never stops. And the nightlife—from sleazy Patpong to ritzy rooftop bars—is second to none. But the pleasures don’t end there. Night markets, mega malls, and the massive Chatuchak Weekend Market all make Bangkok a shoppers’ (and souvenir-hunter’s) dream. You’ll need to prepare yourself—Bangkok is intense. But for travelers craving local secrets and 24/7 energy, there’s nowhere in the world quite like it.",
    gallery: [
      "https://images.unsplash.com/photo-1506665531195-3566af2b4dfa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
      "https://images.unsplash.com/photo-1583491470869-ca0b9fa90216?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80",
      "https://images.unsplash.com/photo-1598188475102-cf023e17a30f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    ],
    attractions: [
      {
        attraction: "Wat Phra Chetuphon",
        url: "https://www.tripadvisor.com/Attraction_Review-g293916-d311043-Reviews-Wat_Phra_Chetuphon-Bangkok.html",
      },
      {
        attraction: "Wat Phra Chetuphon",
        url: "https://www.tripadvisor.com/Attraction_Review-g293916-d311043-Reviews-Wat_Phra_Chetuphon-Bangkok.html",
      },
      {
        attraction: "Wat Phra Chetuphon",
        url: "https://www.tripadvisor.com/Attraction_Review-g293916-d311043-Reviews-Wat_Phra_Chetuphon-Bangkok.html",
      },
      {
        attraction: "Wat Phra Chetuphon",
        url: "https://www.tripadvisor.com/Attraction_Review-g293916-d311043-Reviews-Wat_Phra_Chetuphon-Bangkok.html",
      },
      {
        attraction: "Wat Phra Chetuphon",
        url: "https://www.tripadvisor.com/Attraction_Review-g293916-d311043-Reviews-Wat_Phra_Chetuphon-Bangkok.html",
      },
    ],
  },
  {
    id: 14,
    name: "Japan Tokio",
    category: "Asia",
    image:
      "https://images.unsplash.com/photo-1532236204992-f5e85c024202?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=895&q=80",
    price: "$$$$",
    date: "31/05/23",
    boarding: "07:00 AM",
    landing: "20:00 PM",
    priceTicket: 800,
    info: "After a pair of quiet years, Japan has reopened its borders, and Tokyo’s distinct energy is back in full force. There's so much to see, including new shopping megaplexes, elegant hotels, and restaurants with rising-star chefs at their helms. Locals and visitors are once again rushing to futuristic skyscrapers and the famous Shibuya Crossing, an intersection that's so lively, it feels like a flash mob. But these places are a bit less hectic in winter and early spring. Even better, March and April bring cherry blossom season, when the whole city slows down to stroll past thousands of pink blossoms. You can find other quiet moments in ancient Buddhist temples and peaceful gardens, or those secret ramen counters, chill record bars, and other little gems often hiding in plain sight.",
  },
  {
    id: 15,
    name: "Philippines Manila",
    category: "Asia",
    image:
      "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80",
    price: "$$$",
    date: "28/03/23",
    boarding: "07:00 AM",
    landing: "20:00 PM",
    priceTicket: 600,
    info: "Metropolitan Manila encompasses six cities and 12 towns. Located on Manila Bay in the South China Sea, and bisected by the Pasig River, the capital of the Philippines is historic and modern, rich and poor. A popular sight is the walled area called Intramuros. The capital during Spanish colonization, Intramuros has retained old dungeons and gunpowder rooms but added art galleries and theaters. The city is filled with museums, shops, parks and churches, plus enough nightlife to last until dawn.",
  },
  {
    id: 16,
    name: "China Beijing",
    category: "Asia",
    image:
      "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    price: "$$$$",
    date: "28/04/23",
    boarding: "07:00 AM",
    landing: "20:00 PM",
    priceTicket: 800,
    info: "Welcome to a capital city whose story goes back at least 3,000 years. In Beijing, you'll find a wealth of history, both ancient (the Hall of Preserving Harmony, Summer Palace, Forbidden City) and more recent (Chairman Mao Memorial Hall, Tiananmen Square). For the best market experience, choose the Dirt Market over the touristy Silk Market. A visit to the Great Wall, the longest manmade structure in the world, is absolutely essential.",
  },
];

const seedDB = async () => {
  await Flight.deleteMany({});
  await Flight.insertMany(seedFlight);
  console.log("Seed file uploaded successfully");
};

exports.seedDB = seedDB;
