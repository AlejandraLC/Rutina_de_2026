// Script para agregar la rutina "Reducción Grasa Visceral" al nivel Físico
// Ejecutar en la consola del navegador mientras index.html está abierto
// PLAN DE 12 MESES CON FASES ESPECÍFICAS

(function () {
    console.log('💪 Agregando rutina Reducción Grasa Visceral...\n');

    const data = Store.data;

    if (!data.levels || data.levels.length === 0) {
        console.error('❌ No hay niveles. Abre la app primero.');
        return;
    }

    // Buscar nivel Físico
    const physicalLevel = data.levels.find(l => l.name.toLowerCase().includes('físico') || l.name.toLowerCase().includes('fisico'));

    if (!physicalLevel) {
        console.error('❌ Nivel Físico no encontrado.');
        console.log('💡 Crea un nivel llamado "Físico" primero en la app.');
        return;
    }

    console.log(`✅ Nivel Físico encontrado: "${physicalLevel.name}"`);

    // Eliminar rutina si ya existe
    if (physicalLevel.goals) {
        const existing = physicalLevel.goals.find(g => g.id === 'goal_grasa_visceral_2026');
        if (existing) {
            console.log('⚠️ Rutina ya existe. Actualizando...');
            physicalLevel.goals = physicalLevel.goals.filter(g => g.id !== 'goal_grasa_visceral_2026');
        }
    } else {
        physicalLevel.goals = [];
    }

    // Crear meta
    const grasaGoal = {
        id: "goal_grasa_visceral_2026",
        name: "↓ Grasa Visceral",
        color: physicalLevel.color || "red",
        phaseType: "monthly",
        phases: {}
    };

    // Objetivos diarios para entrenamiento
    const trainingObjectives = {
        1: "Ejecutar con técnica perfecta",
        2: "Progresar en carga/reps",
        3: "Mantener zona 2 en cardio",
        4: "Recuperación activa consciente",
        5: "Integrar respiración diafragmática"
    };

    // ==================== FASE 1: MESES 1-3 (FUNDACIÓN) ====================
    // Objetivo: Establecer hábito + bajar a 30-32% grasa

    // MES 1: ADAPTACIÓN Y TÉCNICA
    grasaGoal.phases["2026-02"] = {
        objective: "Fase 1 - Mes 1: Adaptación y Técnica Perfecta",
        notes: `💪 **FASE 1: FUNDACIÓN (Meses 1-3)**

🎯 **OBJETIVO DE LA FASE**
• Grasa actual: ~37% → Meta: 30-32%
• Grasa visceral: 12 → Meta: 9-10
• Pérdida estimada: 4-5 kg de grasa
• ⚠️ SIN sacrificar músculo

📊 **MES 1: ADAPTACIÓN**
Enfoque: Técnica perfecta + crear hábito
Carga: 60-70% de tu máximo
Descansos: 60-90 segundos

🔥 **ESTRUCTURA SEMANAL**
• Lunes: Fuerza A (Pierna + Core)
• Martes: Fuerza B (Torso)
• Miércoles: Bici Zona 2 (30-40min)
• Jueves: Fuerza C (Pierna Posterior)
• Viernes: Bici Intervalos (25min)
• Sábado: Fuerza D (Torso + Metabólico)
• Domingo: Bici Consciente (20-30min)

⚠️ **RECUPERACIÓN OBLIGATORIA**
• 10-15min diarios: Meditación + Respiración 4-6
• Esto NO es opcional con grasa visceral alta

📏 **MEDICIONES**
• Peso: Semanal (mismo día/hora)
• Fotos: Cada 2 semanas
• Medidas: Cintura cada semana`,
        routine: {
            1: [ // Lunes - FUERZA A
                { name: "Calentamiento (5min): Movilidad articular" },
                { name: "Sentadilla goblet: 4×10 (técnica perfecta)" },
                { name: "Peso muerto rumano: 3×10 (activar glúteos)" },
                { name: "Zancadas caminando: 3×12 c/pierna" },
                { name: "Puente de glúteo: 3×12 (contracción pico)" },
                { name: "Plancha frontal: 3×30-40s (core activado)" },
                { name: "Respiración diafragmática: 5min (obligatorio)" }
            ],
            2: [ // Martes - FUERZA B
                { name: "Calentamiento (5min): Rotaciones de hombro" },
                { name: "Remo con mancuerna: 4×10 (espalda fuerte)" },
                { name: "Press pecho suelo: 3×10 (rango completo)" },
                { name: "Press hombro mancuerna: 3×10" },
                { name: "Face pull o pájaros: 3×12 (postura)" },
                { name: "Dead bug: 3×10 (anti-extensión)" },
                { name: "Meditación: 10min (sistema nervioso)" }
            ],
            3: [ // Miércoles - BICI ZONA 2
                { name: "Calentamiento (5min): Pedaleo suave" },
                { name: "Zona 2 (30min): Ritmo conversacional" },
                { name: "Enfriamiento (5min): Reducir intensidad" },
                { name: "Objetivo: Quemar grasa visceral" },
                { name: "Respiración nasal durante todo el ejercicio" },
                { name: "Escáner corporal: 10min post-cardio" }
            ],
            4: [ // Jueves - FUERZA C
                { name: "Calentamiento (5min): Activación glúteo" },
                { name: "Peso muerto sumo: 4×8 (cadena posterior)" },
                { name: "Step-ups: 3×10 c/pierna (control)" },
                { name: "Curl femoral fitball: 3×12 (isquios)" },
                { name: "Abducciones c/banda: 3×15 (glúteo medio)" },
                { name: "Side plank: 3×30s c/lado" },
                { name: "Respiración 4-6: 10min (vagal)" }
            ],
            5: [ // Viernes - BICI INTERVALOS
                { name: "Calentamiento (5min): Preparar sistema" },
                { name: "Intervalos: 8×(30s rápido / 90s lento)" },
                { name: "Enfriamiento (5min): Recuperación activa" },
                { name: "Total: ~25min" },
                { name: "Hidratación constante" },
                { name: "Meditación guiada: 15min (recuperación)" }
            ],
            6: [ // Sábado - FUERZA D
                { name: "Calentamiento (5min): Movilidad completa" },
                { name: "Remo inclinado: 4×8 (dominante tirón)" },
                { name: "Push ups: 3×AMRAP (rodillas si necesario)" },
                { name: "Curl bíceps: 3×12" },
                { name: "Extensión tríceps: 3×12" },
                { name: "Finisher - Farmer carry: 4×30s" },
                { name: "Respiración diafragmática: 10min" }
            ],
            0: [ // Domingo - BICI CONSCIENTE
                { name: "Cardio consciente (20-30min): Ritmo suave" },
                { name: "Respiración nasal completa" },
                { name: "Música 432 Hz (opcional)" },
                { name: "Enfoque: Conexión mente-cuerpo" },
                { name: "Meditación: 15min post-ejercicio" },
                { name: "Revisión semanal: Progreso y sensaciones" }
            ]
        },
        dayObjectives: trainingObjectives
    };

    // MES 2: INCREMENTO PROGRESIVO
    grasaGoal.phases["2026-03"] = {
        objective: "Fase 1 - Mes 2: Incremento de Intensidad",
        notes: `💪 **MES 2: INCREMENTO PROGRESIVO**

📊 **CAMBIOS ESTE MES**
• Carga: 70-75% de tu máximo
• Descansos: 45-60 segundos
• Añadir 1-2 reps o 2-5% más peso
• Intervalos más intensos

🎯 **ENFOQUE**
• Mantener técnica perfecta
• Aumentar volumen gradualmente
• Monitorear recuperación
• Ajustar nutrición según progreso

⚠️ **SEÑALES DE ALERTA**
• Fatiga extrema constante
• Dolor articular (no muscular)
• Insomnio persistente
• Antojos descontrolados
→ Reducir volumen 20% y descansar

📏 **MEDICIONES**
• Peso: Semanal
• Cintura: Semanal (debe ↓)
• Fotos: Cada 2 semanas
• Energía: Diaria (escala 1-10)`,
        routine: {
            1: [ // Lunes - FUERZA A (Progresión)
                { name: "Calentamiento (5min) + Movilidad" },
                { name: "Sentadilla goblet: 4×12 (↑ reps o peso)" },
                { name: "Peso muerto rumano: 4×10 (↑ serie)" },
                { name: "Zancadas caminando: 3×15 c/pierna (↑ reps)" },
                { name: "Puente glúteo 1.5: 3×12 (variante más difícil)" },
                { name: "Plancha frontal: 3×45-50s (↑ tiempo)" },
                { name: "Respiración diafragmática: 5min" }
            ],
            2: [ // Martes - FUERZA B (Progresión)
                { name: "Calentamiento (5min)" },
                { name: "Remo con mancuerna: 4×12 (↑ reps)" },
                { name: "Press pecho suelo: 4×10 (↑ serie)" },
                { name: "Press hombro mancuerna: 3×12 (↑ reps)" },
                { name: "Face pull: 3×15 (↑ reps)" },
                { name: "Dead bug: 3×12 (↑ reps)" },
                { name: "Meditación: 10min" }
            ],
            3: [ // Miércoles - BICI ZONA 2 (Más tiempo)
                { name: "Calentamiento (5min)" },
                { name: "Zona 2 (35-40min): Aumentar duración" },
                { name: "Enfriamiento (5min)" },
                { name: "Monitorear frecuencia cardíaca" },
                { name: "Respiración nasal" },
                { name: "Escáner corporal: 10min" }
            ],
            4: [ // Jueves - FUERZA C (Progresión)
                { name: "Calentamiento (5min)" },
                { name: "Peso muerto sumo: 4×10 (↑ reps)" },
                { name: "Step-ups: 3×12 c/pierna (↑ reps)" },
                { name: "Curl femoral fitball: 4×12 (↑ serie)" },
                { name: "Abducciones c/banda: 3×20 (↑ reps)" },
                { name: "Side plank: 3×40s c/lado (↑ tiempo)" },
                { name: "Respiración 4-6: 10min" }
            ],
            5: [ // Viernes - BICI INTERVALOS (Más intensos)
                { name: "Calentamiento (5min)" },
                { name: "Intervalos: 10×(30s rápido / 90s lento)" },
                { name: "Enfriamiento (5min)" },
                { name: "Total: ~28min" },
                { name: "Hidratación + electrolitos" },
                { name: "Meditación guiada: 15min" }
            ],
            6: [ // Sábado - FUERZA D (Progresión)
                { name: "Calentamiento (5min)" },
                { name: "Remo inclinado: 4×10 (↑ reps)" },
                { name: "Push ups: 3×AMRAP (intentar completas)" },
                { name: "Curl bíceps: 3×15 (↑ reps)" },
                { name: "Extensión tríceps: 3×15 (↑ reps)" },
                { name: "Finisher - Farmer carry: 5×30s (↑ serie)" },
                { name: "Respiración diafragmática: 10min" }
            ],
            0: [ // Domingo - BICI CONSCIENTE
                { name: "Cardio consciente (25-30min)" },
                { name: "Respiración nasal" },
                { name: "Música 432 Hz" },
                { name: "Conexión mente-cuerpo" },
                { name: "Meditación: 15min" },
                { name: "Revisión semanal + ajustes" }
            ]
        },
        dayObjectives: trainingObjectives
    };

    // MES 3: CONSOLIDACIÓN FASE 1
    grasaGoal.phases["2026-04"] = {
        objective: "Fase 1 - Mes 3: Consolidación y Evaluación",
        notes: `💪 **MES 3: CONSOLIDACIÓN FASE 1**

🎯 **OBJETIVO**
• Consolidar hábitos
• Alcanzar 30-32% grasa corporal
• Grasa visceral: 9-10
• Preparar para Fase 2

📊 **ESTE MES**
• Mantener intensidad del mes 2
• Perfeccionar técnica
• Optimizar recuperación
• Evaluar progreso total

🔍 **EVALUACIÓN FINAL FASE 1**
Semana 12:
• Medición completa de composición corporal
• Fotos comparativas (inicio vs ahora)
• Medidas: cintura, cadera, muslos
• Evaluación de fuerza (cargas máximas)
• Nivel de energía y bienestar

✅ **INDICADORES DE ÉXITO**
• Grasa corporal: 30-32%
• Grasa visceral: ≤10
• Cintura: -5 a -8 cm
• Fuerza: ↑ en todos los ejercicios
• Energía: Estable y alta
• Sueño: Mejorado
• Antojos: Controlados

📋 **PREPARACIÓN FASE 2**
Si alcanzaste objetivos:
→ Pasar a Fase 2 (meses 4-12)

Si no alcanzaste objetivos:
→ Repetir Fase 1 con ajustes nutricionales`,
        routine: {
            1: [ // Lunes - FUERZA A (Consolidación)
                { name: "Calentamiento (5min)" },
                { name: "Sentadilla goblet: 4×12 (peso consolidado)" },
                { name: "Peso muerto rumano: 4×10" },
                { name: "Zancadas caminando: 3×15 c/pierna" },
                { name: "Puente glúteo 1.5: 3×15" },
                { name: "Plancha frontal: 3×50-60s" },
                { name: "Respiración diafragmática: 5min" }
            ],
            2: [ // Martes - FUERZA B (Consolidación)
                { name: "Calentamiento (5min)" },
                { name: "Remo con mancuerna: 4×12" },
                { name: "Press pecho suelo: 4×10" },
                { name: "Press hombro mancuerna: 3×12" },
                { name: "Face pull: 3×15" },
                { name: "Dead bug: 3×15" },
                { name: "Meditación: 10min" }
            ],
            3: [ // Miércoles - BICI ZONA 2
                { name: "Calentamiento (5min)" },
                { name: "Zona 2 (40min): Duración máxima Fase 1" },
                { name: "Enfriamiento (5min)" },
                { name: "Mantener zona objetivo" },
                { name: "Respiración nasal" },
                { name: "Escáner corporal: 10min" }
            ],
            4: [ // Jueves - FUERZA C (Consolidación)
                { name: "Calentamiento (5min)" },
                { name: "Peso muerto sumo: 4×10" },
                { name: "Step-ups: 3×12 c/pierna" },
                { name: "Curl femoral fitball: 4×12" },
                { name: "Abducciones c/banda: 3×20" },
                { name: "Side plank: 3×45s c/lado" },
                { name: "Respiración 4-6: 10min" }
            ],
            5: [ // Viernes - BICI INTERVALOS
                { name: "Calentamiento (5min)" },
                { name: "Intervalos: 10×(30s rápido / 90s lento)" },
                { name: "Enfriamiento (5min)" },
                { name: "Mantener intensidad" },
                { name: "Hidratación óptima" },
                { name: "Meditación guiada: 15min" }
            ],
            6: [ // Sábado - FUERZA D (Consolidación)
                { name: "Calentamiento (5min)" },
                { name: "Remo inclinado: 4×10" },
                { name: "Push ups: 3×AMRAP (máximo esfuerzo)" },
                { name: "Curl bíceps: 3×15" },
                { name: "Extensión tríceps: 3×15" },
                { name: "Finisher - Farmer carry: 5×30s" },
                { name: "Respiración diafragmática: 10min" }
            ],
            0: [ // Domingo - BICI CONSCIENTE + EVALUACIÓN
                { name: "Cardio consciente (30min)" },
                { name: "Respiración nasal" },
                { name: "Música 432 Hz" },
                { name: "Meditación: 15min" },
                { name: "Revisión mensual completa" },
                { name: "Preparar evaluación Fase 1" }
            ]
        },
        dayObjectives: trainingObjectives
    };

    // ==================== FASE 2: MESES 4-12 (OPTIMIZACIÓN) ====================
    // Objetivo: 26-28% grasa corporal

    // MESES 4-12: Estructura similar pero con progresión continua
    // Por brevedad, creo estructura base para Fase 2

    const fase2Months = [
        { key: "2026-05", name: "Mes 4", focus: "Inicio Fase 2 - Nueva intensidad" },
        { key: "2026-06", name: "Mes 5", focus: "Aumento volumen" },
        { key: "2026-07", name: "Mes 6", focus: "Pico de intensidad" },
        { key: "2026-08", name: "Mes 7", focus: "Deload + Recuperación" },
        { key: "2026-09", name: "Mes 8", focus: "Nuevo ciclo - Fuerza" },
        { key: "2026-10", name: "Mes 9", focus: "Hipertrofia metabólica" },
        { key: "2026-11", name: "Mes 10", focus: "Refinamiento" },
        { key: "2026-12", name: "Mes 11", focus: "Consolidación" },
        { key: "2027-01", name: "Mes 12", focus: "Evaluación final + Mantenimiento" }
    ];

    fase2Months.forEach((month, index) => {
        grasaGoal.phases[month.key] = {
            objective: `Fase 2 - ${month.name}: ${month.focus}`,
            notes: `💪 **FASE 2: OPTIMIZACIÓN (Meses 4-12)**

🎯 **OBJETIVO FASE 2**
• Grasa actual: 30-32% → Meta final: 26-28%
• Grasa visceral: 9-10 → Meta: 7-8
• Enfoque: Recomposición corporal
• Mantener/aumentar masa muscular

📊 **${month.name.toUpperCase()}: ${month.focus.toUpperCase()}**

${index < 3 ? `
🔥 **INTENSIDAD AUMENTADA**
• Carga: 75-80% de tu máximo
• Descansos: 45 segundos
• Volumen: 4-5 series por ejercicio
• Cardio: 40-45min Zona 2
` : index < 6 ? `
🔥 **CICLO DE FUERZA**
• Carga: 80-85% de tu máximo
• Reps: 6-8 (fuerza)
• Descansos: 90 segundos
• Enfoque: Construir músculo
` : `
🔥 **REFINAMIENTO FINAL**
• Carga: 75-80% de tu máximo
• Reps: 10-12 (definición)
• Descansos: 30-45 segundos
• Cardio: Mantener Zona 2
`}

⚠️ **RECUPERACIÓN CRÍTICA**
• Meditación: 15min diarios
• Sueño: 7-8 horas
• Hidratación: 2-3L agua
• Manejo estrés: Obligatorio

📏 **MEDICIONES MENSUALES**
• Composición corporal completa
• Fotos progreso
• Medidas corporales
• Test de fuerza`,
            routine: {
                1: [
                    { name: "Calentamiento (5-7min): Movilidad completa" },
                    { name: "Sentadilla: 4-5×8-12 (según fase)" },
                    { name: "Peso muerto rumano: 4×8-10" },
                    { name: "Zancadas: 3×12-15 c/pierna" },
                    { name: "Puente glúteo: 3×12-15" },
                    { name: "Core: Plancha + variantes 3×45-60s" },
                    { name: "Respiración: 5-10min" }
                ],
                2: [
                    { name: "Calentamiento (5-7min)" },
                    { name: "Remo: 4-5×8-12" },
                    { name: "Press pecho: 4×8-10" },
                    { name: "Press hombro: 3×10-12" },
                    { name: "Tirón posterior: 3×12-15" },
                    { name: "Core anti-rotación: 3×10-12" },
                    { name: "Meditación: 15min" }
                ],
                3: [
                    { name: "Calentamiento (5min)" },
                    { name: "Zona 2 (40-45min): Grasa visceral" },
                    { name: "Enfriamiento (5min)" },
                    { name: "Respiración nasal completa" },
                    { name: "Hidratación constante" },
                    { name: "Escáner corporal: 10-15min" }
                ],
                4: [
                    { name: "Calentamiento (5-7min)" },
                    { name: "Peso muerto sumo: 4-5×6-10" },
                    { name: "Step-ups: 3×10-12 c/pierna" },
                    { name: "Curl femoral: 4×10-12" },
                    { name: "Abducciones: 3×15-20" },
                    { name: "Side plank: 3×45-60s" },
                    { name: "Respiración 4-6: 10-15min" }
                ],
                5: [
                    { name: "Calentamiento (5min)" },
                    { name: "Intervalos: 10-12×(30s / 90s)" },
                    { name: "Enfriamiento (5min)" },
                    { name: "Progresión gradual" },
                    { name: "Recuperación activa" },
                    { name: "Meditación: 15min" }
                ],
                6: [
                    { name: "Calentamiento (5-7min)" },
                    { name: "Remo inclinado: 4-5×8-10" },
                    { name: "Push ups: 3-4×AMRAP" },
                    { name: "Curl bíceps: 3×12-15" },
                    { name: "Extensión tríceps: 3×12-15" },
                    { name: "Finisher metabólico: 5-6 rondas" },
                    { name: "Respiración: 10-15min" }
                ],
                0: [
                    { name: "Cardio consciente (30-40min)" },
                    { name: "Respiración nasal" },
                    { name: "Música 432 Hz" },
                    { name: "Meditación profunda: 20min" },
                    { name: "Revisión semanal completa" },
                    { name: "Planificación próxima semana" }
                ]
            },
            dayObjectives: trainingObjectives
        };
    });

    // Agregar al nivel Físico
    physicalLevel.goals.push(grasaGoal);

    // Guardar
    Store.save();

    console.log('\n✅ ¡Rutina Reducción Grasa Visceral agregada exitosamente!');
    console.log('📊 Resumen:');
    console.log('   - Meta: ↓ Grasa Visceral');
    console.log('   - Fases: 12 meses (Feb 2026 - Ene 2027)');
    console.log('   - Fase 1 (3 meses): 37% → 30-32% grasa');
    console.log('   - Fase 2 (9 meses): 30-32% → 26-28% grasa');
    console.log('   - Estructura: 4 días fuerza + 3 días bici');
    console.log('   - Recuperación: Meditación diaria obligatoria');
    console.log('\n🔄 Recargando página...');

    setTimeout(() => {
        location.reload();
    }, 2000);
})();
