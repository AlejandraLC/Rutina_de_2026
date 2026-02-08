// INSTRUCCIONES: Copia TODO este código y pégalo en la consola del navegador
// mientras tienes abierto index.html

(function () {
    console.log('🚀 Iniciando agregado de rutina de inglés...\n');

    // Obtener datos actuales
    const data = Store.data;

    if (!data.levels || data.levels.length === 0) {
        console.error('❌ No hay niveles. Abre la app primero.');
        return;
    }

    console.log(`✅ Encontrados ${data.levels.length} niveles`);
    console.log('📋 Niveles disponibles:');
    data.levels.forEach(l => {
        console.log(`   - "${l.name}" (${l.goals?.length || 0} metas)`);
    });

    // Buscar nivel Mental (case-insensitive)
    const mentalLevel = data.levels.find(l => l.name.toLowerCase().includes('mental'));

    if (!mentalLevel) {
        console.error('❌ Nivel Mental no encontrado.');
        console.log('💡 Crea un nivel llamado "Mental" primero en la app.');
        return;
    }

    console.log(`✅ Nivel Mental encontrado: "${mentalLevel.name}"`);

    // Eliminar rutina de inglés si ya existe
    if (mentalLevel.goals) {
        const existing = mentalLevel.goals.find(g => g.id === 'goal_english_2026');
        if (existing) {
            console.log('⚠️ Rutina de inglés ya existe. Actualizando...');
            mentalLevel.goals = mentalLevel.goals.filter(g => g.id !== 'goal_english_2026');
        }
    } else {
        mentalLevel.goals = [];
    }

    // Crear meta de inglés
    const englishGoal = {
        id: "goal_english_2026",
        name: "Inglés A1→B2",
        color: mentalLevel.color || "blue",
        phaseType: "monthly",
        phases: {}
    };

    // Funciones helper
    const weekday = (grammar) => [
        { name: "Warm-up (5min): Pregunta simple oral" },
        { name: `Gramática (15min): ${grammar}` },
        { name: "Listening (10min): Video/audio sin subtítulos" },
        { name: "Speaking (10min): Responder + mini monólogo" },
        { name: "Writing (5min): 3-5 frases del tema" }
    ];

    const weekend = () => [
        { name: "Descanso activo: Serie/película en inglés" },
        { name: "Música con letra" },
        { name: "Videos de YouTube" }
    ];

    const objectives = {
        1: "Hablar en voz alta siempre",
        2: "Pensar en inglés cosas simples",
        3: "No traducir palabra por palabra",
        4: "Aceptar errores sin castigarte",
        5: "Enfócate en comunicar, no en perfección"
    };

    // Definir meses
    const months = [
        { key: "2026-02", obj: "Consolidar A1 - Base sólida", notes: "📚 GRAMÁTICA: Presente simple, Verb to be, There is/are\n\n🗣️ VOCABULARIO: Rutina diaria, Familia, Comida, Lugares\n\n🎯 HABILIDADES: Entender frases lentas, Responder preguntas cortas\n\n✔️ META: Sentirte segura, sin traducir todo", gram: "Presente simple / Verb to be" },
        { key: "2026-03", obj: "Consolidar A1 (cont.)", notes: "📚 GRAMÁTICA: There is/are, Preguntas y negaciones, Preposiciones\n\n🗣️ VOCABULARIO: Rutina diaria, Familia, Comida, Lugares\n\n🎯 HABILIDADES: Entender frases lentas, Responder preguntas cortas\n\n✔️ RESULTADO: A1 fuerte, listo para subir", gram: "There is/are / Preguntas" },
        { key: "2026-04", obj: "A2 inicial - Pasado y futuro", notes: "📚 GRAMÁTICA: Pasado simple, Futuro con going to, Comparativos\n\n🗣️ VOCABULARIO: Viajes, Trabajo, Salud, Tiempo libre\n\n🎯 HABILIDADES: Contar experiencias pasadas, Mini conversaciones\n\n✔️ META: Comunicar ideas del pasado y futuro", gram: "Pasado simple" },
        { key: "2026-05", obj: "A2 inicial (cont.)", notes: "📚 GRAMÁTICA: Going to, Comparativos, Countable/uncountable\n\n🗣️ VOCABULARIO: Viajes, Trabajo, Salud, Tiempo libre\n\n🎯 HABILIDADES: Experiencias pasadas, Conversaciones 2-3 min\n\n✔️ RESULTADO: A2 funcional", gram: "Going to / Comparativos" },
        { key: "2026-06", obj: "A2 alto - Hablar sin bloquearte", notes: "📚 GRAMÁTICA: Presente continuo vs simple, Pasado continuo, Modales\n\n🗣️ VOCABULARIO: Opiniones, Problemas cotidianos, Relaciones\n\n🎯 HABILIDADES: Expresar opiniones, Describir situaciones\n\n✔️ META: Hablar sin bloquearte", gram: "Presente continuo vs simple" },
        { key: "2026-07", obj: "A2 alto (cont.)", notes: "📚 GRAMÁTICA: Pasado continuo, Modales, Conectores (because, but, so)\n\n🗣️ VOCABULARIO: Opiniones, Problemas, Relaciones, Educación\n\n🎯 HABILIDADES: Expresar opiniones, Conectar ideas\n\n✔️ RESULTADO: Transición clara hacia B1", gram: "Modales / Conectores" },
        { key: "2026-08", obj: "B1 - Fluidez básica y confianza", notes: "📚 GRAMÁTICA: Presente perfecto, Condicional 0 y 1, Voz pasiva\n\n🗣️ VOCABULARIO: Experiencias, Situaciones hipotéticas, Noticias\n\n🎯 HABILIDADES: Expresar opiniones, Explicar razones, Videos normales\n\n✔️ META: Fluidez básica y confianza", gram: "Presente perfecto" },
        { key: "2026-09", obj: "B1 (cont.)", notes: "📚 GRAMÁTICA: Condicionales 0 y 1, Voz pasiva, Phrasal verbs\n\n🗣️ VOCABULARIO: Experiencias, Hipotéticos, Noticias\n\n🎯 HABILIDADES: Opiniones, Explicar razones, Videos normales\n\n✔️ RESULTADO: B1 sólido", gram: "Condicionales / Voz pasiva" },
        { key: "2026-10", obj: "B1 alto - Sonar más natural", notes: "📚 GRAMÁTICA: Segundo condicional, Reported speech, Verb patterns\n\n🗣️ VOCABULARIO: Emociones complejas, Argumentación, Cultura\n\n🎯 HABILIDADES: Debates sencillos, Narraciones largas, Writing\n\n✔️ META: Sonar más natural", gram: "Segundo condicional" },
        { key: "2026-11", obj: "B1 alto (cont.)", notes: "📚 GRAMÁTICA: Reported speech, Verb patterns, Phrasal verbs avanzados\n\n🗣️ VOCABULARIO: Emociones complejas, Argumentación, Cultura\n\n🎯 HABILIDADES: Debates, Narraciones largas, Writing estructurado\n\n✔️ RESULTADO: Listo para B2", gram: "Reported speech / Verb patterns" },
        { key: "2026-12", obj: "B2 - Independencia real (parte 1)", notes: "📚 ENFOQUE: Fluidez, Naturalidad, Precisión\n\n🗣️ VOCABULARIO: Matices, Expresiones idiomáticas, Temas abstractos\n\n🎯 HABILIDADES: Argumentar, Distintos acentos, Expresar emociones\n\n✔️ META: Independencia real en inglés", gram: "Refinamiento y práctica" },
        { key: "2027-01", obj: "B2 - Independencia real (parte 2)", notes: "📚 ENFOQUE: Fluidez, Naturalidad, Precisión\n\n🗣️ VOCABULARIO: Matices, Expresiones idiomáticas, Temas abstractos\n\n🎯 HABILIDADES: Argumentar, Distintos acentos, Expresar emociones\n\n✔️ RESULTADO: Nivel B2 funcional 🎉", gram: "Consolidación B2" }
    ];

    // Crear fases
    months.forEach(m => {
        const wd = weekday(m.gram);
        const we = weekend();

        englishGoal.phases[m.key] = {
            objective: m.obj,
            notes: m.notes,
            routine: {
                1: wd, 2: wd, 3: wd, 4: wd, 5: wd,
                6: we, 0: we
            },
            dayObjectives: objectives
        };
    });

    // Agregar al nivel Mental
    mentalLevel.goals.push(englishGoal);

    // Guardar
    Store.save();

    console.log('\n✅ ¡Rutina de inglés agregada exitosamente!');
    console.log('📊 Resumen:');
    console.log('   - Meta: Inglés A1→B2');
    console.log('   - Fases: 12 meses (Feb 2026 - Ene 2027)');
    console.log('   - Actividades: 5 días activos + 2 descanso');
    console.log('\n🔄 Recargando página...');

    // Recargar para ver cambios
    setTimeout(() => {
        location.reload();
    }, 2000);
})();
