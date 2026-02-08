// Script to add English A1→B2 routine to the app
const fs = require('fs');
const path = require('path');

// English routine data structure
const englishGoal = {
    id: "goal_english_2026",
    name: "Inglés A1→B2",
    color: "blue",
    phaseType: "monthly",
    phases: {}
};

// Helper: Create weekday activities (Mon-Fri)
const createWeekdayActivities = (grammarTopic) => [
    { name: `Warm-up (5min): Pregunta simple oral` },
    { name: `Gramática (15min): ${grammarTopic}` },
    { name: `Listening (10min): Video/audio sin subtítulos primero` },
    { name: `Speaking (10min): Responder en voz alta + mini monólogo` },
    { name: `Writing (5min): 3-5 frases del tema del día` }
];

// Helper: Create weekend activities (Sat-Sun)
const createWeekendActivities = () => [
    { name: `Descanso activo: Serie/película en inglés` },
    { name: `Música con letra en inglés` },
    { name: `Videos de YouTube en inglés` }
];

// Helper: Create daily objectives
const dailyObjectives = {
    1: "Hablar en voz alta siempre",
    2: "Pensar en inglés cosas simples",
    3: "No traducir palabra por palabra",
    4: "Aceptar errores sin castigarte",
    5: "Enfócate en comunicar, no en perfección"
};

// Month definitions
const months = [
    {
        key: "2026-02",
        objective: "Consolidar A1 - Base sólida",
        notes: `📚 GRAMÁTICA: Presente simple, Verb to be, There is/are, Preguntas y negaciones, Preposiciones básicas

🗣️ VOCABULARIO: Rutina diaria, Familia, Comida, Lugares, Emociones básicas

🎯 HABILIDADES: Entender frases lentas, Responder preguntas cortas, Presentarte sin pensar demasiado

✔️ META: Sentirte segura, sin traducir todo`,
        grammar: "Presente simple / Verb to be"
    },
    {
        key: "2026-03",
        objective: "Consolidar A1 - Base sólida (cont.)",
        notes: `📚 GRAMÁTICA: There is/are, Preguntas y negaciones, Preposiciones básicas

🗣️ VOCABULARIO: Rutina diaria, Familia, Comida, Lugares, Emociones básicas

🎯 HABILIDADES: Entender frases lentas, Responder preguntas cortas, Presentarte sin pensar demasiado

✔️ RESULTADO: A1 fuerte, listo para subir`,
        grammar: "There is/are / Preguntas"
    },
    {
        key: "2026-04",
        objective: "A2 inicial - Pasado y futuro",
        notes: `📚 GRAMÁTICA: Pasado simple, Futuro con going to, Comparativos y superlativos

🗣️ VOCABULARIO: Viajes, Trabajo, Salud, Tiempo libre

🎯 HABILIDADES: Contar experiencias pasadas, Mantener mini conversaciones (2-3 min)

✔️ META: Comunicar ideas simples del pasado y futuro`,
        grammar: "Pasado simple"
    },
    {
        key: "2026-05",
        objective: "A2 inicial (cont.)",
        notes: `📚 GRAMÁTICA: Futuro con going to, Comparativos y superlativos, Countable/uncountable

🗣️ VOCABULARIO: Viajes, Trabajo, Salud, Tiempo libre

🎯 HABILIDADES: Contar experiencias pasadas, Mantener mini conversaciones (2-3 min)

✔️ RESULTADO: A2 funcional`,
        grammar: "Going to / Comparativos"
    },
    {
        key: "2026-06",
        objective: "A2 alto - Hablar sin bloquearte",
        notes: `📚 GRAMÁTICA: Presente continuo vs simple, Pasado continuo, Modales (can, should, must)

🗣️ VOCABULARIO: Opiniones, Problemas cotidianos, Relaciones, Educación

🎯 HABILIDADES: Expresar opiniones, Describir situaciones, Usar conectores

✔️ META: Hablar sin bloquearte`,
        grammar: "Presente continuo vs simple"
    },
    {
        key: "2026-07",
        objective: "A2 alto (cont.)",
        notes: `📚 GRAMÁTICA: Pasado continuo, Modales, Conectores básicos (because, but, so)

🗣️ VOCABULARIO: Opiniones, Problemas cotidianos, Relaciones, Educación

🎯 HABILIDADES: Expresar opiniones, Describir situaciones, Conectar ideas

✔️ RESULTADO: Transición clara hacia B1`,
        grammar: "Modales / Conectores"
    },
    {
        key: "2026-08",
        objective: "B1 - Fluidez básica y confianza",
        notes: `📚 GRAMÁTICA: Presente perfecto, Condicional cero y primero, Voz pasiva (básica)

🗣️ VOCABULARIO: Experiencias, Situaciones hipotéticas, Noticias

🎯 HABILIDADES: Expresar opiniones, Explicar razones, Entender videos normales

✔️ META: Fluidez básica y confianza`,
        grammar: "Presente perfecto"
    },
    {
        key: "2026-09",
        objective: "B1 (cont.)",
        notes: `📚 GRAMÁTICA: Condicional cero y primero, Voz pasiva, Phrasal verbs básicos

🗣️ VOCABULARIO: Experiencias, Situaciones hipotéticas, Noticias

🎯 HABILIDADES: Expresar opiniones, Explicar razones, Entender videos normales

✔️ RESULTADO: B1 sólido`,
        grammar: "Condicionales / Voz pasiva"
    },
    {
        key: "2026-10",
        objective: "B1 alto - Sonar más natural",
        notes: `📚 GRAMÁTICA: Segundo condicional, Reported speech (básico), Verb patterns

🗣️ VOCABULARIO: Emociones complejas, Argumentación, Cultura

🎯 HABILIDADES: Debates sencillos, Narraciones más largas, Writing estructurado

✔️ META: Sonar más natural`,
        grammar: "Segundo condicional"
    },
    {
        key: "2026-11",
        objective: "B1 alto (cont.)",
        notes: `📚 GRAMÁTICA: Reported speech, Verb patterns, Phrasal verbs avanzados

🗣️ VOCABULARIO: Emociones complejas, Argumentación, Cultura

🎯 HABILIDADES: Debates sencillos, Narraciones más largas, Writing estructurado

✔️ RESULTADO: Listo para B2`,
        grammar: "Reported speech / Verb patterns"
    },
    {
        key: "2026-12",
        objective: "B2 - Independencia real (parte 1)",
        notes: `📚 ENFOQUE: Fluidez, Naturalidad, Precisión

🗣️ VOCABULARIO: Matices, Expresiones idiomáticas, Temas abstractos

🎯 HABILIDADES: Argumentar, Entender distintos acentos, Expresar emociones y matices

✔️ META: Independencia real en inglés`,
        grammar: "Refinamiento y práctica"
    },
    {
        key: "2027-01",
        objective: "B2 - Independencia real (parte 2)",
        notes: `📚 ENFOQUE: Fluidez, Naturalidad, Precisión

🗣️ VOCABULARIO: Matices, Expresiones idiomáticas, Temas abstractos

🎯 HABILIDADES: Argumentar, Entender distintos acentos, Expresar emociones y matices

✔️ RESULTADO: Nivel B2 funcional 🎉`,
        grammar: "Consolidación B2"
    }
];

// Build phases
months.forEach(month => {
    const weekdayActivities = createWeekdayActivities(month.grammar);
    const weekendActivities = createWeekendActivities();

    englishGoal.phases[month.key] = {
        objective: month.objective,
        notes: month.notes,
        routine: {
            1: weekdayActivities, // Monday
            2: weekdayActivities, // Tuesday
            3: weekdayActivities, // Wednesday
            4: weekdayActivities, // Thursday
            5: weekdayActivities, // Friday
            6: weekendActivities, // Saturday
            0: weekendActivities  // Sunday
        },
        dayObjectives: dailyObjectives
    };
});

// Output the data
console.log('\n📦 English Routine Data Generated!\n');
console.log('Goal ID:', englishGoal.id);
console.log('Total Phases:', Object.keys(englishGoal.phases).length);
console.log('\nPhases:');
Object.keys(englishGoal.phases).forEach(key => {
    console.log(`  - ${key}: ${englishGoal.phases[key].objective}`);
});

// Save to JSON file for inspection
const outputPath = path.join(__dirname, 'english_routine_data.json');
fs.writeFileSync(outputPath, JSON.stringify(englishGoal, null, 2), 'utf8');
console.log(`\n✅ Data saved to: ${outputPath}`);
console.log('\n📋 Next step: Use this data to add to your app\'s localStorage');
console.log('   You can copy this JSON and paste it in the browser console to add it to your Mental level.\n');
