/* CREATREEBU — English texts for script.js (used only by /en/index.html) */
window.CREATREEBU_I18N = {
  lang: "en",
  dir: "ltr",
  base: "../",

  /* Interface texts */
  ui: {
    avisoWa: "WhatsApp contact is not available yet.",
    menuAbrir: "Open menu",
    menuCerrar: "Close menu",
    conceptual: "Concept project",
    propuesta: "Project proposal",
    real: "Real project",
    notaConceptual: "Fictional brand created to show Creatreebu's style of work. Not a real client.",
    todos: "All",
    verProyecto: function (m) { return "View project " + m; },
    verProyectoLargo: function (n, m) { return "View project: " + n + ", " + m; },
    mostrandoTodos: function (n) { return "Showing all " + n + " projects."; },
    mostrandoCat: function (n, c) { return "Showing " + n + (n === 1 ? " project" : " projects") + " in " + c + "."; },
    pos: function (a, b) { return a + " of " + b; },
    miniAria: function (v, n, total, alt) { return (v ? "View video " : "View image ") + n + " of " + total + ": " + alt; },
    verAmpliado: function (n) { return "View larger: " + n; },
    masBoton: function (n) { return "View more work (" + n + ")"; },
    masEstado: function (a, b, tipo) { return "Showing " + a + " of " + b + (tipo === "Todos" ? " works." : " works in " + tipo + "."); },
    nTrabajos: function (c) { return c + (c === 1 ? " work" : " works"); },
    verCategoria: function (t, c) { return "View work in " + t + " (" + c + ")"; },
    pzEstado: function (n, tipo) { return "Showing " + n + (tipo === "Todos" ? " pieces." : " pieces in " + tipo + "."); },

    habAbrir: "Let's talk on WhatsApp",
    habCerrar: "Close contact form",
    habPanel: "Contact CREATREEBU",
    habTitulo: "How can I help?",
    habFotoAlt: "Pablo, from CREATREEBU",
    habAg1: "Direct attention",
    habAg2: "Pablo",
    habAg3: "I'll reply on WhatsApp",
    habCerrarX: "Close",
    habTit: "Tell me what you need",
    habNombreLabel: "Name",
    habNombrePh: "Name*",
    habOpciones: ["What do you need?", "Logo or visual identity", "Social media pieces", "Flyers or signage", "Commercial Express Pack", "Something else"],
    habMsjLabel: "Message (optional)",
    habErr: "Please enter your name to continue.",
    habEnviar: "Contact via WhatsApp",
    habNota: "We do not store your data: when you tap the button, WhatsApp opens with your message ready to send.",
    habWa: function (nom, sv) {
      return "Hi! I'm " + nom + ". I saw the CREATREEBU website" + (sv ? " and I'd like to ask about: " + sv + "." : " and I'd like to make an inquiry.");
    },

    introAria: "CREATREEBU introduction",
    introSaltar: "Skip intro",
    introSonido: "Turn sound on",
    introSilenciar: "Mute"
  },

  /* WhatsApp messages (same buttons, same number) */
  wa: {
    general: "Hi! I saw the CREATREEBU website and I'd like to ask about design for my business.",
    pack: "Hi! I'd like a quote for the Commercial Express Pack (5 social media pieces with my visual identity and 2 rounds of revisions). My business is: ",
    diseno: "Hi! I'd like to ask about graphic design (social media pieces, flyers or visual identity) for my business.",
    web: "Hi! I'd like to ask about designing a landing page or a simple website for my business.",
    "servicio-identidad": "Hi! I'd like to ask about visual identity and a brand graphic system.",
    "servicio-promocional": "Hi! I'd like to ask about commercial and promotional graphic design (offers, launches, ads).",
    "servicio-flyers": "Hi! I'd like to ask about flyers, signage, brochures or advertising pieces.",
    "servicio-redes": "Hi! I'd like to ask about social media posts and campaigns.",
    "servicio-packaging": "Hi! I'd like to ask about packaging, labels or editorial design.",
    "servicio-digital": "Hi! I'd like to ask about graphics for products and digital communication.",
    proyecto: "Hi! I saw the {proyecto} project on the CREATREEBU website and I'd like to ask about something similar for my brand."
  },

  /* Portfolio projects (by id). alts: main image first, then the other images in order. */
  proyectos: {
    "costero": {
      nombre: "Brand redesign proposal and marketing plan for Costero",
      marca: "Costero",
      categoria: "Identity & packaging",
      descripcion: "Proposal for a new logo and icon for a bakery brand, with applications on packaging and merchandising, plus a communication and social media marketing plan.",
      servicios: ["Logo redesign", "Icon mark", "Packaging and merchandising applications", "Marketing plan", "Community management"],
      alts: [
        "Four applications of Costero's new icon: a black T-shirt, a white cap, a building facade and an orange mug, with an orange C holding three green seeds.",
        "Outdoor billboard with Costero's new icon, an orange C with three seeds, over a beach with the word Costero written in the sand.",
        "Transparent bread bag with Costero's new orange logo on a light gray background.",
        "Open magazine with one page showing Costero's new icon and logo, and another with an ad for a hamburger and Costero's ideal bread.",
        "Proposal page: Costero's new logo, a black-and-white hamburger, an orange mug with the icon and the text about the choice of the three seeds.",
        "Closing page of the proposal with Costero's icon and logo in orange on a dark wood background and the Creatreebu logo."
      ]
    },
    "matex-pinturerias": {
      nombre: "Spots, animations and content for Matex Pinturerías",
      marca: "Matex Pinturerías",
      categoria: "Audiovisual & content",
      descripcion: "Creation of spots and animations for the paint store, along with social media pieces: product launches, color proposals and in-store notices.",
      servicios: ["Spots and animation", "Audiovisual content", "Social media content", "Promotional pieces"],
      alts: [
        "Square piece by Matex Pinturería with the title Harmony in your spaces, specialized advice and the round blue logo, over a photo of a bright living room.",
        "Square video by Matex: a can of anti-mold acrylic latex for exteriors, an illustrated paintbrush and a hand holding a color chart.",
        "Horizontal video by Matex: a building site with the message Give life to your project with the best colors and the Matex logo.",
        "Matex piece presenting Casablanca's textured acrylic coating line, with a modern house in the background, the Casadeco can and the Casablanca and Matex logos.",
        "Social media piece by Matex with a modern house and a living room, the text It's time to renew the colors of your home and Matex's round logo."
      ]
    },
    "marquesina-castro": {
      nombre: "Marquee sign for Roña Castro's gym",
      marca: "Roña Castro Gym",
      categoria: "Signage & marquees",
      descripcion: "Overall design of the marquee sign for the boxing gym, the sign structure and its installation. A complete job, from the graphic idea to the installation.",
      servicios: ["Overall marquee design", "Sign structure", "Installation"],
      alts: [
        "Work board: Client Roña Castro, marquee sign for a boxing gym, with the details of the work done and the final marquee design.",
        "Final marquee design: Mixed gym for adults and kids, recreational boxing with Locomotora Roña Castro, with a portrait and blue gloves on a green and blue background.",
        "Vertical piece for the gym with the image of the boxer with raised fists and the words Boxeo Gimnasio in silver letters."
      ]
    },
    "carteleria-mistral-heidi": {
      nombre: "Signage for Mistral (San Francisco Solano) and Galería Heidi",
      marca: "Mistral · Galería Heidi",
      categoria: "Signage & marquees",
      descripcion: "Complete signage design for the Mistral branch in San Francisco Solano, Quilmes, following the franchise's brand manual, and signage for Galería Heidi designed with total creative freedom. In both cases, also the installation.",
      servicios: ["Signage design following the brand manual (Mistral)", "Free creative design (Galería Heidi)", "Installation of both signs"],
      alts: [
        "Shopfront in San Francisco Solano with the Mistral and Galería Heidi signs already installed, next to the Seven Electronics sign.",
        "Front view of the installed signs: Mistral on the left and Galería Heidi in the center.",
        "Mistral sign design in Illustrator: the blue logo with a red dot on a night-city background with light beams.",
        "Galería Heidi sign design in Illustrator: chrome letters over a retro landscape of mountains, sun and grid in pink and blue."
      ]
    },
    "la-vieja-cuadra": {
      nombre: "Brand restyling and signage for La Vieja Cuadra",
      marca: "La Vieja Cuadra · Pizzería & Restaurant",
      categoria: "Signage & marquees",
      descripcion: "Complete restyling of a classic pizzeria in Las Toninas that turns 50: new logo design applied across all the signage, with an illuminated backlit sign, dimensional letters and plotter vinyl for the commercial fridges.",
      servicios: ["Logo restyling", "Signage", "Backlit light-box sign", "Dimensional letters", "Plotter vinyl for commercial fridges"],
      alts: [
        "Restyling board for La Vieja Cuadra: light-box sign with a light background and gold details, a social media piece with a pizza and the new gold and ivory logo on a black background.",
        "Backlit light-box sign installed at the shop: Pizzeria & Restaurant, A classic of Las Toninas, 50 years, with interior lighting.",
        "Light-box sign design with the new La Vieja Cuadra logo, gold triangles and the 50 years legend.",
        "New La Vieja Cuadra logo with a gold horseshoe, ivory handwritten lettering and the phrase A classic of Las Toninas, on a black background.",
        "Social media piece with the logo, a pizza with melted cheese and the text Pizzas, pasta, mains and much more.",
        "Photograph of a ham, onion and olive pizza with a lit flame in the foreground.",
        "Photograph of a pizza fresh out of the wood-fired oven, with flames in the background.",
        "Photograph of a slice of stuffed fugazzeta with cheese, french fries and red onion, next to a flame."
      ]
    },
    "twenty-seven": {
      nombre: "Complete identity and logo for Twenty Seven",
      marca: "Twenty Seven · Boutique Burger Joint",
      categoria: "Identity & packaging",
      descripcion: "Complete identity for a signature burger restaurant in Buenos Aires city: logo, corporate identity manual with colors and versions, launch pieces for social media and applications on packaging, menu and stationery.",
      servicios: ["Logo", "Complete identity", "Corporate identity manual", "Social media pieces", "Packaging and stationery applications"],
      alts: [
        "Twenty Seven launch piece: a burger with fries, the round black-and-white logo on an orange flame-shaped background and the text Now open.",
        "Cover of Twenty Seven's corporate identity manual with the round logo over a burger and an orange stripe.",
        "Colors page of the manual: the logo in white and black versions, with its CMYK, hexadecimal and RGB values.",
        "Applications of the logo on kraft packaging, a cup, a menu, a notepad, coasters, bags and a phone screen.",
        "Social media piece by Twenty Seven with a full burger on a dark wood background and the logo."
      ]
    },
    "proyectar-construccion": {
      nombre: "Logo and identity redesign for Proyectar Construcción",
      marca: "Proyectar · Construction and renovation",
      categoria: "Identity & packaging",
      descripcion: "Logo restyling and new visual identity for a construction and renovation company in Santa Rosa, La Pampa: logo, corporate stationery and applications on vehicles and merchandising.",
      servicios: ["Logo restyling", "New visual identity", "Corporate stationery", "Vehicle wrapping", "Merchandising"],
      alts: [
        "New Proyectar logo, Construction and renovation: an impossible triangle with a blue pattern and the word Proyectar in blue and brown, on a dark gray background.",
        "Proyectar stationery on a desk: letterhead, envelope, folder, business cards and a pencil with the logo.",
        "White car wrapped with the blue pattern and the Proyectar logo.",
        "Green van with the Proyectar logo on the side.",
        "White mug with a red interior and the Proyectar logo, on an orange background."
      ]
    },
    "morbelli-identidad": {
      nombre: "Complete identity and website for Morbelli & Morbelli Abogados",
      marca: "Morbelli & Morbelli · Law firm",
      categoria: "Identity & packaging",
      descripcion: "Logo design for a law firm in Don Bosco, Bernal (Quilmes), with its complete identity and the institutional website. Material recovered from the archive: the site dates from 2013 and is no longer online; the stationery pieces are a recreation of the identity.",
      servicios: ["Logo design", "Complete identity", "Website design and development"],
      alts: [
        "Metallic logo of Morbelli & Morbelli Abogados, with a monogram of two Ms, on a black background.",
        "Two screens of the firm's website: the home page with a gold header and the The Firm page with the practice areas menu.",
        "Recreation of stationery with the logo: letterhead and business cards, on a dark background."
      ]
    },
    "heladeria-cherry": {
      nombre: "Digital content and screens for Heladería Cherry",
      marca: "Heladería Cherry",
      categoria: "Social & promotions",
      descripcion: "Creation of the shop's animated digital screens, for promotions and for the ice cream flavors and prices. Also social media content: reels, carousels and flyers.",
      servicios: ["Animated digital screens", "Reels", "Carousels", "Flyers"],
      alts: [
        "Shelf with bottles lit in red inside the Cherry ice cream shop, with the digital flavor and price screens in the background and tables with black chairs.",
        "Cherry ice cream shop hall with five digital screens on the wall showing prices, treats and flavors, and two glowing red cones on the sides.",
        "Detail of Cherry's digital screens for treats and flavors, with the disposable cups area on a green wall.",
        "Vertical social media piece by Cherry: four ice cream trays on top, the red logo with cherries and the phrase Summer starts with every bite.",
        "Vertical piece presenting The Dubai Chocolate: chocolate ice cream with pistachio, with the Cherry and La Sorbetière logos.",
        "Vertical flyer with Friday, Saturday and Sunday promotions with two Cherry ice cream cups, two quarter-kilos for 10,000 pesos and one kilo for 15,000 pesos."
      ]
    },
    "cabanas-maria-del-mar": {
      nombre: "Identity for Cabañas María del Mar",
      marca: "María del Mar Cabins",
      categoria: "Identity & packaging",
      descripcion: "Creation of the logo and visual identity for cabins in Las Toninas, with a sun rising from the sea. The identity was applied to editorial and promotional pieces.",
      servicios: ["Logo", "Visual identity", "Editorial design", "Promotional pieces"],
      alts: [
        "Our services piece for Cabañas María del Mar: three photos of wooden cabins among trees and the light blue and yellow logo with a sun and a wave, on a brown background.",
        "Where we are piece: four photos of a sunset, fishing on the beach and a shrub maze, with text about the location in Las Toninas, on a brown background.",
        "Contact piece for Cabañas María del Mar with the logo, phone numbers and address, over a photo of a wooden cabin.",
        "María del Mar logo: light blue calligraphic letters, a yellow sun with concentric circles and a wave, on a dark background."
      ]
    },
    "almacen-de-bicis": {
      nombre: "Logo, flyers and video for Almacén de Bicis",
      marca: "Almacén de Bicis · Las Toninas",
      categoria: "Identity & packaging",
      descripcion: "Creation of the logo for a bicycle workshop and store in Las Toninas, with flyers and a social media video in the same style: yellow, orange brush strokes and heavy typography.",
      servicios: ["Logo creation", "Flyers", "Social media video"],
      alts: [
        "Almacén de Bicis social media video: on a yellow background with orange strokes, the texts Wheels, Bikes, Assembly and Accessories, with pick-up and home delivery.",
        "Square social media video: the shop's services, bicycles in motion, the message We repair your bike and the closing with the logo and the address.",
        "Vertical flyer with a photo of a bicycle, the text We repair your bike, the repair, assembly and accessories services and the logo on a black band.",
        "Vertical piece for stories in black and yellow: The world of bicycles in one place!, with a bicycle photo, the logo and the address.",
        "Almacén de Bicis logo: a round seal with the legend Specialized mechanic workshop and a bicycle, with the name on a ribbon."
      ]
    },
    "marea-alta": {
      nombre: "Seaside inn",
      marca: "Marea Alta",
      categoria: "Identity & packaging",
      descripcion: "Identity for a coastal inn: a logo built from waves, a room keychain and a social media post. Palette of sand, deep blue and a touch of coral.",
      servicios: ["Visual identity", "Social media pieces", "Stationery"],
      alts: [
        "Marea Alta logo: a blue circle with sand-colored waves and a coral sun, on a sand background.",
        "Sand-colored keychain for room number 12, on a blue background with a coral sun.",
        "Social media post with the text We open in September, on a sand panel."
      ]
    },
    "cosplay-ind": {
      nombre: "Labels and sportswear layout for Cosplay Ind.",
      marca: "Cosplay Ind. · Banfield",
      categoria: "Identity & packaging",
      descripcion: "Design of hang tags and sportswear layout for an online store of unofficial Las Toninas club apparel: tags with size and care instructions, a jersey and sweatshirts with the crest.",
      servicios: ["Label design", "Sportswear layout", "Application of the crest and brand"],
      alts: [
        "Four black and yellow hang tags: one with the dolphin and the name Las Toninas, another with the size, one with garment care and another with the round icon.",
        "Black hang tag with the golden dolphin, the name Las Toninas Sports Apparel, size M, washing symbols and the legend Waterproof.",
        "Mockup of a black jersey with a yellow collar and cuffs, a striped crest and the name Las Toninas.",
        "Mockup of a black hooded sweatshirt with the yellow and black Las Toninas crest.",
        "Mockup of a black hooded sweatshirt, Las Toninas crest on the chest and a patch on the sleeve."
      ]
    },
    "lamina": {
      nombre: "Design and craft magazine",
      marca: "Lámina",
      categoria: "Editorial",
      descripcion: "Editorial design for a design magazine: cover, inside spread and index. Geometric compositions with red as the only accent color.",
      servicios: ["Editorial design", "Layout", "Art direction"],
      alts: [
        "Cover of Lámina magazine with a red circle, a black block and the title Color and craft.",
        "Inside spread with a red block, a black circle, text in columns and a red drop cap.",
        "Index page with a large number 04 and a list of four articles with their pages."
      ]
    },
    "kine": {
      nombre: "Movement studio",
      marca: "Kiné",
      categoria: "Social & promotions",
      descripcion: "Social media campaign for a pilates studio: carousel, story and single post. Soft palette and arch shapes that suggest movement.",
      servicios: ["Social media campaign", "Format adaptation", "Art direction"],
      alts: [
        "Kiné post carousel with the text Breathe and concentric arches, on a plum background.",
        "Vertical story inviting people to a trial class, with colored arches and a Book your spot button.",
        "Pink post with the text Moving is the plan and green circles."
      ]
    },
    "dos-ases": {
      nombre: "Seasonal promotions",
      marca: "Dos Ases Hardware Store",
      categoria: "Social & promotions",
      descripcion: "Promotional pieces for a hardware store: flyer, shop sign and social media ad. Popular-signage aesthetics, with flat color, halftone dots and strong hierarchy.",
      servicios: ["Promotional pieces", "Flyers and signage", "Ads"],
      alts: [
        "Yellow flyer with a red star and the text Offers of the week, on a blue background.",
        "Yellow shop sign with the text Everything for your project and two ace cards, on a red background.",
        "Yellow ad with a hammer and the text Tools that last."
      ]
    },
    "web-damiselas": {
      nombre: "Website for Damiselas, an integral aesthetics and beauty center",
      marca: "Damiselas",
      categoria: "Websites",
      descripcion: "Complete design of the website for an aesthetics and beauty center: logo, color palette, image selection and web development, with a menu of About us, Services, Location and Contact.",
      servicios: ["Logo", "Color palette", "Image selection", "Website design and development"],
      alts: [
        "Home page of Damiselas' website: a woman's face with pink flowers on the left, the petal-shaped logo and the buttons About us, Services, Location and Contact.",
        "About us page of Damiselas' website: vertical tabs with the text Integral Center and Aesthetics and Beauty, top menu, a banner with candles and towels and a pink search bar."
      ]
    },
    "web-nap-estudio": {
      nombre: "Website for NAP Estudio",
      marca: "NAP Estudio",
      categoria: "Websites",
      descripcion: "Complete design of the website for a consulting studio for film and audiovisual productions, with a classic cinema atmosphere: logo, colors, images and web development.",
      servicios: ["Logo", "Color palette", "Image selection", "Website design and development"],
      alts: [
        "Home page of NAP Estudio's website: an old television with a black-and-white scene, a light blue car, a popcorn bucket and the clapperboard logo, on a red wood background.",
        "Services page of NAP Estudio's website: a blackboard detailing the consulting, a theater with red seats, an old camera and a girl with a megaphone."
      ]
    },
    "web-morbelli": {
      nombre: "Website for Morbelli & Morbelli Abogados",
      marca: "Morbelli & Morbelli",
      categoria: "Websites",
      descripcion: "Complete design of the institutional website of a law firm, with a menu by practice area: family, labor, civil, criminal, accidents and business. Includes logo, colors, images and web development.",
      servicios: ["Logo", "Color palette", "Image selection", "Website design and development"],
      alts: [
        "Morbelli & Morbelli Abogados website: gold header with the metallic logo, practice area menu, a banner with handcuffs, books and a judge's gavel on a red background."
      ]
    },
    "web-3b-carteles": {
      nombre: "Website for 3B Carteles Publicitarios",
      marca: "3B Carteles Publicitarios",
      categoria: "Websites",
      descripcion: "Complete design of the website for an advertising signage company: logo, colors, images and a product catalog with double-sided signs, six-sheet billboards and circular lollipop signs.",
      servicios: ["Logo", "Color palette", "Image selection", "Website design and development"],
      alts: [
        "3B Carteles Publicitarios website: red logo with the initials 3B on a dotted background, an introduction text and three sample advertising signs."
      ]
    }
  },

  /* "More of our work" wall (by original image path) */
  /* Graphic pieces grid (by id) */
  piezas: {
    "damisellas": { nombre: "Damisellas, Mother's Day promo", tipo: "Flyers", alt: "Mother's Day promotions flyer for the Damisellas beauty center, with photos of massages and treatments over pink waves." },
    "fines-expo": { nombre: "FINES, Educational Expo", tipo: "Flyers", alt: "FINES flyer for the first Educational Expo in La Costa, with green and blue blocks over a photo of hands writing." },
    "fines-deudores": { nombre: "DEU.FINES, outstanding subjects", tipo: "Flyers", alt: "Flyer for the DEU.FINES adult secondary plan for outstanding subjects, with enrollment requirements, in greens and teals." },
    "sco-gastronomia": { nombre: "Secundaria con Oficios, Gastronomy", tipo: "Flyers", alt: "Enrollment flyer for Secundaria con Oficios, Gastronomy track, with a photo of hands kneading dough." },
    "sco-alimentacion": { nombre: "Secundaria con Oficios, Food Industry", tipo: "Flyers", alt: "Enrollment flyer for Secundaria con Oficios, Food Industry track, with a mosaic of dishes." },
    "expo-gastronomia": { nombre: "Gastronomy Trade, First Expo", tipo: "Flyers", alt: "Poster for the first Educational and Productive Expo of Secundaria con Oficios, with green lettering on a black slate and dishes around the edges." },
    "pitucos": { nombre: "Pitucos Baby & Kids", tipo: "Flyers", alt: "Social media graphic for the Pitucos Baby & Kids store, with a little frog logo, brands, payment methods and address." },
    "claude-fotografia": { nombre: "Claude Fotografía, basic workshop", tipo: "Flyers", alt: "Flyer for the basic-level photography workshop by Claude Fotografía, with vintage cameras around a hexagon with the logo." },
    "peluca-inocente": { nombre: "Peluca y su Combo, Inocente", tipo: "Posters", alt: "Poster for the lyric video Inocente by Peluca y su Combo: a sugar skull with a crown of roses over dark rays." },
    "mal-viaje": { nombre: "Mal viaje, short film", tipo: "Posters", alt: "Black-and-white poster for the short film Mal viaje, with a man in a suit and a rope-shaped tie." },
    "diseno-imagen": { nombre: "The design of the image, UNDAV", tipo: "Posters", alt: "Poster for the Photography and Camera One course in Audiovisual Arts, with a golden film reel." },
    "radio-master": { nombre: "Radio Master 104.1, + Music", tipo: "Radio", alt: "Radio Master 104.1 flyer with a girl wearing headphones and the genres rock, folk, pop and dance." },
    "master-activa": { nombre: "Master Activa 104.1", tipo: "Radio", alt: "Launch poster for Master Activa 104.1: a red heart between headphones on a white background." },
    "irins-boys": { nombre: "Irin's Parfum, Boys", tipo: "Packaging", alt: "Irin's Parfum Boys perfume bottle in faceted teal glass with a textured black cap." },
    "irins-ladies": { nombre: "Irin's Parfum, Ladies", tipo: "Packaging", alt: "Irin's Parfum Ladies perfume bottle in pink glass with a curved shape and a clear cap with a gold detail." },
    "irins-boys-noche": { nombre: "Irin's Parfum, Boys (night setting)", tipo: "Packaging", alt: "Irin's Parfum Boys bottle on dark stone, with blurred blue city lights at night." },
    "cadu-44": { nombre: "CADU, 44 years of history", tipo: "Identity", alt: "Anniversary greeting for Club Atlético Defensores Unidos, with the crest, CADU in black and 44 in orange." },
    "fomento-fachada": { nombre: "Sociedad de Fomento 1° de Mayo, facade", tipo: "Identity", alt: "Front of the Sociedad de Fomento 1° de Mayo, with its crest on a sign on the white and blue wall." }
  },

  /* Carousel categories (by id) */
  slides: {"logos": "Logos", "menus": "Menus", "flyers": "Flyers", "afiches": "Posters", "packaging": "Packaging"},

  trabajos: {
    "imagenes/trabajos/la-masion-menu.jpg": { nombre: "La Masión, signature cuisine menu", tipo: "Menus", alt: "La Masión signature cuisine menu with starters, sides, meats, pastas, drinks and desserts over a warm kitchen photo." },
    "imagenes/trabajos/fomento-logo.jpg": { nombre: "Sociedad de Fomento 1° de Mayo", tipo: "Logos", alt: "Crest of the Sociedad de Fomento 1° de Mayo, founded in 1958: a blue cross with the letters S, F, 1° and M in orange." },
    "imagenes/mas-provenzano-cafeteria.jpg": { nombre: "Provenzano Multiespacio, café menu", tipo: "Menus", alt: "Café menu for Provenzano Multiespacio on a brown background with coffee beans, a cup and a grinder, with the list of coffees and prices in white." },
    "imagenes/mas-provenzano-minutas.jpg": { nombre: "Provenzano Multiespacio, light meals and sandwiches menu", tipo: "Menus", alt: "Light meals and sandwiches menu for Provenzano Multiespacio on a caramel-colored background, with lists of mini baguettes, hot sandwiches, tarts and empanadas." },
    "imagenes/mas-provenzano-postres.jpg": { nombre: "Provenzano Multiespacio, dessert menu", tipo: "Menus", alt: "Dessert menu for Provenzano Multiespacio on a chocolate brown background, with a tray of bonbons and cakes at the bottom." },
    "imagenes/mas-provenzano-promo-desayunos.jpg": { nombre: "Provenzano Multiespacio, breakfast and afternoon tea promos", tipo: "Menus", alt: "Orange vertical Promo Menus flyer for Provenzano with five combos of coffee, toasted sandwiches, smoothies and croissants inside circles." },
    "imagenes/mas-provenzano-promo-picadas.jpg": { nombre: "Provenzano Multiespacio, sharing boards and pizza promos", tipo: "Menus", alt: "Olive green vertical Promo Menus flyer for Provenzano with cold-cut boards, pizzas and beer inside circles." },
    "imagenes/mas-la-huella-menu.jpg": { nombre: "La Huella Restaurant, executive menu", tipo: "Menus", alt: "Executive menu for La Huella Restaurant in two dark panels over food photos, with golden letters and an illustration of a cloche." },
    "imagenes/mas-panaderia-santa-ana.jpg": { nombre: "Panadería Santa Ana", tipo: "Logos", alt: "Panadería Santa Ana logo: the name in white letters on a brown band, with a wreath of golden leaves, loaves of bread and the phrase served by its own owners." },
    "imagenes/mas-bassdetail.jpg": { nombre: "Bassdetail Auto Estética", tipo: "Logos", alt: "Bassdetail Auto Estética logo: a red classic car on a golden oval with the name in white letters." },
    "imagenes/mas-eterna-juventud.jpg": { nombre: "Eterna Juventud", tipo: "Logos", alt: "Eterna Juventud logo, clothing for women: a retro illustration of a woman with glasses inside a purple seal with a ribbon." },
    "imagenes/mas-pipa-romero.jpg": { nombre: "Pipa Romero, fishing guide", tipo: "Logos", alt: "Pipa Romero logo, fishing guide: two fish forming a circle in olive green and yellow tones, with the name at the side." },
    "imagenes/mas-morbelli-abogados.jpg": { nombre: "Morbelli & Morbelli Abogados", tipo: "Logos", alt: "Morbelli y Morbelli Abogados logo with metallic letters on a textured black background and a white rising arrow." },
    "imagenes/mas-nap-estudio.jpg": { nombre: "NAP Estudio", tipo: "Logos", alt: "NAP Estudio logo: a black film clapperboard with the letters NAP in orange and framing marks." }
  }
};
