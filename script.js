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
    "about.f1":"Private lessons: 1 hour",
    "about.f2":"Recordings for home practice",
    "about.f3":"Tradition-centered, community-rooted",
    
    // Owner/Founder subsection
    "about.owner.title":"Meet the Owner/Founder and Creative Director",
    "about.owner.p1":"Bámbula Studio is led by a Puerto Rican cultural worker and Bomba practitioner dedicated to tradition, pedagogy, and community.",
    "about.owner.p2":"As Creative Director, she develops curricula, leads private lessons and workshops, and curates community programs rooted in memory and identity.",
    "about.owner.p3":"This section highlights the person behind the work—values, lineage, and vision that guide our practice.",
    "about.owner.caption":"Replace with your portrait (recommended 1200×1200)",
    "about.owner.photo_alt":"Portrait of the owner of Bámbula Studio",

    "classes.group.basic":"Basic Buleo",
    "classes.group.intermediate":"Intermediate Buleo",
    "classes.group.advanced":"Advanced Buleo",
    "classes.group.basic.l1":"History of bomba as Puerto Rican tradition",
    "classes.group.basic.l2":"Parts of the barrel: body, skin, and basic care",
    "classes.group.basic.l3":"Posture and hand placement",
    "classes.group.basic.l4":"Sounds: abierto, caja, seco, and campana",
    "classes.group.basic.l5":"Basic buleo rudiments",
    "classes.group.basic.l6":"Keep the buleo in time",
    "classes.group.basic.l7":"Rhythms: sicá, yubá, cuembé, holandé",
    "classes.group.basic.l8":"Endurance exercises and personal practice",

    "classes.group.intermediate.l1":"Intermediate rudiments (control & variations)",
    "classes.group.intermediate.l2":"Buleo interaction with the primo",
    "classes.group.intermediate.l3":"Coordination & endurance drills",
    "classes.group.intermediate.l4":"Rhythms: sicá, yubá, cuembé, holandé + calindá",
    "classes.group.intermediate.l5":"Basic responses to llamados",
    "classes.group.intermediate.l6":"Sing coros while buleando",
    "classes.group.intermediate.l7":"Energy dynamics (faster/slower)",

    "classes.group.advanced.l1":"Advanced rudiments (combinations & long endurance)",
    "classes.group.advanced.l2":"Rhythms: all above + seis corrido & corvé",
    "classes.group.advanced.l3":"Deep variations of sicá, yubá, cuembé, holandé, calindá",
    "classes.group.advanced.l4":"Maintain intensity & cadence for long stretches",
    "classes.group.advanced.l5":"Sing coros while complex buleo variations",
    "classes.group.advanced.l6":"Pro-level control & variation drills",
    
    "classes.title":"Private Classes (Buleo)",
    "classes.subtitle":"Clear, flexible options.",
    "pricing.basic.title":"Single Class (1 Session)",
    "pricing.single.credit":"If you enroll in the Complete Course package within 30 days from booking, this session is credited.",
    "pricing.perhour":"/ hour",
    "pricing.basic.l1":"Topic of choice: fundamentals, rhythm review, or technique reinforcement",
    "pricing.basic.l2":"No refunds. Absences without 48-hour notice cannot be rescheduled.",

    // BASIC – Monthly card (title + note)
    "pricing.basic.monthly.title":"Monthly Subscription",
    "pricing.basic.monthly.note":"($110 / hour)",

    // BASIC tier specific copies (match new_index.html)
    "pricing.basic.monthly.l1":"4 private classes (1 hour each)",
    "pricing.basic.monthly.l2":"Use within 30 days of purchase",
    "pricing.basic.monthly.l3":"Practice recordings",
    "pricing.basic.monthly.l4":"Save 8%",

    "pricing.basic.full.l1":"16 private classes (1 hour each)",
    "pricing.basic.full.l2":"Use within 365 days of purchase",
    "pricing.basic.full.l3":"Practice recordings",
    "pricing.basic.full.l4":"Save 17%",

    // BASIC – Complete card (title + note)
    "pricing.basic.full.title":"Complete Course",
    "pricing.basic.full.note":"($100 / hour) - most popular",
    
    // INTERMEDIATE – section titles for single/monthly/full cards
    "pricing.intermediate.single.l1":"Topic of choice: fundamentals, rhythm review, or technique reinforcement",
    "pricing.intermediate.single.l2":"No refunds. Absences without 48-hour notice cannot be rescheduled.",

    "pricing.intermediate.basic.title":"Single Class (1 Session)",
    "pricing.intermediate.monthly.title":"Monthly Subscription",
    "pricing.intermediate.full.title":"Complete Course",

    // ADVANCED – section titles for monthly/full cards
    "pricing.advanced.monthly.title":"Monthly Subscription",
    "pricing.advanced.full.title":"Complete Course",
    "pricing.cta":"Book",

    // CLASSES – new packages
    "pricing.intermediate.title":"Intermediate",
    "pricing.intermediate.price4":"$460 ($115 / class)",
    "pricing.intermediate.l1":"Intermediate rudiments (control & variations)",
    "pricing.intermediate.l2":"Buleo interaction with primo",
    "pricing.intermediate.l3":"Coordination & endurance drills",
    "pricing.intermediate.l4":"Rhythms: sicá, yubá, cuembé, holandé + calindá",
    "pricing.intermediate.l5":"Basic responses to llamados",
    "pricing.intermediate.l6":"Sing coros while buleando",
    "pricing.intermediate.l7":"Energy dynamics (up/down)",
    // Intermediate single
    "pricing.intermediate.basic.title":"Single Class (1 Session)",
    "pricing.intermediate.single.note":"If you enroll in the Complete Course package within 30 days from booking, this session is credited.",
    "pricing.intermediate.price16_head":"$1,680 ($105/class)",

    // INTERMEDIATE monthly/full lists
    "pricing.intermediate.monthly.l1":"4 private classes (1 hour each)",
    "pricing.intermediate.monthly.l2":"Use within 30 days",
    "pricing.intermediate.monthly.l3":"Practice recordings",
    "pricing.intermediate.monthly.l4":"Save 9%",

    "pricing.intermediate.full.l1":"16 private classes (1 hour each)",
    "pricing.intermediate.full.l2":"Use within 365 days",
    "pricing.intermediate.full.l3":"Practice recordings",
    "pricing.intermediate.full.l4":"Save 19%",

    "pricing.advanced.single.title":"Single Class (1 Session)",
    "pricing.advanced.single.note":"If you enroll in the Complete Course package within 30 days from booking, this session is credited.",
    "pricing.advanced.price16_head":"$1,760 ($110/class)",
    "pricing.advanced.title":"Advanced",
    "pricing.advanced.price4":"$480 ($120 / hour)",
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
    "pricing.advanced.full.l4":"Save 18%",

    // POLICIES
    "policies.title":"Policies",
    "policies.transport":"Transportation: if a lesson is held away from my home, an additional $0.65 per mile (round-trip) applies.",
    "policies.expire":"Package expiration: all packages expire 365 days after purchase; unused classes are non-refundable and non-transferable.",
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
    "footer.rights":"All rights reserved."
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
    "about.f1":"Clases privadas: 1 hora",
    "about.f2":"Grabaciones para práctica en casa",
    "about.f3":"Centrado en la tradición cangrejera, con raíces comunitarias",
    
    // Propietaria/Fundadora
    "about.owner.title":"Conoce a la Propietaria/Fundadora y Directora Creativa",
    "about.owner.p1":"Bámbula Studio está dirigido por una trabajadora cultural puertorriqueña y practicante de Bomba, comprometida con la tradición, la pedagogía y la comunidad.",
    "about.owner.p2":"Como Directora Creativa, desarrolla currículo, lidera clases privadas y talleres, y cura programas comunitarios desde la memoria y la identidad.",
    "about.owner.p3":"Esta sección resalta a la persona detrás del trabajo: los valores, el linaje y la visión que guían nuestra práctica.",
    "about.owner.caption":"Reemplaza con tu retrato (recomendado 1200×1200)",
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

    "classes.title":"Clases Privadas (Buleo con Barril de Bomba Puertorriqueña)",
    "classes.subtitle":"Opciones claras y flexibles. ",
    "pricing.basic.title":"Clase Individual (1 Sesión)",
    "pricing.single.credit":"Si te inscribes en el paquete Curso Completo dentro de los 30 días posteriores a la reserva, esta sesión se acredita.",
    "pricing.perhour":"/ hora",
    "pricing.basic.l1":"Tema a elección: fundamentos, repaso de ritmos o refuerzo técnico",
    "pricing.basic.l2":"No reembolsable. Ausencias sin aviso previo de 48 horas no se pueden reprogramar.",

    // BASIC (ES) – Mensual (título + nota)
    "pricing.basic.monthly.title":"Subscripción Mensual",
    "pricing.basic.monthly.note":"($110 / hora)",

    // BASIC (ES)
    "pricing.basic.monthly.l1":"4 sesiones privadas (1 hora c/u)",
    "pricing.basic.monthly.l2":"Expira en 30 días (desde la compra)",
    "pricing.basic.monthly.l3":"Grabaciones de práctica",
    "pricing.basic.monthly.l4":"Ahorra 8%",

    "pricing.basic.full.l1":"16 sesiones privadas (1 hora c/u)",
    "pricing.basic.full.l2":"Expira en 365 días (desde la compra)",
    "pricing.basic.full.l3":"Resistencia y práctica personal",
    "pricing.basic.full.l4":"Ahorra 17%",

    // BASIC (ES) – Completo (título + nota)
    "pricing.basic.full.title":"Curso Completo",
    "pricing.basic.full.note":"($100 / hora) - más popular",
    "pricing.cta":"Reservar",

    // CLASES – nuevos paquetes
    "pricing.intermediate.title":"Clase Individual (1 Sesión)",
    // Intermedio: sesión individual 
    "pricing.intermediate.single.na":"—",
    "pricing.intermediate.single.l1":"Tema a elección: fundamentos, repaso de ritmos o refuerzo técnico",
    "pricing.intermediate.single.l2":"No reembolsable. Ausencias sin aviso previo de 48 horas no se pueden reprogramar.",
    "pricing.intermediate.single.note":"Si te inscribes en el paquete Curso Completo dentro de los 30 días posteriores a la reserva, esta sesión se acredita.",

    "pricing.intermediate.monthly.title":"Subscripción Mensual",
    "pricing.intermediate.price4":"$460 ($115 / hora)",
    "pricing.intermediate.full.title":"Curso Completo",
    "pricing.intermediate.price16_head":"$1,680 ($105 / hora)",
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
    "pricing.intermediate.monthly.l4":"Ahorra 9%",

    "pricing.intermediate.full.l1":"16 sesiones privadas (1 hora c/u)",
    "pricing.intermediate.full.l2":"Expira en 365 días (desde la compra)",
    "pricing.intermediate.full.l3":"Grabaciones de práctica",
    "pricing.intermediate.full.l4":"Ahorra 19%",

    "pricing.advanced.title":"Clase Individual (1 Sesión)",
    // Avanzado: sesión individual 
    "pricing.advanced.single.na":"—",
    "pricing.advanced.single.note":"Si te inscribes en el paquete Curso Completo dentro de los 30 días posteriores a la reserva, esta sesión se acredita.",
    "pricing.advanced.single.l1":"Tema a elección: fundamentos, repaso de ritmos o refuerzo técnico",
    "pricing.advanced.single.l2":"No reembolsable. Ausencias sin aviso previo de 48 horas no se pueden reprogramar.",

    "pricing.advanced.monthly.title":"Subcripción Mensual",
    "pricing.advanced.price4":"$480 ($120 / hora)",
    "pricing.advanced.full.title":"Curso Completo",
    "pricing.advanced.price16_head":"$1,760 ($110 / hora)",
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
    "pricing.advanced.full.l4":"Ahorra 18%",
    

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
    "faq.a1":"No. Si tienes, tráelo. Si no, adaptamos con superficies de práctica y técnica.",
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
  // After content is set, move savings bullets into notes below buttons
  moveSavingsToNotes();
  // Normalize note heights so buttons align across cards
  syncNoteHeights();
  const langBtn = document.getElementById('langToggle');
  if (langBtn){
    // Show target language with its flag
    langBtn.textContent = '';
    langBtn.innerHTML = (lang==='es') ? '🇺🇸 <span>EN</span>' : '🇵🇷 <span>ES</span>';
  }
  localStorage.setItem('bambula_lang', lang);
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
      const text = node.textContent.trim();
      // Remove the savings item from the features list
      node.remove();
      // Ensure there is a note element after the button
      let note = card.querySelector(':scope > .note');
      if (!note) {
        note = document.createElement('div');
        note.className = 'note';
        const btn = card.querySelector(':scope > .btn');
        if (btn) {
          btn.insertAdjacentElement('afterend', note);
        } else {
          card.appendChild(note);
        }
      }
      // Add a pill span inside the note with the same i18n key
      let pill = note.querySelector(`.deal-pill[data-i18n="${k}"]`);
      if (!pill) {
        pill = document.createElement('span');
        pill.className = 'deal-pill';
        pill.setAttribute('data-i18n', k);
        if (note.childNodes.length) note.append(' ');
        note.appendChild(pill);
      }
      // Translate or fall back to captured text
      pill.textContent = map[k] || text;
    });
  });
  // Also translate any existing pills (if language toggled and no source li was present)
  keys.forEach(k => {
    document.querySelectorAll(`.deal-pill[data-i18n="${k}"]`).forEach(pill => {
      if (map[k]) pill.textContent = map[k];
    });
  });
}

// Ensure all notes in a visual row share the same minimum height so buttons align
function syncNoteHeights(){
  document.querySelectorAll('.pricing').forEach(container => {
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

const saved = localStorage.getItem('bambula_lang') || 'en';
setLang(saved);

document.getElementById('langToggle').addEventListener('click', ()=>{
  const current = localStorage.getItem('bambula_lang') || 'en';
  setLang(current==='en'?'es':'en');
});

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
  __noteResizeTO = setTimeout(syncNoteHeights, 100);
});
