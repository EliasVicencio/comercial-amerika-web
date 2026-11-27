/* ============================================
   AMERIKA - JavaScript principal
   Multi-idioma (ES/EN) + Menú móvil + Modal
   + Filtro de marcas + Control de edad + Formulario

   NOTA: el documento "Reestructuración" pide ES como
   idioma principal y EN solo si TODAS las páginas están
   traducidas. Por eso las dos listas de textos (es/en)
   tienen exactamente las mismas claves.
   ============================================ */

(function () {
  'use strict';

  const DEFAULT_LANG = 'es';
  const SUPPORTED_LANGS = ['es', 'en'];
  const STORAGE_KEY = 'amerika-lang';

  const translations = {
    es: {
      // ---------- Navegación / comunes ----------
      'nav.home': 'Inicio',
      'nav.brands': 'Nuestras marcas',
      'nav.about': 'Quiénes somos',
      'nav.route': 'Route to market',
      'nav.contact': 'Contáctanos',
      'nav.distribute': 'Distribuye con nosotros',
      'nav.menu': 'Menú',
      'nav.menu.close': 'Cerrar menú',
      'aria.lang': 'Seleccionar idioma',
      'aria.nav.left': 'Menú principal izquierda',
      'aria.nav.right': 'Menú principal derecha',
      'aria.stats': 'Cifras de Comercial Amerika',
      'common.close': 'Cerrar',
      'footer.legal': 'Comercial Amerika SpA · RUT 78.474.378-0',
      'footer.contactline': 'contacto@comercialamerika.cl · Tel./WhatsApp +56 9 5610 0329',
      'footer.location': 'Colina, Región Metropolitana · Chile',
      'footer.rights': '© 2026 Comercial Amerika SpA. Todos los derechos reservados.',
      'footer.age': 'Venta de alcohol prohibida a menores de 18 años.',
      'footer.privacy': 'Política de privacidad',
      'footer.nav.title': 'Navegación',
      'footer.team': 'Nuestro equipo',
      'footer.brands.title': 'Nuestras marcas',
      'footer.allbrands': 'Todas nuestras marcas',
      'footer.info.title': 'Información',
      'footer.contactinfo': 'Información de contacto',
      'footer.description': 'Potenciamos marcas y conectamos productos con nuevos mercados. Desarrollamos oportunidades comerciales para impulsar su crecimiento.',
      'wa.aria': 'Escríbenos por WhatsApp',

      // ---------- Títulos de página / SEO ----------
      'page.index.title': 'Desarrollo y distribución de marcas de consumo masivo | Comercial Amerika SpA',
      'page.index.desc': 'Potenciamos marcas de alimentos y bebidas en Chile: desarrollo, posicionamiento, distribución y ejecución en punto de venta. Más de 30 años de experiencia.',
      'page.brands.title': 'Nuestras marcas | Comercial Amerika SpA',
      'page.brands.desc': 'Portafolio de marcas de Comercial Amerika: DrinkBall y Pink Moon, cócteles listos para beber de Comary, Brasil. Desarrollo de marcas y distribución en Chile.',
      'page.about.title': 'Quiénes somos | Comercial Amerika SpA',
      'page.about.desc': 'Potenciadora de marcas de consumo masivo con más de 30 años de experiencia. Conoce la historia de Comercial Amerika SpA, su misión, visión y valores.',
      'page.route.title': 'Route to market | Comercial Amerika SpA',
      'page.route.desc': 'Llevamos tu marca del origen a la góndola: importación, normativa, estrategia por canal, distribución y activación en el punto de venta. Una sola contraparte para todo el camino.',
      'page.contact.title': 'Contáctanos | Comercial Amerika SpA',
      'page.contact.desc': 'Contáctanos: si eres una marca que busca distribuidor o un cliente que quiere comprar, te respondemos en menos de 24 horas hábiles. Colina, Región Metropolitana, Chile.',
      'page.team.title': 'Equipo directivo | Comercial Amerika SpA',
      'page.team.desc': 'Conoce al equipo directivo de Comercial Amerika SpA y a las personas detrás de nuestras marcas.',
      'page.drinkball.title': 'DrinkBall | Comercial Amerika SpA',
      'page.drinkball.desc': 'DrinkBall: cócteles listos para beber (RTD) de Comary, Brasil, distribuidos en exclusividad para Chile por Comercial Amerika. Innovación y actitud.',
      'page.pinkmoon.title': 'Pink Moon | Comercial Amerika SpA',
      'page.pinkmoon.desc': 'Pink Moon: bebida frisante de Comary, Brasil, distribuida en exclusividad para Chile por Comercial Amerika. Experiencia y estilo.',

      // ---------- Inicio ----------
      'hero.label': 'Chile · Perú · Argentina',
      'hero.title': 'Llevamos grandes marcas a la mesa de Chile y la Región Andina',
      'hero.subtitle': 'Desarrollamos, posicionamos y vendemos marcas de consumo masivo en Chile y la región.',
      'hero.cta1': 'Ver nuestras marcas',
      'hero.cta2': 'Distribuye con nosotros',
      'hero.rot1': 'Cobertura real: supermercados, conveniencia, canal tradicional y HORECA',
      'hero.kicker': 'Potenciadora de marcas de consumo masivo',
      'hero.headline': 'Potenciamos marcas que conquistan góndolas',
      'impact.title': 'Marcas que se venden solas',
      'impact.cta': 'Ver portafolio',
      'hero.image': '[VIDEO CORTO O CARRUSEL: góndola con productos · bodega en Colina · brindis con DrinkBall]',
      'paths.brand.title': 'Soy una marca o fabricante',
      'paths.brand.text': 'Busco un socio comercial para posicionar mi marca de alimentos o bebidas en Chile.',
      'paths.brand.cta': 'Ver cómo trabajamos',
      'paths.client.title': 'Soy cliente',
      'paths.client.text': 'Quiero comprar para mi supermercado, almacén, tienda de conveniencia o negocio HORECA.',
      'paths.client.cta': 'Quiero comprar',
      'stats.years.lbl': 'años en consumo masivo',
      'stats.countries.lbl': 'países',
      'stats.brands.lbl': 'marcas en portafolio',
      'stats.sku.lbl': 'SKU en grandes cadenas',
      'stats.pv.lbl': 'puntos de venta',
      'allies.title': 'Trabajamos con',
      'brands.title': 'Nuestras marcas',
      'brands.note': 'Logos en blanco sobre fondo uniforme (pedir material a Comary y demás fabricantes).',
      'brands.drinkball.name': 'DrinkBall',
      'brands.drinkball.desc': 'Cócteles listos para beber · RTD',
      'brands.pinkmoon.name': 'Pink Moon',
      'brands.pinkmoon.desc': 'Frisante · Experiencia y estilo', 'featured.label': 'Lanzamiento',
      'featured.title': 'DrinkBall y Pink Moon llegan a Chile',
      'featured.text': 'En Comercial Amerika nos enorgullece anunciar nuestra alianza estratégica con Comary, empresa brasileña especializada en la exportación de bebidas tropicales, que apuesta por expandir su presencia y llevar sus productos al mercado chileno. Esta colaboración representa una nueva oportunidad para conectar mercados, acercar nuevos sabores a Chile y fortalecer los lazos comerciales entre ambos países. ¡Comercial Amerika y Comary, creciendo juntos y creando nuevas oportunidades!',
      'featured.cta': 'Conocer DrinkBall',
      'featured.image': '[FOTO DE OCASIÓN DE CONSUMO: terraza frente al mar, personas adultas (campañas: solo +25 años)]',
      'how.title': 'Impulsamos marcas. Creamos oportunidades. Generamos crecimiento.',
      'how.item1.title': 'Desarrollo y posicionamiento',
      'how.item1.text': 'Fortalecemos la propuesta de cada marca, identificando su potencial y construyendo una estrategia para destacar y conectar con nuevos consumidores.',
      'how.item2.title': 'Expansión y oportunidades comerciales',
      'how.item2.text': 'Conectamos las marcas con nuevos mercados, canales y clientes, desarrollando oportunidades que impulsan su crecimiento y presencia comercial.',
      'how.item3.title': 'Visibilidad y conexión con el consumidor',
      'how.item3.text': 'Potenciamos la presencia de cada marca mediante estrategias de exhibición, activaciones y acciones que generan reconocimiento y preferencia.',
      'how.item4.title': 'Socios estratégicos de crecimiento',
      'how.item4.text': 'Trabajamos junto a cada marca con compromiso, cercanía y una gestión orientada a construir relaciones sólidas y resultados sostenibles.',
      'cta.title': '¿Tienes una marca con potencial? Conversemos.',
      'cta.button': 'Agenda una reunión',

      // ---------- Nuestras marcas (página índice) ----------
      'bp.h1': 'Marcas que hacemos crecer',
      'bp.intro': 'Cada marca de nuestro portafolio tiene un plan propio: posicionamiento, canales, precios y ejecución en punto de venta. Conoce las marcas que representamos en Chile.',
      'bp.filter.all': 'Todas',
      'bp.filter.alcohol': 'Bebidas con alcohol',
      'bp.filter.noalcohol': 'Bebidas sin alcohol',
      'bp.filter.alimentos': 'Alimentos y mascotas',
      'bp.card.drinkball': 'Cócteles listos para beber · Comary, Brasil · "Innovación y actitud"',
      'bp.card.pinkmoon': 'Frisante · Comary, Brasil · "Experiencia y estilo"', 'representa.title': '¿Quieres que tu marca sea la próxima?',
      'representa.text': 'Buscamos marcas de alimentos y bebidas con calidad probada y potencial de crecimiento. Nosotros ponemos el conocimiento del mercado, la red comercial y la ejecución.',

      // ---------- Quiénes somos ----------
      'about.label': 'Quiénes somos',
      'about.h1': 'Somos la potenciadora que convierte marcas con potencial en marcas que crecen',
      'about.image': '[FOTO / VIDEO CORPORATIVO]',
      'about.history.title': 'Nuestra historia',
      'about.history.p1': '<strong>Comercial Amerika SpA</strong> es una empresa chilena que desarrolla, posiciona y distribuye marcas de alimentos y bebidas, llevándolas desde el origen hasta el consumidor de Chile y la Región Andina.',
      'about.history.p2': 'Llevamos más de 30 años liderando equipos comerciales en multinacionales de consumo masivo, en Chile y en el extranjero. Hoy ponemos esa experiencia al servicio de fabricantes que no buscan solo un distribuidor: buscan un socio que desarrolle su marca, la posicione y la haga crecer.',
      'about.dedicated.title': 'Cómo potenciamos tu marca',
      'about.dedicated.sub': 'Cada etapa suma. Gestionamos el camino completo, desde el origen hasta la góndola, para que tu marca llegue más lejos.',
      'about.mission.eyebrow': 'Propósito',
      'about.vision.eyebrow': 'Aspiración',
      'about.ded1.title': 'Importación',
      'about.ded1.text': 'Trabajamos directo con fabricantes de trayectoria —como Comary (Brasil, 1952) y Vieira (Portugal, 1943)— y gestionamos cada detalle de comercio exterior y aduanas.',
      'about.ded2.title': 'Registros y cumplimiento',
      'about.ded2.text': 'Despejamos el camino regulatorio: registros ante SAG, SEREMI de Salud, Aduanas y municipio, con etiquetado y sellos adecuados desde el origen.',
      'about.ded3.title': 'Posicionamiento y estrategia comercial',
      'about.ded3.text': 'Construimos el posicionamiento de tu marca y una estrategia comercial a medida: precios por canal, surtido y planes promocionales que venden.',
      'about.ded4.title': 'Distribución',
      'about.ded4.text': 'Ponemos tu producto en supermercados, conveniencia, canal tradicional, mayoristas, HORECA y tiendas especializadas, con logística propia desde Colina.',
      'about.ded5.title': 'Ejecución en el punto de venta',
      'about.ded5.text': 'Activamos la marca donde se decide la compra: lanzamientos, degustaciones, exhibiciones y trade marketing para que rote y se vuelva a comprar.',
      'about.mission': 'Misión',
      'about.mission.text': 'Impulsamos marcas de alimentos y bebidas para que alcancen su máximo potencial. Combinamos estrategia comercial, ejecución en terreno y una relación cercana para conectar productos de calidad con los consumidores que los buscan, generando valor para nuestros clientes, aliados y equipos.',
      'about.vision': 'Visión',
      'about.vision.text': 'Ser la potenciadora de marcas de referencia en Chile y la región, reconocida por convertir marcas con potencial en negocios sólidos y por la calidad de las relaciones que construimos con fabricantes, clientes y consumidores.',
      'about.why.title': 'Por qué Amerika',
      'about.why.text': 'Nuestra diferencia no está en <em>qué</em> vendemos, sino en <em>cómo</em> hacemos crecer una marca. Combinamos inteligencia de mercado, velocidad para detectar tendencias y una relación de asesoría —no solo de venta— con las marcas y los clientes con los que trabajamos.',
      'about.why1': 'Inteligencia de mercado',
      'about.why2': 'Velocidad (time to market)',
      'about.why3': 'Asesoría, no solo venta',
      'about.why4': 'Relaciones de largo plazo',
      'about.r1.lbl': 'crecimiento en líneas core vs. año anterior',
      'about.r2.lbl': 'SKU incorporados en grandes cadenas',
      'about.r3.lbl': 'SKU nuevos desarrollados',
      'about.ally.title': 'Aliados',
      'about.ally.intro': 'Fabricantes de trayectoria que confían en nosotros para desarrollar y hacer crecer sus marcas en Chile.',
      'about.ally.comary': 'Brasil · Desde 1952',
      'about.ally.comary.name': 'Comary',
      'about.ally.vieira': 'Portugal · Desde 1943',
      'about.ally.vieira.name': 'Vieira',
      'about.team.title': 'Equipo directivo',
      'about.team.text': 'Un equipo que ha gestionado marcas y canales en multinacionales de consumo masivo, ahora al servicio del crecimiento de tu marca.',
      'about.team.cta': 'Conocer al equipo',
      'about.team.modal.title': 'Equipo directivo',
      "about.ally.eyebrow": "Nuestra red de colaboración",
      "about.ally.comary.description": "Compañía brasileña de bebidas con más de siete décadas de trayectoria. Cuenta con un portafolio multicategoría y marcas reconocidas, combinando experiencia industrial, innovación y conocimiento del mercado para llegar a distintos consumidores y ocasiones de consumo.",
      "about.ally.vieira.description": "Empresa portuguesa con una larga tradición en la industria alimentaria. Especializada en la elaboración de galletas, almendras y caramelos, combina tradición, calidad e innovación para desarrollar productos que llegan a distintos mercados internacionales.",
      "about.ally.visit": "Conocer empresa",
      "about.ally.closing": "Creemos en las relaciones que generan valor a largo plazo: conectamos experiencia internacional con oportunidades reales de crecimiento en el mercado chileno.",
      'role.commercial': 'Gerente Comercial',
      'role.ceo': 'Gerente General',
      'role.community': 'Community Manager',
      'role.supply': 'Jefe Supply',
      'eq.eyebrow': 'COMERCIAL AMERIKA',
      'eq.h1': 'Las personas que potencian tus marcas',
      'eq.intro': 'Un equipo comprometido con desarrollar, posicionar y hacer crecer marcas en el mercado chileno.',
      'eq.team.label': 'NUESTRO EQUIPO',
      'eq.team.title': 'Equipo directivo',
      'eq.team.text': 'Experiencia, criterio comercial y compromiso al servicio de cada marca.',
      'eq.back': 'Volver a Quiénes somos',

      // ---------- Route to market ----------
      'route.h1': 'Tu marca, del origen a la góndola: abrimos mercado y la convertimos en ventas',
      'route.intro': 'Potenciamos tu marca en cada etapa del camino al mercado: importación, cumplimiento normativo, estrategia por canal, distribución y activación en punto de venta. Una sola contraparte, enfocada en hacer crecer tu marca.',
      'route.channels.title': 'Canales que atendemos',
      'route.ch1.title': 'Supermercados',
      'route.ch1.text': 'Trabajamos con las principales cadenas y supermercados regionales del país, asegurando exhibición, disponibilidad y una ejecución impecable en cada sala.',
      'route.ch2.title': 'Tiendas de conveniencia',
      'route.ch2.text': 'Puntos de compra rápida con alta rotación diaria. El canal ideal para bebidas RTD, snacks y productos de consumo inmediato.',
      'route.ch3.title': 'Canal tradicional y mayoristas',
      'route.ch3.text': 'Almacenes de barrio, botillerías y mayoristas. Cobertura capilar para que tu marca esté presente en cada comuna.',
      'route.ch4.title': 'HORECA',
      'route.ch4.text': 'Hoteles, restaurantes, bares y cafeterías. Ocasiones de consumo que construyen valor de marca y fidelidad.',
      'route.ch5.title': 'Tiendas especializadas',
      'route.ch5.text': 'Establecimientos gourmet, tiendas de nicho y de salud. Un espacio directo para conectar con consumidores premium y exigentes.',
      'route.ch6.title': 'E-commerce',
      'route.ch6.text': 'Plataformas digitales, marketplaces y apps de despacho rápido para llegar al cliente final de forma directa.',
      'route.coverage.title': 'Cobertura y logística regional',
      'route.coverage.p1': 'Operamos desde nuestro centro de almacenaje y distribución en <strong>Colina, Región Metropolitana</strong>. Desde ahí coordinamos la importación y la distribución en <strong>Chile, con proyección a Perú y Argentina</strong>.',
      'route.coverage.p2': '[Completar: cadenas y canales cubiertos hoy por país, y lo que viene.]',
      'route.coverage.image': '[MAPA DE CHILE, PERÚ Y ARGENTINA: cobertura hoy y proyectada]',
      'route.services.title': 'Servicios que suman valor',
      'route.srv1.title': 'Marketing y trade marketing',
      'route.srv1.text': 'Lanzamientos, degustaciones, activaciones y presencia en ferias para dar a conocer tu marca.',
      'route.srv2.title': 'Asesoría regulatoria',
      'route.srv2.text': 'Resolvemos el etiquetado y los registros chilenos desde el país de origen, sin frenar tu entrada al mercado.',
      'route.srv3.title': 'Reportes de venta y rotación',
      'route.srv3.text': 'Reportes periódicos de venta y rotación para decidir con datos, no con intuición.',
      'route.steps.title': 'Cómo trabajamos con tu marca',
      'route.step1.title': 'Evaluación de la marca y del mercado',
      'route.step1.text': 'Analizamos el potencial de tu producto, la competencia local y las oportunidades reales en cada canal antes de dar un solo paso.',
      "route.step2.title": "Registros y cumplimiento normativo",
      "route.step2.text": "Gestionamos registros, autorizaciones y requisitos normativos para comercializar tu producto en Chile, incluyendo etiquetado y sellos locales adaptados desde origen.",
      'route.step3.title': 'Estrategia comercial y precios por canal',
      'route.step3.text': 'Definimos la arquitectura de precios, el surtido óptimo y un plan promocional a la medida de cada cliente.',
      'route.step4.title': 'Ingreso a cadenas y distribución eficiente',
      'route.step4.text': 'Negociamos la entrada al retail y aseguramos distribución continua desde nuestro centro logístico en Colina.',
      'route.step5.title': 'Ejecución en punto de venta y marketing',
      'route.step5.text': 'Activaciones, lanzamientos, degustaciones y trade marketing para impulsar la rotación y la recompra.',
      'route.model.title': 'Modelo de acuerdo transparente:',
      'route.model.text': ' Las condiciones comerciales (márgenes, plazos y compromisos de servicio) se conversan en reunión con cada marca.',
      'route.trends.title': 'Lo que vemos en el mercado',
      'route.trends.subtitle': 'Leemos el mercado y adaptamos la estrategia de tu marca a lo que el consumidor realmente está pidiendo.',
      'route.trend1.title': 'Conveniencia',
      'route.trend1.text': 'Más alimentos preparados, compras online y entregas a domicilio: la conveniencia manda.',
      'route.trend2.title': 'Salud y bienestar',
      'route.trend2.text': 'Los consumidores buscan productos saludables, con etiquetas claras y decisiones informadas.',
      'route.trend3.title': 'Precio-calidad',
      'route.trend3.text': 'La relación precio-calidad sigue siendo decisiva, tanto en el canal moderno como en el tradicional.',
      'route.cta.title': '¿Tu marca está lista para crecer en Chile?',

      // ---------- Contáctanos ----------
      'contact.h1': 'Conversemos',
      'contact.subtitle': 'Elige la opción que mejor te describa en el formulario y te contactaremos en menos de 24 horas hábiles.',
      'contact.email.lbl': 'Correo comercial',
      'contact.email.val': 'contacto@comercialamerika.cl',
      'contact.phone.lbl': 'Teléfono / WhatsApp',
      'contact.phone.val': '+56 9 5610 0329',
      'contact.hours': 'Horario de atención: lunes a viernes, 09:00 - 18:00 hrs',
      'contact.office.lbl': 'Bodega y oficina',
      'contact.office.val': 'Colina, Región Metropolitana · Chile',
      'contact.office.note': 'Solo distribución y despacho (no se recibe público)',
      'contact.map': '[MAPA: bodega en Colina, Región Metropolitana]',
      'contact.form.perfil': 'Soy…',
      'contact.perfil1': 'Marca o fabricante',
      'contact.perfil2': 'Cliente: supermercado, almacén, HORECA',
      'contact.perfil3': 'Proveedor de servicios',
      'contact.perfil4': 'Postulante (trabaja con nosotros)',
      'contact.pais1': 'Chile',
      'contact.pais2': 'Perú',
      'contact.pais3': 'Argentina',
      'contact.pais4': 'Otro',
      'contact.form.name': 'Nombre',
      'contact.ph.name': 'Tu nombre',
      'contact.form.company': 'Empresa',
      'contact.ph.company': 'Nombre de tu empresa',
      'contact.form.cargo': 'Cargo',
      'contact.ph.cargo': 'Ej: Jefe de compras',
      'contact.form.country': 'País',
      'contact.form.email': 'Correo',
      'contact.ph.email': 'correo@empresa.com',
      'contact.form.phone': 'Teléfono',
      'contact.ph.phone': '+56 9 ...',
      'contact.form.message': 'Mensaje',
      'contact.ph.message': 'Cuéntanos qué buscas: distribuir una marca (fabricantes) o comprar nuestros productos (clientes)',
      'contact.form.privacy': 'Acepto el tratamiento de mis datos según la <a href="#" data-consent-open>política de privacidad</a> (Ley 19.628 y Ley 21.719).',
      'contact.form.submit': 'Enviar mensaje',
      'contact.alert.success': '¡Mensaje enviado! Te contactaremos en menos de 24 horas hábiles.',
      'contact.alert.error': 'Hubo un problema al enviar el mensaje. Revisa tus datos e inténtalo de nuevo.',

      // ---------- Control de edad (páginas de alcohol) ----------
      'age.title': 'Contenido para mayores de 18 años',
      'age.text': 'Esta página muestra bebidas alcohólicas. Su venta está prohibida a menores de 18 años (Ley 21.363).',
      'age.yes': 'Sí, soy mayor de 18 años',
      'age.no': 'No, salir',
      'age.badge': '⚠ Bebida alcohólica · Solo para mayores de 18 años',
      'age.restricted.title': 'Lo sentimos, no puedes ingresar',
      'age.restricted.badge': '⛔ Acceso Restringido',
      'age.restricted.text': 'De acuerdo con la Ley 21.363, debes ser mayor de 18 años para visualizar contenido relacionado con bebidas alcohólicas.',
      'age.retry': 'Volver a verificar',

      // ---------- DrinkBall ----------
      'db.tagline': 'Enfrió, abrió, disfrutó: una nueva categoría de consumo',
      'db.cta': 'Quiero venderla en mi negocio',
      'db.hero.photo': '[HERO "GELOU, ABRIU, CURTIU": lata saliendo de un balde con hielo, fondo de playa desenfocado]',
      'db.history': 'DrinkBall es la línea de cócteles listos para beber (RTD) de <strong>Comary</strong>, fabricante brasileño de bebidas desde 1952 (más de 70 años de historia). Comercial Amerika la importa y distribuye en exclusividad para Chile, llevando innovación, alta rotación y propuesta de valor a supermercados, conveniencia y canal tradicional.',
      'db.portfolio.title': '10 sabores listos para disfrutar',
      'db.portfolio.note': 'Sabores conocidos de la línea DrinkBall (formatos por confirmar con Comary).',
      'db.f1.name': 'Piña Bolada',
      'db.f1.desc': 'Piña y coco · Tropical',
      'db.f2.name': 'Mate Limao Spritz',
      'db.f2.desc': 'Hojas de mate y limón · Clásicos',
      'db.f3.name': 'Torta de Limao',
      'db.f3.desc': 'Crema Chantilly y Limón · Tropical',
      'db.f4.name': 'Caipiríssima',
      'db.f4.desc': 'Limón y menta · El clásico brasileño listo para servir.',
      'db.f5.name': 'Summer Blue',
      'db.f5.desc': 'Hojas de mate y limón · Frescura herbal de playa.',
      'db.f.ph1': '[PACKSHOT: lata Caipiríssima]',
      'db.f.ph2': '[PACKSHOT: lata Mate Limao Spritz]',
      'db.f.ph3': '[PACKSHOT: lata Piña Bolada]',
      'db.f.ph4': '[PACKSHOT: lata Banana Split]',
      'db.f.ph5': '[PACKSHOT: lata Doce de Leite]',
      'db.occasion.title': 'Ocasión de consumo',
      'db.occasion.note': 'Fiestas, playa, festivales y reuniones. Donde quieras y cuando quieras, solo quita la tapa y a relajarse.',
      'db.occ1.title': 'Terraza y Verano Chileno',
      'db.occ1.text': 'Atardecer, cooler con hielo y botellas de 300 ml listas para abrir y compartir sin preparación previa.',
      'db.occ1.ph': '[FOTO: consumo en terraza frente al mar]',
      'db.occ2.title': 'Servido en Vaso / Coctelería Real',
      'db.occ2.text': 'Recetas equilibradas con graduación alcohólica real (10% - 14%), ideales para servir con hielo y garnish.',
      'db.occ2.ph': '[FOTO: servido en vaso con hielo y decoración]',
      'db.occ3.title': 'Canal HORECA y Retail',
      'db.occ3.text': 'Alto impacto visual en góndolas de supermercados, tiendas de conveniencia, botillerías y canal tradicional.',
      'db.occ3.ph': '[FOTO: lata en la góndola o cooler de conveniencia]',
      'db.cta2.title': '¿Quieres vender DrinkBall en tu negocio?',
      'db.label': 'Cócteles Listos para Beber (RTD) · Comary',
      'db.signature': 'Una marca Comary · Comercializada en Chile por Comercial Amerika',
      'db.caption': 'DRINKBALL · READY TO DRINK',
      'db.toast': 'Redirigiendo a formulario de contacto Comercial Amerika...',
      'db.abv': '⚠ Graduación alcohólica: 10% - 14% Vol.',
      'db.format': 'Formato oficial: 300 ml · Exclusiva Chile: Comercial Amerika',
      'db.explore': 'Ver los 10 sabores',
      'db.port.label': 'Portafolio Oficial Comary',
      'db.cat.classic': 'Clásico',
      'db.cat.tropical': 'Tropical',
      'db.cat.creamy': 'Cremoso',
      'db.filter.all': 'Todos (10)',
      'db.filter.tropical': 'Clásicos y Tropicales (6)',
      'db.filter.creamy': 'Cremosos y Milkshakes (4)',
      'db.occ.label': 'Experiencia y Punto de Venta',
      'db.ed.badge': 'I+D · Innovación y Experiencia',
      'db.ed.title': 'Enfrió, abrió, disfrutó: una nueva categoría de consumo',
      'db.ed.text': 'Con un formato redondo patentado y un alto impacto visual, Drinkball destaca por su practicidad, conveniencia y variedad de sabores. Su catálogo incluye opciones clásicas, tropicales y cremosas, con bebidas más refrescantes, sabores más dulces y combinaciones pensadas para diferentes paladares. Una propuesta sencilla y sin complicaciones para quienes buscan bebidas listas para beber, sabrosas y accesibles.',
      'db.ed.s1': 'Formato individual',
      'db.ed.s2': 'Graduación ABV',
      'db.ed.s3': 'Tropicales y Cremosos',
      'db.ed.flavors': '10 Sabores',
      'db.f6.name': 'Tropical Sunset',
      'db.f6.desc': 'Jengibre y limón · Inspirado en el icónico Moscow Mule.',
      'db.f7.name': 'Banana Split',
      'db.f7.desc': 'Plátano y crema · Textura aterciopelada e indulgente.',
      'db.f8.name': 'Milkshake Chocolate',
      'db.f8.desc': 'Chocolate cremoso · Cacao intenso con notas lácteas.',
      'db.f9.name': 'Milkshake Morango',
      'db.f9.desc': 'Frutilla cremosa · Dulzor equilibrado y cuerpo suave.',
      'db.f10.name': 'Doce de Leite',
      'db.f10.desc': 'Manjar · El favorito latinoamericano hecho cóctel cremoso.',

      // ---------- Pink Moon ----------
      'pm.label': 'Vinos Frisantes & Lifestyle · Comary',
      'pm.tagline': '"Ligero, refrescante y hecho para celebrar." Una propuesta pensada para transformar los encuentros cotidianos en momentos especiales, con una personalidad fresca y llena de estilo.',
      'pm.abv': '⚠ Graduación alcohólica: 6% Vol.',
      'pm.exclusive': 'Exclusiva Chile: Comercial Amerika',
      'pm.signature': 'Una marca Comary · Distribuida en Chile por Comercial Amerika',
      'pm.caption': 'PINK MOON · MOMENTOS PARA CELEBRAR',
      'pm.promo.badge': 'Comary Brasil • Desde 1952',
      'pm.promo.title': 'Más color, brillo y actitud en cada brindis',
      'pm.promo.text': 'Con un perfil versátil y agradable, Pink Moon combina ligereza, frescura y personalidad en una propuesta diseñada para compartir buenos momentos. Una marca que traduce el estilo de vida joven, social y espontáneo de quienes celebran la vida con más color, brillo y actitud. Con una graduación alcohólica suave, sabor equilibrado y un perfil sencillo, Pink Moon ofrece una experiencia agradable, versátil y refrescante. Sus sabores combinan ligereza y personalidad, lo que convierte el producto en ideal para quienes buscan una bebida práctica, sabrosa y perfecta para compartir buenos momentos.',
      'pm.history': 'Con un perfil versátil y agradable, <strong>Pink Moon</strong> combina ligereza, frescura y personalidad en una propuesta diseñada para compartir buenos momentos. Una marca que traduce el estilo de vida joven, social y espontáneo de quienes celebran la vida con más color, brillo y actitud. Producida por <strong>Comary</strong> (Brasil, desde 1952) y potenciada en exclusiva en Chile por <strong>Comercial Amerika</strong>.',
      'pm.portfolio.title': 'Portafolio Oficial Pink Moon',
      'pm.portfolio.note': 'Variedad de perfiles refrescantes adaptados para cada ocasión y canal de distribución.',
      'pm.p1.formats': '750ml • Lata 310ml • 275ml',
      'pm.p1.name': 'Rosado (Rosé)',
      'pm.p1.desc': 'El clásico de la marca. Coloración rosada delicada, burbujas suaves y notas de frutos rojos y flores. Formato Botella 750ml, Lata 310ml y 275ml.',
      'pm.p2.formats': '750ml • Lata 310ml',
      'pm.p2.name': 'Melocotón (Pêssego)',
      'pm.p2.desc': 'Fresco toque de durazno con la vivacidad del frisante suave. Ideal bien helado para tardes de terraza. Formato 750ml y Lata 310ml.',
      'pm.p3.formats': '750ml • 275ml',
      'pm.p3.name': 'Blanco (Blanc)',
      'pm.p3.desc': 'Perfil limpio, equilibrado y muy refrescante. Notas cítricas y tropicales sutiles. Disponible en 750ml y 275ml.',
      'pm.p4.formats': '0.0% Alcohol • Red Draft',
      'pm.p4.name': 'Zero Álcool & Red Draft',
      'pm.p4.desc': 'Opciones sin alcohol y coctelería ligera para sumar a todos tus invitados a la celebración sin perder el estilo Pink Moon.',
      'pm.occasion.title': 'De lo cotidiano a las grandes celebraciones',
      'pm.occasion.note': 'Cobertura completa de categorías y momentos de consumo con una experiencia sin complicaciones.',
      'pm.occ1.title': 'Fiestas y Encuentros',
      'pm.occ1.text': 'El formato ideal en lata o botella para compartir con amigos, con un sabor equilibrado que agrada a todos los paladares.',
      'pm.occ2.title': 'Terraza / After Office',
      'pm.occ2.text': 'Luz cálida de atardecer, buena música y la frescura de un frisante servido siempre bien helado.',
      'pm.occ3.title': 'Canal HORECA y Retail',
      'pm.occ3.text': 'Disponible en supermercados, tiendas de conveniencia, botillerías y el canal tradicional chileno gracias a Comercial Amerika.',
      'pm.cta2.title': '¿Quieres comercializar Pink Moon en tu negocio?',

      // ---------- Ficha comercial (común a ambas marcas) ----------

      // ---------- Política de privacidad ----------
      'page.privacy.title': 'Política de Privacidad | Comercial Amerika SpA',
      'page.privacy.desc': 'Cómo Comercial Amerika SpA trata tus datos personales: finalidad, consentimiento, derechos ARCO y conservación, según las leyes chilenas 19.628 y 21.719.',
      'privacy.label': 'Legal',
      'privacy.h1': 'Política de privacidad',
      'privacy.s1.title': 'Responsable',
      'privacy.s1.text': '<strong>Comercial Amerika SpA</strong>, con domicilio y centro de distribución en Colina, Región Metropolitana, Chile, es el responsable del tratamiento de los datos personales del usuario. Correo de contacto: contacto@comercialamerika.cl.',
      'privacy.s2.title': 'Datos tratados',
      'privacy.s2.text': 'Los datos que entregas voluntariamente en el formulario de contacto: nombre, empresa, cargo, correo electrónico, teléfono, país, tipo de perfil y el contenido de tu mensaje. No solicitamos datos sensibles (salud, origen étnico, creencias, etc.). No recopilamos conscientemente datos de personas menores de 18 años.',
      'privacy.s3.title': 'Finalidad y base legal',
      'privacy.s3.text': 'Usamos tus datos únicamente para responder tu consulta, coordinar una reunión o enviar cotizaciones relacionadas con la importación y distribución de alimentos y bebidas. La base legal es tu <strong>consentimiento expreso e informado</strong>, otorgado al marcar la casilla de aceptación del formulario. No usamos tus datos para decisiones automatizadas ni perfiles de comportamiento.',
      'privacy.s4.title': 'Plazo de conservación',
      'privacy.s4.text': 'Los datos personales se conservarán mientras se mantenga la relación comercial o durante los años necesarios para cumplir con las obligaciones legales. Los datos se eliminarán cuando dejen de ser necesarios para la finalidad para la que fueron recogidos.',
      'privacy.s5.title': 'Terceros y transferencia internacional',
      'privacy.s5.text': 'Tus datos pueden compartirse con nuestros fabricantes aliados cuando tu consulta trata sobre distribuir una marca en Chile (por ejemplo, Comary en Brasil o Vieira en Portugal). Estas comunicaciones son las mínimas necesarias y se realizan con tu consentimiento. No vendemos ni cedemos tus datos a terceros con fines publicitarios.',
      'privacy.s6.title': 'Derechos ARCO',
      'privacy.s6.text': 'Puedes solicitar en cualquier momento: (a) acceso a tus datos; (b) rectificación o modificación; (c) cancelación o eliminación; y (d) oposición a su tratamiento. Para ejercer tus derechos, escribe a contacto@comercialamerika.cl con el asunto "Protección de datos"; la respuesta se enviará dentro de 10 días hábiles. También puedes solicitar, conforme a la Ley 21.719, información sobre el alcance y características del tratamiento de tus datos.',
      'privacy.s7.title': 'Seguridad y registro de consentimiento',
      'privacy.s7.text': 'El sitio viaja por una conexión cifrada (HTTPS) y el acceso a los datos está restringido al equipo comercial de la empresa. Cada envío del formulario registra fecha, hora, la versión del texto de consentimiento aceptado y la verificación de la casilla de aceptación, en un registro interno de consentimientos destinado a dar trazabilidad del cumplimiento de las Leyes 19.628 y 21.719.',
      'privacy.s8.title': 'Medición y cookies',
      'privacy.s8.text': 'El sitio usa Google Analytics 4 y Google Tag Manager para medir, de forma agregada, las visitas y el uso de sus secciones (por ejemplo, envíos del formulario y clics en WhatsApp). Estas herramientas pueden instalar cookies en tu navegador; puedes desactivarlas en la configuración de tu navegador sin perder funcionalidad del sitio.',
      'privacy.s9.title': 'Cambios en la política',
      'privacy.s9.text': 'Esta política puede actualizarse; cualquier cambio se publicará en esta misma página, indicando la versión correspondiente al final del texto.',
      'privacy.version': 'Versión 1.0 · Publicada el 27 de octubre de 2026 · Comercial Amerika SpA',
      'page.cookies.title': 'Política de Cookies | Comercial Amerika SpA',
      'page.cookies.desc': 'Cómo Comercial Amerika SpA usa cookies en su sitio: cookies técnicas y de medición, gestión desde tu navegador y desde el aviso de cookies.',
      'cookiep.label': 'Legal',
      'cookiep.h1': 'Política de cookies',
      'cookiep.s1.title': '1. Qué son las cookies',
      'cookiep.s1.text': 'Las cookies son pequeños archivos de texto que los sitios web almacenan en el dispositivo del usuario cuando los visita. Se utilizan para recordar preferencias, mejorar la experiencia de navegación y obtener información estadística sobre el uso del sitio.',
      'cookiep.s2.title': '2. Tipos de cookies que utilizamos',
      'cookiep.s2.text': '<strong>Cookies técnicas:</strong> necesarias para el funcionamiento básico del sitio web y no requieren el consentimiento del usuario. <strong>Cookies de análisis o medición:</strong> nos permiten cuantificar el número de usuarios y realizar la medición y análisis estadístico de la utilización que hacen los usuarios del sitio web (Google Analytics 4 y Google Tag Manager).',
      'cookiep.s3.title': '3. Gestión de cookies',
      'cookiep.s3.text': 'Al llegar por primera vez, el aviso de cookies te permite <strong>aceptar</strong> o <strong>rechazar</strong> las cookies de medición antes de que se instale alguna. Puedes cambiar tu decisión borrando los datos del sitio en tu navegador o configurándolo para rechazar las cookies; si las desactivas, algunas funciones podrían no estar disponibles. Más información sobre el tratamiento de tus datos en la <a href="privacidad.html">política de privacidad</a>.',
      'cookiep.s4.title': '4. Actualización de la política',
      'cookiep.s4.text': 'Comercial Amerika SpA se reserva el derecho de modificar esta política de cookies para adaptarla a novedades legislativas o cambios en nuestras prácticas. Recomendamos revisar esta política periódicamente.',
      'footer.cookies': 'Política de cookies',
      'consent.link': 'Información básica sobre protección de datos',
      'consent.title': 'Información básica sobre protección de datos',
      'consent.intro': 'Conoce cómo tratamos y protegemos tu información personal.',
      'consent.footer': 'Tu información personal merece un tratamiento responsable.',
      'consent.r1.lbl': 'Responsable del Tratamiento:',
      'consent.r1.val': 'Comercial Amerika SpA, RUT 78.474.378-0, domiciliado en Colina, Región Metropolitana, Chile.',
      'consent.r2.lbl': 'Finalidad Principal:',
      'consent.r2.val': 'Gestionar su solicitud de contacto, procesar su solicitud de compra o distribución y/o responder a las consultas enviadas a través de este formulario.',
      'consent.r3.lbl': 'Bases de Licitud:',
      'consent.r3.val': 'Ejecución del contrato/servicio solicitado y su consentimiento explícito.',
      'consent.r4.lbl': 'Plazo de Conservación:',
      'consent.r4.val': 'Los datos se conservarán únicamente durante el tiempo necesario para cumplir con la finalidad descrita o mientras no solicite su supresión.',
      'consent.r5.lbl': 'Destinatarios:',
      'consent.r5.val': 'No se cederán datos a terceros salvo obligación legal o proveedores tecnológicos esenciales bajo estricto contrato de encargo de tratamiento.',
      'consent.r6.lbl': 'Derechos (ARSOP):',
      'consent.r6.val': 'Usted tiene derecho a acceder, rectificar, suprimir, oponerse y solicitar la portabilidad de sus datos personales, así como a revocar este consentimiento en cualquier momento. Puede ejercerlos enviando un correo electrónico a contacto@comercialamerika.cl. Para más detalle, consulte nuestra Política de Privacidad completa.',
      'consent.accept': 'Aceptar y continuar',
      'contact.form.comms': 'Autorizo el envío de comunicaciones comerciales, ofertas y novedades de Comercial Amerika SpA por medios electrónicos (Email/WhatsApp). Opcional.',
      'cookies.text': 'Usamos cookies de medición (Google Analytics) para entender cómo se usa el sitio y mejorarlo. Puedes aceptar o rechazar; más detalles en la <a href="privacidad.html">política de privacidad</a>.',
      'cookies.accept': 'Aceptar',
      // ---------- Nosotros: stepper (textos ES) ----------
      'ns.l1': '1. Importación',
      'ns.l2': '2. Cumplimiento',
      'ns.l3': '3. Estrategia',
      'ns.l4': '4. Distribución',
      'ns.l5': '5. Punto de Venta',
      'ns.b1': 'ETAPA 01 DE 05',
      'ns.b2': 'ETAPA 02 DE 05',
      'ns.b3': 'ETAPA 03 DE 05',
      'ns.b4': 'ETAPA 04 DE 05',
      'ns.b5': 'ETAPA 05 DE 05',
      'ns.t1': 'Importación',
      'ns.t2': 'Registros y cumplimiento',
      'ns.t3': 'Estrategia comercial',
      'ns.t4': 'Distribución',
      'ns.t5': 'Ejecución en el punto de venta',
      'ns.d1': 'Trabajamos directo con fabricantes de trayectoria —como Comary (Brasil, 1952) y Vieira (Portugal, 1943)— y gestionamos cada detalle de comercio exterior y aduanas.',
      'ns.d2': 'Despejamos el camino regulatorio: registros ante SAG, SEREMI de Salud, Aduanas y municipio, con etiquetado y sellos adecuados desde el origen.',
      'ns.d3': 'Construimos el posicionamiento de tu marca y una estrategia comercial a medida: precios por canal, surtido y planes promocionales que venden.',
      'ns.d4': 'Ponemos tu producto en supermercados, conveniencia, canal tradicional, mayoristas, HORECA y tiendas especializadas, con logística propia desde Colina.',
      'ns.d5': 'Activamos la marca donde se decide la compra: lanzamientos, degustaciones, exhibiciones y trade marketing para que rote y se vuelva a comprar.',
      'ns.tt1': 'Comercio Exterior',
      'ns.tt2': 'Regulación Local',
      'ns.tt3': 'Posicionamiento',
      'ns.tt4': 'Logística Central',
      'ns.tt5': 'Trade Marketing',
      'ns.td1': 'Trato directo con orígenes en Brasil y Portugal.',
      'ns.td2': 'Cumplimiento normativo y rotulado desde origen.',
      'ns.td3': 'Marca, precio y estrategia por canal.',
      'ns.td4': 'Despacho directo desde bodega en Colina.',
      'ns.td5': 'Rotación activa y recompra en góndola.',
      'ns.prev': 'Anterior',
      'ns.next': 'Siguiente etapa →',
      'ns.first': 'Volver al inicio',
      'bg.badge': 'Portafolio exclusivo Chile',
      'bg.view.label': 'Cambiar vista de la galería',
      'bg.view.accordion': 'Acordeón',
      'bg.view.grid': 'Mosaico',
      'bg.filters.label': 'Filtrar por categoría',
      'bg.open': 'Ver ficha completa',
      'bg.open.sr': 'Ver ficha de',
      'bg.details': 'Ver detalles',
      'bg.close': 'Cerrar',
      'bg.modal.about': 'Sobre la marca',
      'bg.modal.origin': 'Origen',
      'bg.modal.maker': 'Fabricante',
      'bg.modal.dist': 'Distribución',
      'bg.modal.dist.val': 'Exclusiva en Chile',
      'bg.modal.flavors': 'Sabores',
      'bg.modal.page': 'Ver página de la marca',
      'bg.modal.cta': '¿Interesado en comercializar esta marca?',
      'bg.modal.btn': 'Consultar por esta marca',
      'bg.about.drinkball': 'Cócteles listos para disfrutar, directo desde Brasil. De Comary, fabricante con más de 70 años de historia (1952).',
      'bg.about.pinkmoon': 'Frisante de Comary, Brasil. Lema de la marca: “Experiencia y estilo”.', 'bg.country.br': 'Brasil',
      'bg.country.es': 'España',
      'route.lbl.multicanal': 'Estrategia Multicanal',
      'route.lbl.infra': 'Infraestructura',
      'route.lbl.proceso': 'Proceso Integrado',
      'route.lbl.soporte': 'Soporte Continuo',
      'route.map.badge': 'RED CONO SUR',
      'cookies.reject': 'Rechazar',
      'cta.brand': 'Potencia tu marca',
      'cta.buy': 'Quiero comprar',
      'cta.meeting': 'Agenda una reunión',
      'stats.n1': '+30',
      'stats.n1.lbl': 'años de experiencia en consumo masivo',
      'stats.n2': '6',
      'stats.n2.lbl': 'canales de venta',
      'stats.n3': '2',
      'stats.n3.lbl': 'marcas en portafolio',
      'stats.n4': 'Chile',
      'stats.n4.lbl': 'con proyección a Perú y Argentina',
      'how.label': 'Cómo potenciamos tu marca',
      'manifesto.title': 'Tu marca. Nuestro mercado. Resultados reales.',
      'manifesto.text': 'Somos una empresa especializada en potenciar marcas. Combinamos más de 30 años de experiencia comercial con la agilidad de una operación moderna para posicionar tus productos en el mercado, ampliar su distribución y generar crecimiento sostenible.',
      'close.title': '¿Tienes una marca con potencial? Hagámosla crecer juntos.',
      'close.text': 'Cuéntanos de tu producto y te mostramos cómo llevarlo a la góndola en Chile.',
      'route.map.title': 'Chile · proyección Perú y Argentina',
      'route.map.sub': 'Centro Operativo Principal: Colina, Región Metropolitana',
      'about.mission.short': 'Potenciamos marcas de calidad para que crezcan, se posicionen y lleguen a más consumidores.',
      'about.vision.short': 'Ser la potenciadora de marcas de referencia en Chile y la región.',
      'about.values.title': 'Nuestros valores',
      'about.v1.title': 'Excelencia',
      'about.v1.text': 'Hacemos las cosas bien, con método, medición y estándares altos.',
      'about.v2.title': 'Cercanía',
      'about.v2.text': 'Conocemos a las personas detrás de cada marca y la tratamos como propia.',
      'about.v3.title': 'Agilidad',
      'about.v3.text': 'Decidimos rápido y ejecutamos sin burocracia.',
      'about.v4.title': 'Transparencia',
      'about.v4.text': 'Acuerdos claros, información abierta y reportes que se entienden.',
      'about.v5.title': 'Resultados',
      'about.v5.text': 'Medimos nuestro éxito por el crecimiento real de las marcas que potenciamos.',
    },

    en: {
      // ---------- Navigation / common ----------
      'nav.home': 'Home',
      'nav.brands': 'Our brands',
      'nav.about': 'About us',
      'nav.route': 'Route to market',
      'nav.contact': 'Contact us',
      'nav.distribute': 'Distribute with us',
      'nav.menu': 'Menu',
      'nav.menu.close': 'Close menu',
      'aria.lang': 'Select language',
      'aria.nav.left': 'Main navigation left',
      'aria.nav.right': 'Main navigation right',
      'aria.stats': 'Comercial Amerika figures',
      'common.close': 'Close',
      'footer.legal': 'Comercial Amerika SpA · Tax ID 78.474.378-0',
      'footer.contactline': 'contacto@comercialamerika.cl · Phone/WhatsApp +56 9 5610 0329',
      'footer.location': 'Colina, Metropolitan Region · Chile',
      'footer.rights': '© 2026 Comercial Amerika SpA. All rights reserved.',
      'footer.age': 'Sale of alcohol prohibited to under 18s.',
      'footer.privacy': 'Privacy policy',
      'footer.nav.title': 'Navigation',
      'footer.team': 'Our team',
      'footer.brands.title': 'Our brands',
      'footer.allbrands': 'All our brands',
      'footer.info.title': 'Information',
      'footer.contactinfo': 'Contact information',
      'footer.description': 'We empower brands and connect products with new markets. We develop commercial opportunities to drive their growth.',
      'wa.aria': 'Message us on WhatsApp',

      // ---------- Page titles / SEO ----------
      'page.index.title': 'Development and distribution of consumer brands | Comercial Amerika SpA',
      'page.index.desc': 'We empower food and beverage brands in Chile: development, positioning, distribution and point-of-sale execution. Over 30 years of experience.',
      'page.brands.title': 'Our brands | Comercial Amerika SpA',
      'page.brands.desc': 'Comercial Amerika brand portfolio: DrinkBall and Pink Moon, ready-to-drink cocktails from Comary, Brazil. Brand development and distribution in Chile.',
      'page.about.title': 'About us | Comercial Amerika SpA',
      'page.about.desc': 'Brand accelerator with more than 30 years of experience developing, positioning and growing consumer brands in Chile. Meet Comercial Amerika SpA\'s story, mission, vision and values.',
      'page.route.title': 'Route to market | Comercial Amerika SpA',
      'page.route.desc': 'We take your brand from origin to shelf: importing, regulations, channel strategy, distribution and point-of-sale activation. One partner for the whole journey.',
      'page.contact.title': 'Contact us | Comercial Amerika SpA',
      'page.contact.desc': 'Contact us: whether you are a brand looking for a distributor or a customer looking to buy, we reply within 24 business hours. Colina, Metropolitan Region, Chile.',
      'page.team.title': 'Management team | Comercial Amerika SpA',
      'page.team.desc': 'Meet the management team of Comercial Amerika SpA and the people behind our brands.',
      'page.drinkball.title': 'DrinkBall | Comercial Amerika SpA',
      'page.drinkball.desc': 'DrinkBall: ready-to-drink cocktails (RTD) from Comary, Brazil, distributed exclusively in Chile by Comercial Amerika. Innovation and attitude.',
      'page.pinkmoon.title': 'Pink Moon | Comercial Amerika SpA',
      'page.pinkmoon.desc': 'Pink Moon: frisante sparkling drink from Comary, Brazil, distributed exclusively in Chile by Comercial Amerika. Experience and style.',

      // ---------- Home ----------
      'hero.label': 'Chile · Peru · Argentina',
      'hero.title': 'We bring great brands to the tables of Chile and the Andean Region',
      'hero.subtitle': 'We develop, position and sell mass-market consumer brands in Chile and the region.',
      'hero.cta1': 'See our brands',
      'hero.cta2': 'Distribute with us',
      'hero.image': '[SHORT VIDEO OR CAROUSEL: shelf with products · Colina warehouse · DrinkBall toast]',
      'hero.rot1': 'Real coverage: supermarkets, convenience, traditional trade and HORECA',
      'hero.kicker': 'Mass-market brand developer',
      'hero.headline': 'We grow brands that conquer the shelf',
      'impact.title': 'Brands that sell themselves',
      'impact.cta': 'See the portfolio',
      'paths.brand.title': 'I am a brand or manufacturer',
      'paths.brand.text': 'I am looking for a business partner to position my food or beverage brand in Chile.',
      'paths.brand.cta': 'See how we work',
      'paths.client.title': 'I am a customer',
      'paths.client.text': 'I want to buy for my supermarket, grocery store, convenience store or HORECA business.',
      'paths.client.cta': 'I want to buy',
      'stats.years.lbl': 'years in mass consumption',
      'stats.countries.lbl': 'countries',
      'stats.brands.lbl': 'brands in portfolio',
      'stats.sku.lbl': 'SKUs in major chains',
      'stats.pv.lbl': 'points of sale',
      'allies.title': 'We work with',
      'brands.title': 'Our brands',
      'brands.note': 'White logos on a uniform background (request material from Comary and other manufacturers).',
      'brands.drinkball.name': 'DrinkBall',
      'brands.drinkball.desc': 'Ready-to-drink cocktails · RTD',
      'brands.pinkmoon.name': 'Pink Moon',
      'brands.pinkmoon.desc': 'Sparkling drink · Experience and style', 'featured.label': 'Launch',
      'featured.title': 'DrinkBall and Pink Moon arrive in Chile',
      'featured.text': 'At Comercial Amerika, we are proud to announce our strategic partnership with Comary—a Brazilian company specializing in the export of tropical beverages—as they look to expand their presence and bring their products to the Chilean market. This collaboration represents a new opportunity to connect markets, introduce new flavors to Chile, and strengthen commercial ties between the two countries. Comercial Amerika and Comary: growing together and creating new opportunities!',
      'featured.cta': 'Discover DrinkBall',
      'featured.image': '[LIFESTYLE PHOTO: seaside terrace, people over 25]',
      'how.title': 'We drive brands. We create opportunities. We generate growth.',
      'how.item1.title': 'Development and positioning',
      'how.item1.text': "We strengthen each brand's proposition, identifying its potential and building a strategy to stand out and connect with new consumers.",
      'how.item2.title': 'Expansion and commercial opportunities',
      'how.item2.text': 'We connect brands with new markets, channels and customers, developing opportunities that drive their growth and commercial presence.',
      'how.item3.title': 'Visibility and connection with the consumer',
      'how.item3.text': "We boost each brand's presence through display strategies, activations and actions that generate recognition and preference.",
      'how.item4.title': 'Strategic growth partners',
      'how.item4.text': 'We work alongside each brand with commitment, closeness and management focused on building solid relationships and sustainable results.',
      'cta.title': 'Have a brand with potential? Let\'s talk.',
      'cta.button': 'Book a meeting',

      // ---------- Our brands (index page) ----------
      'bp.h1': 'Brands we grow',
      'bp.intro': 'Every brand in our portfolio has its own plan: positioning, channels, pricing and point-of-sale execution. Meet the brands we represent in Chile.',
      'bp.filter.all': 'All',
      'bp.filter.alcohol': 'Alcoholic beverages',
      'bp.filter.noalcohol': 'Non-alcoholic beverages',
      'bp.filter.alimentos': 'Food and pets',
      'bp.card.drinkball': 'Ready-to-drink cocktails · Comary, Brazil · "Innovation and attitude"',
      'bp.card.pinkmoon': 'Sparkling drink · Comary, Brazil · "Experience and style"', 'representa.title': 'Want your brand to be next?',
      'representa.text': 'We look for food and beverage brands with proven quality and growth potential. We bring market knowledge, the commercial network and execution.',

      // ---------- About us ----------
      'about.label': 'About us',
      'about.h1': 'We are the brand accelerator that turns potential into growth',
      'about.image': '[CORPORATE PHOTO / VIDEO]',
      'about.history.title': 'Our history',
      'about.history.p1': '<strong>Comercial Amerika SpA</strong> is a Chilean company that develops, positions and distributes food and beverage brands, taking them from origin to the consumer in Chile and the Andean Region.',
      'about.history.p2': 'We were born from more than 30 years leading commercial teams at multinational consumer goods companies, in Chile and abroad. Today we put that experience at the service of manufacturers who are not just looking for a distributor, but for a partner to develop, position and grow their brand.',
      'about.dedicated.title': 'How we accelerate your brand',
      'about.dedicated.sub': 'Every stage adds up. We manage the entire journey, from origin to shelf, so your brand goes further.',
      'about.mission.eyebrow': 'Purpose',
      'about.vision.eyebrow': 'Aspiration',
      'about.ded1.title': 'Import',
      'about.ded1.text': 'We work directly with established manufacturers —such as Comary (Brazil, 1952) and Vieira (Portugal, 1943)— and manage every detail of foreign trade and customs.',
      'about.ded2.title': 'Registration and compliance',
      'about.ded2.text': 'We clear the regulatory path: registrations with SAG, the Health Authority (SEREMI), Customs and the municipality, with labeling and seals adapted at origin.',
      'about.ded3.title': 'Positioning and commercial strategy',
      'about.ded3.text': 'We build your brand\'s positioning and a tailored commercial strategy: per-channel pricing, assortment and promotional plans that sell.',
      'about.ded4.title': 'Distribution',
      'about.ded4.text': 'We place your product in supermarkets, convenience stores, traditional trade, wholesalers, HORECA and specialty stores, with our own logistics from Colina.',
      'about.ded5.title': 'Point-of-sale execution',
      'about.ded5.text': 'We activate the brand where the purchase decision happens: launches, tastings, displays and trade marketing to drive rotation and repeat purchase.',
      'about.mission': 'Mission',
      'about.mission.text': 'We empower food and beverage brands to reach their full potential. We combine commercial strategy, hands-on execution and close relationships to connect quality products with the consumers looking for them, creating value for our clients, partners and teams.',
      'about.vision': 'Vision',
      'about.vision.text': 'To be the benchmark brand accelerator in Chile and the region, recognized for turning brands with potential into solid businesses and for the quality of the relationships we build with manufacturers, customers and consumers.',
      'about.why.title': 'Why Amerika',
      'about.why.text': 'Our difference is not in <em>what</em> we sell, but in <em>how</em> we grow a brand. We combine market intelligence, speed to spot trends and an advisory relationship —not just a sales one— with the brands and clients we work with.',
      'about.why1': 'Market intelligence',
      'about.why2': 'Speed (time to market)',
      'about.why3': 'Advisory, not just sales',
      'about.why4': 'Long-term relationships',
      'about.r1.lbl': 'growth in core lines vs. previous year',
      'about.r2.lbl': 'SKUs incorporated in major chains',
      'about.r3.lbl': 'new SKUs developed',
      'about.ally.title': 'Partners',
      'about.ally.intro': 'Established manufacturers that trust us to develop and grow their brands in Chile.',
      'about.ally.comary': 'Brazil · Since 1952',
      'about.ally.comary.name': 'Comary',
      'about.ally.vieira': 'Portugal · Since 1943',
      'about.ally.vieira.name': 'Vieira',
      'about.team.title': 'Management team',
      'about.team.text': 'A team that has managed brands and channels at multinational consumer goods companies, now at the service of your brand\'s growth.',
      'about.team.cta': 'Meet the team',
      'about.team.modal.title': 'Management team',
      "about.ally.eyebrow": "Our network of partners",
      "about.ally.comary.description": "A Brazilian beverage company with more than seven decades of experience. Its multi-category portfolio includes recognized brands, combining industrial expertise, innovation and market knowledge to reach different consumers and consumption occasions.",
      "about.ally.vieira.description": "A Portuguese company with a long-standing tradition in the food industry. Specializing in biscuits, almonds and confectionery, it combines tradition, quality and innovation to develop products for international markets.",
      "about.ally.visit": "Discover the company",
      "about.ally.closing": "We believe in relationships that create long-term value: connecting international experience with real growth opportunities in the Chilean market.",
      'role.commercial': 'Commercial Manager',
      'role.ceo': 'General Manager',
      'role.community': 'Community Manager',
      'role.supply': 'Supply Manager',
      'eq.eyebrow': 'COMERCIAL AMERIKA',
      'eq.h1': 'The people who power your brands',
      'eq.intro': 'A team committed to developing, positioning and growing brands in the Chilean market.',
      'eq.team.label': 'OUR TEAM',
      'eq.team.title': 'Management team',
      'eq.team.text': 'Experience, commercial judgement and commitment at the service of every brand.',
      'eq.back': 'Back to About us',

      // ---------- Route to market ----------
      'route.h1': 'Your brand, from origin to shelf: we open the market and turn it into sales',
      'route.intro': 'We boost your brand at every stage of the journey to market: importation, regulatory compliance, channel-specific strategy, distribution, and point-of-sale activation. A single partner, focused on growing your brand.',
      'route.channels.title': 'Channels we serve',
      'route.ch1.title': 'Supermarkets',
      'route.ch1.text': 'We work with the country\'s leading chains and regional supermarkets, ensuring display, availability and flawless execution in every store.',
      'route.ch2.title': 'Convenience stores',
      'route.ch2.text': 'Quick-purchase outlets with high daily turnover. The ideal channel for RTD beverages, snacks and impulse products.',
      'route.ch3.title': 'Traditional trade and wholesalers',
      'route.ch3.text': 'Neighborhood stores, liquor stores and wholesalers. Capillary coverage so your brand is present in every district.',
      'route.ch4.title': 'HORECA',
      'route.ch4.text': 'Hotels, restaurants, bars and cafés. Consumption occasions that build brand value and loyalty.',
      'route.ch5.title': 'Specialized stores',
      'route.ch5.text': 'Gourmet, niche and health stores. A direct space to connect with premium and demanding consumers.',
      'route.ch6.title': 'E-commerce',
      'route.ch6.text': 'Digital platforms, marketplaces and quick-delivery apps to reach the end customer directly.',
      'route.coverage.title': 'Regional coverage and logistics',
      'route.coverage.p1': 'We operate from our storage and distribution center in <strong>Colina, Metropolitan Region</strong>. From there we coordinate importing and distribution in <strong>Chile, with expansion planned for Peru and Argentina</strong>.',
      'route.coverage.p2': '[To complete: chains and channels currently covered per country, and what is coming.]',
      'route.coverage.image': '[MAP OF CHILE, PERU AND ARGENTINA: current and projected coverage]',
      'route.services.title': 'Services that add value',
      'route.srv1.title': 'Marketing and trade marketing',
      'route.srv1.text': 'Launches, tastings, activations and trade fair presence to make your brand known.',
      'route.srv2.title': 'Regulatory advisory',
      'route.srv2.text': 'We sort out Chilean labeling and registrations from the country of origin, without slowing your market entry.',
      'route.srv3.title': 'Sales and rotation reports',
      'route.srv3.text': 'Regular sales and rotation reports so you decide with data, not intuition.',
      "route.step2.text": "We manage registrations, authorizations and regulatory requirements to sell your product in Chile, including local labeling and seals adapted at origin.",
      'route.steps.title': 'How we work with your brand',
      'route.step1.title': 'Brand and market assessment',
      'route.step1.text': "We analyze your product's potential, local competition and real opportunities in every channel before taking a single step.",
      'route.step2.title': 'Registrations and regulatory compliance',
      'route.step3.title': 'Commercial strategy and channel pricing',
      'route.step3.text': 'We define the price architecture, the right assortment and a promotional plan tailored to each customer.',
      'route.step4.title': 'Entry into retail chains and efficient distribution',
      'route.step4.text': 'We negotiate retail entry and ensure continuous distribution from our logistics center in Colina.',
      'route.step5.title': 'Point-of-sale execution and marketing',
      'route.step5.text': 'Activations, launches, tastings and trade marketing to drive rotation and repeat purchase.',
      'route.model.title': 'Transparent agreement model:',
      'route.model.text': ' Commercial terms (margins, deadlines and service commitments) are discussed in a meeting with each brand.',
      'route.trends.title': 'What we see in the market',
      'route.trends.subtitle': 'We read the market and adapt your brand\'s strategy to what consumers are really asking for.',
      'route.trend1.title': 'Convenience',
      'route.trend1.text': 'More prepared foods, online shopping and home delivery: convenience leads.',
      'route.trend2.title': 'Health and wellness',
      'route.trend2.text': 'Consumers look for healthy products, with clear labels and informed decisions.',
      'route.trend3.title': 'Value for money',
      'route.trend3.text': 'The price-quality relationship remains decisive, in both modern and traditional channels.',
      'route.cta.title': 'Is your brand ready to grow in Chile?',

      // ---------- Contact ----------
      'contact.h1': 'Let\'s talk',
      'contact.subtitle': 'Choose the option that best describes you in the form and we will contact you within 24 business hours.',
      'contact.email.lbl': 'Commercial email',
      'contact.email.val': 'contacto@comercialamerika.cl',
      'contact.phone.lbl': 'Phone / WhatsApp',
      'contact.phone.val': '+56 9 5610 0329',
      'contact.hours': 'Opening hours: Monday to Friday, 9:00 am - 6:00 pm',
      'contact.office.lbl': 'Warehouse and office',
      'contact.office.val': 'Colina, Metropolitan Region · Chile',
      'contact.office.note': 'Distribution and shipping only (not open to the public)',
      'contact.map': '[MAP: warehouse in Colina, Metropolitan Region]',
      'contact.form.perfil': 'I am…',
      'contact.perfil1': 'Brand or manufacturer',
      'contact.perfil2': 'Customer: supermarket, grocery store, HORECA',
      'contact.perfil3': 'Service provider',
      'contact.perfil4': 'Job applicant (work with us)',
      'contact.pais1': 'Chile',
      'contact.pais2': 'Peru',
      'contact.pais3': 'Argentina',
      'contact.pais4': 'Other',
      'contact.form.name': 'Name',
      'contact.ph.name': 'Your name',
      'contact.form.company': 'Company',
      'contact.ph.company': 'Your company\'s name',
      'contact.form.cargo': 'Position',
      'contact.ph.cargo': 'E.g.: Purchasing manager',
      'contact.form.country': 'Country',
      'contact.form.email': 'Email',
      'contact.ph.email': 'email@company.com',
      'contact.form.phone': 'Phone',
      'contact.ph.phone': '+56 9 ...',
      'contact.form.message': 'Message',
      'contact.ph.message': 'Tell us what you need: distribute a brand (manufacturers) or buy our products (customers)',
      'contact.form.privacy': 'I accept the processing of my data under the <a href="#" data-consent-open>privacy policy</a> (Chilean Laws 19.628 and 21.719).',
      'contact.form.submit': 'Send message',
      'contact.alert.success': 'Message sent! We will contact you within 24 business hours.',
      'contact.alert.error': 'There was a problem sending your message. Check your details and try again.',

      // ---------- Age gate (alcohol pages) ----------
      'age.title': 'Content for people over 18',
      'age.text': 'This page shows alcoholic beverages. Their sale is prohibited to people under 18 (Chilean Law 21.363).',
      'age.yes': 'Yes, I am over 18',
      'age.no': 'No, leave',
      'age.badge': '⚠ Alcoholic beverage · For people over 18 only',
      'age.restricted.title': 'Sorry, access restricted',
      'age.restricted.badge': '⛔ Restricted Access',
      'age.restricted.text': 'In accordance with Law 21.363, you must be 18 or older to view content related to alcoholic beverages.',
      'age.retry': 'Verify age again',

      // ---------- DrinkBall ----------
      'db.tagline': 'Ready-to-drink cocktails · "Chill it, open it, enjoy it"',
      'db.cta': 'I want to sell it in my business',
      'db.hero.photo': '[HERO "GELOU, ABRIU, CURTIU": can coming out of an ice bucket, blurred beach background]',
      'db.history': 'DrinkBall is the ready-to-drink cocktail (RTD) line of <strong>Comary</strong>, a Brazilian beverage manufacturer since 1952 (over 70 years of history). Comercial Amerika imports and distributes it exclusively in Chile, bringing innovation, high rotation and value to supermarkets, convenience stores and the traditional channel.',
      'db.portfolio.title': '10 flavors ready to enjoy',
      'db.portfolio.note': 'Known flavors of the DrinkBall line (formats to be confirmed with Comary).',
      'db.f1.name': 'Piña Bolada',
      'db.f1.desc': 'Pineapple and coconut · Tropical',
      'db.f2.name': 'Mate Limao Spritz',
      'db.f2.desc': 'Mate leaves and lime · Classics',
      'db.f3.name': 'Torta de Limao',
      'db.f3.desc': 'Chantilly cream and lemon · Tropical',
      'db.f4.name': 'Caipiríssima',
      'db.f4.desc': 'Lime and mint · The Brazilian classic, ready to serve',
      'db.f5.name': 'Summer Blue',
      'db.f5.desc': 'Mate leaves and lemon · Herbal beach freshness.',
      'db.f.ph1': '[PACKSHOT: Caipiríssima can]',
      'db.f.ph2': '[PACKSHOT: Mate Limao Spritz can]',
      'db.f.ph3': '[PACKSHOT: Piña Bolada can]',
      'db.f.ph4': '[PACKSHOT: Banana Split can]',
      'db.f.ph5': '[PACKSHOT: Doce de Leite can]',
      'db.occasion.title': 'Consumption occasion',
      'db.occasion.note': 'Parties, the beach, festivals, and get-togethers. Wherever and whenever you like—just take off the lid and relax.',
      'db.occ1.title': 'Terrace & Chilean Summer',
      'db.occ1.text': 'Sunset, an ice-filled cooler and 300 ml bottles ready to open and share, no preparation needed.',
      'db.occ1.ph': '[PHOTO: consumption on a seaside terrace]',
      'db.occ2.title': 'Served in a Glass / Real Cocktail',
      'db.occ2.text': 'Balanced recipes with real alcohol content (10% - 14%), ideal served with ice and garnish.',
      'db.occ2.ph': '[PHOTO: served in a glass with ice and garnish]',
      'db.occ3.title': 'HORECA & Retail Channel',
      'db.occ3.text': 'High visual impact on supermarket shelves, convenience stores, liquor stores and the traditional channel.',
      'db.occ3.ph': '[PHOTO: can on the shelf or in a convenience cooler]',
      'db.cta2.title': 'Want to sell DrinkBall in your business?',
      'db.label': 'Ready-to-Drink Cocktails (RTD) · Comary',
      'db.signature': 'A Comary brand · Marketed in Chile by Comercial Amerika',
      'db.caption': 'DRINKBALL · READY TO DRINK',
      'db.toast': 'Redirecting to the Comercial Amerika contact form...',
      'db.ed.flavors': '10 Flavors',
      'db.abv': '⚠ Alcohol by volume: 10% - 14% ABV',
      'db.format': 'Official format: 300 ml · Exclusive in Chile: Comercial Amerika',
      'db.explore': 'Explore all 10 flavors',
      'db.port.label': 'Official Comary Portfolio',
      'db.filter.all': 'All (10)',
      'db.filter.tropical': 'Classics & Tropical (6)',
      'db.filter.creamy': 'Creamy & Milkshakes (4)',
      'db.cat.classic': 'Classic',
      'db.cat.tropical': 'Tropical',
      'db.cat.creamy': 'Creamy',
      'db.occ.label': 'Experience & Point of Sale',
      'db.ed.badge': 'R&D · Innovation & Experience',
      'db.ed.title': 'Chilled, opened, enjoyed: a new consumption category',
      'db.ed.text': 'With a patented round format and high visual impact, DrinkBall stands out for its practicality, convenience and variety of flavors. Its catalog includes classic, tropical and creamy options, with refreshing drinks, sweeter flavors and combinations designed for different palates. A simple, no-fuss proposition for those looking for tasty, affordable ready-to-drink beverages.',
      'db.ed.s1': 'Single-serve format',
      'db.ed.s2': 'ABV Strength',
      'db.ed.s3': 'Tropical & Creamy',
      'db.f6.name': 'Tropical Sunset',
      'db.f6.desc': 'Ginger and lemon · Inspired by the iconic Moscow Mule.',
      'db.f7.name': 'Banana Split',
      'db.f7.desc': 'Banana & cream · Velvety and indulgent texture.',
      'db.f8.name': 'Chocolate Milkshake',
      'db.f8.desc': 'Creamy chocolate · Rich cocoa with smooth dairy notes.',
      'db.f9.name': 'Strawberry Milkshake',
      'db.f9.desc': 'Creamy strawberry · Balanced sweetness and smooth body.',
      'db.f10.name': 'Doce de Leite',
      'db.f10.desc': 'Caramel milk · The Latin American favorite turned creamy cocktail.',

      // ---------- Pink Moon ----------
      'pm.label': 'Sparkling Wines & Lifestyle · Comary',
      'pm.tagline': '"Light, refreshing and made to celebrate." An offering designed to turn everyday gatherings into special moments, with a fresh personality full of style.',
      'pm.abv': '⚠ Alcohol by volume: 6% ABV',
      'pm.exclusive': 'Exclusive in Chile: Comercial Amerika',
      'pm.signature': 'A Comary brand · Distributed in Chile by Comercial Amerika',
      'pm.caption': 'PINK MOON · MOMENTS TO CELEBRATE',
      'pm.promo.badge': 'Comary Brazil • Since 1952',
      'pm.promo.title': 'More color, sparkle and attitude in every toast',
      'pm.promo.text': 'With a versatile and appealing profile, Pink Moon combines lightness, freshness, and personality in an offering designed for sharing good times. It is a brand that captures the youthful, social, and spontaneous lifestyle of those who celebrate life with extra color, sparkle, and attitude. Featuring a mild alcohol content, a balanced flavor, and an accessible profile, Pink Moon delivers a pleasant, versatile, and refreshing experience. Its flavors blend lightness with character, making it the ideal choice for those seeking a convenient, tasty drink—perfect for sharing good moments.',
      'pm.history': 'With a versatile and pleasant profile, <strong>Pink Moon</strong> combines lightness, freshness and personality in a proposal designed for sharing good times. A brand that reflects the young, social and spontaneous lifestyle of those who celebrate life with more color, sparkle and attitude. Produced by <strong>Comary</strong> (Brazil, since 1952) and distributed exclusively in Chile by <strong>Comercial Amerika</strong>.',
      'pm.portfolio.title': 'Official Pink Moon Portfolio',
      'pm.portfolio.note': 'A variety of refreshing profiles tailored for every occasion and distribution channel.',
      'pm.p1.formats': '750ml • Can 310ml • 275ml',
      'pm.p1.name': 'Rosé (Rosado)',
      'pm.p1.desc': 'The brand classic. Delicate pink hue, soft bubbles and notes of red berries and flowers. Available in 750ml Bottle, 310ml Can and 275ml.',
      'pm.p2.formats': '750ml • Can 310ml',
      'pm.p2.name': 'Peach (Pêssego)',
      'pm.p2.desc': 'Fresh peach touch paired with the liveliness of a soft sparkling drink. Ideal ice-cold for terrace afternoons. 750ml and 310ml Can formats.',
      'pm.p3.formats': '750ml • 275ml',
      'pm.p3.name': 'White (Blanc)',
      'pm.p3.desc': 'Clean, balanced and deeply refreshing profile with subtle citrus and tropical notes. Available in 750ml and 275ml.',
      'pm.p4.formats': '0.0% Alcohol • Red Draft',
      'pm.p4.name': 'Zero Alcohol & Red Draft',
      'pm.p4.desc': 'Alcohol-free and light cocktail options to include every guest in the celebration without losing the Pink Moon style.',
      'pm.occasion.title': 'From everyday moments to big celebrations',
      'pm.occasion.note': 'Full coverage of categories and consumption occasions with a hassle-free experience.',
      'pm.occ1.title': 'Parties & Gatherings',
      'pm.occ1.text': 'The ideal can or bottle format to share with friends, featuring a balanced flavor that pleases every palate.',
      'pm.occ2.title': 'Terrace / After Office',
      'pm.occ2.text': 'Warm sunset light, great music and the freshness of a sparkling drink always served ice-cold.',
      'pm.occ3.title': 'HORECA & Retail Channel',
      'pm.occ3.text': 'Available in supermarkets, convenience stores, liquor stores and Chile\'s traditional channel through Comercial Amerika.',
      'pm.cta2.title': 'Want to sell Pink Moon in your business?',

      // ---------- Commercial sheet (common to both brands) ----------

      // ---------- Privacy policy (EN) ----------
      'page.privacy.title': 'Privacy Policy | Comercial Amerika SpA',
      'page.privacy.desc': 'How Comercial Amerika SpA processes your personal data: purpose, consent, ARCO rights and retention, under Chilean Laws 19.628 and 21.719.',
      'privacy.label': 'Legal',
      'privacy.h1': 'Privacy policy',
      'privacy.s1.title': '1. Data controller',
      'privacy.s1.text': '<strong>Comercial Amerika SpA</strong>, with offices and distribution center in Colina, Metropolitan Region, Chile, is the controller of the user\'s personal data. Contact email: contacto@comercialamerika.cl.',
      'privacy.s2.title': '2. Data we process',
      'privacy.s2.text': 'The data you provide voluntarily in the contact form: name, company, position, email, phone, country, profile type and your message contents. We do not request sensitive data (health, ethnic origin, beliefs, etc.). We do not knowingly collect data from people under 18.',
      'privacy.s3.title': '3. Purpose and legal basis',
      'privacy.s3.text': 'We use your data only to answer your inquiry, arrange a meeting or send quotations related to the import and distribution of food and beverages. The legal basis is your <strong>express and informed consent</strong>, given when you check the acceptance box in the form. We do not use your data for automated decisions or behavioral profiling.',
      'privacy.s4.title': '4. Retention period',
      'privacy.s4.text': 'Personal data is kept for as long as the commercial relationship lasts, or for the years necessary to comply with legal obligations. Data is deleted once it is no longer needed for the purpose for which it was collected.',
      'privacy.s5.title': '5. Third parties and international transfer',
      'privacy.s5.text': 'Your data may be shared with our allied manufacturers when your inquiry is about distributing a brand in Chile (for example, Comary in Brazil or Vieira in Portugal). These communications are the minimum necessary and are made with your consent. We do not sell or hand over your data to third parties for advertising purposes.',
      'privacy.s6.title': '6. Your rights (ARCO)',
      'privacy.s6.text': 'You may request at any time: (a) access to your data; (b) rectification or amendment; (c) cancellation or deletion; and (d) opposition to their processing. To exercise your rights, write to contacto@comercialamerika.cl with the subject "Data protection"; the reply will be sent within 10 business days. You may also request, under Law 21.719, information about the scope and characteristics of the processing of your data.',
      'privacy.s7.title': '7. Security and consent record',
      'privacy.s7.text': 'The site travels over an encrypted connection (HTTPS) and data access is restricted to the company\'s commercial team. Every form submission records the date, time, the version of the consent text accepted and the verified acceptance of the checkbox, in an internal consent log intended to provide traceability of compliance with Laws 19.628 and 21.719.',
      'privacy.s8.title': '8. Measurement and cookies',
      'privacy.s8.text': 'The site uses Google Analytics 4 and Google Tag Manager to measure, in aggregate, visits and the use of its sections (for example, form submissions and WhatsApp clicks). These tools may install cookies in your browser; you can disable them in your browser settings without losing any site functionality.',
      'privacy.s9.title': '9. Changes to this policy',
      'privacy.s9.text': 'This policy may be updated; any change will be published on this same page, with the corresponding version indicated at the end of the text.',
      'privacy.version': 'Version 1.0 · Published on October 27, 2026 · Comercial Amerika SpA',
      'page.cookies.title': 'Cookie Policy | Comercial Amerika SpA',
      'page.cookies.desc': 'How Comercial Amerika SpA uses cookies on its site: technical and measurement cookies, management from your browser and from the cookie notice.',
      'cookiep.label': 'Legal',
      'cookiep.h1': 'Cookie policy',
      'cookiep.s1.title': '1. What cookies are',
      'cookiep.s1.text': 'Cookies are small text files that websites store on the user\'s device when they visit them. They are used to remember preferences, improve the browsing experience and obtain statistical information about site usage.',
      'cookiep.s2.title': '2. Types of cookies we use',
      'cookiep.s2.text': '<strong>Technical cookies:</strong> necessary for the basic functioning of the website and do not require the user\'s consent. <strong>Analytics or measurement cookies:</strong> they allow us to quantify the number of users and carry out the measurement and statistical analysis of how users use the website (Google Analytics 4 and Google Tag Manager).',
      'cookiep.s3.title': '3. Cookie management',
      'cookiep.s3.text': 'On your first visit, the cookie notice lets you <strong>accept</strong> or <strong>reject</strong> measurement cookies before any of them is installed. You can change your decision by clearing the site data in your browser or configuring it to reject cookies; if you disable them, some features may not be available. More information about the processing of your data in the <a href="privacidad.html">privacy policy</a>.',
      'cookiep.s4.title': '4. Updates to this policy',
      'cookiep.s4.text': 'Comercial Amerika SpA reserves the right to modify this cookie policy to adapt it to legislative developments or changes in our practices. We recommend reviewing this policy periodically.',
      'footer.cookies': 'Cookie policy',
      'consent.link': 'Basic personal data protection information',
      'consent.title': 'Basic personal data protection information',
      'consent.intro': 'Learn how we handle and protect your personal information.',
      'consent.footer': 'Your personal information deserves responsible handling.',
      'consent.r1.lbl': 'Data controller:',
      'consent.r1.val': 'Comercial Amerika SpA, Tax ID 78.474.378-0, with registered office in Colina, Metropolitan Region, Chile.',
      'consent.r2.lbl': 'Main purpose:',
      'consent.r2.val': 'Handling your contact request, processing your purchase or distribution request and/or answering the queries sent through this form.',
      'consent.r3.lbl': 'Legitimate bases:',
      'consent.r3.val': 'Performance of the requested contract/service and your explicit consent.',
      'consent.r4.lbl': 'Retention period:',
      'consent.r4.val': 'Your data is kept only for as long as needed to fulfil the described purpose, or until you request its deletion.',
      'consent.r5.lbl': 'Recipients:',
      'consent.r5.val': 'No data is handed over to third parties except under a legal obligation or to essential technology providers under a strict data-processing agreement.',
      'consent.r6.lbl': 'Rights (ARSOP):',
      'consent.r6.val': 'You have the right to access, rectify, delete, oppose and request portability of your personal data, as well as to revoke this consent at any time. You may exercise these rights by writing to contacto@comercialamerika.cl. For more detail, see our full Privacy Policy.',
      'consent.accept': 'Accept and continue',
      'contact.form.comms': 'I authorize the sending of commercial communications, offers and news from Comercial Amerika SpA via electronic means (Email/WhatsApp). Optional.',
      'cookies.text': 'We use measurement cookies (Google Analytics) to understand how the site is used and improve it. You can accept or reject; details in the <a href="privacidad.html">privacy policy</a>.',
      'cookies.accept': 'Accept',
      'bg.badge': 'Exclusive portfolio for Chile',
      'bg.view.label': 'Switch gallery view',
      'bg.view.accordion': 'Accordion',
      'bg.view.grid': 'Grid',
      'bg.filters.label': 'Filter by category',
      'bg.open': 'View full profile',
      'bg.open.sr': 'View profile of',
      'bg.details': 'View details',
      'bg.close': 'Close',
      'bg.modal.about': 'About the brand',
      'bg.modal.origin': 'Origin',
      'bg.modal.maker': 'Manufacturer',
      'bg.modal.dist': 'Distribution',
      'bg.modal.dist.val': 'Exclusive for Chile',
      'bg.modal.flavors': 'Flavors',
      'bg.modal.page': 'View brand page',
      'bg.modal.cta': 'Interested in carrying this brand?',
      'bg.modal.btn': 'Ask about this brand',
      'bg.about.drinkball': 'Ready-to-drink cocktails, straight from Brazil. By Comary, a manufacturer with more than 70 years of history (since 1952).',
      'bg.about.pinkmoon': 'Soft sparkling drink by Comary, Brazil. Brand tagline: “Experience and style”.', 'bg.country.br': 'Brazil',
      'bg.country.es': 'Spain',
      'route.lbl.multicanal': 'Multichannel strategy',
      'route.lbl.infra': 'Infrastructure',
      'route.lbl.proceso': 'Integrated process',
      'route.lbl.soporte': 'Ongoing support',
      'route.map.badge': 'SOUTHERN-CONE NETWORK',
      'cookies.reject': 'Reject',
      'about.mission.short': 'We empower quality brands to grow, position themselves and reach more consumers.',
      'about.vision.short': 'To be the benchmark brand accelerator in Chile and the region.',
      'about.values.title': 'Our values',
      'about.v1.title': 'Excellence',
      'about.v1.text': 'We do things right, with method, measurement and high standards.',
      'about.v2.title': 'Closeness',
      'about.v2.text': 'We know the people behind every brand and treat it as our own.',
      'about.v3.title': 'Agility',
      'about.v3.text': 'We decide fast and execute without bureaucracy.',
      'about.v4.title': 'Transparency',
      'about.v4.text': 'Clear agreements, open information and reports that make sense.',
      'about.v5.title': 'Results',
      'about.v5.text': 'We measure our success by the real growth of the brands we empower.',
      'cta.brand': 'Boost your brand',
      'cta.buy': 'I want to buy',
      'cta.meeting': 'Book a meeting',
      'stats.n1': '+30',
      'stats.n1.lbl': 'years of experience in mass consumption',
      'stats.n2': '6',
      'stats.n2.lbl': 'sales channels',
      'stats.n3': '2',
      'stats.n3.lbl': 'brands in portfolio',
      'stats.n4': 'Chile',
      'stats.n4.lbl': 'with expansion planned for Peru and Argentina',
      'how.label': 'How we empower your brand',
      'manifesto.title': 'Your brand. Our market. Real results.',
      'manifesto.text': 'We are a company specialized in empowering brands. We combine over 30 years of commercial experience with the agility of a modern operation to position your products in the market, expand their distribution, and drive sustainable growth.',
      'close.title': 'Have a brand with potential? Let\'s make it grow together.',
      'close.text': 'Tell us about your product and we will show you how to take it to the Chilean shelf.',
      'route.map.title': 'Chile · expansion to Peru and Argentina',
      'route.map.sub': 'Main Operations Center: Colina, Metropolitan Region',

      // ---------- Nosotros: stepper ----------
      'ns.l1': '1. Import',
      'ns.l2': '2. Compliance',
      'ns.l3': '3. Strategy',
      'ns.l4': '4. Distribution',
      'ns.l5': '5. Point of Sale',
      'ns.b1': 'STAGE 01 OF 05',
      'ns.b2': 'STAGE 02 OF 05',
      'ns.b3': 'STAGE 03 OF 05',
      'ns.b4': 'STAGE 04 OF 05',
      'ns.b5': 'STAGE 05 OF 05',
      'ns.t1': 'Import',
      'ns.t2': 'Registrations and compliance',
      'ns.t3': 'Commercial strategy',
      'ns.t4': 'Distribution',
      'ns.t5': 'Point-of-sale execution',
      'ns.d1': 'We work directly with established manufacturers —such as Comary (Brazil, 1952) and Vieira (Portugal, 1943)— and manage every detail of foreign trade and customs.',
      'ns.d2': 'We clear the regulatory path: registrations with SAG, the Health Authority (SEREMI), Customs and the municipality, with labeling and seals adapted at origin.',
      'ns.d3': 'We build your brand\'s positioning and a tailored commercial strategy: per-channel pricing, assortment and promotional plans that sell.',
      'ns.d4': 'We place your product in supermarkets, convenience stores, traditional trade, wholesalers, HORECA and specialty stores, with our own logistics from Colina.',
      'ns.d5': 'We activate the brand where the purchase decision happens: launches, tastings, displays and trade marketing to drive rotation and repeat purchase.',
      'ns.tt1': 'Foreign Trade',
      'ns.tt2': 'Local Regulation',
      'ns.tt3': 'Positioning',
      'ns.tt4': 'Central Logistics',
      'ns.tt5': 'Trade Marketing',
      'ns.td1': 'Direct contact with origins in Brazil and Portugal.',
      'ns.td2': 'Regulatory compliance and labeling from the origin.',
      'ns.td3': 'Brand, price and channel strategy.',
      'ns.td4': 'Direct dispatch from our Colina warehouse.',
      'ns.td5': 'Active rotation and repeat purchase on the shelf.',
      'ns.prev': 'Previous',
      'ns.next': 'Next stage →',
      'ns.first': 'Back to start',
    }
  };

  /* ------------------------------------------
     FRANJA "TRABAJAMOS CON" (index.html) — VERSIÓN ESTÁTICA
     Grid estilo ICB: los logos se pintan una sola vez,
     sin cinta ni animación. Para agregar o quitar una marca,
     edita solo este array (ruta de imagen + texto alternativo).
     ------------------------------------------ */
  const ALLIES_LOGOS = [
    { src: 'img/movimiento/5 (1).svg', alt: 'DrinkBall', href: 'drinkball.html' },
    { src: 'img/movimiento/6 (1).svg', alt: 'Pink Moon', href: 'pink-moon.html' }
  ];

  function initAlliesBand() {
    const grid = document.getElementById('alliesTrack');
    if (!grid) return;
    grid.replaceChildren(...ALLIES_LOGOS.map(function (logo) {
      const a = document.createElement('a');
      a.href = logo.href;
      a.setAttribute('aria-label', logo.alt);
      const img = document.createElement('img');
      img.src = logo.src;
      img.alt = logo.alt;
      img.loading = 'eager';
      img.decoding = 'async';
      a.appendChild(img);
      return a;
    }));
    grid.dataset.ready = 'true';
  }

  /* ------------------------------------------
     SISTEMA MULTI-IDIOMA
     ------------------------------------------ */
  let currentLang = DEFAULT_LANG;
  const missingKeys = new Set();

  function normalizeLang(lang) {
    const code = String(lang || '').toLowerCase().split('-')[0];
    return SUPPORTED_LANGS.indexOf(code) !== -1 ? code : DEFAULT_LANG;
  }

  function readStoredLanguage() {
    try {
      return normalizeLang(window.localStorage.getItem(STORAGE_KEY));
    } catch (error) {
      return DEFAULT_LANG; // file:// puede bloquear localStorage
    }
  }

  function storeLanguage(lang) {
    try {
      window.localStorage.setItem(STORAGE_KEY, lang);
    } catch (error) { /* sin almacenamiento: igual se aplica en esta página */ }
  }

  function getTranslation(lang, key) {
    const dict = translations[lang] || {};
    const fallback = translations[DEFAULT_LANG];

    if (Object.prototype.hasOwnProperty.call(dict, key) && dict[key]) {
      return dict[key];
    }
    if (Object.prototype.hasOwnProperty.call(fallback, key) && fallback[key]) {
      missingKeys.add(lang + ':' + key);
      return fallback[key];
    }
    missingKeys.add(lang + ':' + key + ' (sin texto de respaldo)');
    return null;
  }

  function applyTranslations(lang) {
    const safeLang = normalizeLang(lang);

    // Textos (admite HTML como <br> o <strong>)
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      const value = getTranslation(safeLang, el.getAttribute('data-i18n'));
      if (value === null) return;
      if (el.tagName === 'TITLE') {
        el.textContent = value;
      } else {
        el.innerHTML = value;
      }
    });

    // Placeholders de inputs y textareas
    document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
      const value = getTranslation(safeLang, el.getAttribute('data-i18n-placeholder'));
      if (value !== null) el.setAttribute('placeholder', value);
    });

    // Meta etiquetas (description, og:description, etc.)
    document.querySelectorAll('[data-i18n-content]').forEach(function (el) {
      const value = getTranslation(safeLang, el.getAttribute('data-i18n-content'));
      if (value !== null) el.setAttribute('content', value);
    });

    // Atributos aria-label
    document.querySelectorAll('[data-i18n-aria-label]').forEach(function (el) {
      const value = getTranslation(safeLang, el.getAttribute('data-i18n-aria-label'));
      if (value !== null) el.setAttribute('aria-label', value);
    });

    // Estado visual de los botones ES / EN
    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      const isActive = btn.dataset.lang === safeLang;
      btn.classList.toggle('active', isActive);
      btn.setAttribute('aria-pressed', isActive ? 'true' : 'false');
    });

    document.documentElement.setAttribute('lang', safeLang);
    document.documentElement.setAttribute('data-lang', safeLang);
  }

  function setLanguage(lang) {
    currentLang = normalizeLang(lang);
    applyTranslations(currentLang);
    storeLanguage(currentLang);
    document.dispatchEvent(new CustomEvent('amerika:languagechange', {
      detail: { lang: currentLang }
    }));
    return currentLang;
  }

  function reportMissingKeys() {
    if (!missingKeys.size) return;
    if (window.console && typeof window.console.warn === 'function') {
      window.console.warn(
        '[AMERIKA i18n] Claves sin traducción en el idioma activo: ' +
        Array.from(missingKeys).join(', ')
      );
    }
  }

  function initLanguageButtons() {
    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        setLanguage(btn.dataset.lang);

        // Cerrar el desplegable después de seleccionar
        const dropdown = btn.closest('.lang-switch');

        if (dropdown && dropdown.tagName === 'DETAILS') {
          dropdown.open = false;
        }
      });
    });
  }

  /* ------------------------------------------
     MENÚ MÓVIL
     ------------------------------------------ */

  function initMobileMenu() {
    const toggle = document.querySelector('.mobile-toggle');
    const drawer = document.querySelector('.nav-drawer');
    const backdrop = document.querySelector('.menu-backdrop');

    if (!toggle || !drawer || !backdrop) return;

    function closeMenu(returnFocus) {
      drawer.classList.remove('open');
      document.body.classList.remove('menu-open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.textContent = '☰';

      // En escritorio, la navegación debe estar habilitada.
      if (window.innerWidth > 1024) {
        drawer.removeAttribute('inert');
        drawer.setAttribute('aria-hidden', 'false');
      } else {
        // En móvil, permanece deshabilitada mientras está cerrada.
        drawer.setAttribute('inert', '');
        drawer.setAttribute('aria-hidden', 'true');
      }

      if (returnFocus) toggle.focus();
    }

    function openMenu() {
      drawer.classList.add('open');
      drawer.removeAttribute('inert');
      drawer.setAttribute('aria-hidden', 'false');
      document.body.classList.add('menu-open');
      toggle.setAttribute('aria-expanded', 'true');
      toggle.textContent = '×';
    }

    // Estado inicial según el tamaño de pantalla.
    if (window.innerWidth > 1024) {
      drawer.removeAttribute('inert');
      drawer.setAttribute('aria-hidden', 'false');
    } else {
      closeMenu(false);
    }

    toggle.addEventListener('click', function () {
      if (drawer.classList.contains('open')) {
        closeMenu(false);
      } else {
        openMenu();
      }
    });

    backdrop.addEventListener('click', function () {
      closeMenu(true);
    });

    drawer.querySelectorAll('a, .lang-btn').forEach(function (item) {
      item.addEventListener('click', function () {
        // Solo cerrar el menú cuando estamos en móvil.
        if (window.innerWidth <= 1024) {
          closeMenu(false);
        }
      });
    });

    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && drawer.classList.contains('open')) {
        closeMenu(true);
      }
    });

    window.addEventListener('resize', function () {
      if (window.innerWidth > 1024) {
        closeMenu(false);
      } else if (!drawer.classList.contains('open')) {
        closeMenu(false);
      }
    });
  }


  /* ------------------------------------------
     MODAL DEL EQUIPO (Quiénes somos)
     ------------------------------------------ */
  function initTeamModal() {
    const btnOpen = document.getElementById('btnOpenTeam');
    const btnClose = document.getElementById('btnCloseTeam');
    const modal = document.getElementById('teamModal');
    if (!modal) return;

    let previousFocus = null;

    function openModal() {
      const consentContent = modal.querySelector('.consent-modal-content');
      const consentList = modal.querySelector('.consent-list');

      // Reiniciar únicamente el desplazamiento del desplegable
      if (consentContent) consentContent.scrollTop = 0;
      if (consentList) consentList.scrollTop = 0;

      modal.classList.add('show');
      document.body.style.overflow = 'hidden';

      // Asegurar que el contenido quede arriba después de abrirse
      requestAnimationFrame(() => {
        if (consentContent) consentContent.scrollTop = 0;
        if (consentList) consentList.scrollTop = 0;
      });
    }

    function closeModal() {
      modal.classList.remove('show');
      modal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
      if (previousFocus && typeof previousFocus.focus === 'function') previousFocus.focus();
    }

    if (btnOpen) btnOpen.addEventListener('click', openModal);
    if (btnClose) {
      btnClose.addEventListener('click', closeModal);
      btnClose.addEventListener('keydown', function (event) {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          closeModal();
        }
      });
    }

    modal.addEventListener('click', function (event) {
      if (event.target === modal) closeModal();
    });

    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && modal.classList.contains('show')) closeModal();
    });
  }


  /* MODAL DE CONSENTIMIENTO DE DATOS */
  function initConsentModal() {
    const btnClose = document.getElementById('btnCloseConsent');
    const modal = document.getElementById('consentModal');
    if (!modal) return;

    const btnAccept = document.getElementById('btnConsentAccept');
    const formPrivacidad = document.getElementById('privacidad');

    function openModal() {
      // Reiniciar el desplazamiento del modal y su contenido
      modal.scrollTop = 0;

      const consentContent = modal.querySelector('.consent-modal-content');
      if (consentContent) {
        consentContent.scrollTop = 0;
      }

      modal.classList.add('show');
      document.body.style.overflow = 'hidden';

      // Asegurar que comience desde el principio una vez visible
      requestAnimationFrame(() => {
        modal.scrollTop = 0;

        if (consentContent) {
          consentContent.scrollTop = 0;
        }
      });
    }

    function closeModal() {
      modal.classList.remove('show');
      document.body.style.overflow = '';
    }

    // Aceptar consentimiento
    if (btnAccept) {
      btnAccept.addEventListener('click', function () {
        if (formPrivacidad) formPrivacidad.checked = true;
        closeModal();
      });
    }

    // Abrir desde el enlace de política de privacidad
    document.addEventListener('click', function (event) {
      const link = event.target.closest('[data-consent-open]');
      if (!link) return;

      event.preventDefault();
      event.stopPropagation();

      openModal();
    });

    // Cerrar con la X
    if (btnClose) {
      btnClose.addEventListener('click', closeModal);
    }

    // Cerrar al hacer clic fuera del contenido
    window.addEventListener('click', function (event) {
      if (event.target === modal) closeModal();
    });

    // Cerrar con Escape
    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && modal.classList.contains('show')) {
        closeModal();
      }
    });
  }

  /* ------------------------------------------
     AVISO DE COOKIES (todas las páginas)
     La primera vez, muestra la barra y guarda la decisión
     en localStorage ("amerika-cookies-v1": aceptada / rechazada).
     Con una decisión guardada, la barra ya no vuelve a aparecer,
     pero puede reabrirse con el enlace "Política de cookies"
     del pie de página (data-cookies-open).
     La clave es versionada: al subir la versión (v2, v3...) todos
     los visitantes vuelven a ver el aviso (p. ej. si cambia la
     política), y nunca se arrastran decisiones de pruebas viejas.
     ------------------------------------------ */
  const COOKIES_KEY = 'amerika-cookies-v1';

  /* ------------------------------------------
     GOOGLE ANALYTICS 4 (con consentimiento previo)
     El script de GA solo se instala si el usuario
     aceptó las cookies de medición en el aviso.
     REEMPLAZA 'G-XXXXXXXXXX' por tu ID de medición
     real de Google Analytics (formato G-XXXXXXXXXX).
     ------------------------------------------ */
  // >>> REEMPLAZA por tu ID de medición real de Google Analytics 4 (formato G-XXXXXXXXXX) <<<
  const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX';

  function loadGoogleAnalytics() {
    // Sin ID configurado (o ya cargado) no instalamos nada
    if (GA_MEASUREMENT_ID === 'G-XXXXXXXXXX') return;
    if (document.getElementById('ga-script')) return;

    window.dataLayer = window.dataLayer || [];
    function gtag() { window.dataLayer.push(arguments); }
    window.gtag = gtag;
    gtag('js', new Date());
    gtag('config', GA_MEASUREMENT_ID, { anonymize_ip: true });

    const script = document.createElement('script');
    script.id = 'ga-script';
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_MEASUREMENT_ID;
    document.head.appendChild(script);
  }

  function initCookieBanner() {
    const banner = document.getElementById('cbCard');
    if (!banner) return; // la página no incluye el aviso

    const btnAccept = document.getElementById('cbAccept');
    const btnReject = document.getElementById('cbReject');

    function leerDecision() {
      try { return window.localStorage.getItem(COOKIES_KEY); } catch (e) { return null; }
    }

    function guardarDecision(valor) {
      try { window.localStorage.setItem(COOKIES_KEY, valor); } catch (e) { /* file:// puede bloquear localStorage */ }
      banner.hidden = true;
    }

    // Respeta la Ley 21.719: sin decisión guardada, no se instala NADA.
    // Además, no se muestra mientras el modal de control de edad (+18)
    // esté abierto: el aviso aparece recién cuando la puerta se resuelve,
    // para no tapar sus botones (bug del banner compacto).
    const ageModal = document.getElementById('ageModal');

    function bannerDebeEsperar() {
      return !!(ageModal && !ageModal.classList.contains('hidden'));
    }

    function mostrarBanner() {
      if (!leerDecision()) banner.hidden = false;
    }

    if (!bannerDebeEsperar()) mostrarBanner();
    document.addEventListener('amerika:age-confirmed', mostrarBanner);

    if (btnAccept) btnAccept.addEventListener('click', function () {
      guardarDecision('aceptada');
      // Consentimiento otorgado: recién ahora se instala GA
      loadGoogleAnalytics();
    });
    if (btnReject) btnReject.addEventListener('click', function () {
      guardarDecision('rechazada');
      // Rechazado: no se instala NINGÚN script de medición
    });

    // Si en una visita anterior ya aceptó, GA se carga de inmediato
    if (leerDecision() === 'aceptada') loadGoogleAnalytics();
  }

  /* REVEAL AL HACER SCROLL (todas las páginas):
     los bloques "suben" suavemente al entrar en pantalla.
     Aplica las clases automáticamente, sin tocar el HTML. */
  function initScrollReveal() {
    // Accesibilidad: quien pide menos movimiento, ve todo estático
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    /* Corrección del cliente: en celular el contenido aparecía "casi
       transparente" hasta hacer scroll. Solución de dos partes:
       1) en pantallas chicas la animación no se aplica (todo visible);
       2) en desktop, un temporizador de seguridad revela todo igual
          aunque el observador nunca se dispare. */
    const esMovil = window.matchMedia('(max-width: 767px)').matches;

    const objetivos = document.querySelectorAll(
      '.section > .container, .page-hero > .container, .cta-banner-inner, .impact-banner-inner'
    );

    if (esMovil) return; // sin animación en móvil: el contenido se ve siempre

    objetivos.forEach(function (bloque) {
      bloque.classList.add('reveal');
    });

    // Red de seguridad: a los 1.5 s todo el contenido queda visible
    setTimeout(function () {
      objetivos.forEach(function (bloque) {
        bloque.classList.add('reveal-in');
      });
    }, 1500);

    const observador = new IntersectionObserver(function (entradas) {
      entradas.forEach(function (entrada) {
        if (entrada.isIntersecting) {
          entrada.target.classList.add('reveal-in');
          observador.unobserve(entrada.target); // solo una vez por bloque
        }
      });
    }, { threshold: 0.12 });   /* se activa cuando ~12% del bloque se ve */

    objetivos.forEach(function (bloque) {
      observador.observe(bloque);
    });
  }

  /* ------------------------------------------
     NAVBAR ESTILO ICB (solo index):
     verde arriba; cuando el usuario baja, blanco.
     La clase .scrolled cambia los colores vía CSS.
     ------------------------------------------ */
  function initNavbarScroll() {
    const header = document.querySelector('.header');
    if (!header || !document.querySelector('.hero-showcase')) return;

    function actualizar() {
      // Un poco más de la mitad del primer bloque: ahí el navbar pasa a blanco
      header.classList.toggle('scrolled', window.scrollY > 30);
    }

    actualizar();
    window.addEventListener('scroll', actualizar, { passive: true });
  }

  /* ------------------------------------------
     MENSAJES ROTATIVOS DEL HERO (index.html)     Cambia una frase cada 4 segundos con un fundido.
     Usa el diccionario actual, así que respeta ES/EN.
     ------------------------------------------ */
  function initHeroRotator() {
    const el = document.getElementById('heroRotator');
    if (!el) return;

    const mensajes = ['hero.rot1', 'hero.rot2', 'hero.rot3'];
    let indice = 0;

    function mostrarSiguiente() {
      // fundido de salida -> cambio de texto -> fundido de entrada
      el.style.opacity = '0';
      setTimeout(function () {
        el.textContent = window.AmerikaI18n.getTranslation(mensajes[indice]);
        el.style.opacity = '1';
        indice = (indice + 1) % mensajes.length;
      }, 400);
    }

    mostrarSiguiente();
    setInterval(mostrarSiguiente, 4000);
  }

  /* NOSOTROS: stepper "A qué nos dedicamos" (distribución tipo referencia,
     con los textos reales del documento comercial). 5 etapas navegables. */
  const NS_ICONS = {
    1: '<svg viewBox="0 0 24 24"><path d="M21 8V21H3V8M1 3h22v5H1zM10 12h4"/></svg>',
    2: '<svg viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8zM14 2v6h6M9 15l2 2 4-4"/></svg>',
    3: '<svg viewBox="0 0 24 24"><path d="M3 17l6-6 4 4 8-8M14 7h7v7"/></svg>',
    4: '<svg viewBox="0 0 24 24"><path d="M1 3h15v13H1zM16 8h4l3 3v5h-7V8zM5.5 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM18.5 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/></svg>',
    5: '<svg viewBox="0 0 24 24"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4zM3 6h18M16 10a4 4 0 0 1-8 0"/></svg>'
  };

  function initNsStepper() {
    const card = document.getElementById('nsCard');
    if (!card) return; // solo existe en nosotros.html

    const botones = document.querySelectorAll('.ns-step, .ns-pill');
    const prev = document.getElementById('nsPrev');
    const next = document.getElementById('nsNext');
    const progreso = document.getElementById('nsProgress');
    let etapa = parseInt(document.querySelector('.ns-step.is-active').getAttribute('data-step'), 10) || 1;

    function textos(num) {
      return {
        badge: window.AmerikaI18n.getTranslation('ns.b' + num),
        title: window.AmerikaI18n.getTranslation('ns.t' + num),
        desc: window.AmerikaI18n.getTranslation('ns.d' + num),
        tagTitle: window.AmerikaI18n.getTranslation('ns.tt' + num),
        tagDesc: window.AmerikaI18n.getTranslation('ns.td' + num)
      };
    }

    function pintarEstado() {
      // etiquetas: activa / ya recorrida / pendiente
      document.querySelectorAll('.ns-step').forEach(function (btn) {
        const num = parseInt(btn.getAttribute('data-step'), 10);
        btn.classList.toggle('is-active', num === etapa);
        btn.classList.toggle('is-done', num < etapa);
      });
      document.querySelectorAll('.ns-pill').forEach(function (pill) {
        pill.classList.toggle('is-active', parseInt(pill.getAttribute('data-step'), 10) === etapa);
      });


      // Desplazamiento automático de las etapas en móviles
      if (window.innerWidth <= 1024) {
        const contenedor = document.querySelector('.ns-pills');

        if (contenedor) {
          const etapaActiva = contenedor.querySelector('.ns-pill.is-active');

          if (etapaActiva) {
            const posicion =
              etapaActiva.offsetLeft -
              contenedor.offsetLeft -
              (contenedor.clientWidth - etapaActiva.offsetWidth) / 2;

            const reducirMovimiento = window.matchMedia(
              '(prefers-reduced-motion: reduce)'
            ).matches;

            contenedor.scrollTo({
              left: Math.max(0, posicion),
              behavior: reducirMovimiento ? 'auto' : 'smooth'
            });
          }
        }
      }

      // Desplazamiento automático de las etapas en móviles
      if (window.innerWidth <= 1024) {
        const contenedor = document.querySelector('.ns-pills');

        if (contenedor) {
          const etapaActiva = contenedor.querySelector('.ns-pill.is-active');

          if (etapaActiva) {
            const posicion =
              etapaActiva.offsetLeft -
              contenedor.offsetLeft -
              (contenedor.clientWidth - etapaActiva.offsetWidth) / 2;

            const reducirMovimiento = window.matchMedia(
              '(prefers-reduced-motion: reduce)'
            ).matches;

            contenedor.scrollTo({
              left: Math.max(0, posicion),
              behavior: reducirMovimiento ? 'auto' : 'smooth'
            });
          }
        }
      }


      // línea de progreso: 20% por etapa
      progreso.style.width = (etapa * 20) + '%';

      // tarjeta con textos del idioma actual
      const t = textos(etapa);
      card.querySelector('.ns-watermark').textContent = etapa < 10 ? '0' + etapa : etapa;
      document.getElementById('nsBadge').textContent = t.badge;
      document.getElementById('nsTitle').textContent = t.title;
      document.getElementById('nsDesc').textContent = t.desc;
      document.getElementById('nsTagTitle').textContent = t.tagTitle;
      document.getElementById('nsTagDesc').textContent = t.tagDesc;
      document.getElementById('nsIcon').innerHTML = NS_ICONS[etapa] || NS_ICONS[1];

      prev.disabled = etapa === 1;
      next.textContent = etapa === 5
        ? window.AmerikaI18n.getTranslation('ns.first')
        : window.AmerikaI18n.getTranslation('ns.next');
    }

    botones.forEach(function (btn) {
      btn.addEventListener('click', function () {
        etapa = parseInt(btn.getAttribute('data-step'), 10);
        pintarEstado();
      });
    });
    prev.addEventListener('click', function () {
      if (etapa > 1) { etapa--; pintarEstado(); }
    });
    next.addEventListener('click', function () {
      etapa = etapa < 5 ? etapa + 1 : 1;
      pintarEstado();
    });

    // al cambiar el idioma, la tarjeta se redibuja con el texto nuevo
    document.addEventListener('amerika:languagechange', pintarEstado);
    pintarEstado();
  }

  /* CONTROL DE EDAD 18+ */
  /* ------------------------------------------ */
  const AGE_KEY = 'amerika-mayor-de-18:' + window.location.pathname;

  function initAgeGate() {
    const modal = document.getElementById('ageModal');
    if (!modal) return;

    let yaConfirmo = false;
    try {
      yaConfirmo = sessionStorage.getItem(AGE_KEY) === 'si';
    } catch (error) { /* sin almacenamiento: siempre preguntamos */ }

    if (yaConfirmo) {
      modal.classList.add('hidden');
      return;
    }

    const btnYes = document.getElementById('btnAgeYes');
    if (btnYes) {
      btnYes.addEventListener('click', function () {
        try { sessionStorage.setItem(AGE_KEY, 'si'); } catch (error) { }
        modal.classList.add('hidden');
        // Avisar al resto del sitio (ej: el aviso de cookies espera esta puerta)
        document.dispatchEvent(new CustomEvent('amerika:age-confirmed'));
      });
    }

    const btnNo = document.getElementById('btnAgeNo');
    if (btnNo) {
      btnNo.addEventListener('click', function () {
        // Página con vista "restringida" (drinkball): mostrarla en vez de navegar
        const restricted = document.getElementById('ageRestrictedView');
        const confirmView = document.getElementById('ageConfirmView');
        if (restricted && confirmView) {
          confirmView.style.display = 'none';
          restricted.style.display = 'block';
          return;
        }
        window.location.href = 'index.html';
      });
    }

    // Botón "Volver a verificar" de la vista restringida (drinkball)
    const btnRetry = document.getElementById('btnAgeRetry');
    if (btnRetry) {
      btnRetry.addEventListener('click', function () {
        const restricted = document.getElementById('ageRestrictedView');
        const confirmView = document.getElementById('ageConfirmView');
        if (restricted && confirmView) {
          restricted.style.display = 'none';
          confirmView.style.display = 'block';
        }
      });
    }
  }

  /* ------------------------------------------
     AVISO DEL FORMULARIO DE CONTACTO
     ------------------------------------------ */
  function initFormAlert() {
    const alerta = document.getElementById('formAlert');
    if (!alerta) return;

    if (window.location.search.indexOf('enviado=1') !== -1) {
      alerta.innerHTML = getTranslation(currentLang, 'contact.alert.success');
      alerta.className = 'form-alert success';
      window.history.replaceState({}, '', 'contacto');
    } else if (window.location.search.indexOf('error=1') !== -1) {
      alerta.innerHTML = getTranslation(currentLang, 'contact.alert.error');
      alerta.className = 'form-alert error';
      window.history.replaceState({}, '', 'contacto');
    }
  }

  /* ------------------------------------------
     TOAST de enlaces demo (páginas de marca)
     Muestra un aviso al hacer clic en un enlace demo.
     ------------------------------------------ */
  function initDemoToast() {
    const toast = document.getElementById('toastMsg');
    if (!toast) return;
    let toastTimer;
    document.querySelectorAll('.demo-cta').forEach(function (el) {
      el.addEventListener('click', function (event) {
        event.preventDefault();
        toast.classList.add('show');
        clearTimeout(toastTimer);
        toastTimer = setTimeout(function () { toast.classList.remove('show'); }, 3200);
      });
    });
  }

  /* ------------------------------------------
     ARRANQUE
     ------------------------------------------ */
  function init() {
    if (window.lucide && typeof window.lucide.createIcons === 'function') window.lucide.createIcons();
    initLanguageButtons();
    initMobileMenu();
    initTeamModal();
    initConsentModal();
    initAlliesBand();
    initHeroRotator();
    initAgeGate();
    initCookieBanner();
    initScrollReveal();
    initNavbarScroll();
    initNsStepper();
    initDemoToast();
    setLanguage(readStoredLanguage());
    initFormAlert();
    reportMissingKeys();
  }

  // API pública para depurar
  window.AmerikaI18n = {
    get language() { return currentLang; },
    setLanguage: setLanguage,
    applyTranslations: applyTranslations,
    getTranslation: function (key) { return getTranslation(currentLang, key); },
    translations: translations
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();