const semestres = {
  'I Semestre': [
    'Orientación Profesional y Modelo de Salud - TLC-117',
    'Anatomofisiología Aplicada - TLC-118',
    'Microbiología Aplicada al Laboratorio - TLC-119',
    'Procedimientos de Enfermería - TLC-120',
    'PAUX y Prevención Básica de Riesgos - TEN-108',
    'Taller de Nivelación Matemática - FGL-144'
  ],
  'II Semestre': [
    'Taller de Desarrollo Personal I - FGL-151',
    'Procesos Hematológicos y Bioseguridad en Laboratorio Clínico - TLC-121',
    'Procedimientos de Bioanálisis Clínico - TLC-122',
    'Práctica en Procedimientos de Enfermería - TLC-107',
    'Certificación Monitor en Educación para la Salud y PAUX',
    'Educación para la Salud - TEN-106',
    'Desarrollo de Habilidades Comunicativas - FGL-102'
  ],
  'III Semestre': [
    'Procedimientos de Elaboración en Diagnóstico por Imagen y Radioterapia - TLC-123',
    'Práctica de Laboratorio Clínico - TLC-124',
    'Protección Radiológica - TLC-114',
    'Procesos de Apoyo en Banco de Sangre - TLC-125',
    'Administración y Registro Informático en Laboratorio - TLC-109'
  ],
  'IV Semestre': [
    'Práctica de Imagenología - TLC-126',
    'Procesos de Laboratorio para la Investigación - TLC-127',
    'Taller de Preparación Laboral - FGL-153',
    'Taller de Procedimientos en Centros de Sangre/UMT - TLC-128',
    'Taller de Desarrollo Personal II - FGL-152',
    'Ética en Salud - TTC-008'
  ],
  'V Semestre': [
    'Práctica Laboral - TLC-018'
  ]
};

const main = document.getElementById('malla');

Object.entries(semestres).forEach(([semestre, ramos]) => {
  const semestreDiv = document.createElement('div');
  semestreDiv.className = 'semestre';
  semestreDiv.innerHTML = `<h2>${semestre}</h2>`;

  ramos.forEach(ramo => {
    const ramoDiv = document.createElement('div');
    ramoDiv.className = 'ramo';
    ramoDiv.textContent = ramo;
    ramoDiv.onclick = () => ramoDiv.classList.toggle('completed');
    semestreDiv.appendChild(ramoDiv);
  });

  main.appendChild(semestreDiv);
});
