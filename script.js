// Language toggle (EN/ES), year stamp, small UX niceties
const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();

const strings = {
  es: {
    "nav.about":"Sobre",
    "nav.classes":"Clases",
    "nav.workshops":"Talleres",
    "nav.faq":"Preguntas",
    "nav.contact":"Contacto",

    "hero.title":"Ritmo con raíz. Cultura viva.",
    "hero.subtitle":"Clases privadas de Bomba (buleo), talleres comunitarios y educación cultural—con cariño y disciplina.",
    "hero.cta1":"Ver clases",
    "hero.cta2":"Hacer una pregunta",

    "about.title":"¿Qué es Bámbula Studio?",
    "about.p1":"En Bámbula Studio entendemos la Bomba no solo como música y danza, sino como una expresión de memoria, identidad y resistencia. Nuestro trabajo cultural se centra en:\n• Enseñanza: Clases y talleres de Bomba diseñados para todas las edades y niveles, donde se aprenden los toques, cantos y bailes tradicionales.\n• Preservación: Mantener viva la tradición puertorriqueña en la diáspora, creando espacios donde la Bomba florece como herencia ancestral.\n• Comunidad: Fomentar encuentros culturales en el área de Dallas–Fort Worth que fortalezcan la identidad y el sentido de pertenencia.\n• Memoria ancestral: Cada clase y cada toque de tambor se convierten en un acto de recordar quiénes somos como pueblo, y en una forma de honrar nuestras raíces afrocaribeñas.",
    "about.p2":"Con cada actividad buscamos que la cultura puertorriqueña sea celebrada, compartida y transmitida a nuevas generaciones.",
    "about.quick":"Datos rápidos",
    "about.f1":"Clases privadas: 1 hora",
    "about.f2":"Grabaciones para práctica en casa",
    "about.f3":"Centrado en la tradición, con raíces comunitarias",

    "classes.title":"Clases Privadas (Buleo)",
    "classes.subtitle":"Opciones claras y flexibles. Paleta: blanco, negro y mostaza—nuestra firma.",
    "pricing.basic.title":"Básico",
    "pricing.perhour":"/ hora",
    "pricing.basic.l1":"Postura y colocación de manos",
    "pricing.basic.l2":"Sonidos: abierto/seco, caja, campana",
    "pricing.basic.l3":"Mantener el buleo en tiempo",

    "pricing.monthly.title":"Mensual (4)",
    "pricing.monthly.note":"($110/clase)",
    "pricing.monthly.l1":"4 clases privadas (1 hr c/u)",
    "pricing.monthly.l2":"Úsalo en 365 días",
    "pricing.monthly.l3":"Grabaciones de práctica",

    "pricing.full.title":"Completo (16)",
    "pricing.full.note":"($100/clase)",
    "pricing.full.l1":"16 clases privadas (1 hr)",
    "pricing.full.l2":"Úsalo en 365 días",
    "pricing.full.l3":"Resistencia y práctica personal",
    "pricing.cta":"Reservar",

    "classes.note":"Si no sabes tu nivel, hacemos una evaluación inicial de $15 para colocarte correctamente.",

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
    "contact.p1":"Con la autorización de Beba: escribe para comenzar y te envío toda la info.",
    "form.name":"Nombre",
    "form.email":"Correo",
    "form.msg":"Mensaje",
    "form.send":"Enviar",
    "form.note":"Este formulario usa el plan gratis de Formspree. Cambia la URL con la tuya.",
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
