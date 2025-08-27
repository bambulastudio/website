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

    "hero.title":"Rooted rhythm. Living culture.",
    "hero.subtitle":"Private Bomba drum lessons (buleo), community workshops, and cultural education—with care and discipline.",
    "hero.cta1":"See classes",
    "hero.cta2":"Ask a question",

    "about.title":"What is Bámbula Studio?",
    "about.p1":"At Bámbula Studio, we understand Bomba not only as music and dance, but as an expression of memory, identity, and resistance. Our cultural work centers on:",
    "about.p2":"Teaching: Bomba classes and workshops for all ages and levels, where students learn traditional rhythms, songs, and dances.",
    "about.p3":"Preservation: Keeping Puerto Rican tradition alive in the diaspora—creating spaces where Bomba flourishes as ancestral heritage.",
    "about.p4":"Community: Cultivating cultural gatherings in the Dallas–Fort Worth area that strengthen identity and belonging.",
    "about.p5":"Ancestral memory: Each class and every drumbeat becomes an act of remembering who we are as a people, honoring our Afro-Caribbean roots.",
    "about.p6":"Through every activity we seek to celebrate, share, and pass Puerto Rican culture to new generations.",
    "about.quick":"Quick facts",
    "about.f1":"Private lessons: 1 hr",
    "about.f2":"Recordings for home practice",
    "about.f3":"Tradition-centered, community-rooted",
    "classes.group.basic":"Basic Buleo",
    "classes.group.intermediate":"Intermediate Buleo",
    "classes.group.advanced":"Advanced Buleo",
    "classes.title":"Private Classes (Buleo)",
    "classes.subtitle":"Clear, flexible options.",
    "pricing.basic.title":"Basic",
    "pricing.single.credit":"If you enroll in the 16-class package within 30 days, this class is credited.",
    "pricing.perhour":"/ hour",
    "pricing.basic.l1":"Posture & hand placement",
    "pricing.basic.l2":"Sounds: abierto/seco, caja, campana",
    "pricing.basic.l3":"Keep buleo in time",

    "pricing.monthly.title":"Monthly (4)",
    "pricing.monthly.note":"($110/class)",
    "pricing.monthly.l1":"4 private classes (1 hr each)",
    "pricing.monthly.l2":"Use within 365 days",
    "pricing.monthly.l3":"Practice recordings",

    "pricing.full.title":"Complete (16)",
    "pricing.full.note":"($100/class)",
    "pricing.full.l1":"16 private classes (1 hr)",
    "pricing.full.l2":"Use within 365 days",
    "pricing.full.l3":"Endurance & personal practice",
    "pricing.cta":"Book",

    "classes.note":"Not sure of your level? We can do a $15 initial evaluation to place you correctly.",

    "workshops.title":"Group Workshops",
    "workshops.p1":"For 3+ people: intro to Bomba (buleo basics), rhythm family (sicá, yubá, cuembé, holandé), and cultural context. $60 per person per hour.",
    "workshops.p2":"We also offer campus talks and chapel services. Typical budget: travel & lodging up to $2,500 + $2,000 honorarium.",

    "workshops.includes":"Includes",
    "workshops.i1":"All-level friendly",
    "workshops.i2":"Call-and-response practice",
    "workshops.i3":"Culture & history",

    "faq.title":"FAQ",
    "faq.q1":"Do I need my own drum?",
    "faq.a1":"No. If you have one, bring it. If not, we’ll adapt with practice surfaces and technique.",
    "faq.q2":"Are lessons in Spanish or English?",
    "faq.a2":"Either—your choice. The tradition is Puerto Rican; we honor both languages.",
    "faq.q3":"Where are lessons held?",
    "faq.a3":"In-person (DFW area) or we can arrange a suitable space. No virtual lessons listed by default.",

    "contact.title":"Contact",
    "contact.p1":"Reach out to get started and I’ll send all the info.",
    "form.name":"Name",
    "form.email":"Email",
    "form.msg":"Message",
    "form.send":"Send",
    "form.note":"This form uses Formspree’s free plan.",
    "footer.rights":"All rights reserved."
  },

  es: {
    "nav.about":"Sobre",
    "nav.classes":"Clases",
    "nav.workshops":"Talleres",
    "nav.faq":"Preguntas",
    "nav.contact":"Contacto",

    "hero.title":"Ritmo con raíz. Cultura viva.",
    "hero.subtitle":"Clases privadas de percusión de Bomba, talleres comunitarios y educación cultural con compromiso y disciplina",
    "hero.cta1":"Ver clases",
    "hero.cta2":"Hacer una pregunta",

    "about.title":"¿Qué es Bámbula Studio?",
    "about.p1":"En Bámbula Studio entendemos la Bomba no solo como música y danza, sino como una expresión de memoria, identidad y resistencia. Nuestro trabajo cultural se centra en:",
    "about.p2":"Enseñanza: Clases y talleres de Bomba diseñados para todas las edades y niveles, donde se aprenden los toques, cantos y bailes tradicionales.",
    "about.p3":"Preservación: Mantener viva la tradición puertorriqueña en la diáspora, creando espacios donde la Bomba florece como herencia ancestral.",
    "about.p4":"Comunidad: Fomentar encuentros culturales en el área de Dallas–Fort Worth que fortalezcan la identidad y el sentido de pertenencia.",
    "about.p5":"Memoria ancestral: Cada clase y cada toque de tambor se convierten en un acto de recordar quiénes somos como pueblo, y en una forma de honrar nuestras raíces afrocaribeñas.",
    "about.p6":"Con cada actividad buscamos que la cultura puertorriqueña sea celebrada, compartida y transmitida a nuevas generaciones.",
    "about.quick":"Datos rápidos",
    "about.f1":"Clases privadas: 1 hora",
    "about.f2":"Grabaciones para práctica en casa",
    "about.f3":"Centrado en la tradición, con raíces comunitarias",

    "classes.group.basic":"Buleo Básico",
    "classes.group.intermediate":"Buleo Intermedio",
    "classes.group.advanced":"Buleo Avanzado",
    "classes.title":"Clases Privadas (Buleo)",
    "classes.subtitle":"Opciones claras y flexibles. ",
    "pricing.basic.title":"Clase Individual (1 Sesión)",
    "pricing.single.credit":"Si te inscribes en el paquete de 16 clases dentro de 30 días, se acredita el costo de esta sesión.",
    "pricing.perhour":"/ hora",
    "pricing.basic.l1":"Postura y colocación de manos",
    "pricing.basic.l2":"Sonidos: abierto/seco, caja, campana",
    "pricing.basic.l3":"Mantener el buleo en tiempo",

    "pricing.monthly.title":"Subscripción Mensual",
    "pricing.monthly.note":"($110/clase - Ahorra 8%)",
    "pricing.monthly.l1":"4 sesiones privadas (1 hr c/u)",
    "pricing.monthly.l2":"Expira en 60 días",
    "pricing.monthly.l3":"Grabaciones de práctica",

    "pricing.full.title":"Curso Completo",
    "pricing.full.note":"($100/clase - Ahorra 17%)",
    "pricing.full.l1":"16 sesiones privadas (1 hr c/u)",
    "pricing.full.l2":"Expira en 365 días",
    "pricing.full.l3":"Resistencia y práctica personal",
    "pricing.cta":"Reservar",

    // CLASSES – new packages
    "pricing.intermediate.title":"Intermediate",
    "pricing.intermediate.price4":"$460 / 4 classes",
    "pricing.intermediate.price16":"Complete (16): $1,680 → $105/class",
    "pricing.intermediate.l1":"Intermediate rudiments (control & variations)",
    "pricing.intermediate.l2":"Buleo interaction with primo",
    "pricing.intermediate.l3":"Coordination & endurance drills",
    "pricing.intermediate.l4":"Rhythms: sicá, yubá, cuembé, holandé + calindá",
    "pricing.intermediate.l5":"Basic responses to llamados",
    "pricing.intermediate.l6":"Sing coros while buleando",
    "pricing.intermediate.l7":"Energy dynamics (up/down)",

    "pricing.advanced.title":"Advanced",
    "pricing.advanced.price4":"$480 / 4 classes",
    "pricing.advanced.price16":"Complete (16): $1,760 → $110/class",
    "pricing.advanced.l1":"Advanced rudiments (combinations & long endurance)",
    "pricing.advanced.l2":"Rhythms: all above + seis corrido & corvé",
    "pricing.advanced.l3":"Deep variations of sicá, yubá, cuembé, holandé, calindá",
    "pricing.advanced.l4":"Maintain intensity & cadence for long stretches",
    "pricing.advanced.l5":"Sing coros while complex buleo variations",
    "pricing.advanced.l6":"Pro-level control & variation drills",

    // POLICIES
    "policies.title":"Policies",
    "policies.transport":"Transportation: if a lesson is held away from my home, an additional $0.65 per mile (round-trip) applies.",
    "policies.expire":"Package expiration: all packages expire 365 days after purchase; unused classes are non-refundable and non-transferable.",
    "policies.record":"Recordings: recording the teacher during class isn’t allowed. Specific educational recordings can be coordinated at the end of class.",
    // CLASES – nuevos paquetes
    "pricing.intermediate.title":"Intermedio",
    "pricing.intermediate.price4":"$460 / 4 clases",
    "pricing.intermediate.price16":"Completo (16): $1,680 → $105/clase",
    "pricing.intermediate.l1":"Rudimentos intermedios (control y variaciones)",
    "pricing.intermediate.l2":"Buleo en interacción con el primo",
    "pricing.intermediate.l3":"Ejercicios de coordinación y resistencia",
    "pricing.intermediate.l4":"Ritmos: sicá, yubá, cuembé, holandé + calindá",
    "pricing.intermediate.l5":"Respuestas básicas a los llamados",
    "pricing.intermediate.l6":"Cantar coros sin dejar de bulear",
    "pricing.intermediate.l7":"Dinámica de energía (subir y bajar)",

    "pricing.advanced.title":"Avanzado",
    "pricing.advanced.price4":"$480 / 4 clases",
    "pricing.advanced.price16":"Completo (16): $1,760 → $110/clase",
    "pricing.advanced.l1":"Rudimentos avanzados (combinaciones y resistencia prolongada)",
    "pricing.advanced.l2":"Ritmos: todos los anteriores + seis corrido y corvé",
    "pricing.advanced.l3":"Variaciones profundas de sicá, yubá, cuembé, holandé, calindá",
    "pricing.advanced.l4":"Mantener intensidad y cadencia por tiempos largos",
    "pricing.advanced.l5":"Cantar coros mientras se bulea en variaciones complejas",
    "pricing.advanced.l6":"Ejercicios de control y variación a nivel profesional",

    // POLÍTICAS
    "policies.title":"Políticas",
    "policies.transport":"Transporte: si la clase se realiza en un lugar distinto a mi residencia, se aplica un cargo adicional de $0.65 por milla (ida y vuelta).",
    "policies.expire":"Vencimiento: todos los paquetes expiran 365 días después de la compra; clases no usadas no son reembolsables ni transferibles.",
    "policies.record":"Grabaciones: no se permite grabar a la maestra durante la clase. Se pueden coordinar grabaciones educativas específicas al finalizar.",
    "classes.note":"Hacemos una evaluación inicial para confirmar nivel apropriado.",

    "workshops.title":"Talleres Grupales",
    "workshops.p1":"Para 3+ personas: introducción a la Bomba (buleo básico), familia rítmica (sicá, yubá, cuembé, holandé) y contexto cultural. $60 por persona por hora.",
    "workshops.p2":"También hacemos charlas y servicios de capilla. Presupuesto típico: viaje y estadía hasta $2,500 + honorarios de $2,000.",

    "workshops.includes":"Incluye",
    "workshops.i1":"Apto para todos los niveles",
    "workshops.i2":"Práctica de llamada y respuesta",
    "workshops.i3":"Cultura e historia",

    "faq.title":"Preguntas frecuentes",
    "faq.q1":"¿Necesito mi propio barril?",
    "faq.a1":"No. Si tienes, tráelo. Si no, adaptamos con superficies de práctica y técnica.",
    "faq.q2":"¿Las clases son en español o inglés?",
    "faq.a2":"Como prefieras. La tradición es puertorriqueña; honramos ambos idiomas.",
    "faq.q3":"¿Dónde se ofrecen las clases?",
    "faq.a3":"Presencial (área DFW) o coordinamos un espacio. No listamos virtual por defecto.",

    "contact.title":"Contacto",
    "contact.p1":"Contáctame para empezar y te enviaré toda la información.",
    "form.name":"Nombre",
    "form.email":"Correo",
    "form.msg":"Mensaje",
    "form.send":"Enviar",
    "form.note":"Este formulario usa el plan gratis de Formspree.",
    "footer.rights":"Todos los derechos reservados."
  }
};

function setLang(lang){
  const map = strings[lang];
  document.documentElement.lang = (lang === 'es') ? 'es' : 'en';
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    const key = el.getAttribute('data-i18n');
    if (map && map[key]) el.textContent = map[key];
  });
  document.getElementById('langToggle').textContent = (lang==='es')?'EN':'ES';
  localStorage.setItem('bambula_lang', lang);
}

const saved = localStorage.getItem('bambula_lang') || 'en';
setLang(saved);

document.getElementById('langToggle').addEventListener('click', ()=>{
  const current = localStorage.getItem('bambula_lang') || 'en';
  setLang(current==='en'?'es':'en');
});
