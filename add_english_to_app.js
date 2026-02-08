// Script to add English A1→B2 routine directly to localStorage
// Run this in the browser console while the app is open

console.log('🚀 Adding English A1→B2 routine to your app...\n');

// Get current data
const currentData = JSON.parse(localStorage.getItem('rutina2026') || '{}');

// Find or create Mental level
let mentalLevel = currentData.levels?.find(l => l.name === 'Mental');
if (!mentalLevel) {
    console.log('⚠️ Mental level not found. Please create it first in the app.');
} else {
    console.log('✅ Found Mental level');

    // Check if English goal already exists
    const existingGoal = mentalLevel.goals?.find(g => g.id === 'goal_english_2026');
    if (existingGoal) {
        console.log('⚠️ English goal already exists. Updating...');
        // Remove old one
        mentalLevel.goals = mentalLevel.goals.filter(g => g.id !== 'goal_english_2026');
    }

    // Create English goal
    const englishGoal = {
        id: "goal_english_2026",
        name: "Inglés A1→B2",
        color: mentalLevel.color || "blue",
        phaseType: "monthly",
        phases: {}
    };

    // Helper functions
    const createWeekdayActivities = (grammar) => [
        { name: "Warm-up (5min): Pregunta simple oral" },
        { name: `Gramática (15min): ${grammar}` },
        { name: "Listening (10min): Video/audio sin subtítulos" },
        { name: "Speaking (10min): Responder + mini monólogo" },
        { name: "Writing (5min): 3-5 frases del tema" }
    ];

    const createWeekendActivities = () => [
        { name: "Descanso activo: Serie/película en inglés" },
        { name: "Música con letra" },
        { name: "Videos de YouTube" }
    ];

    const dailyObjectives = {
        1: "Hablar en voz alta siempre",
        2: "Pensar en inglés cosas simples",
        3: "No traducir palabra por palabra",
        4: "Aceptar errores sin castigarte",
        5: "Enfócate en comunicar, no en perfección"
    };

    // Month definitions
    const months = [
        { key: "2026-02", objective: "Consolidar A1 - Base sólida", notes: "📚 GRAMÁTICA: Presente simple, Verb to be, There is/are, Preguntas y negaciones\n\n🗣️ VOCABULARIO: Rutina diaria, Familia, Comida, Lugares, Emociones\n\n🎯 HABILIDADES: Entender frases lentas, Responder preguntas cortas, Presentarte\n\n✔️ META: Sentirte segura, sin traducir todo", grammar: "Presente simple / Verb to be" },
        { key: "2026-03", objective: "Consolidar A1 (cont.)", notes: "📚 GRAMÁTICA: There is/are, Preguntas y negaciones, Preposiciones básicas\n\n🗣️ VOCABULARIO: Rutina diaria, Familia, Comida, Lugares\n\n🎯 HABILIDADES: Entender frases lentas, Responder preguntas cortas\n\n✔️ RESULTADO: A1 fuerte, listo para subir", grammar: "There is/are / Preguntas" },
        { key: "2026-04", objective: "A2 inicial - Pasado y futuro", notes: "📚 GRAMÁTICA: Pasado simple, Futuro con going to, Comparativos\n\n🗣️ VOCABULARIO: Viajes, Trabajo, Salud, Tiempo libre\n\n🎯 HABILIDADES: Contar experiencias pasadas, Mini conversaciones (2-3 min)\n\n✔️ META: Comunicar ideas del pasado y futuro", grammar: "Pasado simple" },
        { key: "2026-05", objective: "A2 inicial (cont.)", notes: "📚 GRAMÁTICA: Going to, Comparativos y superlativos, Countable/uncountable\n\n🗣️ VOCABULARIO: Viajes, Trabajo, Salud, Tiempo libre\n\n🎯 HABILIDADES: Experiencias pasadas, Conversaciones 2-3 min\n\n✔️ RESULTADO: A2 funcional", grammar: "Going to / Comparativos" },
        { key: "2026-06", objective: "A2 alto - Hablar sin bloquearte", notes: "📚 GRAMÁTICA: Presente continuo vs simple, Pasado continuo, Modales\n\n🗣️ VOCABULARIO: Opiniones, Problemas cotidianos, Relaciones, Educación\n\n🎯 HABILIDADES: Expresar opiniones, Describir situaciones\n\n✔️ META: Hablar sin bloquearte", grammar: "Presente continuo vs simple" },
        { key: "2026-07", objective: "A2 alto (cont.)", notes: "📚 GRAMÁTICA: Pasado continuo, Modales, Conectores (because, but, so)\n\n🗣️ VOCABULARIO: Opiniones, Problemas, Relaciones, Educación\n\n🎯 HABILIDADES: Expresar opiniones, Conectar ideas\n\n✔️ RESULTADO: Transición clara hacia B1", grammar: "Modales / Conectores" },
        { key: "2026-08", objective: "B1 - Fluidez básica y confianza", notes: "📚 GRAMÁTICA: Presente perfecto, Condicional 0 y 1, Voz pasiva básica\n\n🗣️ VOCABULARIO: Experiencias, Situaciones hipotéticas, Noticias\n\n🎯 HABILIDADES: Expresar opiniones, Explicar razones, Videos normales\n\n✔️ META: Fluidez básica y confianza", grammar: "Presente perfecto" },
        { key: "2026-09", objective: "B1 (cont.)", notes: "📚 GRAMÁTICA: Condicionales 0 y 1, Voz pasiva, Phrasal verbs básicos\n\n🗣️ VOCABULARIO: Experiencias, Hipotéticos, Noticias\n\n🎯 HABILIDADES: Opiniones, Explicar razones, Videos normales\n\n✔️ RESULTADO: B1 sólido", grammar: "Condicionales / Voz pasiva" },
        { key: "2026-10", objective: "B1 alto - Sonar más natural", notes: "📚 GRAMÁTICA: Segundo condicional, Reported speech básico, Verb patterns\n\n🗣️ VOCABULARIO: Emociones complejas, Argumentación, Cultura\n\n🎯 HABILIDADES: Debates sencillos, Narraciones largas, Writing estructurado\n\n✔️ META: Sonar más natural", grammar: "Segundo condicional" },
        { key: "2026-11", objective: "B1 alto (cont.)", notes: "📚 GRAMÁTICA: Reported speech, Verb patterns, Phrasal verbs avanzados\n\n🗣️ VOCABULARIO: Emociones complejas, Argumentación, Cultura\n\n🎯 HABILIDADES: Debates, Narraciones largas, Writing estructurado\n\n✔️ RESULTADO: Listo para B2", grammar: "Reported speech / Verb patterns" },
        { key: "2026-12", objective: "B2 - Independencia real (parte 1)", notes: "📚 ENFOQUE: Fluidez, Naturalidad, Precisión\n\n🗣️ VOCABULARIO: Matices, Expresiones idiomáticas, Temas abstractos\n\n🎯 HABILIDADES: Argumentar, Distintos acentos, Expresar emociones\n\n✔️ META: Independencia real en inglés", grammar: "Refinamiento y práctica" },
        { key: "2027-01", objective: "B2 - Independencia real (parte 2)", notes: "📚 ENFOQUE: Fluidez, Naturalidad, Precisión\n\n🗣️ VOCABULARIO: Matices, Expresiones idiomáticas, Temas abstractos\n\n🎯 HABILIDADES: Argumentar, Distintos acentos, Expresar emociones\n\n✔️ RESULTADO: Nivel B2 funcional 🎉", grammar: "Consolidación B2" }
    ];

    // Build phases
    months.forEach(month => {
        const weekday = createWeekdayActivities(month.grammar);
        const weekend = createWeekendActivities();

        englishGoal.phases[month.key] = {
            objective: month.objective,
            notes: month.notes,
            routine: {
                1: weekday, 2: weekday, 3: weekday, 4: weekday, 5: weekday,
                6: weekend, 0: weekend
            },
            dayObjectives: dailyObjectives
        };
    });

    // Add to Mental level
    if (!mentalLevel.goals) mentalLevel.goals = [];
    mentalLevel.goals.push(englishGoal);

    // Save back to localStorage
    localStorage.setItem('rutina2026', JSON.stringify(currentData));

    console.log('\n✅ English routine added successfully!');
    console.log('📊 Summary:');
    console.log('   - Goal: Inglés A1→B2');
    console.log('   - Phases: 12 months (Feb 2026 - Jan 2027)');
    console.log('   - Activities per week: 5 weekdays + 2 weekend days');
    console.log('\n🔄 Reload the page to see the changes!');
}
