// Language toggle (EN/ES), year stamp, small UX niceties
const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();

const strings = {
  en: {
    "nav.about":"About",
    "nav.classes":"Classes",
    "nav.workshops":"Workshops",
    "nav.faq":"FAQ",
    "nav.contact":"Contact",

    "hero.title":"Ancestral rhythm. Living tradition.",
    "hero.subtitle":"Private Bomba drumming lessons, community workshops, and culturally grounded education with commitment and discipline",
    "hero.cta1":"See classes",
    "hero.cta2":"Ask a question",

    "about.title":"What is Bámbula Studio?",
    "about.p1":"At Bámbula Studio LLC we understand Bomba not only as music and dance, but as an expression of memory, identity, and resistance. Our cultural work centers on:",
    "about.p2":"Teaching: Bomba classes and workshops for all ages and levels, where students learn traditional rhythms, songs, and dances.",
    "about.p3":"Preservation: Keeping Puerto Rican tradition alive in the diaspora—creating spaces where Bomba flourishes as ancestral heritage.",
    "about.p4":"Community: Cultivating cultural gatherings in the Dallas–Fort Worth area that strengthen identity and belonging.",
    "about.p5":"Ancestral memory: Each class and every drumbeat becomes an act of remembering who we are as a people, honoring our Afro-Caribbean roots.",
    "about.p6":"Through every activity we seek to celebrate, share, and pass Puerto Rican culture to new generations.",
    "about.quick":"Quick facts",
    "about.f1":"Tradition-centered, community-rooted",
    "about.f2":"Private lessons: 1 hour",
    "about.f3":"Recordings for home practice",
    
    // Owner/Founder subsection
    "about.owner.title":"Meet the Owner/Founder and Creative Director",
    "about.owner.p1":"Bámbula Studio was born out of my experience as a Puerto Rican woman in the diaspora, cultural worker, and Bomba practitioner, committed to tradition, teaching, and community.",
    "about.owner.p2":"My work is grounded in values of resilience, cultural memory, and collective healing. From the experience of living away from the island, I embrace the legacy of Bomba while opening new pathways of belonging.",
    "about.owner.p3":"As Creative Director, I design curricula, lead private lessons and workshops, and organize community programs rooted in memory and identity. My vision is to cultivate spaces where tradition, creativity, and community flourish together.",
    "about.owner.p4":"At the heart of Bámbula Studio beats my commitment to the heritage, identity, and shared joy of our people, both within and beyond Puerto Rico.",
    "about.owner.caption":"Dr. Alexandra Rosado Román<br>10th Encuentro de Tambores<br>San Juan, Puerto Rico - March 27, 2022<br><a href='https://instagram.com/bambula_studio' target='_blank' rel='noopener'>@bambula_studio</a>",
    "about.owner.photo_alt":"Portrait of the owner of Bámbula Studio",

    "classes.group.basic":"Beginner Buleo",
    "classes.group.intermediate":"Intermediate Buleo",
    "classes.group.advanced":"Advanced Buleo",
    "classes.group.basic.l1":"History of bomba as Puerto Rican tradition",
    "classes.group.basic.l2":"Parts of the barrel: body, skin, and basic care",
    "classes.group.basic.l3":"Posture and hand placement",
    "classes.group.basic.l4":"Sounds: abierto, caja, seco, and campana",
    "classes.group.basic.l5":"Basic buleo rudiments",
    "classes.group.basic.l6":"Keep the buleo on time",
    "classes.group.basic.l7":"Rhythms: sicá, yubá, cuembé, holandé",
    "classes.group.basic.l8":"Endurance drills and personal practice",

    "classes.group.intermediate.l1":"Intermediate rudiments (control & variations)",
    "classes.group.intermediate.l2":"Buleo interaction with the primo",
    "classes.group.intermediate.l3":"Coordination & endurance drills",
    "classes.group.intermediate.l4":"Rhythms: sicá, yubá, cuembé, holandé + calindá",
    "classes.group.intermediate.l5":"Basic responses to llamados",
    "classes.group.intermediate.l6":"Sing coros while buleando",
    "classes.group.intermediate.l7":"Energy dynamics (intro to tempo variations)",

    "classes.group.advanced.l1":"Advanced rudiments (combinations & long endurance)",
    "classes.group.advanced.l2":"Rhythms: all above + seis corrido & corvé",
    "classes.group.advanced.l3":"Deep variations of sicá, yubá, cuembé, holandé, calindá",
    "classes.group.advanced.l4":"Maintain intensity & cadence for long stretches",
    "classes.group.advanced.l5":"Sing coros while complex buleo variations",
    "classes.group.advanced.l6":"Energy dynamics independent (execute tempo variations)",
    
    "classes.title":"Private Lessons (Bomba)",
    "classes.subtitle":"Rooted instruction, disciplined growth. Personalized lessons for every level.",
    "classes.subtitle.percussion":"Buleo with Puerto Rican Bomba Drum",
    "classes.subtitle.dance":"Bomba Dance — From Foundations to Piquetes",
    "pricing.basic.title":"Single Class",
    "pricing.single.credit":"If you enroll in the Complete Course package within 30 days from booking, this session is credited.",
    "pricing.perhour":"/ hour",
    "pricing.basic.l1":"Topic of choice: fundamentals, rhythm review, or technique reinforcement",
    "pricing.basic.l2":"No refunds. Absences without 48-hour notice cannot be rescheduled.",

    // BASIC – Monthly card (title + note)
    "pricing.basic.monthly.title":"4-Class Pack (30 days)",
    "pricing.basic.monthly.note":"($110/class)",

    // BASIC tier specific copies (match new_index.html)
    "pricing.basic.monthly.l1":"4 private classes (1 hour each)",
    "pricing.basic.monthly.l2":"Use within 30 days of purchase",
    "pricing.basic.monthly.l3":"Practice recordings",
    "pricing.basic.monthly.l4":"Save 9%",

    "pricing.basic.full.l1":"16 private classes (1 hour each)",
    "pricing.basic.full.l2":"Use within 365 days of purchase",
    "pricing.basic.full.l3":"Practice recordings",
    "pricing.basic.full.l4":"Save 16%",

    // BASIC – Complete card (title + note)
    "pricing.basic.full.title":"Complete Course (16-Class Pack)",
    "pricing.basic.full.note":"($100/class)",
    
    // INTERMEDIATE – section titles for single/monthly/full cards
    "pricing.intermediate.single.l1":"Topic of choice: fundamentals, rhythm review, or technique reinforcement",
    "pricing.intermediate.single.l2":"No refunds. Absences without 48-hour notice cannot be rescheduled.",

    "pricing.intermediate.single.title":"Single Class",
    "pricing.intermediate.monthly.title":"4-Class Pack (30 days)",
    "pricing.intermediate.full.title":"Complete Course (16-Class Pack)",

    // ADVANCED – section titles for monthly/full cards
    "pricing.advanced.monthly.title":"4-Class Pack (30 days)",
    "pricing.advanced.full.title":"Complete Course (16-Class Pack)",
    "pricing.cta":"Book",

    // CLASSES – new packages
    "pricing.intermediate.title":"Intermediate",
    "pricing.intermediate.price4":"$459 ($115/class)",
    "pricing.intermediate.price1":"$125 / hour",
    "pricing.intermediate.l1":"Intermediate rudiments (control & variations)",
    "pricing.intermediate.l2":"Buleo interaction with primo",
    "pricing.intermediate.l3":"Coordination & endurance drills",
    "pricing.intermediate.l4":"Rhythms: sicá, yubá, cuembé, holandé + calindá",
    "pricing.intermediate.l5":"Basic responses to llamados",
    "pricing.intermediate.l6":"Sing coros while buleando",
    "pricing.intermediate.l7":"Energy dynamics (up/down)",
    // Intermediate single
    "pricing.intermediate.single.title":"Single Class",
    "pricing.intermediate.single.note":"If you enroll in the Complete Course package within 30 days from booking, this session is credited.",
    "pricing.intermediate.price16_head":"$1,679 ($105/class)",

    // INTERMEDIATE monthly/full lists
    "pricing.intermediate.monthly.l1":"4 private classes (1 hour each)",
    "pricing.intermediate.monthly.l2":"Use within 30 days",
    "pricing.intermediate.monthly.l3":"Practice recordings",
    "pricing.intermediate.monthly.l4":"Save 7%",

    "pricing.intermediate.full.l1":"16 private classes (1 hour each)",
    "pricing.intermediate.full.l2":"Use within 365 days",
    "pricing.intermediate.full.l3":"Practice recordings",
    "pricing.intermediate.full.l4":"Save 16%",

    "pricing.advanced.single.title":"Single Class",
    "pricing.advanced.single.note":"If you enroll in the Complete Course package within 30 days from booking, this session is credited.",
    "pricing.advanced.price16_head":"$1,759 ($110/class)",
    "pricing.advanced.title":"Advanced",
    "pricing.advanced.price4":"$479 ($120/class)",
    "pricing.advanced.price1":"$130 / hour",
    "pricing.advanced.l1":"Advanced rudiments (combinations & long endurance)",
    "pricing.advanced.l2":"Rhythms: all above + seis corrido & corvé",
    "pricing.advanced.l3":"Deep variations of sicá, yubá, cuembé, holandé, calindá",
    "pricing.advanced.l4":"Maintain intensity & cadence for long stretches",
    "pricing.advanced.l5":"Sing coros while complex buleo variations",
    "pricing.advanced.l6":"Pro-level control & variation drills",

    // ADVANCED monthly/full lists
    "pricing.advanced.single.l1":"Topic of choice: fundamentals, rhythm review, or technique reinforcement",
    "pricing.advanced.single.l2":"No refunds. Absences without 48-hour notice cannot be rescheduled.",

    "pricing.advanced.monthly.l1":"4 private classes (1 hour each)",
    "pricing.advanced.monthly.l2":"Use within 30 days",
    "pricing.advanced.monthly.l3":"Practice recordings",
    "pricing.advanced.monthly.l4":"Save 8%",

    "pricing.advanced.full.l1":"16 private classes (1 hour each)",
    "pricing.advanced.full.l2":"Use within 365 days",
    "pricing.advanced.full.l3":"Practice recordings",
    "pricing.advanced.full.l4":"Save 15%",

    // BASIC price heads for shared grid
    "pricing.basic.price1":"$120 / hour",
    "pricing.basic.price4":"$439 ($110/class)",
    "pricing.basic.price16_head":"$1,599 ($100/class)",

    // POLICIES
    "policies.title":"Policies",
    "policies.transport":"Transportation: if class is offsite, a $0.65/mile round-trip fee applies.",
    "policies.expire":"Expiration: all packages expire; unused classes are non-refundable and non-transferable.",
    "policies.record":"Recordings: recording the teacher during class isn’t allowed. Specific educational recordings can be coordinated at the end of class.",

    "classes.note":"We do an initial assessment to confirm appropriate level.",

    "workshops.title":"Group Packages",
    "workshops.p1":"Group Workshops - Coming Soon",
    "workshops.p2":"We offer educational talks. Contact for details.",

    "workshops.includes":"Includes",
    "workshops.i1":"All-level friendly",
    "workshops.i2":"Call-and-response practice",
    "workshops.i3":"Culture & history",

    "faq.title":"FAQ",
    "faq.q1":"Do I need my own drum?",
    "faq.a1":"Not required. If you have one, bring it.",
    "faq.q2":"Are lessons in Spanish or English?",
    "faq.a2":"Either—your choice. The tradition is Puerto Rican; we honor both languages.",
    "faq.q3":"Where are lessons held?",
    "faq.a3":"In-person (DFW area). No virtual lessons offered.",

    "contact.title":"Contact",
    "contact.p1":"Reach out to get started!",
    "form.name":"Name",
    "form.email":"Email",
    "form.msg":"Message",
    "form.send":"Send",
    "form.note":"This form uses Formspree’s free plan.",
    "footer.rights":"All rights reserved.",
    // Prefill message template for booking
    "category.percussion":"Percussion",
    "category.dance":"Dance",
    "dance.group.basic":"Beginner Dance",
    "dance.group.basic.l1":"History and cultural context of Puerto Rican Bomba",
    "dance.group.basic.l2":"Basic step and paseo as foundations",
    "dance.group.basic.l3":"Posture, movement, and body awareness",
    "dance.group.basic.l4":"Skirt technique; basic steps and rhythm variations",
    "dance.group.basic.l5":"Develop proper language for each rhythm",
    "dance.group.basic.l6":"Integrated review of covered rhythms",
    "dance.group.basic.l7":"Introduction to piquetes and variations as transition to intermediate level",
    "dance.group.intermediate":"Intermediate Dance",
    "dance.group.intermediate.l1":"Expanded skirt technique and turns",
    "dance.group.intermediate.l2":"Intermediate rhythmic variations by rhythm",
    "dance.group.intermediate.l3":"Musicality and response to the primo",
    "dance.group.intermediate.l4":"Building piquete and transitions",
    "dance.group.intermediate.l5":"Stamina, phrasing, and style",
    "dance.group.advanced":"Advanced Dance",
    "dance.group.advanced.l1":"Advanced piquete construction and improvisation",
    "dance.group.advanced.l2":"Complex variations across rhythms",
    "dance.group.advanced.l3":"Performance preparation and stage presence",
    "dance.group.advanced.l4":"Personal vocabulary and expression",
    "pricing.dance.basic.price1":"$140 / hour",
    "pricing.dance.basic.price4":"$519 ($130/class)",
    "pricing.dance.basic.price16_head":"$1,919 ($120/class)",
    "pricing.dance.intermediate.price1":"$145 / hour",
    "pricing.dance.intermediate.price4":"$539 ($135/class)",
    "pricing.dance.intermediate.price16_head":"$1,999 ($125/class)",
    "pricing.dance.advanced.price1":"$150 / hour",
    "pricing.dance.advanced.price4":"$559 ($140/class)",
    "pricing.dance.advanced.price16_head":"$2,079 ($130/class)",
    "pricing.dance.basic.monthly.l4":"Save 7%",
    "pricing.dance.basic.full.l4":"Save 14%",
    "pricing.dance.intermediate.monthly.l4":"Save 7%",
    "pricing.dance.intermediate.full.l4":"Save 14%",
    "pricing.dance.advanced.monthly.l4":"Save 7%",
    "pricing.dance.advanced.full.l4":"Save 13%",
    "contact.prefill":"Hello! I'd like to book: {package}. Please share next steps.",
    "billing.onetime":"One-time payment",
    "billing.note.onetime":"No auto-renewals.",
    "book.title":"Book Your Session",
    "book.selected":"Selected",
    "book.step1":"Step 1: Pay",
    "book.step2":"Step 2: Schedule",
    "book.pay":"Pay Now",
    "book.back":"Back to Classes",
    "book.noLink":"Payment link not configured yet.",
    "book.noScheduler":"Submit name/email above to show scheduler."
  },

  es: {
    "nav.about":"Acerca",
    "nav.classes":"Clases",
    "nav.workshops":"Talleres",
    "nav.faq":"Preguntas",
    "nav.contact":"Contacto",

    "hero.title":"Ritmo ancestral. Tradición viva.",
    "hero.subtitle":"Clases privadas de percusión de Bomba, talleres comunitarios y educación cultural con compromiso y disciplina",
    "hero.cta1":"Ver clases",
    "hero.cta2":"Hacer una pregunta",

    "about.title":"¿Qué es Bámbula Studio?",
    "about.p1":"En Bámbula Studio LLC entendemos la Bomba no solo como música y danza, sino como una expresión de memoria, identidad y resistencia. Nuestro trabajo cultural se centra en:",
    "about.p2":"Enseñanza: Clases y talleres de Bomba diseñados para todas las edades y niveles, donde se aprenden los toques, cantos y bailes tradicionales.",
    "about.p3":"Preservación: Mantener viva la tradición puertorriqueña en la diáspora, creando espacios donde la Bomba florece como herencia ancestral.",
    "about.p4":"Comunidad: Fomentar encuentros culturales en el área de Dallas–Fort Worth que fortalezcan la identidad y el sentido de pertenencia.",
    "about.p5":"Memoria ancestral: Cada clase y cada toque de tambor se convierten en un acto de recordar quiénes somos como pueblo, y en una forma de honrar nuestras raíces afrocaribeñas.",
    "about.p6":"Con cada actividad buscamos que la cultura puertorriqueña sea celebrada, compartida y transmitida a nuevas generaciones.",
    "about.quick":"Datos rápidos",
    "about.f1":"Centrado en la tradición cangrejera, con raíces comunitarias",
    "about.f2":"Clases privadas: 1 hora",
    "about.f3":"Grabaciones para práctica en casa",
    
    // Propietaria/Fundadora
    "about.owner.title":"Conoce a la Propietaria/Fundadora y Directora Creativa",
    "about.owner.p1":"Bámbula Studio nace de mi experiencia como mujer puertorriqueña en la diáspora, trabajadora cultural y practicante de la Bomba, comprometida con la tradición, la enseñanza y la comunidad.",
    "about.owner.p2":"Mi quehacer se sostiene en valores de resiliencia, memoria cultural y sanación colectiva. Desde la experiencia de vivir lejos de la isla, abrazo el legado de la Bomba mientras abro nuevas formas de pertenencia.",
    "about.owner.p3":"Como Directora Creativa, diseño planes de estudio, facilito clases privadas y talleres, y organizo programas comunitarios que brotan de la memoria y la identidad. Mi visión es cultivar espacios donde la tradición, la creatividad y la comunidad florezcan juntas.",
    "about.owner.p4":"En el corazón de Bámbula Studio late mi compromiso con la herencia, la identidad y la alegría compartida de nuestro pueblo dentro y fuera de Puerto Rico.",
    "about.owner.caption":"Dr. Alexandra Rosado Román<br>10mo Encuentro de Tambores<br>San Juan, Puerto Rico - Marzo 27, 2022<br><a href='https://instagram.com/bambula_studio' target='_blank' rel='noopener'>@bambula_studio</a>",
    "about.owner.photo_alt":"Retrato de la propietaria de Bámbula Studio",

    "classes.group.basic":"Buleo Básico",
    "classes.group.basic.l1":"Historia de la bomba como tradición puertorriqueña",
    "classes.group.basic.l2":"Partes del barril: cuerpo, cuero y cuidado básico",
    "classes.group.basic.l3":"Postura y colocación de manos",
    "classes.group.basic.l4":"Sonidos: abierto/seco, caja, campana",
    "classes.group.basic.l5":"Rudimentos básicos de buleo",
    "classes.group.basic.l6":"Mantener el buleo en tiempo",
    "classes.group.basic.l7":"Ritmos: sicá, yubá, cuembé, holandé",
    "classes.group.basic.l8":"Ejercicios de resistencia y práctica personal",

    "classes.group.intermediate":"Buleo Intermedio",
    "classes.group.intermediate.l1":"Rudimentos intermedios (control y variaciones)",
    "classes.group.intermediate.l2":"Buleo en interacción con el primo",
    "classes.group.intermediate.l3":"Ejercicios de coordinación y resistencia",
    "classes.group.intermediate.l4":"Ritmos: sicá, yubá, cuembé, holandé + calindá",
    "classes.group.intermediate.l5":"Respuestas básicas a los llamados",
    "classes.group.intermediate.l6":"Cantar coros sin dejar de bulear",
    "classes.group.intermediate.l7":"Dinámica de energía asistida (introducción a variaciones en tempo)",

    "classes.group.advanced":"Buleo Avanzado",
    "classes.group.advanced.l1":"Rudimentos avanzados (combinaciones y resistencia prolongada)",
    "classes.group.advanced.l2":"Ritmos: todos los anteriores + seis corrido y corvé",
    "classes.group.advanced.l3":"Variaciones de sicá, yubá, cuembé, holandé, calindá",
    "classes.group.advanced.l4":"Mantener intensidad y cadencia por tiempos largos",
    "classes.group.advanced.l5":"Cantar coros mientras se bulea en variaciones complejas",
    "classes.group.advanced.l6":"Dinámica de energía independiente (ejecución de variaciones en tempo)",

    "classes.title":"Clases Privadas (Bomba Puertorriqueña)",
    "classes.subtitle":"Enseñanza con raíz, crecimiento disciplinado. Lecciones personalizadas para todos los niveles.",
    "classes.subtitle.percussion":"Buleo con Barril de Bomba Puertorriqueña",
    "classes.subtitle.dance":"Baile de Bomba — De fundamentos a piquetes",
    "pricing.basic.title":"Clase Individual",
    "pricing.single.credit":"Si te inscribes en el paquete Curso Completo dentro de los 30 días posteriores a la reserva, esta sesión se acredita.",
    "pricing.perhour":"/ hora",
    "pricing.basic.l1":"Tema a elección: fundamentos, repaso de ritmos o refuerzo técnico",
    "pricing.basic.l2":"No reembolsable. Ausencias sin aviso previo de 48 horas no se pueden reprogramar.",

    // BASIC (ES) – Mensual (título + nota)
    "pricing.basic.monthly.title":"Paquete de 4 Clases (30 días)",
    "pricing.basic.monthly.note":"($110/clase)",

    // BASIC (ES)
    "pricing.basic.monthly.l1":"4 sesiones privadas (1 hora c/u)",
    "pricing.basic.monthly.l2":"Expira en 30 días (desde la compra)",
    "pricing.basic.monthly.l3":"Grabaciones de práctica",
    "pricing.basic.monthly.l4":"Ahorra 9%",

    "pricing.basic.full.l1":"16 sesiones privadas (1 hora c/u)",
    "pricing.basic.full.l2":"Expira en 365 días (desde la compra)",
    "pricing.basic.full.l3":"Resistencia y práctica personal",
    "pricing.basic.full.l4":"Ahorra 16%",

    // BASIC (ES) – Completo (título + nota)
    "pricing.basic.full.title":"Curso Completo (Paquete de 16 Clases)",
    "pricing.basic.full.note":"($100/clase)",
    "pricing.cta":"Reservar",

    // CLASES – nuevos paquetes
    "pricing.intermediate.title":"Clase Individual",
    // Intermedio: sesión individual 
    "pricing.intermediate.single.title":"Clase Individual",
    "pricing.intermediate.single.l1":"Tema a elección: fundamentos, repaso de ritmos o refuerzo técnico",
    "pricing.intermediate.single.l2":"No reembolsable. Ausencias sin aviso previo de 48 horas no se pueden reprogramar.",
    "pricing.intermediate.single.note":"Si te inscribes en el paquete Curso Completo dentro de los 30 días posteriores a la reserva, esta sesión se acredita.",

    "pricing.intermediate.monthly.title":"Paquete de 4 Clases (30 días)",
    "pricing.intermediate.price4":"$459 ($115/clase)",
    "pricing.intermediate.price1":"$125 / hora",
    "pricing.intermediate.full.title":"Curso Completo (Paquete de 16 Clases)",
    "pricing.intermediate.price16_head":"$1,679 ($105/clase)",
    "pricing.intermediate.l1":"Rudimentos intermedios (control y variaciones)",
    "pricing.intermediate.l2":"Buleo en interacción con el primo",
    "pricing.intermediate.l3":"Ejercicios de coordinación y resistencia",
    "pricing.intermediate.l4":"Ritmos: sicá, yubá, cuembé, holandé + calindá",
    "pricing.intermediate.l5":"Respuestas básicas a los llamados",
    "pricing.intermediate.l6":"Cantar coros sin dejar de bulear",
    "pricing.intermediate.l7":"Dinámica de energía (subir y bajar)",

    // INTERMEDIATE (ES) monthly/full lists
    "pricing.intermediate.monthly.l1":"4 sesiones privadas (1 hora c/u)",
    "pricing.intermediate.monthly.l2":"Expira en 30 días (desde la compra)",
    "pricing.intermediate.monthly.l3":"Grabaciones de práctica",
    "pricing.intermediate.monthly.l4":"Ahorra 7%",

    "pricing.intermediate.full.l1":"16 sesiones privadas (1 hora c/u)",
    "pricing.intermediate.full.l2":"Expira en 365 días (desde la compra)",
    "pricing.intermediate.full.l3":"Grabaciones de práctica",
    "pricing.intermediate.full.l4":"Ahorra 16%",

    "pricing.advanced.title":"Clase Individual",
    // Avanzado: sesión individual 
    "pricing.advanced.single.title":"Clase Individual",
    "pricing.advanced.single.note":"Si te inscribes en el paquete Curso Completo dentro de los 30 días posteriores a la reserva, esta sesión se acredita.",
    "pricing.advanced.single.l1":"Tema a elección: fundamentos, repaso de ritmos o refuerzo técnico",
    "pricing.advanced.single.l2":"No reembolsable. Ausencias sin aviso previo de 48 horas no se pueden reprogramar.",

    "pricing.advanced.monthly.title":"Paquete de 4 Clases (30 días)",
    "pricing.advanced.price4":"$479 ($120/clase)",
    "pricing.advanced.price1":"$130 / hora",
    "pricing.advanced.full.title":"Curso Completo (Paquete de 16 Clases)",
    "pricing.advanced.price16_head":"$1,759 ($110/clase)",
    "pricing.advanced.l1":"Rudimentos avanzados (combinaciones y resistencia prolongada)",
    "pricing.advanced.l2":"Ritmos: todos los anteriores + seis corrido y corvé",
    "pricing.advanced.l3":"Variaciones profundas de sicá, yubá, cuembé, holandé, calindá",
    "pricing.advanced.l4":"Mantener intensidad y cadencia por tiempos largos",
    "pricing.advanced.l5":"Cantar coros mientras se bulea en variaciones complejas",
    "pricing.advanced.l6":"Ejercicios de control y variación a nivel profesional",

    // ADVANCED (ES) monthly/full lists
    "pricing.advanced.monthly.l1":"4 sesiones privadas (1 hora c/u)",
    "pricing.advanced.monthly.l2":"Expira en 30 días (desde la compra)",
    "pricing.advanced.monthly.l3":"Grabaciones de práctica",
    "pricing.advanced.monthly.l4":"Ahorra 8%",

    "pricing.advanced.full.l1":"16 sesiones privadas (1 hora c/u)",
    "pricing.advanced.full.l2":"Expira en 365 días (desde la compra)",
    "pricing.advanced.full.l3":"Grabaciones de práctica",
    "pricing.advanced.full.l4":"Ahorra 15%",

    // BASIC (ES) precios para grilla compartida
    "pricing.basic.price1":"$120 / hora",
    "pricing.basic.price4":"$439 ($110/clase)",
    "pricing.basic.price16_head":"$1,599 ($100/clase)",
    

    // POLÍTICAS
    "policies.title":"Políticas",
    "policies.transport":"Transporte: si la clase se realiza afuera de Bámbula Studio, se aplica un cargo adicional de $0.65 por milla (ida y vuelta).",
    "policies.expire":"Vencimiento: todos los paquetes expiran; clases no usadas no son reembolsables ni transferibles.",
    "policies.record":"Grabaciones: no se permite grabar a la maestra durante la clase. Se pueden coordinar grabaciones educativas específicas al finalizar.",
    "classes.note":"Hacemos una evaluación inicial para confirmar nivel apropriado.",

    "workshops.title":"Talleres Grupales",
    // "workshops.p1":"Para 3+ personas: introducción a la Bomba (buleo básico), familia rítmica (sicá, yubá, cuembé, holandé) y contexto cultural. $60 por persona por hora.",
    // "workshops.p2":"También hacemos charlas y servicios de capilla. Presupuesto típico: viaje y estadía hasta $2,500 + honorarios de $2,000.",
    "workshops.p1":"Próximamente disponible",
    "workshops.p2":"Ofrecemos charlas. Contacta para más detalles.",

    "workshops.includes":"Incluye",
    "workshops.i1":"Apto para todos los niveles",
    "workshops.i2":"Práctica de llamada y respuesta",
    "workshops.i3":"Cultura e historia",

    "faq.title":"Preguntas frecuentes",
    "faq.q1":"¿Necesito mi propio barril?",
    "faq.a1":"No es requerido; pero si tienes, tráelo.",
    "faq.q2":"¿Las clases son en español o inglés?",
    "faq.a2":"Como prefieras. La tradición es puertorriqueña; honramos ambos idiomas.",
    "faq.q3":"¿Dónde se ofrecen las clases?",
    "faq.a3":"Presencial (área DFW). No se ofrecen clases virtuales.",

    "contact.title":"Contacto",
    "contact.p1":"¡Contáctanos para empezar!",
    "form.name":"Nombre",
    "form.email":"Correo",
    "form.msg":"Mensaje",
    "form.send":"Enviar",
    "form.note":"Este formulario usa el plan gratis de Formspree.",
    "footer.rights":"Todos los derechos reservados.",
    // Plantilla para autocompletar el mensaje al reservar
    "category.percussion":"Percusión",
    "category.dance":"Baile",
    "dance.group.basic":"Baile Básico",
    "dance.group.basic.l1":"Historia y contexto cultural de la bomba como tradición puertorriqueña",
    "dance.group.basic.l2":"Paso básico y paseo como fundamentos del baile",
    "dance.group.basic.l3":"Postura, desplazamiento y conciencia corporal",
    "dance.group.basic.l4":"Técnica de falda, pasos básicos y variaciones por ritmo",
    "dance.group.basic.l5":"Desarrollar el lenguaje correcto para cada ritmo",
    "dance.group.basic.l6":"Repaso integrado de los ritmos trabajados",
    "dance.group.basic.l7":"Introducción a piquete y variaciones como transición al nivel intermedio",
    "dance.group.intermediate":"Baile Intermedio",
    "dance.group.intermediate.l1":"Técnica de falda y giros (nivel intermedio)",
    "dance.group.intermediate.l2":"Variaciones intermedias por ritmo (sicá, yubá, cuembé, holandé)",
    "dance.group.intermediate.l3":"Musicalidad y respuesta al primo",
    "dance.group.intermediate.l4":"Construcción de piquete y transiciones",
    "dance.group.intermediate.l5":"Resistencia, fraseo y estilo personal",
    "dance.group.advanced":"Baile Avanzado",
    "dance.group.advanced.l1":"Construcción avanzada de piquete e improvisación",
    "dance.group.advanced.l2":"Variaciones complejas a través de los ritmos",
    "dance.group.advanced.l3":"Preparación escénica y presencia artística",
    "dance.group.advanced.l4":"Vocabulario personal y expresión",
    "pricing.dance.basic.price1":"$140 / hora",
    "pricing.dance.basic.price4":"$519 ($130/clase)",
    "pricing.dance.basic.price16_head":"$1,919 ($120/clase)",
    "pricing.dance.intermediate.price1":"$145 / hora",
    "pricing.dance.intermediate.price4":"$539 ($135/clase)",
    "pricing.dance.intermediate.price16_head":"$1,999 ($125/clase)",
    "pricing.dance.advanced.price1":"$150 / hora",
    "pricing.dance.advanced.price4":"$559 ($140/clase)",
    "pricing.dance.advanced.price16_head":"$2,079 ($130/clase)",
    "pricing.dance.basic.monthly.l4":"Ahorra 7%",
    "pricing.dance.basic.full.l4":"Ahorra 14%",
    "pricing.dance.intermediate.monthly.l4":"Ahorra 7%",
    "pricing.dance.intermediate.full.l4":"Ahorra 14%",
    "pricing.dance.advanced.monthly.l4":"Ahorra 7%",
    "pricing.dance.advanced.full.l4":"Ahorra 13%",
    "contact.prefill":"¡Hola! Me interesa reservar: {package}. ¿Cuáles son los próximos pasos?",
    "billing.onetime":"Pago único",
    "billing.note.onetime":"Sin renovación automática.",
    "book.title":"Reserva tu sesión",
    "book.selected":"Seleccionado",
    "book.step1":"Paso 1: Pago",
    "book.step2":"Paso 2: Agenda",
    "book.pay":"Pagar ahora",
    "book.back":"Volver a Clases",
    "book.noLink":"Enlace de pago no configurado.",
    "book.noScheduler":"Agenda no incrustada aún."
  }
};

// ---- Booking kill‑switch: disable specific options sitewide -----------------
// Format: "category:level:plan" e.g., "percussion:basic:single" or "dance:basic:full"
// Add/remove keys here to turn buttons off without touching HTML.
window.bookingDisabled = new Set([
  'percussion:basic:single',
  'percussion:intermediate:single',
  'percussion:intermediate:monthly',
  'percussion:intermediate:full',
  'percussion:advanced:single',
  'percussion:advanced:monthly',
  'percussion:advanced:full',
  'dance:basic:single',
  'dance:basic:monthly',
  'dance:intermediate:single',
  'dance:intermediate:monthly',
  'dance:intermediate:full',
  'dance:advanced:single',
  'dance:advanced:monthly',
  'dance:advanced:full',
]);

function isOptionDisabled(category, level, plan){
  const key = `${category}:${level}:${plan}`;
  return !!(window.bookingDisabled && window.bookingDisabled.has(key));
}

// Visually disable any matching "Book" buttons currently on screen
// script.js — replace the whole function with this
function hideLevelBulletLists(){
  const isMobile = window.matchMedia('(max-width: 900px)').matches;
  document.querySelectorAll('.class-group').forEach(group=>{
    group.querySelectorAll(':scope > ul, :scope .syllabus').forEach(ul=>{
      if (isMobile){
        ul.setAttribute('hidden','');
      } else {
        ul.removeAttribute('hidden');
      }
    });
  });
}

function decorateBookButtons(){
  const section = document.getElementById('classes');
  if (!section) return;
  const category = section.getAttribute('data-category') || 'percussion';
  const currentLevel = section.getAttribute('data-level') || 'basic';
  // helper to infer plan from an individual price card
  function inferPlanFromCard(card){
    if (!card) return 'single';
    const explicit = card.getAttribute('data-card');
    if (explicit) return explicit;
    const h3 = card.querySelector('h3');
    const key = (h3 && h3.getAttribute('data-i18n')) || '';
    if (key.includes('.monthly.')) return 'monthly';
    if (key.includes('.full.')) return 'full';
    return 'single';
  }

  document.querySelectorAll('.price-card .btn').forEach(btn=>{
    const card = btn.closest('.price-card');
    const group = btn.closest('.class-group');
    // Level comes from group when present; otherwise shared grid uses currentLevel
    let level = currentLevel;
    if (group && group.id && group.id.indexOf('group-') === 0){
      level = group.id.replace('group-','');
    }
    const plan = inferPlanFromCard(card);
    const disabled = isOptionDisabled(category, level, plan);
    if (disabled){
      // Accessibility + visuals
      btn.setAttribute('aria-disabled','true');
      btn.classList.add('is-disabled');
      btn.style.pointerEvents = 'none';

      // Tooltip + visible label (bilingual)
      const unavailable = (document.documentElement.lang === 'es')
        ? 'No disponible temporalmente'
        : 'Temporarily unavailable';

      // Preserve original visible text once
      if (!btn.dataset.originalText){
        btn.dataset.originalText = (btn.textContent || '').trim();
      }

      // Update both hover title and visible text
      btn.title = unavailable;
      btn.setAttribute('aria-label', unavailable);
      btn.textContent = unavailable;
    } else {
      // Restore interactive state
      btn.removeAttribute('aria-disabled');
      btn.classList.remove('is-disabled');
      btn.style.pointerEvents = '';

      // Restore original label if we changed it before
      if (btn.dataset.originalText){
        btn.textContent = btn.dataset.originalText;
        delete btn.dataset.originalText;
      }

      // Clean up tooltip/aria label
      btn.removeAttribute('title');
      btn.removeAttribute('aria-label');
    }
  });
}
// ---------------------------------------------------------------------------

function setLang(lang){
  const map = strings[lang];
  document.documentElement.lang = (lang === 'es') ? 'es' : 'en';
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    const key = el.getAttribute('data-i18n');
    const val = map && map[key];
    if (!val) return;

    // Allow trusted HTML on opted-in elements
    if (el.hasAttribute('data-i18n-html')){
      el.innerHTML = val;
      return;
    }

    // Bold the leading label for specific About bullets (before the first colon)
    if (['about.p2','about.p3','about.p4','about.p5'].includes(key)) {
      const idx = val.indexOf(':');
      if (idx > -1) {
        const label = val.slice(0, idx).trim();
        const rest = val.slice(idx + 1).trim();
        el.innerHTML = `<strong>${label}:</strong> ${rest}`;
        return;
      }
    }

    // Default: plain text content
    el.textContent = val;
  });
  // After content is set, move savings bullets into notes below buttons
  moveSavingsToNotes();
  // Add one-time billing pills into shared pricing
  try { ensureOneTimePills(); } catch(_){}
  // Normalize note heights so buttons align across cards
  syncNoteHeights();
  // Refresh disabled styling after translations
  try { decorateBookButtons(); } catch(_){}
  const langBtn = document.getElementById('langToggle');
  if (langBtn){
    // Show target language with its flag
    langBtn.textContent = '';
    langBtn.innerHTML = (lang==='es') ? '🇺🇸 <span>EN</span>' : '🇵🇷 <span>ES</span>';
  }
  localStorage.setItem('bambula_lang', lang);
  // Update shared pricing to match current language and selected level
  try {
    const classesSection = document.getElementById('classes');
    if (classesSection && typeof updateSharedPricing === 'function'){
      const lvl = classesSection.getAttribute('data-level') || 'basic';
      updateSharedPricing(lvl);
      try { hideLevelBulletLists(); } catch(_){}
    }
  } catch(_){}
}

function moveSavingsToNotes(){
  const keys = [
    // basic
    'pricing.basic.monthly.l4','pricing.basic.full.l4',
    // intermediate
    'pricing.intermediate.monthly.l4','pricing.intermediate.full.l4',
    // advanced
    'pricing.advanced.monthly.l4','pricing.advanced.full.l4'
  ];
  const lang = (document.documentElement.lang === 'es') ? 'es' : 'en';
  const map = strings[lang] || {};

  keys.forEach(k => {
    document.querySelectorAll(`[data-i18n="${k}"]`).forEach(node => {
      if (!node || node.tagName !== 'LI') return;
      const card = node.closest('.price-card');
      if (!card) return;

      // ❗ Guard: only move once per card
      if (card.dataset.savingsMoved === '1') {
        node.remove(); // cleanup duplicate li if it somehow reappeared
        return;
      }

      const text = node.textContent.trim();
      node.remove(); // remove the bullet from the list

      // Ensure a note block right after the button
      let note = card.querySelector(':scope > .note');
      if (!note) {
        note = document.createElement('div');
        note.className = 'note';
        const btn = card.querySelector(':scope > .btn');
        (btn ? btn.insertAdjacentElement('afterend', note) : card.appendChild(note));
      }

      // Add/create the pill with the same i18n key (initially)
      let pill = note.querySelector(`:scope > .deal-pill[data-i18n="${k}"]`);
      if (!pill) {
        pill = document.createElement('span');
        pill.className = 'deal-pill';
        pill.setAttribute('data-i18n', k);
        if (note.childNodes.length) note.append(' ');
        note.appendChild(pill);
      }
      pill.textContent = map[k] || text;

      // Mark as moved and tag card kind if missing
      card.dataset.savingsMoved = '1';
      if (!card.dataset.card) {
        const h3key = card.querySelector('h3')?.getAttribute('data-i18n') || '';
        card.dataset.card = h3key.includes('.monthly.') ? 'monthly'
                        : h3key.includes('.full.')    ? 'full'
                        : 'single';
      }
    });
  });

  // If language toggled before any move happened, keep pills (if any) in sync
  keys.forEach(k => {
    document.querySelectorAll(`.deal-pill[data-i18n="${k}"]`).forEach(pill => {
      if (map[k]) pill.textContent = map[k];
    });
  });
}
// function moveSavingsToNotes(){
//   const keys = [
//     // basic
//     'pricing.basic.monthly.l4','pricing.basic.full.l4',
//     // intermediate
//     'pricing.intermediate.monthly.l4','pricing.intermediate.full.l4',
//     // advanced
//     'pricing.advanced.monthly.l4','pricing.advanced.full.l4'
//   ];
//   const lang = (document.documentElement.lang === 'es') ? 'es' : 'en';
//   const map = strings[lang] || {};
//   keys.forEach(k => {
//     document.querySelectorAll(`[data-i18n="${k}"]`).forEach(node => {
//       if (!node || node.tagName !== 'LI') return;
//       const card = node.closest('.price-card');
//       if (!card) return;
//       const text = node.textContent.trim();
//       // Remove the savings item from the features list
//       node.remove();
//       // Ensure there is a note element after the button
//       let note = card.querySelector(':scope > .note');
//       if (!note) {
//         note = document.createElement('div');
//         note.className = 'note';
//         const btn = card.querySelector(':scope > .btn');
//         if (btn) {
//           btn.insertAdjacentElement('afterend', note);
//         } else {
//           card.appendChild(note);
//         }
//       }
//       // Add a pill span inside the note with the same i18n key
//       let pill = note.querySelector(`.deal-pill[data-i18n="${k}"]`);
//       if (!pill) {
//         pill = document.createElement('span');
//         pill.className = 'deal-pill';
//         pill.setAttribute('data-i18n', k);
//         if (note.childNodes.length) note.append(' ');
//         note.appendChild(pill);
//       }
//       // Translate or fall back to captured text
//       pill.textContent = map[k] || text;
//     });
//   });
//   // Also translate any existing pills (if language toggled and no source li was present)
//   keys.forEach(k => {
//     document.querySelectorAll(`.deal-pill[data-i18n="${k}"]`).forEach(pill => {
//       if (map[k]) pill.textContent = map[k];
//     });
//   });
// }

// Ensure all notes in a visual row share the same minimum height so buttons align
function syncNoteHeights(){
  // Skip JS height equalization on small screens; let cards auto-size
  if (window.innerWidth <= 900) return;
  document.querySelectorAll('.pricing').forEach(container => {
    const style = window.getComputedStyle(container);
    if (style.display === 'none' || style.visibility === 'hidden') return;
    const cards = Array.from(container.querySelectorAll('.price-card'));
    if (!cards.length) return;

    // Ensure every card has a note element directly after the button and reset height
    cards.forEach(card => {
      let note = card.querySelector(':scope > .note');
      if (!note) {
        note = document.createElement('div');
        note.className = 'note';
        const btn = card.querySelector(':scope > .btn');
        if (btn) btn.insertAdjacentElement('afterend', note);
        else card.appendChild(note);
      }
      note.style.minHeight = '0px';
    });

    // Group by offsetTop to detect rows
    const rows = new Map();
    cards.forEach(card => {
      const y = card.offsetTop;
      if (!rows.has(y)) rows.set(y, []);
      rows.get(y).push(card);
    });

    rows.forEach(group => {
      let max = 0;
      group.forEach(card => {
        const note = card.querySelector(':scope > .note');
        if (!note) return;
        const h = note.offsetHeight; // includes padding + border
        if (h > max) max = h;
      });
      group.forEach(card => {
        const note = card.querySelector(':scope > .note');
        if (note) note.style.minHeight = max + 'px';
      });
    });
  });
}

const saved = localStorage.getItem('bambula_lang') || 'es';
setLang(saved);
try { applyMobilePricingUX(); } catch(_){}

const __langBtn = document.getElementById('langToggle');
if (__langBtn){
  __langBtn.addEventListener('click', ()=>{
    const current = localStorage.getItem('bambula_lang') || 'en';
    setLang(current==='en'?'es':'en');
  });
}

// Mobile nav toggle
const siteHeader = document.querySelector('.site-header');
const menuToggle = document.getElementById('menuToggle');
const siteNav = document.getElementById('siteNav');
if (menuToggle && siteHeader) {
  menuToggle.addEventListener('click', ()=>{
    const open = siteHeader.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  // Close menu when a nav link is clicked (on small screens)
  if (siteNav) {
    siteNav.querySelectorAll('a').forEach(a=>{
      a.addEventListener('click', ()=>{
        siteHeader.classList.remove('open');
        menuToggle.setAttribute('aria-expanded','false');
      });
    });
  }
  // Close menu when resizing up to desktop
  window.addEventListener('resize', ()=>{
    if (window.innerWidth >= 900) {
      siteHeader.classList.remove('open');
      menuToggle.setAttribute('aria-expanded','false');
    }
  });
}

// Recalculate alignment on resize (debounced)
let __noteResizeTO;
window.addEventListener('resize', ()=>{
  clearTimeout(__noteResizeTO);
// script.js — update the debounced resize handler body
__noteResizeTO = setTimeout(()=>{
  try { applyMobilePricingUX(); } catch(_){}
  try { hideLevelBulletLists(); } catch(_){}
  syncNoteHeights();
}, 120);
});

/*
ES: Actualiza la grilla de precios compartida según el nivel (básico/intermedio/avanzado)
    y el idioma actual. También ajusta las "píldoras" de ahorro.
EN: Updates the shared pricing grid for the selected level and current language,
    and adjusts the savings pills.
*/

function updateSharedPricing(level){
  const lang = (document.documentElement.lang === 'es') ? 'es' : 'en';
  const map = strings[lang] || {};
  const root = document.getElementById('sharedPricing');
  if (!root) return;

  const category = (document.getElementById('classes')?.getAttribute('data-category')) || 'percussion';
  const ns = (category === 'dance') ? `pricing.dance.${level}` : `pricing.${level}`;
  const k = (suffix)=> `${ns}.${suffix}`;

  // Prices
  const pSingle  = root.querySelector('[data-price-key="single"]');
  const pMonthly = root.querySelector('[data-price-key="monthly"]');
  const pFull    = root.querySelector('[data-price-key="full"]');
  const vSingle  = map[k('price1')];
  const vMonthly = map[k('price4')];
  const vFull    = map[k('price16_head')];
  if (pSingle  && vSingle  != null) pSingle.textContent  = vSingle;
  if (pMonthly && vMonthly != null) pMonthly.textContent = vMonthly;
  if (pFull    && vFull    != null) pFull.textContent    = vFull;

  // Hide monthly card if no price for this category/level
  const monthlyCard = root.querySelector('[data-card="monthly"]');
  if (monthlyCard) monthlyCard.style.display = (vMonthly && String(vMonthly).trim()) ? '' : 'none';

  // If monthly hidden but selected, force plan back to single
  const section = document.getElementById('classes');
  if (section && monthlyCard && monthlyCard.style.display === 'none'){
    const currentPlan = root.getAttribute('data-plan') || 'single';
    if (currentPlan === 'monthly'){
      root.setAttribute('data-plan','single');
      const planTabs = section.querySelectorAll('.plan-switch [role="tab"]');
      planTabs.forEach(btn => btn.setAttribute('aria-selected', btn.getAttribute('data-plan')==='single' ? 'true' : 'false'));
      localStorage.setItem('bambula_plan','single');
    }
  }

  // --- Deterministic savings pill update (no key swapping/race conditions) ---
  root.querySelectorAll('.price-card').forEach(card => {
    const kind = card.getAttribute('data-card') || 'single'; // 'single' | 'monthly' | 'full'
    if (kind === 'single') return;

    // Ensure a note + pill exist
    let note = card.querySelector(':scope > .note');
    if (!note) {
      note = document.createElement('div');
      note.className = 'note';
      const btn = card.querySelector(':scope > .btn');
      (btn ? btn.insertAdjacentElement('afterend', note) : card.appendChild(note));
    }
    let pill = note.querySelector(':scope > .deal-pill');
    if (!pill) {
      pill = document.createElement('span');
      pill.className = 'deal-pill';
      if (note.childNodes.length) note.append(' ');
      note.appendChild(pill);
    }

    // Compute the correct i18n key for THIS card, NOW
    const key = `${ns}.${kind}.l4`; // e.g., pricing.basic.monthly.l4 or pricing.dance.basic.full.l4
    pill.setAttribute('data-i18n', key);

    const txt = map[key];
    if (txt && String(txt).trim()) {
      pill.textContent = txt;
      pill.style.display = '';
    } else {
      // For Dance you left these blank on purpose → hide consistently
      pill.textContent = '';
      pill.style.display = 'none';
    }
  });
  // --------------------------------------------------------------------------

  try { decorateBookButtons(); } catch(_){}
  syncNoteHeights();
}

/*
Adds a one-time-payment pill and a short note to the shared pricing notes
so users know everything is a one-off purchase (no subscription).
*/
function ensureOneTimePills(){
  const root = document.getElementById('sharedPricing');
  if (!root) return;
  const lang = (document.documentElement.lang === 'es') ? 'es' : 'en';
  const map = strings[lang] || {};
  root.querySelectorAll('.price-card').forEach(card => {
    let note = card.querySelector(':scope > .note');
    if (!note){
      note = document.createElement('div');
      note.className = 'note';
      const btn = card.querySelector(':scope > .btn');
      if (btn) btn.insertAdjacentElement('afterend', note);
      else card.appendChild(note);
    }
    let pill = note.querySelector(':scope > .info-pill');
    if (!pill){
      pill = document.createElement('span');
      pill.className = 'info-pill';
      if (note.childNodes.length) note.append(' ');
      note.appendChild(pill);
    }
    pill.textContent = map['billing.onetime'] || 'One-time payment';

    let line = note.querySelector(':scope > .note-line');
    if (!line){
      line = document.createElement('div');
      line.className = 'note-line';
      note.appendChild(line);
    }
    line.textContent = map['billing.note.onetime'] || 'No auto-renewals.';
  });
}

// --- Mobile pricing UX: sticky selectors + horizontal scroll-snap for cards ---
// --- Mobile pricing UX: sticky selectors + horizontal scroll-snap for cards ---
function applyMobilePricingUX(){
  const STYLE_ID = 'mobilePricingUX';

  // Remove any previously injected mobile rules (that used 88% + padding)
  const old = document.getElementById(STYLE_ID);
  if (old) old.remove();

  // Inject rules that match our CSS (full width, no extra padding)
  const style = document.createElement('style');
  style.id = STYLE_ID;
  style.textContent = `
    @media (max-width: 900px){
      .selectors-bar{
        position: sticky; top: 0; z-index: 20;
        background: var(--bg); border-bottom: 1px solid rgba(0,0,0,.06);
      }
      .pricing{
        display: grid;
        grid-auto-flow: column;
        grid-auto-columns: 100%;
        overflow-x: auto;
        gap: 12px;
        margin: 0;
        padding: 0;
        scroll-snap-type: x mandatory;
        -webkit-overflow-scrolling: touch;
      }
      .pricing::-webkit-scrollbar{ display: none; }
      .price-card{ scroll-snap-align: start; }
      .price-card > .note{ min-height: auto !important; }
    }
  `;
  document.head.appendChild(style);

  // Accessibility niceties
  const bar = document.querySelector('.selectors-bar');
  if (bar && !bar.getAttribute('aria-label')){
    bar.setAttribute('aria-label',
      (document.documentElement.lang === 'es')
        ? 'Opciones de planes y niveles'
        : 'Plan and level options'
    );
  }

  const isMobile = window.matchMedia('(max-width: 900px)').matches;
  document.querySelectorAll('.pricing').forEach(pr => {
    pr.setAttribute('role', 'region');
    pr.setAttribute('aria-roledescription', 'carousel');
    if (isMobile){ pr.setAttribute('tabindex', '0'); }
    else { pr.removeAttribute('tabindex'); }
  });
}

// // --- Mobile: level syllabus popover (uses <dialog>) --------------------------
// function installLevelInfoPopovers(){
//   // Inject dialog once
//   let dlg = document.querySelector('dialog.level-info');
//   if (!dlg){
//     dlg = document.createElement('dialog');
//     dlg.className = 'level-info';
//     dlg.innerHTML = `<header><h3></h3><button class="close" type="button">✕</button></header><div class="sheet"><ul></ul></div>`;
//     document.body.appendChild(dlg);
//     dlg.querySelector('.close').addEventListener('click', ()=> dlg.close());
//     dlg.addEventListener('click', (e)=>{ if (e.target === dlg) dlg.close(); });
//   }
//   // t() helper
//   function currentLang(){ return (document.documentElement.lang === 'es') ? 'es' : 'en'; }
//   function t(key){ const map = strings[currentLang()] || {}; return map[key] || ''; }

//   // Build syllabus list by category + level
//   function buildList(category, level){
//     const ul = document.createElement('ul');
//     const prefix = (category === 'dance') ? `dance.group.${level}` : `classes.group.${level}`;
//     for (let i=1; i<=8; i++){
//       const key = `${prefix}.l${i}`;
//       const txt = t(key);
//       if (!txt) continue;
//       const li = document.createElement('li');
//       li.textContent = txt;
//       ul.appendChild(li);
//     }
//     return ul;
//   }

//   // Add ℹ️ to each level header and wire dialog
//   document.querySelectorAll('.class-group').forEach(group => {
//     const head = group.querySelector('.group-head');
//     if (!head) return;
//     let btn = head.querySelector('.level-info-btn');
//     if (!btn){
//       btn = document.createElement('button');
//       btn.className = 'level-info-btn';
//       btn.type = 'button';
//       btn.setAttribute('aria-haspopup','dialog');
//       btn.setAttribute('title', currentLang()==='es' ? 'Ver contenido' : 'View contents');
//       btn.innerText = 'ℹ️';
//       head.appendChild(btn);
//     }
//     btn.onclick = ()=>{
//       const section = document.getElementById('classes');
//       const category = section ? (section.getAttribute('data-category') || 'percussion') : 'percussion';
//       const level = group.id?.replace('group-','') || 'basic';
//       // Title
//       const h = dlg.querySelector('h3');
//       h.textContent = head.querySelector('.subsection')?.textContent || '';
//       // Contents
//       const sheet = dlg.querySelector('.sheet');
//       const old = sheet.querySelector('ul'); if (old) old.remove();
//       sheet.appendChild(buildList(category, level));
//       try { dlg.showModal(); } catch { dlg.show(); }
//     };
//   });
// }

/*
ES: Selector de nivel (pestañas) en la sección de Clases.
    Cambia el nivel visible y guarda la preferencia.
EN: Level selector (tabs) in Classes section.
    Switches visible level and stores the preference.
*/
(function initLevelSwitcher(){
  const section = document.getElementById('classes');
  if (!section) return;
  const tabs = section.querySelectorAll('.level-switch [role="tab"]');
  if (!tabs.length) return;

  const savedLevel = localStorage.getItem('bambula_level');
  const defaultLevel = ['basic','intermediate','advanced'].includes(savedLevel) ? savedLevel : 'basic';
  setLevel(defaultLevel);

  tabs.forEach(btn => {
    btn.addEventListener('click', (e)=>{
      e.preventDefault();
      const lvl = btn.getAttribute('data-level');
      setLevel(lvl);
    });
  });

  function setLevel(level){
    section.setAttribute('data-level', level);
    tabs.forEach(btn => btn.setAttribute('aria-selected', btn.getAttribute('data-level')===level ? 'true' : 'false'));
    localStorage.setItem('bambula_level', level);
    // Re-sync notes after layout change
    updateSharedPricing(level);
    try { hideLevelBulletLists(); } catch(_){}
    try { decorateBookButtons(); } catch(_){}
    // Keep info popovers up-to-date with current level/category/lang
    try { installLevelInfoPopovers(); } catch(_){}
    setTimeout(syncNoteHeights, 0);
  }
})();

/*
ES: Conmutador de plan (Sesión única / Mensual / Completo) para móvil.
EN: Plan switch (Single / Monthly / Complete) for mobile.
*/
(function initPlanSwitcher(){
  const section = document.getElementById('classes');
  const shared = document.getElementById('sharedPricing');
  if (!section || !shared) return;

  const planTabs = section.querySelectorAll('.plan-switch [role="tab"]');
  if (!planTabs.length) return;

  const savedPlan = localStorage.getItem('bambula_plan');
  const defaultPlan = ['single','monthly','full'].includes(savedPlan) ? savedPlan : 'single';
  setPlan(defaultPlan);

  planTabs.forEach(btn => {
    btn.addEventListener('click', (e)=>{
      e.preventDefault();
      const plan = btn.getAttribute('data-plan');
      setPlan(plan);
    });
  });

  // helper: only scroll if the selectors bar isn't mostly visible
  function isMostlyInView(el, threshold = 0.6){
    if (!el) return false;
    const r = el.getBoundingClientRect();
    const vh = window.innerHeight || document.documentElement.clientHeight;
    const visible = Math.max(0, Math.min(r.bottom, vh) - Math.max(r.top, 0));
    return r.height > 0 && (visible / r.height) >= threshold;
  }

  // --- Plan card scroll/sync helpers ---
  function scrollToPlanCard(plan){
    const wrap = document.querySelector('#sharedPricing .pricing');
    if (!wrap) return;
    const card = wrap.querySelector(`.price-card[data-card="${plan}"]`);
    if (!card) return;
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const left = card.offsetLeft - wrap.offsetLeft;
    wrap.scrollTo({ left, behavior: prefersReduced ? 'auto' : 'smooth' });
  }

  let __syncingFromScroll = false;
  function bindPlanScrollSync(){
    const wrap = document.querySelector('#sharedPricing .pricing');
    if (!wrap) return;
    let to;
    wrap.addEventListener('scroll', ()=>{
      if (window.innerWidth > 900) return; // mobile only
      if (__syncingFromScroll) return;
      clearTimeout(to);
      to = setTimeout(()=>{
        // Determine which card is most in view
        const cards = Array.from(wrap.querySelectorAll('.price-card'));
        if (!cards.length) return;
        const scrollLeft = wrap.scrollLeft;
        let best = cards[0];
        let bestDelta = Infinity;
        cards.forEach(c => {
          const delta = Math.abs(c.offsetLeft - scrollLeft);
          if (delta < bestDelta){ bestDelta = delta; best = c; }
        });
        const plan = best.getAttribute('data-card') || 'single';
        // Update selected tab and dataset
        const planTabs = document.querySelectorAll('#classes .plan-switch [role="tab"]');
        document.getElementById('sharedPricing')?.setAttribute('data-plan', plan);
        planTabs.forEach(btn => btn.setAttribute('aria-selected', btn.getAttribute('data-plan')===plan ? 'true' : 'false'));
        localStorage.setItem('bambula_plan', plan);
        // NOTE: Do NOT call scrollToPlanCard() here — avoids feedback loop.
      }, 80);
    }, { passive:true });
  }

  function setPlan(plan){
    shared.setAttribute('data-plan', plan);
    planTabs.forEach(btn => btn.setAttribute('aria-selected', btn.getAttribute('data-plan')===plan ? 'true' : 'false'));
    localStorage.setItem('bambula_plan', plan);

    // Move the horizontal scroller to the selected plan (mobile)
    scrollToPlanCard(plan);

    // Refresh pricing labels/notes for current level/category
    const lvl = section.getAttribute('data-level') || 'basic';
    updateSharedPricing(lvl);
    try { decorateBookButtons(); } catch(_){}
    setTimeout(syncNoteHeights, 0);

    // Gentle nudge to keep selectors visible (if not already)
    if (window.innerWidth <= 900){
      const bar = document.querySelector('.selectors-bar');
      if (bar && typeof bar.scrollIntoView === 'function' && !isMostlyInView(bar)){
        const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        bar.scrollIntoView({ behavior: prefersReduced ? 'auto' : 'smooth', block: 'nearest' });
      }
    }
  }

  bindPlanScrollSync();
})();
/*
ES: Al hacer clic en un botón de reserva, pre-llena el campo "Mensaje" en Contacto
    con el paquete seleccionado (grupo + título + precio).
EN: Clicking a booking button pre-fills the Contact message with the chosen package
    (group + title + price).
*/
 (function setupBookingPrefill(){
  function currentLang(){ return (document.documentElement.lang === 'es') ? 'es' : 'en'; }
  function t(key){
    const map = strings[currentLang()] || {};
    return map[key] || '';
  }
  function inferPlanFromCard(card){
    if (!card) return 'single';
    // Prefer explicit data-card from shared grid
    const explicit = card.getAttribute('data-card');
    if (explicit) return explicit;
    // Fallback by inspecting i18n keys on the title within the card
    const h3 = card.querySelector('h3');
    const key = h3 && h3.getAttribute('data-i18n') || '';
    if (key.includes('.monthly.')) return 'monthly';
    if (key.includes('.full.')) return 'full';
    return 'single';
  }
  function buildPackageSummary(btn){
    const card = btn.closest('.price-card');
    // Try to find the level title from the nearest class-group
    let groupTitle = '';
    const group = card && card.closest('.class-group');
    if (group) {
      groupTitle = (group.querySelector('.group-head .subsection')?.textContent || '').trim();
    }
    // Fallback for shared pricing grid (not inside a .class-group): use current selected level
    if (!groupTitle) {
      const classesSection = document.getElementById('classes');
      const level = classesSection ? (classesSection.getAttribute('data-level') || '').trim() : '';
      if (level) {
        // Prefer actual DOM header text for the selected level
        const header = document.querySelector(`#group-${level} .group-head .subsection`);
        groupTitle = (header?.textContent || '').trim();
        // If not found, fall back to i18n string for the level key
        if (!groupTitle) {
          const key = `classes.group.${level}`;
          groupTitle = t(key) || level;
        }
      }
    }
    const title = card ? (card.querySelector('h3')?.textContent || '').trim() : '';
    const price = card ? (card.querySelector('.price')?.textContent || '').trim() : '';
    let summary = title;
    if (groupTitle) summary = groupTitle + ' — ' + summary;
    if (price) summary += ' (' + price + ')';
    return summary;
  }
  function prefillMessage(summary){
    const form = document.querySelector('#contact form');
    if (!form) return;
    const textarea = form.querySelector('textarea[name="message"]');
    if (!textarea) return;
    const template = t('contact.prefill') || 'Hello! I\'d like to book: {package}.';
    const msg = template.replace('{package}', summary);
    textarea.value = msg;
    // Focus the textarea for convenience
    textarea.focus();
  }
  document.addEventListener('click', function(e){
    const target = e.target;
    if (!(target instanceof Element)) return;
    const btn = target.closest('.price-card .btn');
    if (!btn) return;
    // Kill-switch guard: block disabled options before any navigation/prefill
    (function(){
      try{
        const classesSection = document.getElementById('classes');
        const category = classesSection ? (classesSection.getAttribute('data-category') || 'percussion') : 'percussion';
        // Determine level: from surrounding group when available, else from section
        let level = 'basic';
        const group = btn.closest('.class-group');
        if (group && group.id && group.id.indexOf('group-') === 0){
          level = group.id.replace('group-','');
        } else if (classesSection){
          level = classesSection.getAttribute('data-level') || 'basic';
        }
        const plan = (function(card){
          if (!card) return 'single';
          const explicit = card.getAttribute('data-card');
          if (explicit) return explicit;
          const h3 = card.querySelector('h3');
          const key = (h3 && h3.getAttribute('data-i18n')) || '';
          if (key.includes('.monthly.')) return 'monthly';
          if (key.includes('.full.')) return 'full';
          return 'single';
        })(btn.closest('.price-card'));

        if (isOptionDisabled(category, level, plan)){
          e.preventDefault();
          // Tiny toast
          const note = document.createElement('div');
          note.textContent = 'This option is temporarily unavailable. Please pick a different plan.';
          note.style.cssText = 'position:fixed;left:50%;bottom:24px;transform:translateX(-50%);padding:10px 14px;background:#222;color:#fff;border-radius:8px;box-shadow:0 6px 20px rgba(0,0,0,.25);z-index:9999;font-size:14px;';
          document.body.appendChild(note);
          setTimeout(()=>{ note.remove(); }, 2400);
          return;
        }
      } catch(_){}
    })();
    const flow = (document.body.getAttribute('data-booking') || 'contact').toLowerCase();
    if (flow === 'book'){
      // Build URL to book.html using current level + plan
      const classesSection = document.getElementById('classes');
      const level = classesSection ? (classesSection.getAttribute('data-level') || 'basic') : 'basic';
      const plan = inferPlanFromCard(btn.closest('.price-card'));
      const category = classesSection ? (classesSection.getAttribute('data-category') || 'percussion') : 'percussion';
      const url = `book.html?category=${encodeURIComponent(category)}&level=${encodeURIComponent(level)}&plan=${encodeURIComponent(plan)}`;      e.preventDefault();
      window.location.href = url;
      return;
    } else {
      // Default: prefill contact message and follow #contact link
      const summary = buildPackageSummary(btn);
      prefillMessage(summary);
      // allow normal anchor navigation to #contact
    }
  }, true);
})();

/*
ES: Conmutador de categoría (Percusión/Danza)
EN: Category switcher (Percussion/Dance)
*/
 (function initCategorySwitcher(){
  const section = document.getElementById('classes');
  if (!section) return;
  const catTabs = section.querySelectorAll('.category-switch [role="tab"]');
  if (!catTabs.length) return;
  const saved = localStorage.getItem('bambula_category') || 'percussion';
  section.setAttribute('data-category', saved);
  catTabs.forEach(btn => btn.setAttribute('aria-selected', btn.getAttribute('data-category')===saved ? 'true' : 'false'));
  // Set subtitle based on category
  (function setSubtitle(cat){
    const el = document.getElementById('classesSubtitle');
    if (!el) return;
    const lang = (document.documentElement.lang === 'es') ? 'es' : 'en';
    const key = (cat==='dance') ? 'classes.subtitle.dance' : 'classes.subtitle.percussion';
    el.setAttribute('data-i18n', key);
    const val = (strings[lang]||{})[key];
    if (val!=null) el.textContent = val;
  })(saved);
  // Ensure shared pricing reflects saved category on initial load
  (function refreshPricing(){
    const lvl = localStorage.getItem('bambula_level') || section.getAttribute('data-level') || 'basic';
    updateSharedPricing(lvl);
    try { hideLevelBulletLists(); } catch(_){}
    try { installLevelInfoPopovers(); } catch(_){}
    try { applyMobilePricingUX(); } catch(_){}
    try { decorateBookButtons(); } catch(_){ }
    try { installLevelInfoPopovers(); } catch(_){ }
    setTimeout(syncNoteHeights, 0);
  })();
  // Set level tab labels based on category
  (function setLevelLabels(cat){
    const lang = (document.documentElement.lang === 'es') ? 'es' : 'en';
    const map = strings[lang] || {};
    const prefix = (cat==='dance') ? 'dance.group' : 'classes.group';
    const tabsWrap = section.querySelector('.level-switch');
    if (!tabsWrap) return;
    const keys = ['basic','intermediate','advanced'];
    tabsWrap.querySelectorAll('button span').forEach((span, idx)=>{
      const levelKey = `${prefix}.${keys[idx]}`;
      span.setAttribute('data-i18n', levelKey);
      if (map[levelKey]!=null) span.textContent = map[levelKey];
    });
  })(saved);
  catTabs.forEach(btn => {
    btn.addEventListener('click', (e)=>{
      e.preventDefault();
      const cat = btn.getAttribute('data-category');
      section.setAttribute('data-category', cat);
      catTabs.forEach(b => b.setAttribute('aria-selected', b.getAttribute('data-category')===cat ? 'true' : 'false'));
      localStorage.setItem('bambula_category', cat);
      // Update subtitle to reflect current category
      (function setSubtitle(cat){
        const el = document.getElementById('classesSubtitle');
        if (!el) return;
        const lang = (document.documentElement.lang === 'es') ? 'es' : 'en';
        const key = (cat==='dance') ? 'classes.subtitle.dance' : 'classes.subtitle.percussion';
        el.setAttribute('data-i18n', key);
        const val = (strings[lang]||{})[key];
        if (val!=null) el.textContent = val;
      })(cat);
      // Update level tab labels to reflect current category
      (function setLevelLabels(cat){
        const lang = (document.documentElement.lang === 'es') ? 'es' : 'en';
        const map = strings[lang] || {};
        const prefix = (cat==='dance') ? 'dance.group' : 'classes.group';
        const tabsWrap = section.querySelector('.level-switch');
        if (!tabsWrap) return;
        const keys = ['basic','intermediate','advanced'];
        tabsWrap.querySelectorAll('button span').forEach((span, idx)=>{
          const levelKey = `${prefix}.${keys[idx]}`;
          span.setAttribute('data-i18n', levelKey);
          if (map[levelKey]!=null) span.textContent = map[levelKey];
        });
      })(cat);
      const lvl = section.getAttribute('data-level') || 'basic';
      updateSharedPricing(lvl);
      try { hideLevelBulletLists(); } catch(_){}
      try { decorateBookButtons(); } catch(_){}
      try { installLevelInfoPopovers(); } catch(_){}
      setTimeout(syncNoteHeights, 0);
    });
  });
})();

// Initial pass: visually disable any booking options as needed on load
try { hideLevelBulletLists(); } catch(_){}
try { applyMobilePricingUX(); } catch(_){}
try { decorateBookButtons(); } catch(_){}
try { installLevelInfoPopovers(); } catch(_){}
setTimeout(syncNoteHeights, 0);

// --- Mobile: level syllabus popover (uses <dialog>) --------------------------------
function installLevelInfoPopovers(){
  // Inject base styles once
  const ID = 'levelInfoStyles';
  if (!document.getElementById(ID)){
    const s = document.createElement('style');
    s.id = ID;
    s.textContent = `
      /* Global (all widths) — ensure header is mustard even on desktop */
      .level-info header{
        display:flex; align-items:center; gap:8px; padding:12px 16px;
        position:sticky; top:0; z-index:1;
        background: var(--mustard); color:#000;
        border:0;
        box-shadow: 0 1px 0 rgba(0,0,0,.06);
      }
      .level-info h3{ margin:0; font-size:16px; color:#000; }

      @media (max-width: 900px){
        dialog.level-info{
          border:0; border-radius:16px; padding:0;
          width:min(92vw, 560px); max-height:80vh;
          box-shadow:0 24px 60px rgba(0,0,0,.35);
        }
        dialog.level-info::backdrop{ background:rgba(0,0,0,.45); }
        /* You may keep a duplicate header block here, but it’s no longer required */
      }
    `;
    document.head.appendChild(s);
  }

  // Ensure one shared dialog exists
  let dlg = document.querySelector('dialog.level-info');
  if (!dlg){
    dlg = document.createElement('dialog');
    dlg.className = 'level-info';
    dlg.innerHTML = `<header><h3></h3><button class="close" type="button">✕</button></header><div class="sheet"><ul></ul></div>`;
    document.body.appendChild(dlg);
    dlg.querySelector('.close').addEventListener('click', ()=> dlg.close());
    dlg.addEventListener('click', (e)=>{ if (e.target === dlg) dlg.close(); });
  }

  function currentLang(){ return (document.documentElement.lang === 'es') ? 'es' : 'en'; }
  function t(key){ const map = strings[currentLang()] || {}; return map[key] || ''; }

  // Helper: build the UL based on category+level
  function buildList(category, level){
    const ul = document.createElement('ul');
    const prefix = (category === 'dance') ? `dance.group.${level}` : `classes.group.${level}`;
    // collect up to l1..l8 (some levels may have fewer)
    for (let i=1; i<=8; i++){
      const key = `${prefix}.l${i}`;
      const txt = t(key);
      if (txt){
        const li = document.createElement('li');
        li.textContent = txt;
        ul.appendChild(li);
      }
    }
    return ul;
  }

  // Add/refresh info buttons in each .group-head
  document.querySelectorAll('.class-group').forEach(group => {
    const head = group.querySelector('.group-head');
    if (!head) return;
    let btn = head.querySelector('.level-info-btn');
    if (!btn){
      btn = document.createElement('button');
      btn.className = 'level-info-btn';
      btn.type = 'button';
      btn.setAttribute('aria-haspopup','dialog');
      btn.setAttribute('title', currentLang()==='es' ? 'Ver contenido' : 'View contents');
      btn.innerText = 'ℹ️';
      head.appendChild(btn);
    }
    // Click opens dialog with current category + this level syllabus
    btn.onclick = ()=>{
      const section = document.getElementById('classes');
      const category = section ? (section.getAttribute('data-category') || 'percussion') : 'percussion';
      // Accept both percussion ids like "group-basic" and dance ids like "dance-basic"
      let level = 'basic';
      if (group.id){
        level = group.id.replace(/^group-/, '').replace(/^dance-/, '');
      }
      const h = dlg.querySelector('h3');
      h.textContent = head.querySelector('.subsection')?.textContent || '';
      const sheet = dlg.querySelector('.sheet');
      const newUl = buildList(category, level);
      const oldUl = sheet.querySelector('ul');
      if (oldUl) {
        oldUl.replaceWith(newUl);
      } else {
        sheet.appendChild(newUl);
      }
      try{ dlg.showModal(); }catch{ dlg.show(); }
    };
  });
}

