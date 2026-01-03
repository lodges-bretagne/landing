export type Language = 'fr' | 'en' | 'es'

export interface Translations {
  // Navigation
  nav: {
    home: string
    blueLodge: string
    greenLodge: string
  }
  // Home page
  home: {
    title: string
    subtitle: string
    blueLodge: {
      title: string
      location: string
      description: string
      subtitle: string
    }
    greenLodge: {
      title: string
      location: string
      description: string
      subtitle: string
    }
  }
  // Hero
  hero: {
    contactUs: string
    callUs: string
    emailUs: string
    seeOnAirbnb: string
  }
  // Contact
  contact: {
    title: string
    subtitle: string
    phone: string
    email: string
    address: string
  }
  // Common
  common: {
    included: string
    notIncluded: string
    payableOnArrival: string
  }
  // Blue Lodge
  blueLodge: {
    title: string
    subtitle: string
    photos: {
      title: string
      subtitle: string
    }
    description: {
      title: string
      intro: string
      details: string
    }
    features: {
      title: string
      wifi: { title: string; desc: string }
      sheets: { title: string; desc: string }
      towel: { title: string; desc: string }
      parking: { title: string; desc: string }
      bikeBox: { title: string; desc: string }
      garden: { title: string; desc: string }
    }
    accommodation: {
      title: string
      apartment: string
      apartmentDesc1: string
      apartmentDesc2: string
      bedroom: string
      bedroomItems: string[]
      livingRoom: string
      livingRoomItems: string[]
      kitchen: string
      kitchenItems: string[]
      bathroom: string
      bathroomItems: string[]
    }
    location: {
      title: string
      nearby: string
      beach: string
      shops: string
      intramuros: string
      station: string
      access: string
    }
    pricing: {
      title: string
      included: string[]
      notIncluded: string[]
      notes: string[]
    }
  }
  // Green Lodge
  greenLodge: {
    title: string
    subtitle: string
    photos: {
      title: string
      subtitle: string
    }
    description: {
      title: string
      bedsMade: string
      intro: string
      seaDistance: string
      shopsDistance: string
      dinardDistance: string
    }
    features: {
      title: string
      wifi: { title: string; desc: string }
      sheets: { title: string; desc: string }
      towel: { title: string; desc: string }
      parking: { title: string; desc: string }
      garden: { title: string; desc: string }
      capacity: { title: string; desc: string }
    }
    accommodation: {
      title: string
      house: string
      houseDesc: string
      groundFloor: string
      livingRoom: string
      livingRoomDesc: string
      kitchen: string
      kitchenItems: string[]
      floor: string
      bedrooms: string
      bedroom1: string
      bedroom2: string
      bedroom3: string
      bedroomNote: string
      bathroom: string
      bathroomItems: string[]
      exterior: string
      exteriorItems: string[]
    }
    activities: {
      title: string
      waterSportsTitle: string
      waterSports: string
      sailing: string
      ferry: string
      nearby: string
      saintMalo: string
      other: string
      bike: string
      golf: string
    }
    pricing: {
      title: string
      included: string[]
      notIncluded: string[]
      notes: string[]
    }
    access: {
      title: string
      howToFind: string
      directions: string
      parking: string
      gate: string
    }
  }
}

export const translations: Record<Language, Translations> = {
  fr: {
    nav: {
      home: 'Accueil',
      blueLodge: 'Blue Lodge',
      greenLodge: 'Green Lodge',
    },
    home: {
      title: 'Bienvenue dans nos lodges',
      subtitle: 'Découvrez nos hébergements de charme à Saint-Malo et Dinard',
      blueLodge: {
        title: 'Blue Lodge',
        location: 'Saint-Malo',
        description: 'Charmant 2 pièces bord de mer',
        subtitle: 'Appartement de 42m² avec jardin privé de 110m², proche de la plage du Sillon',
      },
      greenLodge: {
        title: 'Green Lodge',
        location: 'Dinard',
        description: 'Maison de charme bord de mer',
        subtitle: 'Maison authentique de 85m² avec jardin, classée 2 étoiles, côté Dinard',
      },
    },
    hero: {
      contactUs: 'Contactez-nous directement pour réserver ou pour toute question',
      callUs: 'Appelez-nous :',
      emailUs: 'Écrivez-nous',
      seeOnAirbnb: 'Voir aussi sur Airbnb',
    },
    contact: {
      title: 'Contactez-nous directement',
      subtitle: 'Appelez-nous ou envoyez-nous un email pour réserver ou obtenir des informations',
      phone: 'Téléphone',
      email: 'Email',
      address: 'Adresse',
    },
    common: {
      included: 'Inclus dans le prix',
      notIncluded: 'Non inclus (payable à l\'arrivée)',
      payableOnArrival: 'payable à l\'arrivée',
    },
    blueLodge: {
      title: 'Blue Lodge',
      subtitle: 'Charmant 2 pièces à Saint-Malo, bord de mer',
      photos: {
        title: 'Découvrez Blue Lodge',
        subtitle: 'Un havre de paix au cœur de Saint-Malo',
      },
      description: {
        title: 'Confort et calme assurés',
        intro: 'Le "BLUE LODGE" est idéal pour des vacances sereines au cœur de Saint Malo. Proche plage, commerces, restaurants et intra muros.',
        details: 'Vous serez séduits par ce beau 2 pièces de 42m² tout confort et très ensoleillé. Décoré avec passion, il est situé au 2ème et dernier étage et possède son jardin privé de 110m² en bas de la résidence. Sans vis à vis, grandes fenêtres, très lumineux, vue dégagée sur coucher de soleil.',
      },
      features: {
        title: 'Équipements & Prestations',
        wifi: { title: 'WiFi gratuit', desc: 'Connexion internet haut débit incluse' },
        sheets: { title: 'Draps inclus', desc: 'Le lit sera fait à votre arrivée' },
        towel: { title: 'Serviette de douche', desc: 'Serviette fournie pour votre confort' },
        parking: { title: 'Parking privé', desc: 'Place de parking gratuite devant votre jardin' },
        bikeBox: { title: 'Box vélo/moto', desc: 'Box fermé pour 2 vélos ou 1 moto' },
        garden: { title: 'Jardin privé', desc: 'Jardin de 110m² avec chaises, table et barbecue' },
      },
      accommodation: {
        title: 'Le logement',
        apartment: 'Appartement de 42m²',
        apartmentDesc1: 'Deux pièces situé au cœur de Saint Malo et sa jolie PLAGE du sillon accessible à pieds en 20mn. Commerces et restaurant à 10MN à pieds.',
        apartmentDesc2: 'Exposition sud ouest, pièces baignées de soleil (grande fenêtre). Son jardin ensoleillé de 110m² est situé au pied de cette petite résidence Familiale (exclusivement réservé pour vous avec sa place parking PRIVÉE).',
        bedroom: 'Chambre',
        bedroomItems: [
          'Chambre cocooning, bonne literie',
          'Matelas GRAND HOTEL',
          'Couette et oreillers "LENORMAND" de qualité',
          'Petit bureau',
        ],
        livingRoom: 'Salon / Salle à manger',
        livingRoomItems: [
          'Télé écran plat',
          'Table à manger',
          'Canapé, fauteuil',
        ],
        kitchen: 'Cuisine',
        kitchenItems: [
          'Cuisine neuve, toute équipée',
          'Cafetière à piston BODUM',
          'Grille pain, four, micro ondes',
          'Table et chaises',
        ],
        bathroom: 'Salle de bain',
        bathroomItems: [
          'Salle de bain 6m²',
          'Grande douche à l\'italienne de 1m60',
          'Meuble vasque, WC',
          'Machine à laver + étendoir',
        ],
      },
      location: {
        title: 'Localisation & Commodités',
        nearby: 'À proximité',
        beach: 'Plage du Sillon "Plus belle plage de France" à 1300m',
        shops: 'Boulangerie artisanale, commerces et restaurants à 600m',
        intramuros: 'Intra-Muros: 7mn en voiture / 14mn en vélo',
        station: 'Gare: 5mn en bus (arrêt bus au 50m de la résidence)',
        access: 'Accès',
        accessBox: 'BOX fermé pour 2 vélos ou 1 moto.',
        accessGarden: 'JARDIN privé (uniquement pour vous) de 110m² au pied de la copropriété.',
        accessParking: 'PARKING PRIVÉ GRATUIT (devant votre jardin).',
      },
      pricing: {
        title: 'Tarifs & Conditions',
        included: [
          'WiFi',
          'Draps de lit (le lit sera fait à votre arrivée)',
          'Serviette de douche',
          'Produits d\'entretien + torchon',
          'Lave linge',
          'Parking',
          'Petit garage moto ou vélos (fermé et privé)',
          'Jardin (chaises et table), barbecue',
        ],
        notIncluded: [
          'Ménage 30€ (l\'appartement doit être laissé propre)',
          'Ménage complet 60€ si vous ne souhaitez pas faire le ménage du tout (merci de prévenir)',
        ],
        notes: [
          'Location du samedi au samedi pendant les vacances d\'été',
          'Appartement non fumeur. Animaux non acceptés.',
          'Maximum un couple. Bébé possible sur demande avec supplément.',
        ],
      },
    },
    greenLodge: {
      title: 'Green Lodge',
      subtitle: 'Maison de charme bord de mer côté Dinard',
      photos: {
        title: 'Découvrez Green Lodge',
        subtitle: 'Une maison authentique au charme breton',
      },
      description: {
        title: 'Posez vos valises et profitez',
        bedsMade: 'Les lits seront faits à votre arrivée.',
        intro: 'Maison en pierre CLASSÉE 2 étoiles. Entièrement rénovée, elle est équipée de toutes les commodités, de la WIFI et d\'un joli petit jardin plein SUD pour vos repas au calme en famille ou entre amis.',
        seaDistance: 'Mer et GR34 à 950m à pied',
        shopsDistance: 'Commerces et restaurants à 4mn',
        dinardDistance: 'Situé côté DINARD (5km)',
      },
      features: {
        title: 'Équipements & Prestations',
        wifi: { title: 'WiFi gratuit', desc: 'Connexion internet haut débit incluse' },
        sheets: { title: 'Draps de lits inclus', desc: 'Les lits seront faits à votre arrivée' },
        towel: { title: 'Serviette douche', desc: 'Serviette fournie pour votre confort' },
        parking: { title: 'Parking privé', desc: 'Place parking gravillonnée pour une voiture ou deux motos' },
        garden: { title: 'Jardin 100m²', desc: 'Jardin plein SUD avec terrasse meublée et barbecue Weber' },
        capacity: { title: 'Jusqu\'à 5 personnes', desc: 'Maison de 85m² avec 3 chambres' },
      },
      accommodation: {
        title: 'Le logement',
        house: 'Maison authentique de pêcheur de 85m²',
        houseDesc: 'Cette charmante maison en pierre, classée 2 étoiles, vous accueille dans un cadre authentique et chaleureux. Entièrement rénovée avec soin, elle conserve tout le charme de son histoire de maison de pêcheur tout en offrant tout le confort moderne nécessaire à un séjour agréable.',
        groundFloor: 'REZ-DE-CHAUSSÉE',
        livingRoom: 'Grand salon / Salle à manger',
        livingRoomDesc: '46m² avec cuisine toute équipée',
        kitchen: 'Cuisine équipée',
        kitchenItems: [
          'Lave vaisselle, lave linge',
          'Micro onde, four',
          'Frigo-congélateur neuf',
          'Cafetière Nespresso',
          'Bouilloire, appareil à raclette',
          'Sel/Poivre, Huile/Vinaigre inclus',
          'Produits d\'entretien inclus',
        ],
        floor: 'ÉTAGE',
        bedrooms: '3 Chambres',
        bedroom1: '1ère chambre : Lit 140 / 2 personnes + grand placard',
        bedroom2: '2ème chambre : Lit 140 / 2 personnes + grand placard',
        bedroom3: '3ème chambre : Lit 90 / 1 personne + grand placard',
        bedroomNote: 'En dessous de 5 voyageurs, la troisième chambre restera fermée.',
        bathroom: 'Salle de bain',
        bathroomItems: [
          'Salle de bain avec douche neuve',
          'WC séparé',
        ],
        exterior: 'EXTÉRIEUR',
        exteriorItems: [
          'Jardin de 100m² avec terrasse meublée',
          'Barbecue Weber',
          'Place parking gravillonnée pour UNE voiture ou DEUX motos',
        ],
      },
      activities: {
        title: 'Loisirs & Activités',
        waterSportsTitle: 'Activités nautiques',
        waterSports: 'Voile, kayak, paddle - Cale de mise à l\'eau et École de Voile à la Richardais (2km)',
        sailing: 'Traversée Dinard/Saint Malo en BATEAU-NAVETTE (10mn)',
        ferry: 'Traversée Dinard/Saint Malo en BATEAU-NAVETTE (10mn)',
        nearby: 'À proximité',
        saintMalo: 'Saint Malo à 10mn (barrage de la Rance à 5mn)',
        other: 'Saint Briac, Lancieux',
        bike: 'Location vélo possible à Dinard',
        golf: 'Superbe Golf de SAINT BRIAC (vue mer 10km)',
      },
      pricing: {
        title: 'Tarifs & Conditions',
        included: [
          'Draps de lits',
          'Serviette douche',
          'WiFi',
          'Parking privé',
          'Produits entretien, torchons',
          'Chauffage automne et hiver uniquement',
        ],
        notIncluded: [
          'Ménage 60€ (la maison doit être laissée propre)',
          'Ménage complet 120€ si vous ne souhaitez pas faire le ménage du tout (merci de prévenir et de régler à votre arrivée)',
          'Chauffage printemps/été: 0,20€ du Kilowatt/heure (relevé de compteur à votre arrivée)',
        ],
        notes: [
          'Nombre de voyageurs : Maximum 5 personnes',
          'Pour les réservations de 3 ou 4 voyageurs, seules 2 chambres seront ouvertes. La troisième chambre est réservée pour les réservations de 5 voyageurs.',
          'Location : Du samedi au samedi en juillet/août',
          'Maison avec cheminée. Pare-feu obligatoire, bûches non fournies.',
        ],
      },
      access: {
        title: 'Accès & Itinéraire',
        howToFind: 'Comment nous trouver',
        directions: 'Si vous arrivez de Saint Malo, traversez le barrage de la Rance et prenez de suite à droite direction la RICHARDAIS, juste avant le MINIHIC SUR RANCE tourner à droite vers le lieu dit "SAINT ANTOINE", vous êtes arrivés.',
        parking: 'Un parking gravillonné a été aménagé pour UNE voiture dans le jardin, une deuxième voiture peut stationner dans la rue le long de la haie.',
        gate: 'Grand portail coulissant, merci de le fermer avec douceur.',
      },
    },
  },
  en: {
    nav: {
      home: 'Home',
      blueLodge: 'Blue Lodge',
      greenLodge: 'Green Lodge',
    },
    home: {
      title: 'Welcome to our lodges',
      subtitle: 'Discover our charming accommodations in Saint-Malo and Dinard',
      blueLodge: {
        title: 'Blue Lodge',
        location: 'Saint-Malo',
        description: 'Charming 2-room apartment by the sea',
        subtitle: '42m² apartment with private 110m² garden, close to Sillon beach',
      },
      greenLodge: {
        title: 'Green Lodge',
        location: 'Dinard',
        description: 'Charming house by the sea',
        subtitle: 'Authentic 85m² house with garden, 2-star rated, Dinard side',
      },
    },
    hero: {
      contactUs: 'Contact us directly to book or for any questions',
      callUs: 'Call us:',
      emailUs: 'Email us',
      seeOnAirbnb: 'See also on Airbnb',
    },
    contact: {
      title: 'Contact us directly',
      subtitle: 'Call us or send us an email to book or get information',
      phone: 'Phone',
      email: 'Email',
      address: 'Address',
    },
    common: {
      included: 'Included in the price',
      notIncluded: 'Not included (payable on arrival)',
      payableOnArrival: 'payable on arrival',
    },
    blueLodge: {
      title: 'Blue Lodge',
      subtitle: 'Charming 2-room apartment in Saint-Malo, by the sea',
      photos: {
        title: 'Discover Blue Lodge',
        subtitle: 'A haven of peace in the heart of Saint-Malo',
      },
      description: {
        title: 'Comfort and tranquility guaranteed',
        intro: 'The "BLUE LODGE" is ideal for a peaceful vacation in the heart of Saint Malo. Close to the beach, shops, restaurants and intra muros.',
        details: 'You will be charmed by this beautiful 42m² 2-room apartment, fully equipped and very sunny. Decorated with passion, it is located on the 2nd and top floor and has its private 110m² garden at the bottom of the residence. No overlooking, large windows, very bright, unobstructed view of the sunset.',
      },
      features: {
        title: 'Equipment & Services',
        wifi: { title: 'Free WiFi', desc: 'High-speed internet connection included' },
        sheets: { title: 'Bed sheets included', desc: 'The bed will be made upon your arrival' },
        towel: { title: 'Shower towel', desc: 'Towel provided for your comfort' },
        parking: { title: 'Private parking', desc: 'Free parking space in front of your garden' },
        bikeBox: { title: 'Bike/motorcycle box', desc: 'Locked box for 2 bikes or 1 motorcycle' },
        garden: { title: 'Private garden', desc: '110m² garden with chairs, table and barbecue' },
      },
      accommodation: {
        title: 'The accommodation',
        apartment: '42m² apartment',
        apartmentDesc1: 'Two-room apartment located in the heart of Saint Malo and its beautiful SILLON beach accessible on foot in 20 minutes. Shops and restaurants 10 minutes on foot.',
        apartmentDesc2: 'Southwest exposure, sun-drenched rooms (large window). Its sunny 110m² garden is located at the foot of this small family residence (exclusively reserved for you with its PRIVATE parking space).',
        bedroom: 'Bedroom',
        bedroomItems: [
          'Cozy bedroom, good bedding',
          'GRAND HOTEL mattress',
          'Quality "LENORMAND" duvet and pillows',
          'Small desk',
        ],
        livingRoom: 'Living room / Dining room',
        livingRoomItems: [
          'Flat screen TV',
          'Dining table',
          'Sofa, armchair',
        ],
        kitchen: 'Kitchen',
        kitchenItems: [
          'New kitchen, fully equipped',
          'BODUM plunger coffee maker',
          'Toaster, oven, microwave',
          'Table and chairs',
        ],
        bathroom: 'Bathroom',
        bathroomItems: [
          '6m² bathroom',
          'Large Italian shower 1m60',
          'Vanity unit, WC',
          'Washing machine + clothesline',
        ],
      },
      location: {
        title: 'Location & Amenities',
        nearby: 'Nearby',
        beach: 'Sillon Beach "Most beautiful beach in France" at 1300m',
        shops: 'Artisan bakery, shops and restaurants at 600m',
        intramuros: 'Intra-Muros: 7min by car / 14min by bike',
        station: 'Station: 5min by bus (bus stop 50m from the residence)',
        access: 'Access',
        accessBox: 'Locked BOX for 2 bikes or 1 motorcycle.',
        accessGarden: 'PRIVATE GARDEN (exclusively for you) of 110m² at the foot of the residence.',
        accessParking: 'FREE PRIVATE PARKING (in front of your garden).',
      },
      pricing: {
        title: 'Rates & Conditions',
        included: [
          'WiFi',
          'Bed sheets (bed will be made upon your arrival)',
          'Shower towel',
          'Cleaning products + dishcloth',
          'Washing machine',
          'Parking',
          'Small motorcycle or bike garage (locked and private)',
          'Garden (chairs and table), barbecue',
        ],
        notIncluded: [
          'Cleaning 30€ (apartment must be left clean)',
          'Full cleaning 60€ if you do not wish to do any cleaning (please notify)',
        ],
        notes: [
          'Rental from Saturday to Saturday during summer holidays',
          'Non-smoking apartment. Pets not accepted.',
          'Maximum one couple. Baby possible on request with supplement.',
        ],
      },
    },
    greenLodge: {
      title: 'Green Lodge',
      subtitle: 'Charming house by the sea, Dinard side',
      photos: {
        title: 'Discover Green Lodge',
        subtitle: 'An authentic house with Breton charm',
      },
      description: {
        title: 'Drop off your bags and enjoy',
        bedsMade: 'Beds will be made upon your arrival.',
        intro: 'Stone house RATED 2 stars. Fully renovated, it is equipped with all amenities, WiFi and a nice little south-facing garden for your quiet meals with family or friends.',
        seaDistance: 'Sea and GR34 at 950m on foot',
        shopsDistance: 'Shops and restaurants 4 minutes away',
        dinardDistance: 'Located DINARD side (5km)',
      },
      features: {
        title: 'Equipment & Services',
        wifi: { title: 'Free WiFi', desc: 'High-speed internet connection included' },
        sheets: { title: 'Bed sheets included', desc: 'Beds will be made upon your arrival' },
        towel: { title: 'Shower towel', desc: 'Towel provided for your comfort' },
        parking: { title: 'Private parking', desc: 'Gravel parking space for one car or two motorcycles' },
        garden: { title: '100m² garden', desc: 'South-facing garden with furnished terrace and Weber barbecue' },
        capacity: { title: 'Up to 5 people', desc: '85m² house with 3 bedrooms' },
      },
      accommodation: {
        title: 'The accommodation',
        house: 'Authentic fisherman\'s house of 85m²',
        houseDesc: 'This charming stone house, rated 2 stars, welcomes you in an authentic and warm setting. Fully renovated with care, it retains all the charm of its history as a fisherman\'s house while offering all the modern comfort necessary for a pleasant stay.',
        groundFloor: 'GROUND FLOOR',
        livingRoom: 'Large living room / Dining room',
        livingRoomDesc: '46m² with fully equipped kitchen',
        kitchen: 'Equipped kitchen',
        kitchenItems: [
          'Dishwasher, washing machine',
          'Microwave, oven',
          'New fridge-freezer',
          'Nespresso coffee maker',
          'Kettle, raclette machine',
          'Salt/Pepper, Oil/Vinegar included',
          'Cleaning products included',
        ],
        floor: 'FLOOR',
        bedrooms: '3 Bedrooms',
        bedroom1: '1st bedroom: 140 bed / 2 people + large wardrobe',
        bedroom2: '2nd bedroom: 140 bed / 2 people + large wardrobe',
        bedroom3: '3rd bedroom: 90 bed / 1 person + large wardrobe',
        bedroomNote: 'Below 5 travelers, the third bedroom will remain closed.',
        bathroom: 'Bathroom',
        bathroomItems: [
          'Bathroom with new shower',
          'Separate WC',
        ],
        exterior: 'EXTERIOR',
        exteriorItems: [
          '100m² garden with furnished terrace',
          'Weber barbecue',
          'Gravel parking space for ONE car or TWO motorcycles',
        ],
      },
      activities: {
        title: 'Leisure & Activities',
        waterSportsTitle: 'Water sports',
        waterSports: 'Sailing, kayak, paddle - Launch ramp and Sailing School in La Richardais (2km)',
        sailing: 'Dinard/Saint Malo crossing by FERRY-BOAT (10min)',
        ferry: 'Dinard/Saint Malo crossing by FERRY-BOAT (10min)',
        nearby: 'Nearby',
        saintMalo: 'Saint Malo 10 minutes away (Rance dam 5 minutes)',
        other: 'Saint Briac, Lancieux',
        bike: 'Bike rental available in Dinard',
        golf: 'Superb SAINT BRIAC Golf (sea view 10km)',
      },
      pricing: {
        title: 'Rates & Conditions',
        included: [
          'Bed sheets',
          'Shower towel',
          'WiFi',
          'Private parking',
          'Cleaning products, dishcloths',
          'Heating autumn and winter only',
        ],
        notIncluded: [
          'Cleaning 60€ (house must be left clean)',
          'Full cleaning 120€ if you do not wish to do any cleaning (please notify and pay upon arrival)',
          'Spring/summer heating: 0.20€ per Kilowatt/hour (meter reading upon your arrival)',
        ],
        notes: [
          'Number of travelers: Maximum 5 people',
          'For reservations of 3 or 4 travelers, only 2 bedrooms will be open. The third bedroom is reserved for reservations of 5 travelers.',
          'Rental: Saturday to Saturday in July/August',
          'House with fireplace. Fireplace screen mandatory, logs not provided.',
        ],
      },
      access: {
        title: 'Access & Directions',
        howToFind: 'How to find us',
        directions: 'If you arrive from Saint Malo, cross the Rance dam and immediately turn right towards RICHARDAIS, just before MINIHIC SUR RANCE turn right towards the place called "SAINT ANTOINE", you have arrived.',
        parking: 'A gravel parking space has been set up for ONE car in the garden, a second car can park on the street along the hedge.',
        gate: 'Large sliding gate, please close it gently.',
      },
    },
  },
  es: {
    nav: {
      home: 'Inicio',
      blueLodge: 'Blue Lodge',
      greenLodge: 'Green Lodge',
    },
    home: {
      title: 'Bienvenidos a nuestros lodges',
      subtitle: 'Descubra nuestros alojamientos con encanto en Saint-Malo y Dinard',
      blueLodge: {
        title: 'Blue Lodge',
        location: 'Saint-Malo',
        description: 'Encantador apartamento de 2 habitaciones junto al mar',
        subtitle: 'Apartamento de 42m² con jardín privado de 110m², cerca de la playa del Sillon',
      },
      greenLodge: {
        title: 'Green Lodge',
        location: 'Dinard',
        description: 'Casa con encanto junto al mar',
        subtitle: 'Casa auténtica de 85m² con jardín, clasificada 2 estrellas, lado Dinard',
      },
    },
    hero: {
      contactUs: 'Contáctenos directamente para reservar o para cualquier pregunta',
      callUs: 'Llámenos:',
      emailUs: 'Escríbanos',
      seeOnAirbnb: 'Ver también en Airbnb',
    },
    contact: {
      title: 'Contáctenos directamente',
      subtitle: 'Llámenos o envíenos un correo electrónico para reservar u obtener información',
      phone: 'Teléfono',
      email: 'Correo electrónico',
      address: 'Dirección',
    },
    common: {
      included: 'Incluido en el precio',
      notIncluded: 'No incluido (pagadero a la llegada)',
      payableOnArrival: 'pagadero a la llegada',
    },
    blueLodge: {
      title: 'Blue Lodge',
      subtitle: 'Encantador apartamento de 2 habitaciones en Saint-Malo, junto al mar',
      photos: {
        title: 'Descubra Blue Lodge',
        subtitle: 'Un refugio de paz en el corazón de Saint-Malo',
      },
      description: {
        title: 'Confort y tranquilidad garantizados',
        intro: 'El "BLUE LODGE" es ideal para unas vacaciones serenas en el corazón de Saint Malo. Cerca de la playa, tiendas, restaurantes e intra muros.',
        details: 'Quedará encantado con este hermoso apartamento de 2 habitaciones de 42m², totalmente equipado y muy soleado. Decorado con pasión, está situado en el 2º y último piso y tiene su jardín privado de 110m² en la parte inferior de la residencia. Sin vistas, grandes ventanales, muy luminoso, vista despejada de la puesta de sol.',
      },
      features: {
        title: 'Equipamiento y Servicios',
        wifi: { title: 'WiFi gratuito', desc: 'Conexión a internet de alta velocidad incluida' },
        sheets: { title: 'Sábanas incluidas', desc: 'La cama estará hecha a su llegada' },
        towel: { title: 'Toalla de ducha', desc: 'Toalla proporcionada para su comodidad' },
        parking: { title: 'Aparcamiento privado', desc: 'Plaza de aparcamiento gratuita delante de su jardín' },
        bikeBox: { title: 'Caja de bicicleta/moto', desc: 'Caja cerrada para 2 bicicletas o 1 moto' },
        garden: { title: 'Jardín privado', desc: 'Jardín de 110m² con sillas, mesa y barbacoa' },
      },
      accommodation: {
        title: 'El alojamiento',
        apartment: 'Apartamento de 42m²',
        apartmentDesc1: 'Apartamento de 2 habitaciones situado en el corazón de Saint Malo y su hermosa playa del SILLON accesible a pie en 20 minutos. Tiendas y restaurantes a 10 minutos a pie.',
        apartmentDesc2: 'Orientación suroeste, habitaciones bañadas por el sol (gran ventanal). Su soleado jardín de 110m² está situado al pie de esta pequeña residencia familiar (exclusivamente reservado para usted con su plaza de aparcamiento PRIVADA).',
        bedroom: 'Dormitorio',
        bedroomItems: [
          'Dormitorio acogedor, buena ropa de cama',
          'Colchón GRAND HOTEL',
          'Edredón y almohadas "LENORMAND" de calidad',
          'Pequeño escritorio',
        ],
        livingRoom: 'Salón / Comedor',
        livingRoomItems: [
          'Televisor de pantalla plana',
          'Mesa de comedor',
          'Sofá, sillón',
        ],
        kitchen: 'Cocina',
        kitchenItems: [
          'Cocina nueva, totalmente equipada',
          'Cafetera de émbolo BODUM',
          'Tostadora, horno, microondas',
          'Mesa y sillas',
        ],
        bathroom: 'Cuarto de baño',
        bathroomItems: [
          'Cuarto de baño de 6m²',
          'Gran ducha italiana de 1m60',
          'Mueble de lavabo, WC',
          'Lavadora + tendedero',
        ],
      },
      location: {
        title: 'Ubicación y Comodidades',
        nearby: 'Cerca',
        beach: 'Playa del Sillon "Playa más bonita de Francia" a 1300m',
        shops: 'Panadería artesanal, tiendas y restaurantes a 600m',
        intramuros: 'Intra-Muros: 7min en coche / 14min en bicicleta',
        station: 'Estación: 5min en autobús (parada de autobús a 50m de la residencia)',
        access: 'Acceso',
        accessBox: 'Caja cerrada para 2 bicicletas o 1 moto.',
        accessGarden: 'JARDÍN PRIVADO (exclusivamente para usted) de 110m² al pie de la residencia.',
        accessParking: 'APARCAMIENTO PRIVADO GRATUITO (delante de su jardín).',
      },
      pricing: {
        title: 'Tarifas y Condiciones',
        included: [
          'WiFi',
          'Sábanas de cama (la cama estará hecha a su llegada)',
          'Toalla de ducha',
          'Productos de limpieza + paño de cocina',
          'Lavadora',
          'Aparcamiento',
          'Pequeño garaje de moto o bicicletas (cerrado y privado)',
          'Jardín (sillas y mesa), barbacoa',
        ],
        notIncluded: [
          'Limpieza 30€ (el apartamento debe dejarse limpio)',
          'Limpieza completa 60€ si no desea hacer ninguna limpieza (por favor avisar)',
        ],
        notes: [
          'Alquiler de sábado a sábado durante las vacaciones de verano',
          'Apartamento no fumador. Mascotas no aceptadas.',
          'Máximo una pareja. Bebé posible bajo petición con suplemento.',
        ],
      },
    },
    greenLodge: {
      title: 'Green Lodge',
      subtitle: 'Casa con encanto junto al mar, lado Dinard',
      photos: {
        title: 'Descubra Green Lodge',
        subtitle: 'Una casa auténtica con encanto bretón',
      },
      description: {
        title: 'Deje sus maletas y disfrute',
        bedsMade: 'Las camas estarán hechas a su llegada.',
        intro: 'Casa de piedra CLASIFICADA 2 estrellas. Totalmente renovada, está equipada con todas las comodidades, WiFi y un bonito jardín pequeño orientado al SUR para sus comidas tranquilas en familia o con amigos.',
        seaDistance: 'Mar y GR34 a 950m a pie',
        shopsDistance: 'Tiendas y restaurantes a 4 minutos',
        dinardDistance: 'Situado lado DINARD (5km)',
      },
      features: {
        title: 'Equipamiento y Servicios',
        wifi: { title: 'WiFi gratuito', desc: 'Conexión a internet de alta velocidad incluida' },
        sheets: { title: 'Sábanas de cama incluidas', desc: 'Las camas estarán hechas a su llegada' },
        towel: { title: 'Toalla de ducha', desc: 'Toalla proporcionada para su comodidad' },
        parking: { title: 'Aparcamiento privado', desc: 'Plaza de aparcamiento de grava para un coche o dos motos' },
        garden: { title: 'Jardín de 100m²', desc: 'Jardín orientado al SUR con terraza amueblada y barbacoa Weber' },
        capacity: { title: 'Hasta 5 personas', desc: 'Casa de 85m² con 3 dormitorios' },
      },
      accommodation: {
        title: 'El alojamiento',
        house: 'Casa auténtica de pescador de 85m²',
        houseDesc: 'Esta encantadora casa de piedra, clasificada 2 estrellas, le acoge en un marco auténtico y acogedor. Totalmente renovada con cuidado, conserva todo el encanto de su historia como casa de pescador mientras ofrece todo el confort moderno necesario para una estancia agradable.',
        groundFloor: 'PLANTA BAJA',
        livingRoom: 'Gran salón / Comedor',
        livingRoomDesc: '46m² con cocina totalmente equipada',
        kitchen: 'Cocina equipada',
        kitchenItems: [
          'Lavavajillas, lavadora',
          'Microondas, horno',
          'Frigorífico-congelador nuevo',
          'Cafetera Nespresso',
          'Hervidor, máquina de raclette',
          'Sal/Pimienta, Aceite/Vinagre incluidos',
          'Productos de limpieza incluidos',
        ],
        floor: 'PISO',
        bedrooms: '3 Dormitorios',
        bedroom1: '1er dormitorio: Cama 140 / 2 personas + gran armario',
        bedroom2: '2º dormitorio: Cama 140 / 2 personas + gran armario',
        bedroom3: '3er dormitorio: Cama 90 / 1 persona + gran armario',
        bedroomNote: 'Por debajo de 5 viajeros, el tercer dormitorio permanecerá cerrado.',
        bathroom: 'Cuarto de baño',
        bathroomItems: [
          'Cuarto de baño con ducha nueva',
          'WC separado',
        ],
        exterior: 'EXTERIOR',
        exteriorItems: [
          'Jardín de 100m² con terraza amueblada',
          'Barbacoa Weber',
          'Plaza de aparcamiento de grava para UN coche o DOS motos',
        ],
      },
      activities: {
        title: 'Ocio y Actividades',
        waterSportsTitle: 'Actividades acuáticas',
        waterSports: 'Vela, kayak, paddle - Rampa de lanzamiento y Escuela de Vela en La Richardais (2km)',
        sailing: 'Travesía Dinard/Saint Malo en TRANSBORDADOR (10min)',
        ferry: 'Travesía Dinard/Saint Malo en TRANSBORDADOR (10min)',
        nearby: 'Cerca',
        saintMalo: 'Saint Malo a 10 minutos (presa de la Rance a 5 minutos)',
        other: 'Saint Briac, Lancieux',
        bike: 'Alquiler de bicicletas disponible en Dinard',
        golf: 'Magnífico Golf de SAINT BRIAC (vista al mar 10km)',
      },
      pricing: {
        title: 'Tarifas y Condiciones',
        included: [
          'Sábanas de cama',
          'Toalla de ducha',
          'WiFi',
          'Aparcamiento privado',
          'Productos de limpieza, paños de cocina',
          'Calefacción otoño e invierno únicamente',
        ],
        notIncluded: [
          'Limpieza 60€ (la casa debe dejarse limpia)',
          'Limpieza completa 120€ si no desea hacer ninguna limpieza (por favor avisar y pagar a su llegada)',
          'Calefacción primavera/verano: 0,20€ por Kilovatio/hora (lectura de contador a su llegada)',
        ],
        notes: [
          'Número de viajeros: Máximo 5 personas',
          'Para reservas de 3 o 4 viajeros, solo se abrirán 2 dormitorios. El tercer dormitorio está reservado para reservas de 5 viajeros.',
          'Alquiler: De sábado a sábado en julio/agosto',
          'Casa con chimenea. Pantalla de chimenea obligatoria, leños no proporcionados.',
        ],
      },
      access: {
        title: 'Acceso e Itinerario',
        howToFind: 'Cómo encontrarnos',
        directions: 'Si llega desde Saint Malo, cruce la presa de la Rance y gire inmediatamente a la derecha hacia RICHARDAIS, justo antes de MINIHIC SUR RANCE gire a la derecha hacia el lugar llamado "SAINT ANTOINE", ha llegado.',
        parking: 'Se ha acondicionado una plaza de aparcamiento de grava para UN coche en el jardín, un segundo coche puede aparcar en la calle a lo largo del seto.',
        gate: 'Gran portón corredizo, por favor ciérrelo con suavidad.',
      },
    },
  },
}
