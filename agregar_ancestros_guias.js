// Script para agregar la rutina "Ancestros y Guías" al nivel Espiritual
// Ejecutar en la consola del navegador mientras index.html está abierto
// VERSIÓN COMPLETA CON ACTIVIDADES PROFUNDAS Y ESPECÍFICAS

(function () {
    console.log('🕯️ Agregando rutina Ancestros y Guías...\n');

    const data = Store.data;

    if (!data.levels || data.levels.length === 0) {
        console.error('❌ No hay niveles. Abre la app primero.');
        return;
    }

    // Buscar nivel Espiritual
    const spiritualLevel = data.levels.find(l => l.name.toLowerCase().includes('espiritual'));

    if (!spiritualLevel) {
        console.error('❌ Nivel Espiritual no encontrado.');
        console.log('💡 Crea un nivel llamado "Espiritual" primero en la app.');
        return;
    }

    console.log(`✅ Nivel Espiritual encontrado: "${spiritualLevel.name}"`);

    // Eliminar rutina si ya existe
    if (spiritualLevel.goals) {
        const existing = spiritualLevel.goals.find(g => g.id === 'goal_ancestros_guias_2026');
        if (existing) {
            console.log('⚠️ Rutina ya existe. Actualizando...');
            spiritualLevel.goals = spiritualLevel.goals.filter(g => g.id !== 'goal_ancestros_guias_2026');
        }
    } else {
        spiritualLevel.goals = [];
    }

    // Crear meta
    const ancestrosGoal = {
        id: "goal_ancestros_guias_2026",
        name: "Ancestros y Guías",
        color: spiritualLevel.color || "purple",
        phaseType: "monthly",
        phases: {}
    };

    // Objetivos diarios base (se usan en todos los meses)
    const baseObjectives = {
        1: "Abrir el canal con respeto",
        2: "Escuchar sin juzgar",
        3: "Registrar con claridad",
        4: "Agradecer profundamente",
        5: "Integrar en lo cotidiano"
    };

    // ==================== MES 1: ENRAIZAMIENTO Y PERMISO ====================
    ancestrosGoal.phases["2026-01"] = {
        objective: "Enraizamiento y Permiso: Presentarte ante tu Linaje",
        notes: `🕯️ **ENRAIZAMIENTO Y PERMISO**

🎯 **OBJETIVO DEL MES**
Que tu sistema nervioso y energético se sienta seguro. Aquí no "contactas", te presentas.

✨ **FUNDAMENTO**
Antes de abrir canales espirituales, necesitas sentirte enraizado y seguro. Este mes es sobre crear las bases de confianza.

**🔥 RITUAL MENSUAL: RITUAL DE PERMISO**
Una vez este mes (elige un día especial):
• Vela blanca + agua + tierra (sal o tierra real)
• Di en voz alta: "Reconozco mi origen y me reconozco a mí"
• Permanece en silencio 10 minutos sintiendo tu conexión

📚 **RECURSOS**
• Crear tu espacio sagrado (altar)
• Fotos de ancestros si las tienes
• Elementos naturales (agua, tierra, fuego, aire)

🛠️ **HERRAMIENTAS**
• Vela blanca
• Agua en recipiente
• Sal o tierra
• Cuaderno exclusivo para este trabajo
• Incienso (opcional)`,
        routine: {
            1: [
                { name: "Apertura (3min): Respiración lenta + 'Me presento ante mi linaje'" },
                { name: "Meditación de enraizamiento (15min): Visualizar raíces profundas" },
                { name: "Preparar altar (10min): Limpiar espacio, colocar elementos" },
                { name: "Registro (5min): Sensaciones en el cuerpo" },
                { name: "Cierre (2min): 'Gracias. Todo queda en su lugar'" }
            ],
            2: [
                { name: "Apertura (3min): Respiración + 'Pido permiso para acercarme'" },
                { name: "Práctica de presencia (15min): Sentarte frente al altar en silencio" },
                { name: "Añadir al altar (10min): Agua fresca, una flor" },
                { name: "Registro (5min): Emociones que surgen" },
                { name: "Cierre (2min): Agradecer la presencia" }
            ],
            3: [
                { name: "Apertura (3min): Respiración + 'Estoy aquí, presente'" },
                { name: "Meditación de seguridad (15min): Sentir protección ancestral" },
                { name: "Encender vela (10min): Observar la llama en silencio" },
                { name: "Registro (5min): Imágenes o palabras que llegan" },
                { name: "Cierre (2min): Apagar vela con gratitud" }
            ],
            4: [
                { name: "Apertura (3min): Respiración + 'Mi sistema está seguro'" },
                { name: "Práctica corporal (15min): Sentir dónde vive el linaje en ti" },
                { name: "Ofrenda simple (10min): Colocar algo significativo" },
                { name: "Registro (5min): Sensaciones físicas" },
                { name: "Cierre (2min): Cerrar el espacio con amor" }
            ],
            5: [
                { name: "Apertura (3min): Respiración + 'Confío en este proceso'" },
                { name: "Meditación de integración (15min): Sentir tu lugar en el linaje" },
                { name: "Revisar altar (10min): Observar qué ha cambiado" },
                { name: "Registro (5min): Síntesis de la semana" },
                { name: "Cierre (2min): Gratitud profunda" }
            ],
            6: [
                { name: "Práctica extendida (45min): Crear o perfeccionar tu altar personal" },
                { name: "Meditación profunda (15min): Presentarte formalmente" }
            ],
            0: [
                { name: "Revisión semanal (30min): Leer todos tus registros" },
                { name: "Preparación (30min): Investigar sobre tu linaje familiar" }
            ]
        },
        dayObjectives: baseObjectives
    };

    // ==================== MES 2: RECONOCER EL LINAJE ====================
    ancestrosGoal.phases["2026-02"] = {
        objective: "Reconocer el Linaje: Sentir de Dónde Vienes",
        notes: `🧬 **RECONOCER EL LINAJE**

🎯 **OBJETIVO DEL MES**
Sentir de dónde vienes más allá de la mente. No sanar aún. Solo mirar.

✨ **FUNDAMENTO**
Conocer tu linaje no es solo nombres y fechas. Es sentir las historias, los patrones, las fortalezas heredadas.

**🔥 RITUAL MENSUAL: ÁRBOL GENEALÓGICO ENERGÉTICO**
• Dibuja tu árbol genealógico (hasta donde sepas)
• Medita con cada nombre
• Siente qué emociones trae cada uno
• No juzgues, solo observa

📚 **RECURSOS**
• Historias familiares
• Fotos antiguas
• Objetos heredados
• Conversaciones con familiares mayores

🛠️ **HERRAMIENTAS**
• Papel grande para árbol genealógico
• Fotos de ancestros
• Velas de colores
• Tu cuaderno sagrado`,
        routine: {
            1: [
                { name: "Apertura (3min): 'Honro a quienes vinieron antes'" },
                { name: "Meditación con foto (15min): Elegir un ancestro, mirarlo" },
                { name: "Investigación (10min): Escribir lo que sabes de esa persona" },
                { name: "Registro (5min): Qué sientes al pensar en él/ella" },
                { name: "Cierre (2min): Agradecer su vida" }
            ],
            2: [
                { name: "Apertura (3min): 'Recibo las historias con amor'" },
                { name: "Visualización de linaje (15min): Ver la cadena de ancestros" },
                { name: "Escribir historias (10min): Una anécdota familiar" },
                { name: "Registro (5min): Patrones que observas" },
                { name: "Cierre (2min): Honrar las historias" }
            ],
            3: [
                { name: "Apertura (3min): 'Soy parte de algo más grande'" },
                { name: "Meditación de linaje materno (15min): Línea de mujeres" },
                { name: "Ofrenda (10min): Algo que honre lo femenino" },
                { name: "Registro (5min): Fortalezas heredadas" },
                { name: "Cierre (2min): Gratitud a las madres" }
            ],
            4: [
                { name: "Apertura (3min): 'Honro la fuerza de mis ancestros'" },
                { name: "Meditación de linaje paterno (15min): Línea de hombres" },
                { name: "Ofrenda (10min): Algo que honre lo masculino" },
                { name: "Registro (5min): Dones recibidos" },
                { name: "Cierre (2min): Gratitud a los padres" }
            ],
            5: [
                { name: "Apertura (3min): 'Integro ambas líneas en mí'" },
                { name: "Meditación de unión (15min): Ambos linajes en ti" },
                { name: "Síntesis (10min): Dibujar tu lugar en el árbol" },
                { name: "Registro (5min): Cómo te sientes siendo tú" },
                { name: "Cierre (2min): Celebrar tu existencia" }
            ],
            6: [
                { name: "Proyecto especial (1h): Crear árbol genealógico energético completo" }
            ],
            0: [
                { name: "Revisión (45min): Contemplar todo lo descubierto" },
                { name: "Preparación: Leer sobre altares vivos" }
            ]
        },
        dayObjectives: baseObjectives
    };

    // ==================== MES 3: ALTAR VIVO ====================
    ancestrosGoal.phases["2026-03"] = {
        objective: "Altar Vivo: Relación Cotidiana, No Ritualizada",
        notes: `🌿 **ALTAR VIVO**

🎯 **OBJETIVO DEL MES**
Que la relación sea cotidiana, no ritualizada en exceso. El altar se vuelve parte de tu vida diaria.

✨ **FUNDAMENTO**
Un altar vivo cambia, respira, evoluciona contigo. No es un museo, es un espacio de diálogo constante.

**🔥 RITUAL MENSUAL: RENOVACIÓN DEL ALTAR**
• Limpia completamente tu altar
• Cambia todos los elementos
• Añade algo nuevo que represente quién eres HOY
• Pasa 30min en contemplación

📚 **RECURSOS**
• Elementos naturales frescos
• Objetos personales significativos
• Agua, flores, frutas
• Incienso o hierbas

🛠️ **HERRAMIENTAS**
• Elementos cambiantes (flores frescas semanales)
• Agua que renuevas diariamente
• Velas de diferentes colores
• Objetos rotativos`,
        routine: {
            1: [
                { name: "Apertura (3min): 'Buenos días, ancestros'" },
                { name: "Práctica matutina (10min): Saludar al altar al despertar" },
                { name: "Cambiar agua (5min): Agua fresca con intención" },
                { name: "Conversación simple (10min): Contar tu día" },
                { name: "Registro (5min): Respuestas sutiles" },
                { name: "Cierre (2min): 'Gracias por escuchar'" }
            ],
            2: [
                { name: "Apertura (3min): 'Los invito a mi día'" },
                { name: "Ofrenda cotidiana (15min): Café, té o comida" },
                { name: "Momento de escucha (10min): Silencio receptivo" },
                { name: "Registro (5min): Sensaciones, no palabras" },
                { name: "Cierre (2min): Compartir la ofrenda (comerla/beberla)" }
            ],
            3: [
                { name: "Apertura (3min): 'Camino con ustedes'" },
                { name: "Práctica de presencia (15min): Estar sin pedir nada" },
                { name: "Añadir elemento (10min): Algo de la naturaleza" },
                { name: "Registro (5min): Cambios en el altar" },
                { name: "Cierre (2min): Observar qué se transforma" }
            ],
            4: [
                { name: "Apertura (3min): 'Gracias por estar'" },
                { name: "Limpieza consciente (15min): Limpiar altar con amor" },
                { name: "Reorganizar (10min): Cambiar disposición intuitivamente" },
                { name: "Registro (5min): Por qué moviste cada cosa" },
                { name: "Cierre (2min): Apreciar el nuevo orden" }
            ],
            5: [
                { name: "Apertura (3min): 'Celebro esta conexión'" },
                { name: "Práctica de gratitud (15min): Agradecer cada elemento" },
                { name: "Ofrenda especial (10min): Algo hecho por ti" },
                { name: "Registro (5min): Cómo ha cambiado tu relación" },
                { name: "Cierre (2min): Compromiso de continuidad" }
            ],
            6: [
                { name: "Renovación completa (1h30min): Transformar completamente el altar" }
            ],
            0: [
                { name: "Contemplación (1h): Meditar frente al altar renovado" },
                { name: "Preparación: Leer sobre sanación de linaje" }
            ]
        },
        dayObjectives: baseObjectives
    };

    // ==================== MES 4: SANACIÓN SUAVE DEL LINAJE ====================
    ancestrosGoal.phases["2026-04"] = {
        objective: "Sanación Suave del Linaje: Soltar Cargas Heredadas",
        notes: `💧 **SANACIÓN SUAVE DEL LINAJE**

🎯 **OBJETIVO DEL MES**
Empezar a soltar cargas que no son tuyas. Con suavidad, sin forzar.

✨ **FUNDAMENTO**
Heredamos no solo genes, sino también traumas, miedos, patrones. Puedes honrar a tus ancestros Y soltar lo que no te sirve.

**🔥 RITUAL MENSUAL: RITUAL DE DEVOLUCIÓN**
• Escribe en papel lo que cargas que no es tuyo
• Lee cada cosa en voz alta
• Di: "Esto no es mío. Lo devuelvo con amor"
• Quema el papel o entrégalo al agua corriente

📚 **RECURSOS**
• Comprensión de trauma generacional
• Técnicas de liberación emocional
• Perdón consciente
• Compasión hacia el linaje

🛠️ **HERRAMIENTAS**
• Papel y pluma
• Agua corriente o fuego seguro
• Vela blanca
• Sal para limpiar energía`,
        routine: {
            1: [
                { name: "Apertura (3min): 'Libero con amor'" },
                { name: "Identificación (15min): Qué cargas que no es tuyo" },
                { name: "Escritura (10min): Lista de cargas heredadas" },
                { name: "Registro (5min): Cómo se siente en el cuerpo" },
                { name: "Cierre (2min): 'Hoy libero lo que no me pertenece'" }
            ],
            2: [
                { name: "Apertura (3min): 'Honro el dolor de mis ancestros'" },
                { name: "Meditación de compasión (15min): Hacia quienes sufrieron" },
                { name: "Perdón (10min): Perdonar sin olvidar" },
                { name: "Registro (5min): Emociones que surgen" },
                { name: "Cierre (2min): 'Rompo el ciclo con amor'" }
            ],
            3: [
                { name: "Apertura (3min): 'Elijo mi propio camino'" },
                { name: "Visualización (15min): Cortar cordones energéticos" },
                { name: "Afirmación (10min): 'Soy libre de elegir'" },
                { name: "Registro (5min): Sensación de liberación" },
                { name: "Cierre (2min): Agradecer la libertad" }
            ],
            4: [
                { name: "Apertura (3min): 'Transformo el dolor en sabiduría'" },
                { name: "Alquimia emocional (15min): Transmutación consciente" },
                { name: "Ofrenda de sanación (10min): Por los que sufrieron" },
                { name: "Registro (5min): Qué ha cambiado" },
                { name: "Cierre (2min): 'El ciclo se sana en mí'" }
            ],
            5: [
                { name: "Apertura (3min): 'Soy el cambio en mi linaje'" },
                { name: "Integración (15min): Sentir la nueva ligereza" },
                { name: "Gratitud profunda (10min): A quienes hicieron posible tu vida" },
                { name: "Registro (5min): Síntesis de liberación" },
                { name: "Cierre (2min): Celebrar tu valentía" }
            ],
            6: [
                { name: "Ritual de devolución (2h): Ceremonia completa de liberación" }
            ],
            0: [
                { name: "Descanso (1h): Integración suave, sin forzar" },
                { name: "Preparación: Leer sobre mensajes del cuerpo" }
            ]
        },
        dayObjectives: baseObjectives
    };

    // Continúa con los meses restantes (5-12)...
    // Por claridad, incluyo estructura completa

    // ==================== MES 5: MENSAJES DEL CUERPO ====================
    ancestrosGoal.phases["2026-05"] = {
        objective: "Mensajes del Cuerpo: Cómo te Hablan tus Ancestros",
        notes: `🪶 **MENSAJES DEL CUERPO**

🎯 **OBJETIVO DEL MES**
Aprender cómo te hablan tus ancestros: sensaciones, no voces.

✨ **FUNDAMENTO**
Los ancestros hablan a través del cuerpo: escalofríos, calor, presión, expansión. Aprende su lenguaje.

**🔥 RITUAL MENSUAL: MAPEO CORPORAL**
• Acuéstate cómodamente
• Escanea todo tu cuerpo
• Marca en un dibujo dónde sientes a tus ancestros
• Cada zona tiene un mensaje

📚 **RECURSOS**
• Somática y espiritualidad
• Escucha corporal profunda
• Interpretación de sensaciones
• Diario corporal

🛠️ **HERRAMIENTAS**
• Dibujo del cuerpo humano
• Colores para marcar zonas
• Espacio cómodo para acostarte
• Silencio profundo`,
        routine: {
            1: [
                { name: "Apertura (3min): 'Mi cuerpo es un templo sagrado'" },
                { name: "Escaneo corporal (15min): De pies a cabeza" },
                { name: "Identificar sensaciones (10min): Dónde sientes presencia" },
                { name: "Registro (5min): Mapa de sensaciones" },
                { name: "Cierre (2min): Agradecer al cuerpo" }
            ],
            2: [
                { name: "Apertura (3min): 'Escucho lo que mi cuerpo dice'" },
                { name: "Práctica de sensibilidad (15min): Afinar percepción" },
                { name: "Diálogo corporal (10min): Preguntar al cuerpo" },
                { name: "Registro (5min): Respuestas recibidas" },
                { name: "Cierre (2min): Honrar la sabiduría corporal" }
            ],
            3: [
                { name: "Apertura (3min): 'Mi cuerpo conoce el camino'" },
                { name: "Movimiento intuitivo (15min): Dejar que el cuerpo se mueva" },
                { name: "Observación (10min): Qué movimientos surgen" },
                { name: "Registro (5min): Mensajes en el movimiento" },
                { name: "Cierre (2min): Integrar el movimiento" }
            ],
            4: [
                { name: "Apertura (3min): 'Confío en las señales'" },
                { name: "Práctica de discernimiento (15min): Diferenciar sensaciones" },
                { name: "Interpretación (10min): Qué significa cada sensación" },
                { name: "Registro (5min): Diccionario personal de señales" },
                { name: "Cierre (2min): Gratitud por la claridad" }
            ],
            5: [
                { name: "Apertura (3min): 'Soy un canal claro'" },
                { name: "Integración (15min): Unir mente-cuerpo-espíritu" },
                { name: "Síntesis (10min): Revisar todos los mapas" },
                { name: "Registro (5min): Patrones descubiertos" },
                { name: "Cierre (2min): Celebrar la conexión" }
            ],
            6: [
                { name: "Mapeo completo (2h): Crear mapa corporal detallado de conexión ancestral" }
            ],
            0: [
                { name: "Revisión (1h): Estudiar tu mapa y sus mensajes" },
                { name: "Preparación: Leer sobre guías espirituales" }
            ]
        },
        dayObjectives: baseObjectives
    };

    // MES 6-12: Estructura completa
    // (Incluyo versión resumida para mantener el archivo manejable)

    ancestrosGoal.phases["2026-06"] = {
        objective: "Encuentro con Guías: Diferenciar Ancestros vs Guías",
        notes: `🔥 **ENCUENTRO CON GUÍAS**

🎯 **OBJETIVO**: Diferenciar ancestros (tu linaje) de guías espirituales (seres de luz que te acompañan).

**🔥 RITUAL MENSUAL: INVOCACIÓN DE GUÍAS**
• Meditación profunda
• Pregunta: "¿Quién me guía?"
• Escucha sin expectativas
• Registra nombres, sensaciones, símbolos`,
        routine: {
            1: [
                { name: "Apertura (3min): 'Invito a mis guías'" },
                { name: "Meditación de apertura (15min): Crear espacio para guías" },
                { name: "Escucha (10min): Silencio receptivo" },
                { name: "Registro (5min): Primeras impresiones" },
                { name: "Cierre (2min): Agradecer la presencia" }
            ],
            2: [
                { name: "Apertura (3min): '¿Quién camina conmigo?'" },
                { name: "Visualización (15min): Ver a tus guías" },
                { name: "Diálogo (10min): Hacer preguntas" },
                { name: "Registro (5min): Respuestas recibidas" },
                { name: "Cierre (2min): Gratitud" }
            ],
            3: [
                { name: "Apertura (3min): 'Reconozco tu luz'" },
                { name: "Práctica de discernimiento (15min): Ancestros vs guías" },
                { name: "Clarificación (10min): Quién es quién" },
                { name: "Registro (5min): Diferencias notadas" },
                { name: "Cierre (2min): Honrar a ambos" }
            ],
            4: [
                { name: "Apertura (3min): 'Pido guía clara'" },
                { name: "Meditación con guía (15min): Conectar con uno específico" },
                { name: "Recibir mensaje (10min): Escuchar su sabiduría" },
                { name: "Registro (5min): Mensaje recibido" },
                { name: "Cierre (2min): Aplicar la guía" }
            ],
            5: [
                { name: "Apertura (3min): 'Integro ambas presencias'" },
                { name: "Síntesis (15min): Ancestros Y guías juntos" },
                { name: "Gratitud doble (10min): A linaje y a guías" },
                { name: "Registro (5min): Cómo trabajan juntos" },
                { name: "Cierre (2min): Celebrar el equipo" }
            ],
            6: [{ name: "Ritual de invocación (2h): Ceremonia formal con guías" }],
            0: [
                { name: "Revisión (1h): Conocer a cada guía" },
                { name: "Preparación: Leer sobre sueños lúcidos" }
            ]
        },
        dayObjectives: baseObjectives
    };

    ancestrosGoal.phases["2026-07"] = {
        objective: "Sueños y Viaje Interior: Abrir el Canal Onírico",
        notes: `🌙 **SUEÑOS Y VIAJE INTERIOR**

🎯 **OBJETIVO**: Recibir mensajes a través de los sueños.

**🔥 RITUAL MENSUAL: RITUAL DE SUEÑOS**
• Antes de dormir: "Muéstrenme solo lo que puedo comprender"
• Vaso de agua junto a la cama
• Diario de sueños al despertar`,
        routine: {
            1: [
                { name: "Preparación nocturna (5min): Limpiar energía antes de dormir" },
                { name: "Invocación (3min): Pedir sueños claros" },
                { name: "Registro matutino (20min): Escribir sueños al despertar" },
                { name: "Interpretación (10min): Símbolos y mensajes" },
                { name: "Cierre (2min): Agradecer los sueños" }
            ],
            2: [
                { name: "Preparación (5min): Vaso de agua + intención" },
                { name: "Meditación pre-sueño (10min): Relajación profunda" },
                { name: "Registro matutino (20min): Detalles de sueños" },
                { name: "Análisis (10min): Patrones recurrentes" },
                { name: "Cierre (2min): Integrar mensajes" }
            ],
            3: [
                { name: "Preparación (5min): Limpiar espacio de dormir" },
                { name: "Pregunta específica (5min): Pedir guía sobre algo" },
                { name: "Registro matutino (20min): Respuestas en sueños" },
                { name: "Conexión (10min): Relacionar con vida diurna" },
                { name: "Cierre (2min): Aplicar la guía" }
            ],
            4: [
                { name: "Preparación (5min): Incienso o hierbas" },
                { name: "Invocación a ancestros (5min): Pedirles que visiten" },
                { name: "Registro matutino (20min): Visitas nocturnas" },
                { name: "Gratitud (10min): A quienes vinieron" },
                { name: "Cierre (2min): Honrar el encuentro" }
            ],
            5: [
                { name: "Preparación (5min): Ritual completo pre-sueño" },
                { name: "Apertura total (5min): Recibir lo que venga" },
                { name: "Registro matutino (20min): Síntesis semanal" },
                { name: "Interpretación profunda (10min): Mensajes clave" },
                { name: "Cierre (2min): Integrar sabiduría onírica" }
            ],
            6: [{ name: "Noche especial (toda la noche): Ritual de sueños + registro extenso" }],
            0: [
                { name: "Revisión (1h): Leer todos los sueños del mes" },
                { name: "Preparación: Leer sobre sincronicidades" }
            ]
        },
        dayObjectives: baseObjectives
    };

    ancestrosGoal.phases["2026-08"] = {
        objective: "Señales y Sincronías: Lenguaje Simbólico Cotidiano",
        notes: `🌬️ **SEÑALES Y SINCRONÍAS**

🎯 **OBJETIVO**: Reconocer el lenguaje simbólico en lo cotidiano.

**🔥 RITUAL MENSUAL: DIARIO DE SEÑALES**
• Registra TODAS las sincronicidades del mes
• Al final, busca patrones
• Agradece cada señal`,
        routine: {
            1: [
                { name: "Apertura (3min): 'Estoy atenta a las señales'" },
                { name: "Observación consciente (15min): Caminar con atención" },
                { name: "Registro de señales (10min): Qué notaste hoy" },
                { name: "Interpretación (5min): Posibles significados" },
                { name: "Cierre (2min): Agradecer la guía" }
            ],
            2: [
                { name: "Apertura (3min): 'Todo tiene significado'" },
                { name: "Práctica de sincronicidad (15min): Buscar patrones" },
                { name: "Documentación (10min): Números, animales, palabras" },
                { name: "Conexión (5min): Cómo se relaciona contigo" },
                { name: "Cierre (2min): Confiar en el universo" }
            ],
            3: [
                { name: "Apertura (3min): 'Recibo los mensajes'" },
                { name: "Meditación de apertura (15min): Pedir señales claras" },
                { name: "Observación activa (10min): Salir y observar" },
                { name: "Registro inmediato (5min): Anotar al momento" },
                { name: "Cierre (2min): Validar las señales" }
            ],
            4: [
                { name: "Apertura (3min): 'Confío en lo sutil'" },
                { name: "Práctica de discernimiento (15min): Señal vs coincidencia" },
                { name: "Análisis (10min): Qué es realmente mensaje" },
                { name: "Registro (5min): Criterios personales" },
                { name: "Cierre (2min): Afinar la percepción" }
            ],
            5: [
                { name: "Apertura (3min): 'Soy parte del tejido'" },
                { name: "Síntesis semanal (15min): Todas las señales juntas" },
                { name: "Patrón general (10min): Qué te están diciendo" },
                { name: "Registro (5min): Mensaje principal" },
                { name: "Cierre (2min): Actuar según la guía" }
            ],
            6: [{ name: "Revisión profunda (2h): Analizar todas las señales del mes" }],
            0: [
                { name: "Contemplación (1h): Agradecer cada sincronicidad" },
                { name: "Preparación: Leer sobre linaje femenino" }
            ]
        },
        dayObjectives: baseObjectives
    };

    ancestrosGoal.phases["2026-09"] = {
        objective: "Sabiduría del Linaje Femenino: Honrar la Línea Materna",
        notes: `🌀 **SABIDURÍA DEL LINAJE FEMENINO**

🎯 **OBJETIVO**: Conectar profundamente con la línea de mujeres de tu familia.

**🔥 RITUAL MENSUAL: CÍRCULO DE MUJERES**
• Medita con todas las mujeres de tu linaje
• Visualízalas en círculo contigo
• Recibe su sabiduría colectiva`,
        routine: {
            1: [
                { name: "Apertura (3min): 'Honro a las madres'" },
                { name: "Meditación con tu madre (15min): Conectar con ella" },
                { name: "Gratitud (10min): Por lo que te dio" },
                { name: "Registro (5min): Dones recibidos" },
                { name: "Cierre (2min): Bendecir la relación" }
            ],
            2: [
                { name: "Apertura (3min): 'Honro a las abuelas'" },
                { name: "Meditación con abuelas (15min): Ambas líneas" },
                { name: "Escucha (10min): Su sabiduría" },
                { name: "Registro (5min): Mensajes recibidos" },
                { name: "Cierre (2min): Agradecer su fuerza" }
            ],
            3: [
                { name: "Apertura (3min): 'Honro a las bisabuelas'" },
                { name: "Visualización profunda (15min): Retroceder generaciones" },
                { name: "Conexión (10min): Sentir su presencia" },
                { name: "Registro (5min): Historias que llegan" },
                { name: "Cierre (2min): Honrar su legado" }
            ],
            4: [
                { name: "Apertura (3min): 'Soy hija de todas ellas'" },
                { name: "Círculo de mujeres (15min): Todas juntas" },
                { name: "Recibir sabiduría (10min): Escuchar al círculo" },
                { name: "Registro (5min): Enseñanzas colectivas" },
                { name: "Cierre (2min): Integrar la fuerza femenina" }
            ],
            5: [
                { name: "Apertura (3min): 'Continúo el linaje'" },
                { name: "Meditación de integración (15min): Tú en la cadena" },
                { name: "Compromiso (10min): Qué honrarás de ellas" },
                { name: "Registro (5min): Tu legado para las que vienen" },
                { name: "Cierre (2min): Celebrar la feminidad sagrada" }
            ],
            6: [{ name: "Ritual del círculo (2h): Ceremonia con todas las mujeres de tu linaje" }],
            0: [
                { name: "Ofrenda especial (1h): A todas las madres" },
                { name: "Preparación: Leer sobre integración práctica" }
            ]
        },
        dayObjectives: baseObjectives
    };

    ancestrosGoal.phases["2026-10"] = {
        objective: "Integración en la Vida Diaria: De lo Espiritual a lo Concreto",
        notes: `🐚 **INTEGRACIÓN EN LA VIDA DIARIA**

🎯 **OBJETIVO**: Bajar lo espiritual a decisiones concretas.

**🔥 RITUAL MENSUAL: CONSEJO ANCESTRAL**
• Antes de una decisión importante
• Pregunta a tus ancestros y guías
• Actúa según la guía recibida`,
        routine: {
            1: [
                { name: "Apertura (3min): 'Aplico la sabiduría'" },
                { name: "Decisión del día (15min): Consultar antes de decidir" },
                { name: "Acción guiada (10min): Hacer según la guía" },
                { name: "Registro (5min): Resultado de seguir la guía" },
                { name: "Cierre (2min): Agradecer la claridad" }
            ],
            2: [
                { name: "Apertura (3min): 'Vivo mi espiritualidad'" },
                { name: "Práctica en lo cotidiano (15min): Llevar altar al trabajo" },
                { name: "Micro-rituales (10min): Pequeños actos sagrados" },
                { name: "Registro (5min): Cómo cambia tu día" },
                { name: "Cierre (2min): Integrar lo sagrado" }
            ],
            3: [
                { name: "Apertura (3min): 'Soy canal en el mundo'" },
                { name: "Servicio guiado (15min): Ayudar según guía" },
                { name: "Acción compasiva (10min): Hacer el bien" },
                { name: "Registro (5min): Impacto de tus acciones" },
                { name: "Cierre (2min): Ser instrumento" }
            ],
            4: [
                { name: "Apertura (3min): 'Confío en la guía'" },
                { name: "Decisión importante (15min): Consulta profunda" },
                { name: "Claridad (10min): Recibir respuesta clara" },
                { name: "Registro (5min): Qué harás" },
                { name: "Cierre (2min): Comprometerte a actuar" }
            ],
            5: [
                { name: "Apertura (3min): 'Integro todo'" },
                { name: "Síntesis (15min): Cómo ha cambiado tu vida" },
                { name: "Gratitud profunda (10min): Por la transformación" },
                { name: "Registro (5min): Cambios concretos" },
                { name: "Cierre (2min): Celebrar la integración" }
            ],
            6: [{ name: "Práctica intensiva (2h): Día completo guiado por ancestros" }],
            0: [
                { name: "Revisión (1h): Decisiones tomadas con guía" },
                { name: "Preparación: Planear ofrenda especial" }
            ]
        },
        dayObjectives: baseObjectives
    };

    ancestrosGoal.phases["2026-11"] = {
        objective: "Honra y Ofrenda: Devolver al Linaje lo Recibido",
        notes: `🕊️ **HONRA Y OFRENDA**

🎯 **OBJETIVO**: Devolver al linaje lo que has recibido.

**🔥 RITUAL MENSUAL: OFRENDA CONSCIENTE**
• Prepara comida especial
• Comparte con tu altar
• Come conscientemente honrando a tus ancestros
• Dona o comparte con otros`,
        routine: {
            1: [
                { name: "Apertura (3min): 'Devuelvo con amor'" },
                { name: "Preparar ofrenda (20min): Cocinar o crear algo" },
                { name: "Presentación (10min): Colocar en altar" },
                { name: "Registro (5min): Intención de la ofrenda" },
                { name: "Cierre (2min): Compartir la ofrenda" }
            ],
            2: [
                { name: "Apertura (3min): 'Honro con acciones'" },
                { name: "Servicio en su nombre (20min): Hacer algo por otros" },
                { name: "Dedicación (10min): Ofrecer el acto" },
                { name: "Registro (5min): Cómo honras su memoria" },
                { name: "Cierre (2min): Continuar su legado" }
            ],
            3: [
                { name: "Apertura (3min): 'Celebro su vida'" },
                { name: "Ritual de celebración (20min): Música, danza, alegría" },
                { name: "Gratitud activa (10min): Expresar júbilo" },
                { name: "Registro (5min): Qué celebras" },
                { name: "Cierre (2min): Mantener viva la memoria" }
            ],
            4: [
                { name: "Apertura (3min): 'Comparto su sabiduría'" },
                { name: "Enseñar (20min): Compartir lo aprendido" },
                { name: "Transmisión (10min): Pasar el conocimiento" },
                { name: "Registro (5min): A quién enseñaste" },
                { name: "Cierre (2min): Ser puente generacional" }
            ],
            5: [
                { name: "Apertura (3min): 'Soy su legado vivo'" },
                { name: "Integración total (20min): Vivir sus valores" },
                { name: "Compromiso (10min): Qué continuarás" },
                { name: "Registro (5min): Tu promesa al linaje" },
                { name: "Cierre (2min): Sellar el compromiso" }
            ],
            6: [{ name: "Ofrenda especial (3h): Ceremonia completa de honra y gratitud" }],
            0: [
                { name: "Celebración (2h): Día de los ancestros personal" },
                { name: "Preparación: Planear cierre del año" }
            ]
        },
        dayObjectives: baseObjectives
    };

    ancestrosGoal.phases["2026-12"] = {
        objective: "Cierre, Autonomía y Legado: Encarnar la Sabiduría",
        notes: `🌑 **CIERRE, AUTONOMÍA Y LEGADO**

🎯 **OBJETIVO**: No depender del ritual, sino encarnarlo. Convertirte en ancestro consciente.

**🔥 RITUAL MENSUAL: SÍNTESIS Y OFRENDA DE CIERRE**
• Revisar todo el año
• Agradecer cada enseñanza
• Comprometerte con tu propio legado
• Cerrar el ciclo con ceremonia`,
        routine: {
            1: [
                { name: "Apertura (3min): 'Reviso mi camino'" },
                { name: "Revisión mensual (20min): Leer diario de cada mes" },
                { name: "Síntesis (10min): Aprendizajes clave" },
                { name: "Registro (5min): Transformaciones" },
                { name: "Cierre (2min): Gratitud por el viaje" }
            ],
            2: [
                { name: "Apertura (3min): 'Integro la sabiduría'" },
                { name: "Meditación de integración (20min): Todo el año en ti" },
                { name: "Encarnación (10min): Sentir los cambios" },
                { name: "Registro (5min): Quién eres ahora" },
                { name: "Cierre (2min): Celebrar tu evolución" }
            ],
            3: [
                { name: "Apertura (3min): 'Soy autónoma'" },
                { name: "Práctica sin ritual (20min): Conectar sin altar" },
                { name: "Libertad (10min): Sentir que llevas todo dentro" },
                { name: "Registro (5min): Nueva forma de conexión" },
                { name: "Cierre (2min): Confiar en tu conexión interna" }
            ],
            4: [
                { name: "Apertura (3min): 'Pienso en mi legado'" },
                { name: "Reflexión profunda (20min): Qué dejarás" },
                { name: "Compromiso (10min): Cómo serás ancestro" },
                { name: "Registro (5min): Tu promesa al futuro" },
                { name: "Cierre (2min): Convertirte en puente" }
            ],
            5: [
                { name: "Apertura (3min): 'Cierro con amor'" },
                { name: "Preparación de cierre (20min): Planear ceremonia final" },
                { name: "Gratitud total (10min): A todo y todos" },
                { name: "Registro (5min): Última entrada del año" },
                { name: "Cierre (2min): Prepararte para la ceremonia" }
            ],
            6: [{ name: "Ceremonia de cierre (3h): Ritual final del año completo" }],
            0: [
                { name: "Descanso sagrado (todo el día): Integración silenciosa" },
                { name: "Nuevo comienzo: Planear próximo año" }
            ]
        },
        dayObjectives: {
            1: "Revisar con amor",
            2: "Integrar con gratitud",
            3: "Ser autónoma",
            4: "Pensar en tu legado",
            5: "Cerrar con ceremonia"
        }
    };

    // Agregar al nivel Espiritual
    spiritualLevel.goals.push(ancestrosGoal);

    // Guardar
    Store.save();

    console.log('\n✅ ¡Rutina Ancestros y Guías agregada exitosamente!');
    console.log('📊 Resumen:');
    console.log('   - Meta: Ancestros y Guías');
    console.log('   - Fases: 12 meses (Ene 2026 - Dic 2026)');
    console.log('   - Actividades: Profundas y específicas por mes');
    console.log('   - Progresión: De enraizamiento a autonomía espiritual');
    console.log('   - Rituales mensuales: Incluidos con negritas en notas');
    console.log('\n🔄 Recargando página...');

    setTimeout(() => {
        location.reload();
    }, 2000);
})();
