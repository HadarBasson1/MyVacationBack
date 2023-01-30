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
    gallery: [
      "https://images.unsplash.com/photo-1508050919630-b135583b29ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80",
      "https://images.unsplash.com/photo-1507666664345-c49223375e33?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=874&q=80",
      "https://images.unsplash.com/photo-1590144662036-33bf0ebd2c7f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
      "https://images.unsplash.com/photo-1612821058477-8b39080e8dee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    ],
    attractions: [
      {
        attraction: "Musée d'Orsay",
        url: "https://www.tripadvisor.com/Attraction_Review-g187147-d188150-Reviews-Musee_d_Orsay-Paris_Ile_de_France.html",
      },
      {
        attraction: "Eiffel Tower",

        url: "https://www.tripadvisor.com/Attraction_Review-g187147-d188151-Reviews-Eiffel_Tower-Paris_Ile_de_France.html",
      },
      {
        attraction: "Louvre Museum  ",

        url: "https://www.tripadvisor.com/Attraction_Review-g187147-d188757-Reviews-Louvre_Museum-Paris_Ile_de_France.html",
      },
      {
        attraction: "Cathédrale Notre-Dame de Paris",

        url: "https://www.tripadvisor.com/Attraction_Review-g187147-d188679-Reviews-Cathedrale_Notre_Dame_de_Paris-Paris_Ile_de_France.html",
      },
      {
        attraction: "Luxembourg Gardens ",

        url: "https://www.tripadvisor.com/Attraction_Review-g187147-d189687-Reviews-Luxembourg_Gardens-Paris_Ile_de_France.html",
      },
    ],
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
    gallery: [
      "https://images.unsplash.com/photo-1596114807940-03af13ba6590?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
      "https://images.unsplash.com/photo-1587789202069-f57c846b85db?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80",
      "https://images.unsplash.com/photo-1583395838144-09c70d270bda?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80",
      "https://images.unsplash.com/photo-1589708532758-ddd0753b0f2f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    ],
    attractions: [
      {
        attraction: "Basílica de la Sagrada Familia",

        url: "https://www.tripadvisor.com/Attraction_Review-g187497-d190166-Reviews-Basilica_de_la_Sagrada_Familia-Barcelona_Catalonia.html",
      },
      {
        attraction: "Casa Batlló ",

        url: "https://www.tripadvisor.com/Attraction_Review-g187497-d191052-Reviews-Casa_Batllo-Barcelona_Catalonia.html",
      },
      {
        attraction: "Gothic Quarter  ",

        url: "https://www.tripadvisor.com/Attraction_Review-g187497-d190162-Reviews-Gothic_Quarter_Barri_Gotic-Barcelona_Catalonia.html",
      },
      {
        attraction: "Palace of Catalan Music",

        url: "https://www.tripadvisor.com/Attraction_Review-g187497-d190824-Reviews-Palace_of_Catalan_Music-Barcelona_Catalonia.html",
      },
      {
        attraction: "Parc Guell ",

        url: "https://www.tripadvisor.com/Attraction_Review-g187497-d190624-Reviews-Parc_Guell-Barcelona_Catalonia.html",
      },
    ],
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
    gallery: [
      "https://images.unsplash.com/photo-1599946347371-68eb71b16afc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1560969184-10fe8719e047?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      "https://images.unsplash.com/photo-1509136561942-7d8663edaaa2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80",
      "https://images.unsplash.com/photo-1585405327087-ccddc9329fa5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    ],
    attractions: [
      {
        attraction: "Reichstag Building ",

        url: "https://www.tripadvisor.com/Attraction_Review-g187323-d190517-Reviews-Reichstag_Building-Berlin.html",
      },
      {
        attraction: "Brandenburg Gate    ",

        url: "https://www.tripadvisor.com/Attraction_Review-g187323-d190518-Reviews-Brandenburg_Gate-Berlin.html",
      },
      {
        attraction: "The Holocaust Memorial   ",

        url: "https://www.tripadvisor.com/Attraction_Review-g187323-d617423-Reviews-The_Holocaust_Memorial_Memorial_to_the_Murdered_Jews_of_Europe-Berlin.html",
      },
      {
        attraction: "Topography of Terror  ",

        url: "https://www.tripadvisor.com/Attraction_Review-g187323-d190535-Reviews-Topography_of_Terror-Berlin.html",
      },
      {
        attraction: "Memorial of the Berlin Wall ",

        url: "https://www.tripadvisor.com/Attraction_Review-g187323-d196239-Reviews-Memorial_of_the_Berlin_Wall-Berlin.html",
      },
    ],
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
    gallery: [
      "https://images.unsplash.com/photo-1604501862699-28006be02467?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80",
      "https://images.unsplash.com/photo-1564332680205-1b74e65f9608?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      "https://images.unsplash.com/photo-1564336899707-dd34a4b165d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=843&q=80",
      "https://images.unsplash.com/photo-1632227766082-4662a1bde593?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=812&q=80",
    ],
    attractions: [
      {
        attraction: "Herăstrau Park",

        url: "https://www.tripadvisor.com/Attraction_Review-g294458-d548240-Reviews-Herastrau_Park-Bucharest.html",
      },
      {
        attraction: "Stavropoleos Monastery ",

        url: "https://www.tripadvisor.com/Attraction_Review-g294458-d318268-Reviews-Stavropoleos_Monastery-Bucharest.html",
      },
      {
        attraction: "Muzeul Naţional al Satului (Dimitrie Gusti)",

        url: "https://www.tripadvisor.com/Attraction_Review-g294458-d318261-Reviews-Muzeul_National_al_Satului_Dimitrie_Gusti-Bucharest.html",
      },
      {
        attraction: "Palace of Parliament     ",

        url: "https://www.tripadvisor.com/Attraction_Review-g294458-d318176-Reviews-Palace_of_Parliament-Bucharest.html",
      },
      {
        attraction: "Ateneul Român ",

        url: "https://www.tripadvisor.com/Attraction_Review-g294458-d523712-Reviews-Ateneul_Roman-Bucharest.html",
      },
    ],
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
    gallery: [
      "https://images.unsplash.com/photo-1612294037637-ec328d0e075e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      "https://images.unsplash.com/photo-1589909202802-8f4aadce1849?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80",
      "https://images.unsplash.com/photo-1599094792743-7df3e8870800?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=858&q=80",
      "https://images.unsplash.com/photo-1529414988992-52e2db9372b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=964&q=80",
    ],
    attractions: [
      {
        attraction: "Teatro Colon  ",

        url: "https://www.tripadvisor.com/Attraction_Review-g312741-d311763-Reviews-Teatro_Colon-Buenos_Aires_Capital_Federal_District.html",
      },
      {
        attraction: "Puerto Madero",

        url: "https://www.tripadvisor.com/Attraction_Review-g312741-d311777-Reviews-Puerto_Madero-Buenos_Aires_Capital_Federal_District.html",
      },
      {
        attraction: "Recoleta        ",

        url: "https://www.tripadvisor.com/Attraction_Review-g312741-d311775-Reviews-Recoleta-Buenos_Aires_Capital_Federal_District.html",
      },
      {
        attraction: "Jardin Japones",

        url: "https://www.tripadvisor.com/Attraction_Review-g312741-d317189-Reviews-Jardin_Japones-Buenos_Aires_Capital_Federal_District.html",
      },
      {
        attraction: "Cementerio de la Recoleta ",

        url: "https://www.tripadvisor.com/Attraction_Review-g312741-d311760-Reviews-Cementerio_de_la_Recoleta-Buenos_Aires_Capital_Federal_District.html",
      },
    ],
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
    gallery: [
      "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      "https://images.unsplash.com/photo-1619546952812-520e98064a52?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80",
      "https://images.unsplash.com/photo-1585436249848-3a8210d46a47?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=433&q=80",
      "https://images.unsplash.com/photo-1534179639155-4910efc143c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    ],
    attractions: [
      {
        attraction: "Morro da Urca  ",

        url: "https://www.tripadvisor.com/Attraction_Review-g303506-d590900-Reviews-Morro_da_Urca-Rio_de_Janeiro_State_of_Rio_de_Janeiro.html",
      },
      {
        attraction: "Ipanema Beach",

        url: "https://www.tripadvisor.com/Attraction_Review-g303506-d312071-Reviews-Ipanema_Beach-Rio_de_Janeiro_State_of_Rio_de_Janeiro.html",
      },
      {
        attraction: "Botanical Garden ",

        url: "https://www.tripadvisor.com/Attraction_Review-g303506-d311277-Reviews-Botanical_Garden-Rio_de_Janeiro_State_of_Rio_de_Janeiro.html",
      },
      {
        attraction: "Corcovado - Christ the Redeemer   ",

        url: "https://www.tripadvisor.com/Attraction_Review-g303506-d554128-Reviews-Corcovado_Christ_the_Redeemer-Rio_de_Janeiro_State_of_Rio_de_Janeiro.html",
      },
      {
        attraction: "Sugarloaf Mountain",

        url: "https://www.tripadvisor.com/Attraction_Review-g303506-d311247-Reviews-Sugarloaf_Mountain-Rio_de_Janeiro_State_of_Rio_de_Janeiro.html",
      },
    ],
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
    gallery: [
      "https://images.unsplash.com/photo-1580844867519-adaa6fdfd872?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
      "https://images.unsplash.com/photo-1533219346979-3030e2810f5b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=879&q=80",
      "https://images.unsplash.com/photo-1526392060635-9d6019884377?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      "https://images.unsplash.com/photo-1632913582790-d0ec5882095a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80",
    ],
    attractions: [
      {
        attraction: "Santuario Historico de Machu Picchu ",

        url: "https://www.tripadvisor.com/Attraction_Review-g294318-d668949-Reviews-Santuario_Historico_de_Machu_Picchu-Machu_Picchu_Sacred_Valley_Cusco_Region.html",
      },
      {
        attraction: "Museo Larco",

        url: "https://www.tripadvisor.com/Attraction_Review-g294316-d311651-Reviews-Museo_Larco-Lima_Lima_Region.html",
      },
      {
        attraction: "Sacsayhuaman        ",

        url: "https://www.tripadvisor.com/Attraction_Review-g294314-d311726-Reviews-Sacsayhuaman-Cusco_Cusco_Region.html",
      },
      {
        attraction: "Miraflores ",

        url: "https://www.tripadvisor.com/Attraction_Review-g294316-d311718-Reviews-Miraflores-Lima_Lima_Region.html",
      },
      {
        attraction: "Centro Historico De Cusco ",

        url: "https://www.tripadvisor.com/Attraction_Review-g294314-d2422362-Reviews-Centro_Historico_De_Cusco-Cusco_Cusco_Region.html",
      },
    ],
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
    gallery: [
      "https://images.unsplash.com/photo-1478827387698-1527781a4887?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      "https://images.unsplash.com/photo-1490782300182-697b80ad4293?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80",
      "https://images.unsplash.com/photo-1546800273-4d63ff843853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
      "https://images.unsplash.com/photo-1578704410892-86dbdab9b4e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80",
    ],
    attractions: [
      {
        attraction: "Cerro San Cristobal ",

        url: "https://www.tripadvisor.com/Attraction_Review-g294305-d314481-Reviews-Cerro_San_Cristobal-Santiago_Santiago_Metropolitan_Region.html",
      },
      {
        attraction: "Cerro Santa Lucia ",

        url: "https://www.tripadvisor.com/Attraction_Review-g294305-d314522-Reviews-Cerro_Santa_Lucia-Santiago_Santiago_Metropolitan_Region.html",
      },
      {
        attraction: "Torres del Paine National Park",

        url: "https://www.tripadvisor.com/Attraction_Review-g670171-d314634-Reviews-Torres_del_Paine_National_Park-Torres_del_Paine_National_Park_Magallanes_Region.html",
      },
      {
        attraction: "Sky Costanera ",

        url: "https://www.tripadvisor.com/Attraction_Review-g294305-d8594663-Reviews-Sky_Costanera-Santiago_Santiago_Metropolitan_Region.html",
      },
      {
        attraction: "Valle De La Luna",

        url: "https://www.tripadvisor.com/Attraction_Review-g303681-d315617-Reviews-Valle_De_La_Luna-San_Pedro_de_Atacama_Antofagasta_Region.html",
      },
    ],
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
    gallery: [
      "https://images.unsplash.com/photo-1518638150340-f706e86654de?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=867&q=80",
      "https://images.unsplash.com/photo-1504814532849-cff240bbc503?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
      "https://images.unsplash.com/photo-1562095241-8c6714fd4178?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80",
      "https://images.unsplash.com/photo-1578102013500-7e2a25a16bcf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    ],
    attractions: [
      {
        attraction: "Xcaret  ",

        url: "https://www.tripadvisor.com/Attraction_Review-g150812-d152777-Reviews-Xcaret-Playa_del_Carmen_Yucatan_Peninsula.html",
      },
      {
        attraction: "Museo Nacional de Antropologia ",

        url: "https://www.tripadvisor.com/Attraction_Review-g150800-d153711-Reviews-Museo_Nacional_de_Antropologia-Mexico_City_Central_Mexico_and_Gulf_Coast.html",
      },
      {
        attraction: "Chichen Itza",

        url: "https://www.tripadvisor.com/Attraction_Review-g150808-d153407-Reviews-Chichen_Itza-Chichen_Itza_Yucatan_Peninsula.html",
      },
      {
        attraction: "Tulum Archaeological Site",

        url: "https://www.tripadvisor.com/Attraction_Review-g150813-d153186-Reviews-Tulum_Archaeological_Site-Tulum_Yucatan_Peninsula.html",
      },
      {
        attraction: "Rio Secreto",

        url: "https://www.tripadvisor.com/Attraction_Review-g150812-d1075137-Reviews-Rio_Secreto-Playa_del_Carmen_Yucatan_Peninsula.html",
      },
    ],
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
    gallery: [
      "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      "https://images.unsplash.com/photo-1483653364400-eedcfb9f1f88?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      "https://images.unsplash.com/photo-1522083165195-3424ed129620?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=997&q=80",
      "https://images.unsplash.com/photo-1568515387631-8b650bbcdb90?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    ],
    attractions: [
      {
        attraction: "Central Park",

        url: "https://www.tripadvisor.com/Attraction_Review-g60763-d105127-Reviews-Central_Park-New_York_City_New_York.html",
      },
      {
        attraction: "Statue of Liberty",

        url: "https://www.tripadvisor.com/Attraction_Review-g60763-d103887-Reviews-Statue_of_Liberty-New_York_City_New_York.html",
      },
      {
        attraction: "Times Square",

        url: "https://www.tripadvisor.com/Attraction_Review-g60763-d110145-Reviews-Times_Square-New_York_City_New_York.html",
      },
      {
        attraction: "Empire State Building",

        url: "https://www.tripadvisor.com/Attraction_Review-g60763-d104365-Reviews-Empire_State_Building-New_York_City_New_York.html",
      },
      {
        attraction: "Top of the Rock",

        url: "https://www.tripadvisor.com/Attraction_Review-g60763-d587661-Reviews-Top_of_the_Rock-New_York_City_New_York.html",
      },
    ],
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
    gallery: [
      "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=811&q=80",
      "https://images.unsplash.com/photo-1508693926297-1d61ee3df82a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      "https://images.unsplash.com/photo-1617803672592-177dbdb3abfa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
      "https://images.unsplash.com/photo-1607388510015-c632e99da586?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    ],
    attractions: [
      {
        attraction: "Niagara Falls Canada",

        url: "https://www.tripadvisor.com/Attraction_Review-g154998-d186167-Reviews-Niagara_Falls_Canada-Niagara_Falls_Ontario.html",
      },
      {
        attraction: "Stanley Park",

        url: "https://www.tripadvisor.com/Attraction_Review-g154943-d155652-Reviews-Stanley_Park-Vancouver_British_Columbia.html",
      },
      {
        attraction: "Notre-Dame Basilica",

        url: "https://www.tripadvisor.com/Attraction_Review-g155032-d186126-Reviews-Notre_Dame_Basilica-Montreal_Quebec.html",
      },
      {
        attraction: "Old Quebec",

        url: "https://www.tripadvisor.com/Attraction_Review-g155033-d573466-Reviews-Old_Quebec-Quebec_City_Quebec.html",
      },
      {
        attraction: "Banff Gondola",

        url: "https://www.tripadvisor.com/Attraction_Review-g154911-d184443-Reviews-Banff_Gondola-Banff_Banff_National_Park_Alberta.html",
      },
    ],
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
    gallery: [
      "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1530&q=80",
      "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      "https://images.unsplash.com/photo-1629259634957-e32a0c5c4f47?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80",
      "https://images.unsplash.com/photo-1564360935279-e5a3a1740f81?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=907&q=80",
    ],
    attractions: [
      {
        attraction: "Banff Gondola",

        url: "https://www.tripadvisor.com/Attraction_Review-g154911-d184443-Reviews-Banff_Gondola-Banff_Banff_National_Park_Alberta.html",
      },
      {
        attraction: "Sydney Opera House",

        url: "https://www.tripadvisor.com/Attraction_Review-g255060-d257278-Reviews-Sydney_Opera_House-Sydney_New_South_Wales.html",
      },
      {
        attraction: "Sydney Harbour",

        url: "https://www.tripadvisor.com/Attraction_Review-g255060-d257842-Reviews-Sydney_Harbour-Sydney_New_South_Wales.html",
      },
      {
        attraction: "Sydney Ferries",

        url: "https://www.tripadvisor.com/Attraction_Review-g255060-d1067915-Reviews-Sydney_Ferries-Sydney_New_South_Wales.html",
      },
      {
        attraction: "Manly Beach",

        url: "https://www.tripadvisor.com/Attraction_Review-g255060-d257487-Reviews-Manly_Beach-Sydney_New_South_Wales.html",
      },
    ],
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
        attraction: "Patong Beach",
        url: "https://www.tripadvisor.com/Attraction_Review-g297930-d2454044-Reviews-Patong_Beach-Patong_Kathu_Phuket.html",
      },
      {
        attraction: "Green Elephant Sanctuary Park",
        url: "https://www.tripadvisor.com/Attraction_Review-g1224250-d13237105-Reviews-Green_Elephant_Sanctuary_Park-Choeng_Thale_Thalang_District_Phuket.html",
      },
      {
        attraction: "Big Buddha Phuket",
        url: "https://www.tripadvisor.com/Attraction_Review-g1389361-d2433844-Reviews-Big_Buddha_Phuket-Chalong_Phuket_Town_Phuket.html",
      },
      {
        attraction: "Chatuchak Weekend Market",
        url: "https://www.tripadvisor.com/Attraction_Review-g293916-d450971-Reviews-Chatuchak_Weekend_Market-Bangkok.html",
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
    gallery: [
      "https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      "https://images.unsplash.com/photo-1601823984263-b87b59798b70?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      "https://images.unsplash.com/photo-1504109586057-7a2ae83d1338?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1033&q=80",
      "https://images.unsplash.com/photo-1493589976221-c2357c31ad77?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    ],
    attractions: [
      {
        attraction: "Akihabara",
        url: "https://www.tripadvisor.com/Attraction_Review-g1066443-d321038-Reviews-Akihabara-Chiyoda_Tokyo_Tokyo_Prefecture_Kanto.html",
      },
      {
        attraction: "Tokyo Skytree",
        url: "https://www.tripadvisor.com/Attraction_Review-g14134337-d1872416-Reviews-Tokyo_Skytree-Oshiage_Sumida_Tokyo_Tokyo_Prefecture_Kanto.html",
      },
      {
        attraction: "Shinjuku Gyoen National Garden",
        url: "https://www.tripadvisor.com/Attraction_Review-g1066457-d479258-Reviews-Shinjuku_Gyoen_National_Garden-Shinjuku_Tokyo_Tokyo_Prefecture_Kanto.html",
      },
      {
        attraction: "Kinkakuji Temple",
        url: "https://www.tripadvisor.com/Attraction_Review-g298564-d321400-Reviews-Kinkakuji_Temple-Kyoto_Kyoto_Prefecture_Kinki.html",
      },
      {
        attraction: "Fushimi Inari-taisha Shrine",
        url: "https://www.tripadvisor.com/Attraction_Review-g298564-d321456-Reviews-Fushimi_Inari_taisha_Shrine-Kyoto_Kyoto_Prefecture_Kinki.html",
      },
    ],
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
    gallery: [
      "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
      "https://images.unsplash.com/photo-1494676051766-7a7454d53904?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=873&q=80",
      "https://images.unsplash.com/photo-1581390881194-e38689620e22?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1034&q=80",
      "https://images.unsplash.com/photo-1593870682262-8c9f6a9bb225?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    ],
    attractions: [
      {
        attraction: "White Beach",
        url: "https://www.tripadvisor.com/Attraction_Review-g294260-d338331-Reviews-White_Beach-Boracay_Malay_Aklan_Province_Panay_Island_Visayas.html",
      },
      {
        attraction: "Puerto Princesa Underground River",
        url: "https://www.tripadvisor.com/Attraction_Review-g294257-d320343-Reviews-Puerto_Princesa_Underground_River-Puerto_Princesa_Palawan_Island_Palawan_Province_.html",
      },
      {
        attraction: "Kayangan Lake",
        url: "https://www.tripadvisor.com/Attraction_Review-g729733-d1639430-Reviews-Kayangan_Lake-Coron_Busuanga_Island_Palawan_Province_Mimaropa.html",
      },
      {
        attraction: "Nacpan Beach",
        url: "https://www.tripadvisor.com/Attraction_Review-g298564-d321400-Reviews-Kinkakuji_Temple-Kyoto_Kyoto_Prefecture_Kinki.html",
      },
      {
        attraction: "Big Lagoon",
        url: "https://www.tripadvisor.com/Attraction_Review-g294256-d3842169-Reviews-Big_Lagoon-El_Nido_Palawan_Island_Palawan_Province_Mimaropa.html",
      },
    ],
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
    gallery: [
      "https://images.unsplash.com/photo-1510332981392-36692ea3a195?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
      "https://images.unsplash.com/photo-1506158669146-619067262a00?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      "https://images.unsplash.com/photo-1599571234909-29ed5d1321d6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      "https://images.unsplash.com/photo-1620964780032-81ef649db4d9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    ],
    attractions: [
      {
        attraction: "Victoria Peak",
        url: "https://www.tripadvisor.com/Attraction_Review-g294217-d311573-Reviews-Victoria_Peak_The_Peak-Hong_Kong.html",
      },
      {
        attraction: "Mutianyu Great Wall",
        url: "https://www.tripadvisor.com/Attraction_Review-g294212-d325811-Reviews-Mutianyu_Great_Wall-Beijing.html",
      },
      {
        attraction: "The Bund (Wai Tan)",
        url: "https://www.tripadvisor.com/Attraction_Review-g308272-d311595-Reviews-The_Bund_Wai_Tan-Shanghai.html",
      },
      {
        attraction: "Star Ferry",
        url: "https://www.tripadvisor.com/Attraction_Review-g294217-d2228870-Reviews-Star_Ferry-Hong_Kong.html",
      },
      {
        attraction: " Disneyland",
        url: "https://www.tripadvisor.com/Attraction_Review-g294217-d543602-Reviews-Hong_Kong_Disneyland-Hong_Kong.html",
      },
    ],
  },
];

const seedDB = async () => {
  await Flight.deleteMany({});
  await Flight.insertMany(seedFlight);
  console.log("Seed file uploaded successfully");
};

exports.seedDB = seedDB;
