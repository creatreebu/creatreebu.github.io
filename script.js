/* =========================================================
   CREATREEBU — script.js

   ORDEN DEL ARCHIVO
   1. CONFIGURACIÓN  → WhatsApp, email e Instagram (NO tocar el número)
   2. PORTFOLIO      → los proyectos (acá se editan / reemplazan)
   3. LÓGICA         → comportamiento de la página (no hace falta tocarla)
   4. ARTE DE DEMO   → dibujos de los proyectos conceptuales
                       (se puede borrar cuando ya no se usen)
   ========================================================= */


/* =========================================================
   1. CONFIGURACIÓN
   ========================================================= */

/* Número de WhatsApp en formato internacional, solo dígitos y sin +.
   Es el número que ya estaba configurado en el sitio: NO lo modifiques
   salvo que quieras cambiar de número. */
const WHATSAPP_NUMBER = "5491162187085";

/* Datos opcionales. Dejá "" lo que no quieras mostrar. */
const CONTACT = {
  email: "",      // ej.: "hola@tudominio.com"
  instagram: ""   // solo el usuario, sin @ ni URL. ej.: "creatreebu"
};

/* Mensajes precargados de WhatsApp según el botón (atributo data-wa del HTML). */
const WHATSAPP_MESSAGES = {
  general: "Hola! Vi la web de Creatreebu y quiero hacer una consulta sobre diseño para mi negocio.",
  pack: "Hola! Quiero pedir presupuesto del Pack Comercial Express (5 piezas para redes sociales con mi identidad visual y 2 rondas de ajustes). Mi negocio es: ",
  diseno: "Hola! Quiero consultar por diseño gráfico (piezas para redes, flyers o identidad visual) para mi negocio.",
  web: "Hola! Quiero consultar por el diseño de una landing page o página web sencilla para mi negocio.",
  "servicio-identidad": "Hola! Quiero consultar por identidad visual y sistema gráfico de marca.",
  "servicio-promocional": "Hola! Quiero consultar por diseño gráfico comercial y promocional (ofertas, lanzamientos, anuncios).",
  "servicio-flyers": "Hola! Quiero consultar por flyers, cartelería, folletos o piezas publicitarias.",
  "servicio-redes": "Hola! Quiero consultar por publicaciones y campañas para redes sociales.",
  "servicio-packaging": "Hola! Quiero consultar por packaging, etiquetas o diseño editorial.",
  "servicio-digital": "Hola! Quiero consultar por gráfica para productos y comunicación digital.",
  /* {proyecto} se reemplaza por el nombre de marca desde la vista detallada */
  proyecto: "Hola! Vi el proyecto {proyecto} en la web de Creatreebu y quiero consultar por algo similar para mi marca."
};


/* =========================================================
   2. PORTFOLIO
   ---------------------------------------------------------
   Cada proyecto es un objeto con estos campos:

   id            texto único, sin espacios ni tildes (ej. "mi-cliente")
   nombre        nombre del proyecto (título de la vista detallada)
   marca         nombre de la marca
   categoria     categoría; los filtros se generan solos con estos valores
   descripcion   texto breve del proyecto
   estado        "conceptual" o "real"
   tamano        tamaño en la grilla: "l" (grande), "m" (mediano), "h" (mitad)
   portada       true para que aparezca en el collage de la portada (usá 3)
   paleta        [color principal, color secundario] (referencia de la marca)
   imagen        imagen principal: { src, arte, alt }
   imagenes      imágenes complementarias: [ { src, arte, alt }, ... ]
   servicios     lista de servicios realizados

   Dentro de imagen / imagenes:
   src   ruta de tu archivo, ej. "img/cliente-portada.jpg"
         Si src tiene una ruta, se muestra esa imagen.
   arte  nombre del dibujo de demostración (sección 4). Con src cargado
         se ignora; podés dejarlo en "".
   alt   texto alternativo: describí qué se ve en la imagen.
   ========================================================= */

const PROYECTOS = [
  {
    id: "heladeria-cherry",
    nombre: "Contenido digital y pantallas para Heladería Cherry",
    marca: "Heladería Cherry",
    categoria: "Redes y promociones",
    descripcion: "Creación de las pantallas digitales con animación del local, para promociones y para los gustos y precios de los helados. También contenido para redes sociales: reels, carruseles y flyers.",
    estado: "real",
    portada: true,
    paleta: ["#E5173F", "#16150F"],
    imagen: { src: "imagenes/cherry-4.jpg", arte: "", alt: "Estantería con botellas iluminadas en rojo dentro de la heladería Cherry, con las pantallas digitales de gustos y precios al fondo y mesas con sillas negras." },
    imagenes: [
      { src: "imagenes/cherry-3.jpg", arte: "", alt: "Salón de la heladería Cherry con cinco pantallas digitales sobre la pared con precios, tentaciones y sabores, y dos cucuruchos luminosos rojos a los costados." },
      { src: "imagenes/cherry-5.jpg", arte: "", alt: "Detalle de las pantallas digitales de tentaciones y sabores de Cherry, con el sector de vasos descartables sobre una pared verde." },
      { src: "imagenes/cherry-1.jpg", arte: "", alt: "Pieza vertical para redes de Cherry: cuatro bandejas de helado arriba, el logo rojo con cerezas y la frase El verano empieza con cada bocado." },
      { src: "imagenes/cherry-2.jpg", arte: "", alt: "Pieza vertical que presenta El Chocolate Dubai: helado de chocolate con pistacho, con los logos de Cherry y La Sorbetière." },
      { src: "imagenes/cherry-6.jpg", arte: "", alt: "Flyer vertical de promociones de viernes, sábado y domingo con dos vasos de helado de Cherry, dos de un cuarto por 10.000 pesos y un kilo por 15.000 pesos." }
    ],
    servicios: ["Pantallas digitales con animación", "Reels", "Carruseles", "Flyers"]
  },
  {
    id: "cabanas-maria-del-mar",
    nombre: "Identidad para Cabañas María del Mar",
    marca: "Cabañas María del Mar",
    categoria: "Identidad y packaging",
    descripcion: "Creación del isologotipo y de la identidad visual de unas cabañas en Las Toninas, con un sol naciendo del mar. La identidad se aplicó a piezas editoriales y promocionales.",
    estado: "real",
    portada: true,
    paleta: ["#6B3F12", "#4FC3D9"],
    imagen: { src: "imagenes/maria-del-mar-1.jpg", arte: "", alt: "Pieza Nuestros servicios de Cabañas María del Mar: tres fotos de cabañas de madera entre árboles y el isologotipo celeste y amarillo con un sol y una ola, sobre fondo marrón." },
    imagenes: [
      { src: "imagenes/maria-del-mar-2.jpg", arte: "", alt: "Pieza Dónde estamos: cuatro fotos de atardecer, pesca en la playa y un laberinto de arbustos, con un texto sobre la ubicación en Las Toninas, sobre fondo marrón." },
      { src: "imagenes/maria-del-mar-3.jpg", arte: "", alt: "Pieza de contacto de Cabañas María del Mar con el isologotipo, teléfonos y dirección, sobre una foto de una cabaña de madera." },
      { src: "imagenes/maria-del-mar-4.jpg", arte: "", alt: "Isologotipo de María del Mar: letras caligráficas celestes, un sol amarillo con círculos concéntricos y una ola, sobre fondo oscuro." }
    ],
    servicios: ["Isologotipo", "Identidad visual", "Diseño editorial", "Piezas promocionales"]
  },
  {
    id: "almacen-brasa",
    nombre: "Café de tostado lento",
    marca: "Almacén Brasa",
    categoria: "Identidad y packaging",
    descripcion: "Sistema de packaging para una tostadora de café: bolsa, etiqueta de lote y vaso para llevar. La brasa funciona como recurso central y el naranja sostiene toda la línea.",
    estado: "conceptual",
    tamano: "l",
    portada: true,
    paleta: ["#E4572E", "#1C1612"],
    imagen: { src: "", arte: "brasa-bolsa", alt: "Bolsa de café negra con etiqueta crema que dice brasa, sobre un fondo naranja con círculos concéntricos." },
    imagenes: [
      { src: "", arte: "brasa-etiqueta", alt: "Etiqueta circular de lote 07 sobre papel madera, con rayos alrededor del número." },
      { src: "", arte: "brasa-vaso", alt: "Vaso de café para llevar con manga naranja y el nombre brasa, sobre fondo oscuro." }
    ],
    servicios: ["Identidad visual", "Packaging", "Etiquetas"]
  },
  {
    id: "marea-alta",
    nombre: "Posada frente al mar",
    marca: "Marea Alta",
    categoria: "Identidad y packaging",
    descripcion: "Identidad para una posada costera: logotipo construido con olas, llavero de habitación y una publicación para redes. Paleta de arena, azul profundo y un toque de coral.",
    estado: "conceptual",
    tamano: "m",
    paleta: ["#0F2B46", "#EFE3CF"],
    imagen: { src: "", arte: "marea-logo", alt: "Logotipo de Marea Alta: círculo azul con olas color arena y un sol coral, sobre fondo arena." },
    imagenes: [
      { src: "", arte: "marea-llave", alt: "Llavero de habitación número 12 color arena, sobre fondo azul con un sol coral." },
      { src: "", arte: "marea-post", alt: "Publicación para redes con el texto Abrimos en septiembre, sobre un panel arena." }
    ],
    servicios: ["Identidad visual", "Piezas para redes", "Papelería"]
  },
  {
    id: "pulpa",
    nombre: "Jugos de fruta en lata",
    marca: "Pulpa",
    categoria: "Identidad y packaging",
    descripcion: "Línea de latas de jugo con personalidad pop. Cada sabor tiene su color, un sistema de frutas geométricas y una tipografía redonda y pesada.",
    estado: "conceptual",
    tamano: "m",
    paleta: ["#FF3D81", "#FFD60A"],
    imagen: { src: "", arte: "pulpa-latas", alt: "Tres latas de jugo Pulpa rosa, verde y violeta con rodajas de fruta, sobre fondo amarillo." },
    imagenes: [
      { src: "", arte: "pulpa-etiqueta", alt: "Etiqueta amarilla de jugo de frutas con el nombre pulpa y rodajas de fruta, sobre fondo rosa." },
      { src: "", arte: "pulpa-post", alt: "Publicación verde con una rodaja rosa gigante y el texto Fría, fuerte, frutal." }
    ],
    servicios: ["Packaging", "Etiquetas", "Piezas para redes"]
  },
  {
    id: "lamina",
    nombre: "Revista de diseño y oficio",
    marca: "Lámina",
    categoria: "Editorial",
    descripcion: "Diseño editorial para una revista de diseño: tapa, doble página interior e índice. Composiciones geométricas con el rojo como único color de acento.",
    estado: "conceptual",
    tamano: "l",
    portada: true,
    paleta: ["#D6281C", "#F3EFE6"],
    imagen: { src: "", arte: "lamina-tapa", alt: "Tapa de la revista Lámina con un círculo rojo, un bloque negro y el título Color y oficio." },
    imagenes: [
      { src: "", arte: "lamina-doble", alt: "Doble página interior con un bloque rojo, un círculo negro, texto en columnas y una letra capital roja." },
      { src: "", arte: "lamina-indice", alt: "Página de índice con el número 04 en grande y una lista de cuatro notas con sus páginas." }
    ],
    servicios: ["Diseño editorial", "Maquetación", "Dirección de arte"]
  },
  {
    id: "kine",
    nombre: "Estudio de movimiento",
    marca: "Kiné",
    categoria: "Redes y promociones",
    descripcion: "Campaña para redes de un estudio de pilates: carrusel, historia y publicación suelta. Paleta suave y formas de arco que sugieren movimiento.",
    estado: "conceptual",
    tamano: "h",
    portada: true,
    paleta: ["#A9BFA0", "#3B2540"],
    imagen: { src: "", arte: "kine-carrusel", alt: "Carrusel de publicaciones de Kiné con el texto Respirá y arcos concéntricos, sobre fondo ciruela." },
    imagenes: [
      { src: "", arte: "kine-historia", alt: "Historia vertical que invita a una clase de prueba, con arcos de colores y un botón Reservá tu lugar." },
      { src: "", arte: "kine-post", alt: "Publicación rosada con el texto Moverse es el plan y círculos verdes." }
    ],
    servicios: ["Campaña para redes sociales", "Adaptación de formatos", "Dirección de arte"]
  },
  {
    id: "dos-ases",
    nombre: "Promociones de temporada",
    marca: "Ferretería Dos Ases",
    categoria: "Redes y promociones",
    descripcion: "Piezas promocionales para una ferretería: flyer, cartel de local y anuncio para redes. Estética de cartelería popular, con color plano, puntos de trama y mucha jerarquía.",
    estado: "conceptual",
    tamano: "h",
    paleta: ["#F7C948", "#1F4FA3"],
    imagen: { src: "", arte: "ases-flyer", alt: "Flyer amarillo con una estrella roja y el texto Ofertas de la semana, sobre fondo azul." },
    imagenes: [
      { src: "", arte: "ases-cartel", alt: "Cartel de local amarillo con el texto Todo para tu obra y dos cartas de as, sobre fondo rojo." },
      { src: "", arte: "ases-anuncio", alt: "Anuncio amarillo con un martillo y el texto Herramientas que duran." }
    ],
    servicios: ["Piezas promocionales", "Flyers y cartelería", "Anuncios"]
  }
];


/* =========================================================
   2 bis. MÁS DE NUESTROS TRABAJOS
   Muro de imágenes sueltas (logos, cartas, apps, otros).
   Una línea por imagen:
   nombre  nombre corto que se muestra debajo
   tipo    "Logos", "Cartas y menús", "Apps" u "Otros" (arma los filtros solo)
   src     ruta de la imagen, ej. "imagenes/mas-mi-logo.jpg"
   fondo   color de fondo de la imagen (para que se vea completa)
   cubrir  true = la imagen llena todo el recuadro (para diseños que ocupan toda la imagen)
   alt     descripción de lo que se ve
   Los más nuevos van arriba de todo.
   ========================================================= */

const TRABAJOS = [
  { nombre: "Provenzano Multiespacio, carta de cafetería", tipo: "Cartas y menús", src: "imagenes/mas-provenzano-cafeteria.jpg", fondo: "#482e1d", cubrir: true, alt: "Carta de cafetería de Provenzano Multiespacio sobre fondo marrón con granos de café, taza y molinillo, con la lista de cafés y los precios en blanco." },
  { nombre: "Provenzano Multiespacio, carta de minutas y sándwiches", tipo: "Cartas y menús", src: "imagenes/mas-provenzano-minutas.jpg", fondo: "#aa7847", cubrir: true, alt: "Carta de minutas y sándwiches de Provenzano Multiespacio sobre fondo color caramelo, con listas de minibaguetes, sándwiches calientes, tartas y empanadas." },
  { nombre: "Provenzano Multiespacio, carta de postres", tipo: "Cartas y menús", src: "imagenes/mas-provenzano-postres.jpg", fondo: "#472d1c", cubrir: true, alt: "Carta de postres de Provenzano Multiespacio sobre fondo marrón chocolate, con una bandeja de bombones y tortas en la parte inferior." },
  { nombre: "Provenzano Multiespacio, promos de desayuno y merienda", tipo: "Cartas y menús", src: "imagenes/mas-provenzano-promo-desayunos.jpg", fondo: "#ec7e05", alt: "Flyer vertical naranja de Promo Menús de Provenzano con cinco combos de café, tostados, licuados y medialunas dentro de círculos." },
  { nombre: "Provenzano Multiespacio, promos de picadas y pizzas", tipo: "Cartas y menús", src: "imagenes/mas-provenzano-promo-picadas.jpg", fondo: "#3a3100", alt: "Flyer vertical verde oliva de Promo Menús de Provenzano con tablas de fiambres, pizzas y cerveza dentro de círculos." },
  { nombre: "La Huella Restaurant, menú ejecutivo", tipo: "Cartas y menús", src: "imagenes/mas-la-huella-menu.jpg", fondo: "#1b2423", cubrir: true, alt: "Menú ejecutivo de La Huella Restaurant en dos paneles oscuros sobre fotos de comida, con letras doradas e ilustración de una cloche." },
  { nombre: "Panadería Santa Ana", tipo: "Logos", src: "imagenes/mas-panaderia-santa-ana.jpg", fondo: "#ffca6f", alt: "Logotipo de Panadería Santa Ana: nombre en letras blancas sobre una banda marrón, con una corona de hojas doradas, panes y la frase atendido por sus propios dueños." },
  { nombre: "Bassdetail Auto Estética", tipo: "Logos", src: "imagenes/mas-bassdetail.jpg", fondo: "#000000", alt: "Logotipo de Bassdetail Auto Estética: un auto clásico rojo sobre un óvalo dorado con el nombre en letras blancas." },
  { nombre: "Eterna Juventud", tipo: "Logos", src: "imagenes/mas-eterna-juventud.jpg", fondo: "#ffffff", alt: "Logotipo de Eterna Juventud, indumentaria para ellas: ilustración retro de una mujer con anteojos dentro de un sello violeta con cinta." },
  { nombre: "Pipa Romero, guía de pesca", tipo: "Logos", src: "imagenes/mas-pipa-romero.jpg", fondo: "#ffffff", alt: "Logotipo de Pipa Romero, guía de pesca: dos peces que forman un círculo en tonos verde oliva y amarillo, con el nombre al costado." },
  { nombre: "Morbelli & Morbelli Abogados", tipo: "Logos", src: "imagenes/mas-morbelli-abogados.jpg", fondo: "#1b1b1b", alt: "Logotipo de Morbelli y Morbelli Abogados con letras metalizadas sobre fondo negro texturado y una flecha blanca ascendente." },
  { nombre: "NAP Estudio", tipo: "Logos", src: "imagenes/mas-nap-estudio.jpg", fondo: "#ffffff", alt: "Logotipo de NAP Estudio: una claqueta de cine negra con las letras NAP en naranja y marcos de encuadre." }
];

/* =========================================================
   3. LÓGICA
   ========================================================= */

function iniciar() {
  "use strict";

  var raiz = document.documentElement;
  raiz.classList.add("js");

  var $ = function (sel, ctx) { return (ctx || document).querySelector(sel); };
  var $$ = function (sel, ctx) { return Array.prototype.slice.call((ctx || document).querySelectorAll(sel)); };

  function esc(valor) {
    return String(valor == null ? "" : valor).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  var sinMovimiento = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var punteroFino = window.matchMedia && window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  var hayObservador = "IntersectionObserver" in window;
  var conEfectos = !sinMovimiento && hayObservador;


  /* ----- WhatsApp ----- */
  function numeroConfigurado() {
    return /^\d{8,15}$/.test(WHATSAPP_NUMBER);
  }

  function urlWhatsApp(texto) {
    return "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(texto);
  }

  function prepararEnlaceWa(enlace, texto) {
    if (!numeroConfigurado()) { return; }
    enlace.setAttribute("href", urlWhatsApp(texto));
    enlace.setAttribute("target", "_blank");
    enlace.setAttribute("rel", "noopener noreferrer");
  }

  var avisoWa = $("#wa-aviso");
  function mostrarAvisoWa() {
    if (avisoWa && typeof avisoWa.showModal === "function") {
      if (!avisoWa.open) { avisoWa.showModal(); }
    } else {
      window.alert("El contacto por WhatsApp todavía no está disponible.");
    }
  }
  var avisoCerrar = $("#wa-aviso-cerrar");
  if (avisoCerrar && avisoWa) {
    avisoCerrar.addEventListener("click", function () { avisoWa.close(); });
  }

  $$("[data-wa]").forEach(function (enlace) {
    var clave = enlace.getAttribute("data-wa");
    prepararEnlaceWa(enlace, WHATSAPP_MESSAGES[clave] || WHATSAPP_MESSAGES.general);
  });

  /* Si el número no está configurado, ningún botón de WhatsApp abre un contacto inexistente */
  document.addEventListener("click", function (evento) {
    var enlace = evento.target.closest("[data-wa], [data-wa-dinamico]");
    if (enlace && !numeroConfigurado()) {
      evento.preventDefault();
      mostrarAvisoWa();
    }
  });

  /* ----- Contacto opcional (solo si está configurado) ----- */
  var listaContacto = $("#contacto-datos");
  if (listaContacto) {
    if (/^[^\s@<>"']+@[^\s@<>"']+\.[^\s@<>"']+$/.test(CONTACT.email)) {
      var liMail = document.createElement("li");
      var aMail = document.createElement("a");
      aMail.href = "mailto:" + CONTACT.email;
      aMail.textContent = CONTACT.email;
      liMail.appendChild(aMail);
      listaContacto.appendChild(liMail);
    }
    if (/^[A-Za-z0-9._]{1,30}$/.test(CONTACT.instagram)) {
      var liIg = document.createElement("li");
      var aIg = document.createElement("a");
      aIg.href = "https://www.instagram.com/" + CONTACT.instagram + "/";
      aIg.target = "_blank";
      aIg.rel = "noopener noreferrer";
      aIg.textContent = "Instagram @" + CONTACT.instagram;
      liIg.appendChild(aIg);
      listaContacto.appendChild(liIg);
    }
  }


  /* ----- Menú: móvil + desplegable de servicios ----- */
  var botonMenu = $(".menu-btn");
  var menu = $("#menu");
  var botonMega = $(".nav-btn");
  var mega = $("#mega");

  function ponerMega(abierto) {
    if (!botonMega || !mega) { return; }
    mega.classList.toggle("abierto", abierto);
    botonMega.setAttribute("aria-expanded", abierto ? "true" : "false");
  }
  function ponerMenu(abierto) {
    if (!botonMenu || !menu) { return; }
    menu.classList.toggle("abierto", abierto);
    botonMenu.setAttribute("aria-expanded", abierto ? "true" : "false");
    botonMenu.setAttribute("aria-label", abierto ? "Cerrar menú" : "Abrir menú");
    if (!abierto) { ponerMega(false); }
  }
  if (botonMenu && menu) {
    botonMenu.addEventListener("click", function () {
      ponerMenu(botonMenu.getAttribute("aria-expanded") !== "true");
    });
    menu.addEventListener("click", function (e) {
      if (e.target.closest("a")) { ponerMenu(false); ponerMega(false); }
    });
    window.addEventListener("resize", function () { if (window.innerWidth >= 1100) { ponerMenu(false); } });
  }
  if (botonMega && mega) {
    var abiertoPorHover = false;
    botonMega.addEventListener("click", function () {
      if (abiertoPorHover) { abiertoPorHover = false; return; } /* ya se abrió al pasar el mouse: el clic no lo cierra */
      ponerMega(botonMega.getAttribute("aria-expanded") !== "true");
    });
    /* En escritorio con mouse también se abre al pasar por encima */
    var contMega = botonMega.closest(".nav-mega");
    var temporizador = null;
    if (contMega && punteroFino) {
      contMega.addEventListener("pointerenter", function () {
        if (window.innerWidth < 1100) { return; }
        clearTimeout(temporizador);
        if (botonMega.getAttribute("aria-expanded") !== "true") { abiertoPorHover = true; }
        ponerMega(true);
      });
      contMega.addEventListener("pointerleave", function () {
        if (window.innerWidth < 1100) { return; }
        temporizador = setTimeout(function () { abiertoPorHover = false; ponerMega(false); }, 220);
      });
    }
    document.addEventListener("click", function (e) {
      if (mega.classList.contains("abierto") && !e.target.closest(".nav-mega")) { ponerMega(false); }
    });
  }
  document.addEventListener("keydown", function (e) {
    if (e.key !== "Escape") { return; }
    if (mega && mega.classList.contains("abierto")) { ponerMega(false); if (botonMega) { botonMega.focus(); } return; }
    if (menu && menu.classList.contains("abierto")) { ponerMenu(false); if (botonMenu) { botonMenu.focus(); } }
  });


  /* ----- Botón flotante de WhatsApp: aparece al pasar la portada y se oculta en el cierre ----- */
  var flotante = $("#flotante");
  var portada = $("#inicio");
  var cierre = $("#contacto");
  if (flotante && portada && hayObservador) {
    var enPortada = true;
    var enCierre = false;
    var actualizarFlotante = function () { flotante.classList.toggle("visible", !enPortada && !enCierre); };
    new IntersectionObserver(function (e) { enPortada = e[0].isIntersecting; actualizarFlotante(); }).observe(portada);
    if (cierre) {
      new IntersectionObserver(function (e) { enCierre = e[0].isIntersecting; actualizarFlotante(); }, { threshold: 0.25 }).observe(cierre);
    }
  } else if (flotante) {
    flotante.classList.add("visible");
  }

  /* ----- Año del pie ----- */
  var anio = $("#anio");
  if (anio) { anio.textContent = String(new Date().getFullYear()); }


  /* ----- Encabezado, barra de progreso, sección activa y palabras gigantes (un solo manejador de scroll) ----- */
  var cabecera = $(".cab");
  var progreso = $("#progreso");
  var fantasmas = $$(".fantasma[data-par]");
  var enlacesNav = $$(".nav-capsula a[href^='#']").filter(function (a) { return !a.closest(".mega"); });
  var seccionesNav = enlacesNav.map(function (a) { return $(a.getAttribute("href")); });
  var seccionServicios = $("#servicios");
  var esperando = false;

  function alScroll() {
    esperando = false;
    var y = window.scrollY;
    var alto = window.innerHeight;
    if (cabecera) { cabecera.classList.toggle("con-fondo", y > 12); }
    if (progreso) {
      var total = raiz.scrollHeight - alto;
      progreso.style.setProperty("--p", total > 0 ? Math.min(1, y / total).toFixed(4) : 0);
    }

    /* sección activa en el menú */
    var activa = null;
    var linea = 140;
    seccionesNav.forEach(function (sec, i) {
      if (sec && sec.getBoundingClientRect().top <= linea) { activa = enlacesNav[i]; }
    });
    var servActivo = false;
    if (seccionServicios) {
      var r = seccionServicios.getBoundingClientRect();
      servActivo = r.top <= linea && r.bottom > linea;
    }
    enlacesNav.forEach(function (a) {
      var esActiva = a === activa;
      a.classList.toggle("activo", esActiva);
      if (esActiva) { a.setAttribute("aria-current", "location"); } else { a.removeAttribute("aria-current"); }
    });
    if (botonMega) { botonMega.classList.toggle("activo", servActivo); }

    /* palabras gigantes: se deslizan despacio al bajar */
    if (conEfectos) {
      fantasmas.forEach(function (f) {
        var caja = f.parentElement.getBoundingClientRect();
        if (caja.bottom < -200 || caja.top > alto + 200) { return; }
        var centro = (caja.top + caja.height / 2 - alto / 2) / alto; /* -1..1 aprox. */
        f.style.setProperty("--fx", (centro * -140).toFixed(1) + "px");
      });
    }
  }
  function pedirScroll() {
    if (!esperando) { esperando = true; window.requestAnimationFrame(alScroll); }
  }
  window.addEventListener("scroll", pedirScroll, { passive: true });
  window.addEventListener("resize", pedirScroll);
  alScroll();


  /* ----- Cinta de capacidades en movimiento ----- */
  var tira = $("#tira");
  if (tira && !sinMovimiento) {
    var pista = $(".tira-pista", tira);
    var lista = $(".tira-lista", tira);
    if (pista && lista) {
      var copia = lista.cloneNode(true);
      copia.setAttribute("aria-hidden", "true");
      $$("a", copia).forEach(function (a) { a.setAttribute("tabindex", "-1"); });
      pista.appendChild(copia);
      tira.classList.add("marquesina");
    }
  }


  /* ----- Efectos de aparición al hacer scroll ----- */
  function partirPalabras(el) {
    var n = 0;
    (function recorrer(nodo) {
      Array.prototype.slice.call(nodo.childNodes).forEach(function (hijo) {
        if (hijo.nodeType === 3) {
          var partes = hijo.nodeValue.split(/(\s+)/);
          var frag = document.createDocumentFragment();
          partes.forEach(function (t) {
            if (!t) { return; }
            if (/^\s+$/.test(t)) { frag.appendChild(document.createTextNode(" ")); return; }
            var w = document.createElement("span");
            w.className = "w";
            var s = document.createElement("span");
            s.textContent = t;
            s.style.setProperty("--k", n);
            n += 1;
            w.appendChild(s);
            frag.appendChild(w);
          });
          nodo.replaceChild(frag, hijo);
        } else if (hijo.nodeType === 1) {
          recorrer(hijo);
        }
      });
    })(el);
  }

  var observador = null;
  if (conEfectos) {
    raiz.classList.add("anim");
    observador = new IntersectionObserver(function (entradas) {
      entradas.forEach(function (en) {
        if (!en.isIntersecting) { return; }
        var el = en.target;
        observador.unobserve(el);
        el.classList.add("vis");
        /* Terminada la entrada se suelta la clase, así los efectos de hover no heredan el retardo */
        setTimeout(function () { el.classList.remove("rv"); el.classList.remove("vis"); }, 2000);
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -6% 0px" });

    $$(".titan").forEach(function (t) {
      partirPalabras(t);
      t.classList.add("vis-t");
    });
    /* Los títulos usan su propia clase de revelado (sin quitarla, para no retroceder) */
    var observadorTitulos = new IntersectionObserver(function (entradas) {
      entradas.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add("vis"); observadorTitulos.unobserve(en.target); }
      });
    }, { threshold: 0.3 });
    $$(".titan").forEach(function (t) { observadorTitulos.observe(t); });
  }

  function revelar(elementos, base) {
    if (!observador) { return; }
    elementos.forEach(function (el, i) {
      el.classList.add("rv");
      el.style.setProperty("--d", ((base || 0) + i * 0.08).toFixed(2) + "s");
      observador.observe(el);
    });
  }

  if (conEfectos) {
    $$(".sec-cab > p, .estudio-grid > div:last-child .manifiesto, .serv-pie, .filtros, .pack-texto > :not(.titan):not(.eyebrow), .local-texto > *, .contacto-lado > *, .contacto .btn--gigante, .contacto-sub").forEach(function (el) { revelar([el], 0.05); });
    ["hechos", "serv-grid", "pasos", "difs", "ficha"].forEach(function (clase) {
      $$("." + clase).forEach(function (cont) {
        var hijos = Array.prototype.slice.call(cont.children);
        hijos.forEach(function (h, i) {
          h.classList.add("rv");
          h.style.setProperty("--d", ((i % 3) * 0.1).toFixed(2) + "s");
          observador.observe(h);
        });
      });
    });
    revelar($$(".pack-card"), 0.1);
    revelar($$(".faq details"), 0);
  }


  /* ----- Brillo que sigue al mouse, botones magnéticos y parallax (solo con mouse) ----- */
  if (punteroFino && !sinMovimiento) {
    var hero = $(".hero");
    var colla = $("#collage");
    if (hero) {
      hero.addEventListener("pointermove", function (e) {
        var r = hero.getBoundingClientRect();
        hero.style.setProperty("--mx", (e.clientX - r.left) + "px");
        hero.style.setProperty("--my", (e.clientY - r.top) + "px");
        if (colla) {
          colla.style.setProperty("--px", (((e.clientX - r.left) / r.width) * 2 - 1).toFixed(3));
          colla.style.setProperty("--py", (((e.clientY - r.top) / r.height) * 2 - 1).toFixed(3));
        }
      });
    }

    document.addEventListener("pointermove", function (e) {
      var luz = e.target.closest && e.target.closest(".paso, .hecho, .pack-card");
      if (luz) {
        var r = luz.getBoundingClientRect();
        luz.style.setProperty("--mx", (e.clientX - r.left) + "px");
        luz.style.setProperty("--my", (e.clientY - r.top) + "px");
      }
      var arte = e.target.closest && e.target.closest(".tile");
      if (arte) {
        var a = $(".tile-arte", arte);
        var rr = a.getBoundingClientRect();
        var x = (e.clientX - rr.left) / rr.width;
        var y = (e.clientY - rr.top) / rr.height;
        a.style.setProperty("--ry", ((x - 0.5) * 8).toFixed(2) + "deg");
        a.style.setProperty("--rx", ((0.5 - y) * 8).toFixed(2) + "deg");
        a.style.setProperty("--mx", (x * 100).toFixed(1) + "%");
        a.style.setProperty("--my", (y * 100).toFixed(1) + "%");
      }
    }, { passive: true });
    document.addEventListener("pointerout", function (e) {
      var tile = e.target.closest && e.target.closest(".tile");
      if (tile && !tile.contains(e.relatedTarget)) {
        var a = $(".tile-arte", tile);
        a.style.setProperty("--rx", "0deg");
        a.style.setProperty("--ry", "0deg");
      }
      var b = e.target.closest && e.target.closest(".magnetico");
      if (b && !b.contains(e.relatedTarget)) {
        b.style.setProperty("--bx", "0px");
        b.style.setProperty("--by", "0px");
      }
    });

    $$(".acciones .btn, .pack-card .btn").forEach(function (b) {
      b.classList.add("magnetico");
      b.addEventListener("pointermove", function (e) {
        var r = b.getBoundingClientRect();
        b.style.setProperty("--bx", ((e.clientX - (r.left + r.width / 2)) * 0.22).toFixed(1) + "px");
        b.style.setProperty("--by", ((e.clientY - (r.top + r.height / 2)) * 0.32).toFixed(1) + "px");
      });
    });
  }


  /* ----- Imágenes: archivo real o dibujo de demostración ----- */
  var contadorId = 0;
  function nuevoId() { contadorId += 1; return "u" + contadorId + "-"; }

  function medio(item, decorativo) {
    if (!item) { return ""; }
    if (item.src) {
      return '<img src="' + esc(item.src) + '" alt="' + (decorativo ? "" : esc(item.alt)) + '" loading="lazy" decoding="async">';
    }
    var dibujo = (typeof ARTE_DEMO !== "undefined" && ARTE_DEMO[item.arte]) ? ARTE_DEMO[item.arte] : null;
    if (!dibujo) { return ""; }
    var aria = decorativo ? 'aria-hidden="true"' : 'role="img" aria-label="' + esc(item.alt) + '"';
    return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 640" preserveAspectRatio="xMidYMid slice" ' + aria + ' focusable="false">' + dibujo(nuevoId()) + "</svg>";
  }

  if (!Array.isArray(PROYECTOS) || PROYECTOS.length === 0) { return; }

  /* ----- Collage de piezas destacadas del hero ----- */
  var collage = $("#collage");
  if (collage) {
    var destacados = PROYECTOS.map(function (p, i) { return { p: p, i: i }; }).filter(function (x) { return x.p.portada; }).slice(0, 3);
    if (destacados.length === 0) { destacados = PROYECTOS.slice(0, 3).map(function (p, i) { return { p: p, i: i }; }); }
    collage.insertAdjacentHTML("afterbegin", destacados.map(function (x, n) {
      return '<button class="pieza" type="button" data-i="' + x.i + '" aria-haspopup="dialog" style="--i:' + n + '" aria-label="' + esc("Ver proyecto " + x.p.marca) + '">' +
        '<span class="pieza-arte">' + medio(x.p.imagen, true) + "</span>" +
        '<span class="pieza-pie"><span class="pieza-marca">' + esc(x.p.marca) + "</span>" +
        (x.p.estado === "conceptual" ? '<span class="pieza-tag">Proyecto conceptual</span>' : "") + "</span></button>";
    }).join(""));
  }

  /* ----- Filtros y grilla ----- */
  var grilla = $("#grilla");
  var contFiltros = $("#filtros");
  var estadoFiltro = $("#filtro-estado");
  var filtroActual = "Todos";

  function categoriasUnicas() {
    var vistas = [];
    PROYECTOS.forEach(function (p) { if (vistas.indexOf(p.categoria) === -1) { vistas.push(p.categoria); } });
    return vistas;
  }

  function htmlTile(p, indice) {
    return '<button class="tile" type="button" data-i="' + indice + '" aria-haspopup="dialog" aria-label="' + esc("Ver proyecto: " + p.nombre + ", " + p.marca) + '">' +
      '<span class="tile-arte">' + medio(p.imagen, true) + "</span>" +
      '<span class="tile-pie"><span class="tile-marca">' + esc(p.marca) + "</span>" +
      '<span class="tile-cat">' + esc(p.categoria) + "</span>" +
      (p.estado === "conceptual" ? '<span class="tile-tag">Proyecto conceptual</span>' : "") +
      (p.descripcion ? '<span class="tile-desc">' + esc(p.descripcion) + "</span>" : "") +
      "</span></button>";
  }

  function pintarGrilla() {
    if (!grilla) { return; }
    var lista = PROYECTOS.map(function (p, i) { return { p: p, i: i }; }).filter(function (x) {
      return filtroActual === "Todos" || x.p.categoria === filtroActual;
    });
    grilla.innerHTML = lista.map(function (x) { return htmlTile(x.p, x.i); }).join("");
    revelar($$(".tile", grilla), 0);
    if (estadoFiltro) {
      estadoFiltro.textContent = filtroActual === "Todos"
        ? "Mostrando los " + lista.length + " proyectos."
        : "Mostrando " + lista.length + (lista.length === 1 ? " proyecto" : " proyectos") + " de " + filtroActual + ".";
    }
  }

  if (contFiltros) {
    var nombres = ["Todos"].concat(categoriasUnicas());
    contFiltros.innerHTML = nombres.map(function (n) {
      return '<button class="filtro" type="button" data-filtro="' + esc(n) + '" aria-pressed="' + (n === filtroActual ? "true" : "false") + '">' + esc(n) + "</button>";
    }).join("");
    contFiltros.addEventListener("click", function (e) {
      var b = e.target.closest(".filtro");
      if (!b) { return; }
      filtroActual = b.getAttribute("data-filtro");
      $$(".filtro", contFiltros).forEach(function (x) {
        x.setAttribute("aria-pressed", x === b ? "true" : "false");
      });
      pintarGrilla();
    });
  }
  pintarGrilla();

  /* ----- Vista detallada (modal accesible) ----- */
  var modal = $("#modal");
  var estado = { i: 0, m: 0 };
  var refs = modal ? {
    escena: $("#modal-escena"), minis: $("#modal-miniaturas"), estado: $("#modal-estado"), marca: $("#modal-marca"),
    titulo: $("#modal-titulo"), desc: $("#modal-desc"), nota: $("#modal-nota"), cat: $("#modal-cat"), serv: $("#modal-serv"),
    wa: $("#modal-wa"), prev: $("#modal-prev"), next: $("#modal-next"), pos: $("#modal-pos"), cerrar: $("#modal-cerrar")
  } : null;

  function listaMedios(p) {
    return [p.imagen].concat(Array.isArray(p.imagenes) ? p.imagenes : []).filter(Boolean);
  }

  function pintarMedio() {
    var p = PROYECTOS[estado.i];
    var medios = listaMedios(p);
    refs.escena.innerHTML = medio(medios[estado.m], false);
    $$(".mini", refs.minis).forEach(function (b, idx) {
      b.setAttribute("aria-pressed", idx === estado.m ? "true" : "false");
    });
  }

  function pintarModal() {
    var p = PROYECTOS[estado.i];
    var medios = listaMedios(p);
    var conceptual = p.estado === "conceptual";
    refs.estado.textContent = conceptual ? "Proyecto conceptual" : "Proyecto real";
    refs.marca.textContent = p.marca;
    refs.titulo.textContent = p.nombre;
    refs.desc.textContent = p.descripcion;
    refs.nota.textContent = conceptual ? "Marca ficticia creada para mostrar el estilo de trabajo de Creatreebu. No es un cliente real." : "";
    refs.nota.hidden = !conceptual;
    refs.cat.textContent = p.categoria;
    refs.serv.textContent = (p.servicios || []).join(", ");
    refs.pos.textContent = (estado.i + 1) + " de " + PROYECTOS.length;
    refs.prev.hidden = refs.next.hidden = PROYECTOS.length < 2;
    refs.minis.hidden = medios.length < 2;
    refs.minis.innerHTML = medios.map(function (m, idx) {
      return '<button class="mini" type="button" data-m="' + idx + '" aria-pressed="false" aria-label="' + esc("Ver imagen " + (idx + 1) + " de " + medios.length + ": " + m.alt) + '">' + medio(m, true) + "</button>";
    }).join("");
    var textoWa = WHATSAPP_MESSAGES.proyecto.replace("{proyecto}", p.marca);
    refs.wa.setAttribute("href", "#contacto");
    refs.wa.removeAttribute("target");
    prepararEnlaceWa(refs.wa, textoWa);
    pintarMedio();
  }

  function abrirModal(indice) {
    if (!modal || !PROYECTOS[indice]) { return; }
    estado.i = indice;
    estado.m = 0;
    pintarModal();
    if (!modal.open) {
      if (typeof modal.showModal === "function") { modal.showModal(); } else { modal.setAttribute("open", ""); }
      raiz.classList.add("modal-abierto");
      modal.scrollTop = 0;
    }
  }

  function moverModal(paso) {
    estado.i = (estado.i + paso + PROYECTOS.length) % PROYECTOS.length;
    estado.m = 0;
    pintarModal();
    modal.scrollTop = 0;
  }

  function alHacerClicEnProyecto(e) {
    var b = e.target.closest("[data-i]");
    if (b) { abrirModal(parseInt(b.getAttribute("data-i"), 10)); }
  }
  if (grilla) { grilla.addEventListener("click", alHacerClicEnProyecto); }
  if (collage) { collage.addEventListener("click", alHacerClicEnProyecto); }

  if (modal && refs) {
    refs.cerrar.addEventListener("click", function () { modal.close(); });
    refs.prev.addEventListener("click", function () { moverModal(-1); });
    refs.next.addEventListener("click", function () { moverModal(1); });
    refs.minis.addEventListener("click", function (e) {
      var b = e.target.closest(".mini");
      if (b) { estado.m = parseInt(b.getAttribute("data-m"), 10); pintarMedio(); }
    });
    /* Clic fuera del contenido cierra la vista */
    modal.addEventListener("click", function (e) { if (e.target === modal) { modal.close(); } });
    modal.addEventListener("keydown", function (e) {
      if (e.key === "ArrowLeft") { moverModal(-1); }
      if (e.key === "ArrowRight") { moverModal(1); }
    });
    modal.addEventListener("close", function () { raiz.classList.remove("modal-abierto"); });
  }

  /* ----- Más de nuestros trabajos: muro de imágenes con filtros, "Ver más" y visor ----- */
  var MAS_INICIAL = 12;
  var muro = $("#mas-grid");
  if (muro && Array.isArray(TRABAJOS) && TRABAJOS.length) {
    var masFiltros = $("#mas-filtros");
    var masEstado = $("#mas-estado");
    var masBoton = $("#mas-boton");
    var masTipo = "Todos";
    var masVisibles = MAS_INICIAL;

    var masLista = function () {
      return TRABAJOS.map(function (t, i) { return { t: t, i: i }; }).filter(function (x) {
        return masTipo === "Todos" || x.t.tipo === masTipo;
      });
    };

    var pintarMas = function () {
      var lista = masLista();
      var mostrar = lista.slice(0, masVisibles);
      muro.innerHTML = mostrar.map(function (x) {
        return '<button class="mas-item" type="button" data-v="' + x.i + '" aria-haspopup="dialog" aria-label="' + esc("Ver ampliado: " + x.t.nombre) + '">' +
          '<span class="mas-img' + (x.t.cubrir ? " mas-img--cubrir" : "") + '" style="--fondo:' + esc(x.t.fondo || "#fff") + '"><img src="' + esc(x.t.src) + '" alt="" loading="lazy" decoding="async"></span>' +
          '<span class="mas-nombre">' + esc(x.t.nombre) + '</span>' +
          '<span class="mas-tipo">' + esc(x.t.tipo) + "</span></button>";
      }).join("");
      revelar($$(".mas-item", muro), 0);
      var restantes = lista.length - mostrar.length;
      if (masBoton) {
        masBoton.hidden = restantes <= 0;
        masBoton.textContent = "Ver más trabajos (" + restantes + ")";
      }
      if (masEstado) {
        masEstado.textContent = "Mostrando " + mostrar.length + " de " + lista.length + (masTipo === "Todos" ? " trabajos." : " trabajos de " + masTipo + ".");
      }
    };

    if (masFiltros) {
      var tipos = ["Todos"];
      TRABAJOS.forEach(function (t) { if (tipos.indexOf(t.tipo) === -1) { tipos.push(t.tipo); } });
      masFiltros.hidden = tipos.length < 3;
      masFiltros.innerHTML = tipos.map(function (n) {
        return '<button class="filtro" type="button" data-tipo="' + esc(n) + '" aria-pressed="' + (n === masTipo ? "true" : "false") + '">' + esc(n) + "</button>";
      }).join("");
      masFiltros.addEventListener("click", function (e) {
        var b = e.target.closest(".filtro");
        if (!b) { return; }
        masTipo = b.getAttribute("data-tipo");
        masVisibles = MAS_INICIAL;
        $$(".filtro", masFiltros).forEach(function (x) { x.setAttribute("aria-pressed", x === b ? "true" : "false"); });
        pintarMas();
      });
    }
    if (masBoton) {
      masBoton.addEventListener("click", function () {
        var antes = masVisibles;
        masVisibles += MAS_INICIAL;
        pintarMas();
        var nuevo = $$(".mas-item", muro)[antes];
        if (nuevo) { nuevo.focus(); }
      });
    }
    pintarMas();

    /* Visor ampliado */
    var visor = $("#visor");
    var vi = { pos: 0, lista: [] };
    if (visor) {
      var vImg = $("#visor-img");
      var vFondo = $("#visor-escena");
      var vNombre = $("#visor-nombre");
      var vTipo = $("#visor-tipo");
      var vPos = $("#visor-pos");
      var vWa = $("#visor-wa");
      var pintarVisor = function () {
        var t = TRABAJOS[vi.lista[vi.pos]];
        vImg.src = t.src;
        vImg.alt = t.alt || t.nombre;
        vFondo.style.background = t.fondo || "#fff";
        vNombre.textContent = t.nombre;
        vTipo.textContent = t.tipo;
        vPos.textContent = (vi.pos + 1) + " de " + vi.lista.length;
        vWa.setAttribute("href", "#contacto");
        vWa.removeAttribute("target");
        prepararEnlaceWa(vWa, WHATSAPP_MESSAGES.proyecto.replace("{proyecto}", t.nombre));
      };
      var moverVisor = function (paso) {
        vi.pos = (vi.pos + paso + vi.lista.length) % vi.lista.length;
        pintarVisor();
      };
      muro.addEventListener("click", function (e) {
        var b = e.target.closest("[data-v]");
        if (!b) { return; }
        vi.lista = masLista().map(function (x) { return x.i; });
        vi.pos = Math.max(0, vi.lista.indexOf(parseInt(b.getAttribute("data-v"), 10)));
        pintarVisor();
        if (typeof visor.showModal === "function") { visor.showModal(); } else { visor.setAttribute("open", ""); }
        raiz.classList.add("modal-abierto");
      });
      $("#visor-cerrar").addEventListener("click", function () { visor.close(); });
      $("#visor-prev").addEventListener("click", function () { moverVisor(-1); });
      $("#visor-next").addEventListener("click", function () { moverVisor(1); });
      visor.addEventListener("click", function (e) { if (e.target === visor) { visor.close(); } });
      visor.addEventListener("keydown", function (e) {
        if (e.key === "ArrowLeft") { moverVisor(-1); }
        if (e.key === "ArrowRight") { moverVisor(1); }
      });
      visor.addEventListener("close", function () { raiz.classList.remove("modal-abierto"); });
    }
  }
}

/* =========================================================
   4. ARTE DE DEMOSTRACIÓN
   Dibujos propios en SVG de los proyectos conceptuales.
   Cuando reemplaces todos los proyectos por imágenes reales
   (campo "src"), podés borrar desde acá hasta
   "FIN DEL ARTE DE DEMOSTRACIÓN".
   ========================================================= */

var SYS = "system-ui,-apple-system,'Segoe UI',Roboto,Arial,sans-serif";
var SERIF = "Georgia,'Times New Roman',serif";

function rayos(cx, cy, r1, r2, n, color, ancho) {
  var s = "";
  for (var i = 0; i < n; i++) {
    var a = (Math.PI * 2 * i) / n;
    s += '<line x1="' + (cx + Math.cos(a) * r1).toFixed(1) + '" y1="' + (cy + Math.sin(a) * r1).toFixed(1) +
      '" x2="' + (cx + Math.cos(a) * r2).toFixed(1) + '" y2="' + (cy + Math.sin(a) * r2).toFixed(1) +
      '" stroke="' + color + '" stroke-width="' + ancho + '" stroke-linecap="round"/>';
  }
  return s;
}

function ola(y, amp, color, ancho, x0) {
  var d = "M" + (x0 === undefined ? -50 : x0) + " " + y + " q50 " + (-amp) + " 100 0";
  for (var i = 0; i < 9; i++) { d += " t100 0"; }
  return '<path d="' + d + '" fill="none" stroke="' + color + '" stroke-width="' + ancho + '" stroke-linecap="round"/>';
}

function olaRelleno(y, amp, color) {
  var d = "M-50 " + y + " q50 " + (-amp) + " 100 0";
  for (var i = 0; i < 9; i++) { d += " t100 0"; }
  return '<path d="' + d + ' L950 700 L-50 700Z" fill="' + color + '"/>';
}

function lineas(x, y, ancho, n, paso, color, alto) {
  var proporciones = [1, 0.92, 0.98, 0.85, 0.95, 0.6, 0.9];
  var s = "";
  for (var i = 0; i < n; i++) {
    s += '<rect x="' + x + '" y="' + (y + i * paso) + '" width="' + Math.round(ancho * proporciones[i % proporciones.length]) +
      '" height="' + (alto || 5) + '" rx="2" fill="' + color + '"/>';
  }
  return s;
}

function puntos(x, y, cols, filas, paso, r, color) {
  var s = "";
  for (var j = 0; j < filas; j++) {
    for (var i = 0; i < cols; i++) {
      s += '<circle cx="' + (x + i * paso + (j % 2 ? paso / 2 : 0)) + '" cy="' + (y + j * paso) + '" r="' + r + '" fill="' + color + '"/>';
    }
  }
  return s;
}

function estrella(cx, cy, r1, r2, n, color) {
  var pts = [];
  for (var i = 0; i < n * 2; i++) {
    var r = i % 2 ? r1 : r2;
    var a = (Math.PI * i) / n - Math.PI / 2;
    pts.push((cx + Math.cos(a) * r).toFixed(1) + "," + (cy + Math.sin(a) * r).toFixed(1));
  }
  return '<polygon points="' + pts.join(" ") + '" fill="' + color + '"/>';
}

function rodaja(cx, cy, r, corteza, pulpa, gajos) {
  return '<circle cx="' + cx + '" cy="' + cy + '" r="' + r + '" fill="' + corteza + '"/>' +
    '<circle cx="' + cx + '" cy="' + cy + '" r="' + (r * 0.86).toFixed(1) + '" fill="' + pulpa + '"/>' +
    rayos(cx, cy, r * 0.12, r * 0.78, 8, gajos, Math.max(2, r * 0.05).toFixed(1)) +
    '<circle cx="' + cx + '" cy="' + cy + '" r="' + (r * 0.1).toFixed(1) + '" fill="' + gajos + '"/>';
}

var ARTE_DEMO = {

  /* ---------- Almacén Brasa: packaging, café ---------- */
  "brasa-bolsa": function () {
    return '<rect width="800" height="640" fill="#E4572E"/>' +
      '<circle cx="400" cy="340" r="290" fill="#D9461F"/><circle cx="400" cy="340" r="200" fill="#CC3B17"/>' +
      '<ellipse cx="400" cy="598" rx="170" ry="16" fill="#9E2A0E" opacity=".5"/>' +
      '<rect x="250" y="130" width="300" height="460" rx="18" fill="#1C1612"/>' +
      '<rect x="250" y="104" width="300" height="48" rx="8" fill="#2B2119"/>' +
      '<line x1="262" y1="118" x2="538" y2="118" stroke="#3B2E24" stroke-width="3"/>' +
      '<line x1="262" y1="132" x2="538" y2="132" stroke="#3B2E24" stroke-width="3"/>' +
      '<circle cx="400" cy="190" r="11" fill="#3B2E24"/>' +
      '<rect x="282" y="226" width="236" height="290" rx="8" fill="#F6E9D4"/>' +
      '<text x="400" y="312" text-anchor="middle" font-family="' + SYS + '" font-size="68" font-weight="900" letter-spacing="-3" fill="#1C1612">brasa</text>' +
      '<line x1="318" y1="338" x2="482" y2="338" stroke="#1C1612" stroke-width="3"/>' +
      '<text x="400" y="368" text-anchor="middle" font-family="' + SYS + '" font-size="18" font-weight="600" fill="#1C1612">Café de tostado lento</text>' +
      '<circle cx="400" cy="442" r="40" fill="#E4572E"/><circle cx="400" cy="442" r="24" fill="#F6E9D4"/><circle cx="400" cy="442" r="10" fill="#1C1612"/>' +
      '<text x="400" y="504" text-anchor="middle" font-family="' + SYS + '" font-size="15" font-weight="700" fill="#1C1612">250 g</text>';
  },

  "brasa-etiqueta": function () {
    return '<rect width="800" height="640" fill="#D9B88F"/>' +
      '<circle cx="400" cy="320" r="236" fill="#F6E9D4"/>' +
      '<circle cx="400" cy="320" r="216" fill="none" stroke="#1C1612" stroke-width="3"/>' +
      rayos(400, 320, 156, 196, 40, "#1C1612", 3) +
      '<text x="400" y="262" text-anchor="middle" font-family="' + SYS + '" font-size="22" font-weight="700" fill="#1C1612">Lote</text>' +
      '<text x="400" y="384" text-anchor="middle" font-family="' + SYS + '" font-size="140" font-weight="900" letter-spacing="-6" fill="#E4572E">07</text>' +
      '<text x="400" y="426" text-anchor="middle" font-family="' + SYS + '" font-size="22" font-weight="700" fill="#1C1612">Etiopía, Guji</text>' +
      '<text x="400" y="456" text-anchor="middle" font-family="' + SYS + '" font-size="16" fill="#1C1612">Notas de durazno y miel</text>';
  },

  "brasa-vaso": function () {
    return '<rect width="800" height="640" fill="#1C1612"/>' +
      '<circle cx="640" cy="130" r="70" fill="#E4572E"/>' +
      '<path d="M372 110 q-22 -32 0 -64 M404 110 q-22 -32 0 -64 M436 110 q-22 -32 0 -64" fill="none" stroke="#E4572E" stroke-width="6" stroke-linecap="round"/>' +
      '<polygon points="300,170 500,170 470,550 330,550" fill="#F6E9D4"/>' +
      '<rect x="284" y="130" width="232" height="44" rx="10" fill="#E4572E"/>' +
      '<polygon points="310.5,296 489.5,296 479.7,424 320.3,424" fill="#E4572E"/>' +
      '<text x="400" y="372" text-anchor="middle" font-family="' + SYS + '" font-size="46" font-weight="900" letter-spacing="-2" fill="#F6E9D4">brasa</text>' +
      '<circle cx="400" cy="520" r="0" fill="none"/>' +
      '<ellipse cx="400" cy="574" rx="130" ry="12" fill="#000" opacity=".35"/>';
  },

  /* ---------- Marea Alta: identidad, posada costera ---------- */
  "marea-logo": function (u) {
    return '<rect width="800" height="640" fill="#EFE3CF"/>' +
      '<clipPath id="' + u + 'c"><circle cx="400" cy="236" r="132"/></clipPath>' +
      '<circle cx="400" cy="236" r="132" fill="#0F2B46"/>' +
      '<circle cx="400" cy="190" r="42" fill="#F26B5B"/>' +
      '<g clip-path="url(#' + u + 'c)">' + ola(226, 34, "#EFE3CF", 10) + ola(264, 34, "#EFE3CF", 10) + ola(302, 34, "#EFE3CF", 10) + "</g>" +
      '<text x="400" y="454" text-anchor="middle" font-family="' + SERIF + '" font-size="70" font-weight="700" font-style="italic" fill="#0F2B46">Marea Alta</text>' +
      '<text x="400" y="494" text-anchor="middle" font-family="' + SYS + '" font-size="22" letter-spacing="3" fill="#0F2B46">Posada costera</text>' +
      olaRelleno(556, 22, "#3E8FA6") + olaRelleno(596, 22, "#0F2B46");
  },

  "marea-llave": function (u) {
    return '<rect width="800" height="640" fill="#0F2B46"/>' +
      '<circle cx="620" cy="140" r="64" fill="#F26B5B"/>' +
      ola(566, 18, "#3E8FA6", 6) + ola(596, 18, "#3E8FA6", 6) + ola(626, 18, "#3E8FA6", 6) +
      '<clipPath id="' + u + 't"><rect x="296" y="90" width="208" height="450" rx="30"/></clipPath>' +
      '<g transform="rotate(-10 400 330)">' +
      '<rect x="296" y="90" width="208" height="450" rx="30" fill="#EFE3CF"/>' +
      '<circle cx="400" cy="146" r="20" fill="#0F2B46"/>' +
      '<text x="400" y="322" text-anchor="middle" font-family="' + SERIF + '" font-size="150" font-weight="700" fill="#0F2B46">12</text>' +
      '<text x="400" y="374" text-anchor="middle" font-family="' + SERIF + '" font-size="28" font-style="italic" fill="#0F2B46">Marea Alta</text>' +
      '<g clip-path="url(#' + u + 't)">' + ola(440, 14, "#3E8FA6", 5, 250) + ola(466, 14, "#3E8FA6", 5, 250) + ola(492, 14, "#3E8FA6", 5, 250) + "</g>" +
      "</g>";
  },

  "marea-post": function (u) {
    return '<rect width="800" height="640" fill="#3E8FA6"/>' +
      '<rect x="190" y="70" width="440" height="500" fill="#0F2B46"/>' +
      '<rect x="176" y="56" width="440" height="500" fill="#EFE3CF"/>' +
      '<clipPath id="' + u + 'p"><rect x="176" y="56" width="440" height="500"/></clipPath>' +
      '<circle cx="530" cy="148" r="46" fill="#F26B5B"/>' +
      '<text x="212" y="296" font-family="' + SERIF + '" font-size="58" font-weight="700" fill="#0F2B46">Abrimos</text>' +
      '<text x="212" y="360" font-family="' + SERIF + '" font-size="50" font-style="italic" fill="#0F2B46">en septiembre.</text>' +
      '<text x="212" y="414" font-family="' + SYS + '" font-size="20" fill="#0F2B46">Reservas abiertas</text>' +
      '<g clip-path="url(#' + u + 'p)">' + ola(470, 16, "#3E8FA6", 6) + ola(496, 16, "#3E8FA6", 6) + ola(522, 16, "#3E8FA6", 6) + "</g>";
  },

  /* ---------- Pulpa: packaging pop, jugos ---------- */
  "pulpa-latas": function () {
    function lata(x, giro, c1, fruta, nombre) {
      var cx = x + 75;
      return '<g transform="rotate(' + giro + " " + cx + ' 570)">' +
        '<rect x="' + x + '" y="186" width="150" height="384" rx="10" fill="' + c1 + '"/>' +
        '<ellipse cx="' + cx + '" cy="570" rx="75" ry="14" fill="' + c1 + '"/>' +
        '<ellipse cx="' + cx + '" cy="186" rx="75" ry="14" fill="#E8E8EC"/>' +
        '<rect x="' + (x + 14) + '" y="204" width="9" height="340" rx="4" fill="#fff" opacity=".28"/>' +
        '<text x="' + cx + '" y="262" text-anchor="middle" font-family="' + SYS + '" font-size="42" font-weight="900" letter-spacing="-2" fill="#fff">pulpa</text>' +
        rodaja(cx, 390, 52, fruta[0], fruta[1], fruta[2]) +
        '<text x="' + cx + '" y="502" text-anchor="middle" font-family="' + SYS + '" font-size="22" font-weight="800" fill="#fff">' + nombre + "</text></g>";
    }
    return '<rect width="800" height="640" fill="#FFD60A"/>' +
      '<circle cx="110" cy="90" r="150" fill="#FFC400"/><circle cx="720" cy="560" r="170" fill="#FFC400"/>' +
      '<ellipse cx="400" cy="590" rx="300" ry="16" fill="#B58F00" opacity=".4"/>' +
      lata(135, -6, "#FF3D81", ["#FFD60A", "#FFF0A0", "#FF3D81"], "frutilla") +
      lata(325, 0, "#00B386", ["#C8F560", "#F1FFC4", "#00B386"], "lima") +
      lata(515, 6, "#3A1C71", ["#FF3D81", "#FFB3CF", "#3A1C71"], "uva");
  },

  "pulpa-etiqueta": function () {
    return '<rect width="800" height="640" fill="#FF3D81"/>' +
      '<rect x="50" y="120" width="700" height="400" rx="22" fill="#FFD60A"/>' +
      rodaja(645, 300, 125, "#00B386", "#9BF0D2", "#00B386") +
      rodaja(560, 440, 68, "#FF3D81", "#FFB3CF", "#FF3D81") +
      '<text x="92" y="194" font-family="' + SYS + '" font-size="24" font-weight="800" fill="#3A1C71">330 ml</text>' +
      '<text x="88" y="338" font-family="' + SYS + '" font-size="150" font-weight="900" letter-spacing="-8" fill="#3A1C71">pulpa</text>' +
      '<text x="94" y="394" font-family="' + SYS + '" font-size="32" font-weight="700" fill="#3A1C71">jugo de frutas</text>' +
      '<text x="94" y="466" font-family="' + SYS + '" font-size="21" font-weight="600" fill="#3A1C71">Frutilla, lima y uva</text>';
  },

  "pulpa-post": function () {
    return '<rect width="800" height="640" fill="#00B386"/>' +
      rodaja(560, 330, 215, "#FF3D81", "#FFB3CF", "#FF3D81") +
      '<text x="50" y="206" font-family="' + SYS + '" font-size="92" font-weight="900" letter-spacing="-4" fill="#3A1C71">Fría.</text>' +
      '<text x="50" y="304" font-family="' + SYS + '" font-size="92" font-weight="900" letter-spacing="-4" fill="#3A1C71">Fuerte.</text>' +
      '<text x="50" y="402" font-family="' + SYS + '" font-size="92" font-weight="900" letter-spacing="-4" fill="#3A1C71">Frutal.</text>' +
      '<text x="52" y="570" font-family="' + SYS + '" font-size="44" font-weight="900" letter-spacing="-2" fill="#fff">pulpa</text>';
  },

  /* ---------- Lámina: editorial, revista ---------- */
  "lamina-tapa": function () {
    return '<rect width="800" height="640" fill="#BDB8AD"/>' +
      '<rect x="252" y="64" width="330" height="540" fill="#8F8A7E"/>' +
      '<rect x="235" y="50" width="330" height="540" fill="#F3EFE6"/>' +
      '<text x="400" y="140" text-anchor="middle" font-family="' + SERIF + '" font-size="80" font-weight="700" letter-spacing="-3" fill="#111">Lámina</text>' +
      '<line x1="257" y1="162" x2="543" y2="162" stroke="#111" stroke-width="3"/>' +
      '<circle cx="360" cy="338" r="104" fill="#D6281C"/>' +
      '<rect x="382" y="338" width="130" height="130" fill="#111"/>' +
      '<path d="M382 468 A65 65 0 0 1 512 468 Z" fill="#F3EFE6"/>' +
      '<text x="257" y="520" font-family="' + SYS + '" font-size="20" font-weight="800" fill="#111">Nº 04</text>' +
      '<text x="257" y="560" font-family="' + SERIF + '" font-size="28" font-style="italic" fill="#111">Color y oficio</text>';
  },

  "lamina-doble": function () {
    return '<rect width="800" height="640" fill="#111"/>' +
      '<rect x="100" y="110" width="300" height="420" fill="#F3EFE6"/>' +
      '<rect x="400" y="110" width="300" height="420" fill="#EAE5D9"/>' +
      '<line x1="400" y1="110" x2="400" y2="530" stroke="#BDB8AD" stroke-width="2"/>' +
      '<rect x="128" y="138" width="244" height="170" fill="#D6281C"/>' +
      '<circle cx="250" cy="223" r="62" fill="#111"/>' +
      '<text x="128" y="354" font-family="' + SERIF + '" font-size="25" font-style="italic" fill="#111">El color también</text>' +
      '<text x="128" y="386" font-family="' + SERIF + '" font-size="25" font-style="italic" fill="#111">compone la página.</text>' +
      lineas(128, 416, 244, 5, 16, "#BDB8AD", 5) +
      '<text x="428" y="172" font-family="' + SERIF + '" font-size="44" font-weight="700" fill="#111">Oficio</text>' +
      '<text x="428" y="218" font-family="' + SERIF + '" font-size="44" font-weight="700" fill="#111">y color</text>' +
      '<text x="428" y="318" font-family="' + SERIF + '" font-size="76" font-weight="700" fill="#D6281C">E</text>' +
      lineas(488, 266, 184, 4, 16, "#BDB8AD", 5) +
      lineas(428, 346, 244, 7, 16, "#BDB8AD", 5);
  },

  "lamina-indice": function () {
    var items = [["Color y oficio", "06"], ["Tipografía en la calle", "14"], ["Taller abierto", "22"], ["Papel y tinta", "30"]];
    var filas = "";
    for (var i = 0; i < items.length; i++) {
      var y = 300 + i * 62;
      filas += '<line x1="222" y1="' + y + '" x2="578" y2="' + y + '" stroke="#111" stroke-width="2"/>' +
        '<text x="222" y="' + (y + 38) + '" font-family="' + SERIF + '" font-size="24" fill="#111">' + items[i][0] + "</text>" +
        '<text x="578" y="' + (y + 38) + '" text-anchor="end" font-family="' + SYS + '" font-size="18" font-weight="800" fill="#111">' + items[i][1] + "</text>";
    }
    return '<rect width="800" height="640" fill="#D6281C"/>' +
      '<rect x="190" y="50" width="420" height="540" fill="#F3EFE6"/>' +
      '<text x="218" y="206" font-family="' + SERIF + '" font-size="170" font-weight="700" letter-spacing="-8" fill="#111">04</text>' +
      '<text x="222" y="256" font-family="' + SYS + '" font-size="18" font-weight="800" fill="#111">En este número</text>' +
      filas + '<line x1="222" y1="548" x2="578" y2="548" stroke="#111" stroke-width="2"/>';
  },

  /* ---------- Kiné: campaña para redes, pilates ---------- */
  "kine-carrusel": function () {
    return '<rect width="800" height="640" fill="#3B2540"/>' +
      '<rect x="560" y="110" width="420" height="420" fill="#F3D5C9"/>' +
      '<circle cx="700" cy="400" r="130" fill="#3B2540"/>' +
      '<rect x="90" y="110" width="420" height="420" fill="#A9BFA0"/>' +
      '<text x="124" y="202" font-family="' + SYS + '" font-size="66" font-weight="800" letter-spacing="-3" fill="#3B2540">Respirá.</text>' +
      '<path d="M130 530 a170 170 0 0 1 340 0z" fill="#F3D5C9"/>' +
      '<path d="M170 530 a130 130 0 0 1 260 0z" fill="#FBF6F1"/>' +
      '<path d="M210 530 a90 90 0 0 1 180 0z" fill="#3B2540"/>' +
      '<circle cx="360" cy="590" r="6" fill="#FBF6F1"/><circle cx="384" cy="590" r="6" fill="#FBF6F1" opacity=".4"/><circle cx="408" cy="590" r="6" fill="#FBF6F1" opacity=".4"/>';
  },

  "kine-historia": function () {
    return '<rect width="800" height="640" fill="#A9BFA0"/>' +
      '<rect x="250" y="26" width="300" height="588" rx="30" fill="#FBF6F1"/>' +
      '<text x="282" y="82" font-family="' + SYS + '" font-size="24" font-weight="800" fill="#3B2540">kiné</text>' +
      '<text x="282" y="160" font-family="' + SYS + '" font-size="42" font-weight="800" letter-spacing="-2" fill="#3B2540">Clase de</text>' +
      '<text x="282" y="206" font-family="' + SYS + '" font-size="42" font-weight="800" letter-spacing="-2" fill="#3B2540">prueba.</text>' +
      '<path d="M282 420 a118 118 0 0 1 236 0z" fill="#F3D5C9"/>' +
      '<path d="M312 420 a88 88 0 0 1 176 0z" fill="#A9BFA0"/>' +
      '<path d="M352 420 a48 48 0 0 1 96 0z" fill="#3B2540"/>' +
      '<text x="400" y="472" text-anchor="middle" font-family="' + SYS + '" font-size="24" font-weight="700" fill="#3B2540">Jueves, 19 h</text>' +
      '<rect x="282" y="524" width="236" height="54" rx="27" fill="#3B2540"/>' +
      '<text x="400" y="558" text-anchor="middle" font-family="' + SYS + '" font-size="19" font-weight="700" fill="#FBF6F1">Reservá tu lugar</text>';
  },

  "kine-post": function () {
    return '<rect width="800" height="640" fill="#F3D5C9"/>' +
      '<circle cx="610" cy="450" r="150" fill="#A9BFA0"/><circle cx="610" cy="450" r="92" fill="#FBF6F1"/><circle cx="610" cy="450" r="40" fill="#3B2540"/>' +
      '<text x="64" y="204" font-family="' + SYS + '" font-size="112" font-weight="800" letter-spacing="-5" fill="#3B2540">Moverse</text>' +
      '<text x="64" y="312" font-family="' + SYS + '" font-size="112" font-weight="800" letter-spacing="-5" fill="#3B2540">es el</text>' +
      '<text x="64" y="420" font-family="' + SYS + '" font-size="112" font-weight="800" letter-spacing="-5" fill="#3B2540">plan.</text>' +
      '<text x="68" y="574" font-family="' + SYS + '" font-size="30" font-weight="800" fill="#3B2540">kiné</text>';
  },

  /* ---------- Ferretería Dos Ases: promociones ---------- */
  "ases-flyer": function () {
    return '<rect width="800" height="640" fill="#1F4FA3"/>' +
      puntos(24, 36, 8, 4, 30, 5, "#2F63C4") + puntos(560, 560, 8, 3, 30, 5, "#2F63C4") +
      '<g transform="rotate(-3 400 320)">' +
      '<rect x="210" y="40" width="380" height="560" fill="#F7C948"/>' +
      estrella(400, 150, 72, 106, 14, "#E63B2E") +
      '<text x="400" y="146" text-anchor="middle" font-family="' + SYS + '" font-size="21" font-weight="900" fill="#fff">Solo</text>' +
      '<text x="400" y="172" text-anchor="middle" font-family="' + SYS + '" font-size="21" font-weight="900" fill="#fff">esta semana</text>' +
      '<text x="400" y="334" text-anchor="middle" font-family="' + SYS + '" font-size="84" font-weight="900" letter-spacing="-4" fill="#1F4FA3">Ofertas</text>' +
      '<text x="400" y="404" text-anchor="middle" font-family="' + SYS + '" font-size="46" font-weight="900" letter-spacing="-1" fill="#E63B2E">de la semana</text>' +
      '<rect x="210" y="488" width="380" height="112" fill="#1F4FA3"/>' +
      '<text x="400" y="540" text-anchor="middle" font-family="' + SYS + '" font-size="28" font-weight="900" fill="#F7C948">Ferretería Dos Ases</text>' +
      '<text x="400" y="572" text-anchor="middle" font-family="' + SYS + '" font-size="18" font-weight="600" fill="#fff">Todo para tu obra</text>' +
      "</g>";
  },

  "ases-cartel": function () {
    return '<rect width="800" height="640" fill="#E63B2E"/>' +
      puntos(20, 24, 16, 13, 50, 10, "#D0332A") +
      '<g transform="rotate(-12 325 135)"><rect x="270" y="60" width="110" height="150" rx="10" fill="#fff"/>' +
      '<text x="286" y="116" font-family="' + SERIF + '" font-size="54" font-weight="700" fill="#E63B2E">A</text><circle cx="325" cy="150" r="16" fill="#E63B2E"/></g>' +
      '<g transform="rotate(10 475 135)"><rect x="420" y="60" width="110" height="150" rx="10" fill="#fff"/>' +
      '<text x="436" y="116" font-family="' + SERIF + '" font-size="54" font-weight="700" fill="#1F4FA3">A</text><circle cx="475" cy="150" r="16" fill="#1F4FA3"/></g>' +
      '<rect x="50" y="200" width="700" height="240" rx="6" fill="#F7C948" stroke="#1F4FA3" stroke-width="12"/>' +
      '<text x="400" y="318" text-anchor="middle" font-family="' + SYS + '" font-size="82" font-weight="900" letter-spacing="-3" fill="#1F4FA3">Todo para</text>' +
      '<text x="400" y="400" text-anchor="middle" font-family="' + SYS + '" font-size="82" font-weight="900" letter-spacing="-3" fill="#1F4FA3">tu obra</text>' +
      '<circle cx="74" cy="224" r="7" fill="#1F4FA3"/><circle cx="726" cy="224" r="7" fill="#1F4FA3"/><circle cx="74" cy="416" r="7" fill="#1F4FA3"/><circle cx="726" cy="416" r="7" fill="#1F4FA3"/>' +
      '<text x="400" y="534" text-anchor="middle" font-family="' + SYS + '" font-size="44" font-weight="900" fill="#fff">Ferretería Dos Ases</text>' +
      '<rect x="290" y="552" width="220" height="6" fill="#F7C948"/>';
  },

  "ases-anuncio": function () {
    return '<rect width="800" height="640" fill="#F7C948"/>' +
      puntos(430, 40, 10, 8, 36, 8, "#1F4FA3") +
      '<g transform="rotate(32 560 270)">' +
      '<rect x="543" y="140" width="34" height="320" rx="8" fill="#E63B2E"/>' +
      '<rect x="470" y="104" width="180" height="76" rx="8" fill="#1F4FA3"/>' +
      '<path d="M650 112 q52 10 66 58 q-36 -16 -66 -8z" fill="#1F4FA3"/></g>' +
      '<rect x="60" y="70" width="190" height="48" rx="24" fill="#E63B2E"/>' +
      '<text x="155" y="102" text-anchor="middle" font-family="' + SYS + '" font-size="22" font-weight="900" fill="#fff">Dos Ases</text>' +
      '<text x="60" y="478" font-family="' + SYS + '" font-size="76" font-weight="900" letter-spacing="-3" fill="#1F4FA3">Herramientas</text>' +
      '<text x="60" y="556" font-family="' + SYS + '" font-size="76" font-weight="900" letter-spacing="-3" fill="#E63B2E">que duran.</text>';
  }
};

/* ========== FIN DEL ARTE DE DEMOSTRACIÓN ========== */

iniciar();
