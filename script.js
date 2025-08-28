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
    "pricing.single.credit":"If you enroll in the Complet Course package within 30 days from booking, this session is credited.",
    "pricing.perhour":"/ hour",
    "pricing.basic.l1":"Topic of choice: fundamentals, rhythm review, or technique reinforcement",
    "pricing.basic.l2":"No refunds. Absences without 48-hour notice cannot be rescheduled.",

    "pricing.monthly.title":"Monthly Subscription",
    "pricing.monthly.note":"($110 / hour)",
    "pricing.monthly.l1":"4 private classes (1 hour each)",
    "pricing.monthly.l2":"Expires 30 days from purchase.",
    "pricing.monthly.l3":"Practice recordings",
    "pricing.monthly.l4":"Save 8%",

    "pricing.full.title":"Complete Course",
    "pricing.full.note":"($100 / hour) - most popular",
    "pricing.full.l1":"16 private classes (1 hour each)",
    "pricing.full.l2":"Use within 365 days of purchase",
    "pricing.full.l3":"Endurance & personal practice",
    "pricing.full.l4":"Save 17%",
    "pricing.cta":"Book",

    // CLASSES – new packages
    "pricing.intermediate.title":"Intermediate",
    "pricing.intermediate.price4":"$460 / 4 classes",
    "pricing.intermediate.price16":"Complete (16): $1,680 → $105 / hour",
    "pricing.intermediate.l1":"Intermediate rudiments (control & variations)",
    "pricing.intermediate.l2":"Buleo interaction with primo",
    "pricing.intermediate.l3":"Coordination & endurance drills",
    "pricing.intermediate.l4":"Rhythms: sicá, yubá, cuembé, holandé + calindá",
    "pricing.intermediate.l5":"Basic responses to llamados",
    "pricing.intermediate.l6":"Sing coros while buleando",
    "pricing.intermediate.l7":"Energy dynamics (up/down)",
    "pricing.intermediate.single.na":"—",
    "pricing.intermediate.single.note":"Single session not offered at this level.",
    "pricing.intermediate.price16_head":"$1,680 ($105/class)",

    "pricing.advanced.single.na":"—",
    "pricing.advanced.single.note":"Single session not offered at this level.",
    "pricing.advanced.price16_head":"$1,760 ($110/class)",
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
    "nav.about":"About",
    "nav.classes":"Clases",
    "nav.workshops":"Talleres",
    "nav.faq":"Preguntas",
    "nav.contact":"Contacto",

    "hero.title":"Ritmo ancestral. Tradición viva.",
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
    "about.f3":"Centrado en la tradición cangrejera, con raíces comunitarias",

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
    "classes.group.intermediate.l7":"Dinámica de energía (subir y bajar)",

    "classes.group.advanced":"Buleo Avanzado",
    "classes.group.advanced.l1":"Rudimentos avanzados (combinaciones y resistencia prolongada)",
    "classes.group.advanced.l2":"Ritmos: todos los anteriores + seis corrido y corvé",
    "classes.group.advanced.l3":"Variaciones profundas de sicá, yubá, cuembé, holandé, calindá",
    "classes.group.advanced.l4":"Mantener intensidad y cadencia por tiempos largos",
    "classes.group.advanced.l5":"Cantar coros mientras se bulea en variaciones complejas",
    "classes.group.advanced.l6":"Ejercicios de control y variación a nivel profesional",

    "classes.title":"Clases Privadas (Buleo con Barril de Bomba Puertorriqueña)",
    "classes.subtitle":"Opciones claras y flexibles. ",
    "pricing.basic.title":"Clase Individual (1 Sesión)",
    "pricing.single.credit":"Si te inscribes en el paquete Curso Completo dentro de los 30 días posteriores a la reserva, esta sesión se acredita.",
    "pricing.perhour":"/ hora",
    "pricing.basic.l1":"Tema a elección: fundamentos, repaso de ritmos o refuerzo técnico",
    "pricing.basic.l2":"No reembolsable. Ausencias sin aviso previo de 48 horas no se pueden reprogramar.",

    "pricing.monthly.title":"Subscripción Mensual",
    "pricing.monthly.note":"($110 / hora)",
    "pricing.monthly.l1":"4 sesiones privadas (1 hora c/u)",
    "pricing.monthly.l2":"Expira en 30 días desde la compra.",
    "pricing.monthly.l3":"Grabaciones de práctica",
    "pricing.monthly.l4":"Ahorra 8%",

    "pricing.full.title":"Curso Completo",
    "pricing.full.note":"($100 / hora) - más popular",
    "pricing.full.l1":"16 sesiones privadas (1 hora c/u)",
    "pricing.full.l2":"Expira en 365 días (desde la compra)",
    "pricing.full.l3":"Resistencia y práctica personal",
    "pricing.full.l4":"Ahorra 17%",
    "pricing.cta":"Reservar",

    // CLASES – nuevos paquetes
    "pricing.intermediate.title":"Clase Individual (1 Sesión)",
    "pricing.intermediate.single.na":"$125 / hora",
    "pricing.intermediate.single.note":"-",

    "pricing.intermediate.monthly.title":"Subscripción Mensual",
    "pricing.intermediate.price4":"$460 ($115 / hora)",
    "pricing.intermediate.full.title":"Curso Completo",
    // "pricing.intermediate.price16":"Completo (16): $1,680 → $105 / hora",
    "pricing.intermediate.price16_head":"$1,680 ($105 / hora)",
    "pricing.intermediate.l1":"Rudimentos intermedios (control y variaciones)",
    "pricing.intermediate.l2":"Buleo en interacción con el primo",
    "pricing.intermediate.l3":"Ejercicios de coordinación y resistencia",
    "pricing.intermediate.l4":"Ritmos: sicá, yubá, cuembé, holandé + calindá",
    "pricing.intermediate.l5":"Respuestas básicas a los llamados",
    "pricing.intermediate.l6":"Cantar coros sin dejar de bulear",
    "pricing.intermediate.l7":"Dinámica de energía (subir y bajar)",

    "pricing.advanced.title":"Clase Individual (1 Sesión)",
    "pricing.advanced.single.na":"$130 / hora",
    "pricing.advanced.single.note":"-",
    "pricing.advanced.monthly.title":"Subcripción Mensual",
    "pricing.advanced.price4":"$480 ($120 / hora)",
    "pricing.advanced.full.title":"Curso Completo",
    "pricing.advanced.price16_head":"$1,760 ($110 / hora)",
    // "pricing.advanced.price16":"Completo (16): $1,760 → $110 / hora",
    "pricing.advanced.l1":"Rudimentos avanzados (combinaciones y resistencia prolongada)",
    "pricing.advanced.l2":"Ritmos: todos los anteriores + seis corrido y corvé",
    "pricing.advanced.l3":"Variaciones profundas de sicá, yubá, cuembé, holandé, calindá",
    "pricing.advanced.l4":"Mantener intensidad y cadencia por tiempos largos",
    "pricing.advanced.l5":"Cantar coros mientras se bulea en variaciones complejas",
    "pricing.advanced.l6":"Ejercicios de control y variación a nivel profesional",

    // POLÍTICAS
    "policies.title":"Políticas",
    "policies.transport":"Transporte: si la clase se realiza en un lugar distinto a mi residencia, se aplica un cargo adicional de $0.65 por milla (ida y vuelta).",
    "policies.expire":"Vencimiento: todos los paquetes expiran; clases no usadas no son reembolsables ni transferibles.",
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
    const val = map && map[key];
    if (!val) return;

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
  document.getElementById('langToggle').textContent = (lang==='es')?'EN':'ES';
  localStorage.setItem('bambula_lang', lang);
}

const saved = localStorage.getItem('bambula_lang') || 'en';
setLang(saved);

document.getElementById('langToggle').addEventListener('click', ()=>{
  const current = localStorage.getItem('bambula_lang') || 'en';
  setLang(current==='en'?'es':'en');
});
