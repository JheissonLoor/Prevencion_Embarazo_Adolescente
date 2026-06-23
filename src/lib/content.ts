export const NAV = [
  { id: "inicio", label: "Inicio" },
  { id: "que-es", label: "¿Qué es?" },
  { id: "causas", label: "Causas" },
  { id: "consecuencias", label: "Consecuencias" },
  { id: "prevencion", label: "Prevención" },
  { id: "metodos", label: "Métodos" },
  { id: "mitos", label: "Mitos" },
  { id: "encuesta", label: "Encuesta" },
  { id: "ayuda", label: "Orientación" },
] as const;

export const FLOATING_CHIPS = [
  "Infórmate",
  "Decide con responsabilidad",
  "Cuida tu salud",
  "Hablar también es prevenir",
];

export const QUE_ES_CARDS = [
  { title: "Cuándo ocurre", text: "Durante la adolescencia, entre los 10 y 19 años." },
  { title: "Impacto integral", text: "Puede afectar la salud física y emocional." },
  { title: "Proyecto educativo", text: "Puede transformar los planes de estudio y trabajo." },
  { title: "Se previene", text: "Con información clara, diálogo y acompañamiento." },
];

export const CAUSAS = [
  { title: "Educación sexual limitada", text: "Falta de educación sexual integral en la escuela y en casa.", icon: "BookOpen" },
  { title: "Desinformación", text: "Mitos y datos incorrectos sobre los métodos anticonceptivos.", icon: "Info" },
  { title: "Acceso a salud", text: "Dificultad para acudir a servicios de salud sexual y reproductiva.", icon: "Stethoscope" },
  { title: "Presión del entorno", text: "Presión de la pareja, de amistades o del entorno social.", icon: "Users" },
  { title: "Violencia o coerción", text: "Situaciones de violencia o falta de consentimiento.", icon: "ShieldAlert" },
  { title: "Comunicación familiar", text: "Hogares donde no se conversa sobre sexualidad con confianza.", icon: "MessageCircle" },
];

export const CONSECUENCIAS = [
  { title: "Salud física", text: "Mayor riesgo de complicaciones en el embarazo y el parto cuando el cuerpo aún se está desarrollando.", icon: "HeartPulse", tone: "rose" },
  { title: "Bienestar emocional", text: "Estrés, ansiedad o sensación de soledad si no se cuenta con redes de apoyo.", icon: "Brain", tone: "grape" },
  { title: "Educación", text: "Riesgo de pausar o abandonar los estudios sin acompañamiento adecuado.", icon: "GraduationCap", tone: "teal" },
  { title: "Entorno familiar y social", text: "Cambios en la dinámica familiar y necesidad de nuevas redes de cuidado.", icon: "Home", tone: "grape" },
];

export const PREVENCION_PASOS = [
  { n: 1, title: "Acceder a información confiable", text: "Acudir a fuentes oficiales como MINSA, OMS o UNFPA." },
  { n: 2, title: "Conocer los métodos anticonceptivos", text: "Saber qué opciones existen y cómo se usan." },
  { n: 3, title: "Usar el preservativo correctamente", text: "Es el método que también ayuda a prevenir ITS." },
  { n: 4, title: "Conversar con una persona adulta de confianza", text: "Familiar, tutor o docente con quien dialogar." },
  { n: 5, title: "Acudir a profesionales de salud", text: "Obstetras, médicos y psicólogos brindan orientación." },
  { n: 6, title: "Reconocer el consentimiento", text: "Una decisión libre, informada y voluntaria." },
  { n: 7, title: "Construir un proyecto de vida", text: "Definir metas personales, educativas y laborales." },
];

export const METODOS = {
  barrera: {
    label: "Barrera",
    items: [
      { name: "Preservativo masculino (externo)", desc: "Funda delgada que se coloca en el pene erecto.", how: "Impide el paso del esperma a la vagina, ano o boca.", its: true, note: "De un solo uso." },
      { name: "Preservativo femenino (interno)", desc: "Funda suave que se coloca dentro de la vagina.", how: "Cubre las paredes vaginales y el cuello uterino.", its: true, note: "De un solo uso." },
    ],
  },
  hormonales: {
    label: "Hormonales",
    items: [
      { name: "Píldora anticonceptiva", desc: "Pastilla de toma diaria con hormonas.", how: "Inhibe la ovulación.", its: false, note: "Requiere orientación profesional." },
      { name: "Inyectable", desc: "Aplicación mensual o trimestral.", how: "Libera hormonas que evitan la ovulación.", its: false, note: "Indicada por profesional de salud." },
      { name: "Parche / anillo vaginal", desc: "Métodos hormonales de uso semanal o mensual.", how: "Liberan hormonas a través de la piel o mucosa.", its: false, note: "Requiere prescripción." },
    ],
  },
  larga: {
    label: "Larga duración",
    items: [
      { name: "Implante subdérmico", desc: "Pequeña varilla bajo la piel del brazo.", how: "Libera hormonas durante varios años.", its: false, note: "Lo coloca un profesional de salud." },
      { name: "DIU (dispositivo intrauterino)", desc: "Dispositivo colocado en el útero.", how: "Evita la fecundación; existe versión hormonal y de cobre.", its: false, note: "Requiere colocación y control médico." },
    ],
  },
  permanentes: {
    label: "Permanentes",
    items: [
      { name: "Ligadura de trompas", desc: "Procedimiento quirúrgico en personas con útero.", how: "Bloquea las trompas de Falopio.", its: false, note: "Decisión definitiva; requiere consejería." },
      { name: "Vasectomía", desc: "Procedimiento quirúrgico en personas con pene.", how: "Bloquea los conductos deferentes.", its: false, note: "Decisión definitiva; requiere consejería." },
    ],
  },
  emergencia: {
    label: "Emergencia",
    items: [
      { name: "Anticoncepción oral de emergencia", desc: "Pastilla para situaciones imprevistas (rotura del preservativo, relación sin protección).", how: "Retrasa o evita la ovulación si se toma en las primeras horas.", its: false, note: "No es un método de uso regular; orienta un profesional de salud." },
    ],
  },
} as const;

export const PRESERVATIVO_PASOS = [
  { n: 1, title: "Revisa fecha y empaque", text: "Verifica vencimiento y que el empaque esté íntegro." },
  { n: 2, title: "Abre con cuidado", text: "Sin uñas ni objetos cortantes." },
  { n: 3, title: "Colócalo desde el inicio", text: "Antes de cualquier contacto íntimo." },
  { n: 4, title: "Presiona la punta", text: "Y desenróllalo hasta la base." },
  { n: 5, title: "Sujeta la base al retirarlo", text: "Para evitar derrames." },
  { n: 6, title: "Deséchalo correctamente", text: "En el tacho, envuelto en papel." },
  { n: 7, title: "No lo reutilices", text: "Cada relación requiere uno nuevo." },
];

export const ITS_LIST = [
  { name: "VPH", full: "Virus del Papiloma Humano" },
  { name: "VIH", full: "Virus de Inmunodeficiencia Humana" },
  { name: "Sífilis", full: "Infección bacteriana" },
  { name: "Gonorrea", full: "Infección bacteriana" },
  { name: "Clamidia", full: "Infección bacteriana frecuente" },
  { name: "Herpes genital", full: "Infección viral" },
  { name: "Hepatitis B", full: "Infección viral del hígado" },
];

export const MITOS = [
  { tipo: "MITO", titulo: "La primera vez no existe riesgo de embarazo", explica: "El embarazo puede ocurrir desde la primera relación sexual sin protección." },
  { tipo: "MITO", titulo: "Usar dos preservativos protege más", explica: "Aumenta la fricción y el riesgo de rotura. Uno solo, bien colocado, es lo correcto." },
  { tipo: "MITO", titulo: "Se puede saber si alguien tiene una ITS con solo mirarlo", explica: "Muchas ITS no presentan síntomas visibles. La prueba es la única forma de saberlo." },
  { tipo: "MITO", titulo: "La anticoncepción de emergencia es un método de uso regular", explica: "Es para situaciones imprevistas. Existen métodos regulares más eficaces." },
  { tipo: "MITO", titulo: "Hablar de sexualidad incentiva a tener relaciones", explica: "La evidencia indica lo contrario: la información ayuda a decidir con responsabilidad." },
  { tipo: "VERDAD", titulo: "El preservativo reduce el riesgo de ITS", explica: "Es el único método que ayuda a prevenir embarazos y muchas ITS al mismo tiempo." },
];

export const CONSENTIMIENTO = [
  "El consentimiento debe ser libre, informado y voluntario.",
  "Puede retirarse en cualquier momento.",
  "El silencio no significa consentimiento.",
  "Nadie debe presionar, amenazar o manipular.",
  "Una relación saludable respeta los límites y decisiones del otro.",
];

export const PROYECTO_VIDA = [
  { title: "Metas personales", icon: "Sparkles" },
  { title: "Estudios", icon: "GraduationCap" },
  { title: "Trabajo", icon: "Briefcase" },
  { title: "Salud", icon: "HeartPulse" },
  { title: "Familia", icon: "Home" },
  { title: "Bienestar emocional", icon: "Smile" },
];

export const AYUDA = [
  { title: "Centro de salud cercano", text: "Acude al establecimiento más próximo a tu domicilio." },
  { title: "Obstetra o profesional de salud", text: "Brinda orientación en métodos anticonceptivos y salud sexual." },
  { title: "Psicólogo u orientador", text: "Acompañamiento emocional y toma de decisiones." },
  { title: "Docente o tutor", text: "Conversación segura dentro del entorno educativo." },
  { title: "Familiar o adulto de confianza", text: "Un espacio para conversar sin miedo a ser juzgado." },
];

export const FAQ = [
  { q: "¿Puedo acudir a un centro de salud para recibir orientación?", a: "Sí. Los centros de salud brindan información y atención confidencial sobre salud sexual y reproductiva." },
  { q: "¿El preservativo debe utilizarse desde el inicio?", a: "Sí. Debe colocarse antes de cualquier contacto íntimo, no solo antes de la eyaculación." },
  { q: "¿Los anticonceptivos protegen de las ITS?", a: "Solo el preservativo (masculino o femenino) ayuda a reducir el riesgo de ITS." },
  { q: "¿Qué debo hacer si un preservativo se rompe?", a: "Acude a un centro de salud lo antes posible para recibir orientación sobre anticoncepción de emergencia y pruebas de ITS." },
  { q: "¿La anticoncepción de emergencia puede utilizarse siempre?", a: "No es un método regular. Está pensada para situaciones imprevistas; existen métodos más eficaces para el uso habitual." },
  { q: "¿Cómo hablar de estos temas con mis padres?", a: "Elige un momento tranquilo, expresa lo que necesitas saber y pide apoyo. Si no es posible en casa, busca a un docente, tutor o profesional de salud." },
];

export const ENCUESTA = [
  {
    q: "¿Qué es el embarazo adolescente?",
    options: [
      "Embarazo en mujeres mayores de 20 años",
      "Embarazo que ocurre entre los 10 y 19 años",
      "Embarazo después del matrimonio",
      "Embarazo en mujeres adultas",
    ],
    correct: 1,
    refuerzo: "Según la OMS, el embarazo adolescente ocurre entre los 10 y 19 años.",
  },
  {
    q: "¿Cuál de los siguientes es un factor de riesgo del embarazo adolescente?",
    options: [
      "Educación sexual integral",
      "Uso correcto del preservativo",
      "Falta de información sobre sexualidad",
      "Orientación profesional",
    ],
    correct: 2,
    refuerzo: "La desinformación es uno de los principales factores de riesgo.",
  },
  {
    q: "¿Qué método anticonceptivo ayuda a prevenir embarazos e ITS?",
    options: [
      "Método del calendario",
      "Preservativo",
      "Implante subdérmico",
      "Inyección anticonceptiva",
    ],
    correct: 1,
    refuerzo: "El preservativo es el único método que ayuda a prevenir ambos.",
  },
  {
    q: "¿Cuál puede ser una consecuencia del embarazo adolescente?",
    options: [
      "Mayor rendimiento académico",
      "Abandono de estudios",
      "Mejor calidad de vida",
      "Ninguna de las anteriores",
    ],
    correct: 1,
    refuerzo: "Sin acompañamiento adecuado, puede llevar a pausar o abandonar los estudios.",
  },
  {
    q: "¿Considera importante recibir información sobre salud sexual y reproductiva?",
    options: ["Muy importante", "Importante", "Poco importante", "Nada importante"],
    correct: -1,
    refuerzo: "Gracias por tu opinión. La información oportuna ayuda a decidir con responsabilidad.",
  },
];

export const INTEGRANTES = [
  "López Romero Angie Ariana",
  "Sánchez Capristano Anyeli",
  "Gamarra Rodríguez Lalesca",
  "Aguillar Llamoctanta Mirian",
  "Cervera Cruz Dany Yoseri",
  "Arrascue Monsalve María Seidy",
];

export const FUENTES = [
  { label: "Ministerio de Salud del Perú (MINSA)", url: "https://www.gob.pe/minsa" },
  { label: "Organización Mundial de la Salud (OMS)", url: "https://www.who.int/es" },
  { label: "UNFPA — Fondo de Población de Naciones Unidas", url: "https://www.unfpa.org/es" },
  { label: "UNICEF", url: "https://www.unicef.org/es" },
  { label: "EsSalud", url: "https://www.essalud.gob.pe" },
];
