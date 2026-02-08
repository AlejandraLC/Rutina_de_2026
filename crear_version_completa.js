// Script para crear index_completo.html con todas las rutinas integradas
// Ejecutar con: node crear_version_completa.js

const fs = require('fs');

console.log('📦 Creando versión completa de la app con todas las rutinas...\n');

// Leer el HTML base
const htmlBase = fs.readFileSync('index.html', 'utf8');

// Leer los scripts de rutinas
const geometraMistico = fs.readFileSync('agregar_geometra_mistico.js', 'utf8');
const ancestrosGuias = fs.readFileSync('agregar_ancestros_guias.js', 'utf8');
const grasaVisceral = fs.readFileSync('agregar_grasa_visceral.js', 'utf8');
const englishPractice = fs.readFileSync('PEGAR_EN_CONSOLA.js', 'utf8');

// Crear script consolidado que se ejecutará automáticamente al cargar la página
const scriptConsolidado = `
<script>
// Auto-ejecutar rutinas al cargar la página (solo si no existen)
(function() {
    console.log('🚀 Inicializando rutinas...');
    
    // Esperar a que Store esté disponible
    if (typeof Store === 'undefined') {
        console.error('❌ Store no disponible');
        return;
    }
    
    // Verificar si las rutinas ya están cargadas
    const data = Store.data;
    const spiritualLevel = data.levels.find(l => l.name.toLowerCase().includes('espiritual'));
    const physicalLevel = data.levels.find(l => l.name.toLowerCase().includes('físico'));
    const mentalLevel = data.levels.find(l => l.name.toLowerCase().includes('mental'));
    
    let rutinasAgregadas = false;
    
    // Agregar Geómetra Místico si no existe
    if (spiritualLevel && !spiritualLevel.goals.find(g => g.id === 'goal_geometra_mistico')) {
        console.log('➕ Agregando Geómetra Místico...');
        ${geometraMistico.replace('(function () {', '').replace(/}\)\(\);?\s*$/, '')}
        rutinasAgregadas = true;
    }
    
    // Agregar Ancestros y Guías si no existe
    if (spiritualLevel && !spiritualLevel.goals.find(g => g.id === 'goal_ancestros_guias')) {
        console.log('➕ Agregando Ancestros y Guías...');
        ${ancestrosGuias.replace('(function () {', '').replace(/}\)\(\);?\s*$/, '')}
        rutinasAgregadas = true;
    }
    
    // Agregar Reducción Grasa Visceral si no existe
    if (physicalLevel && !physicalLevel.goals.find(g => g.id === 'goal_grasa_visceral')) {
        console.log('➕ Agregando Reducción Grasa Visceral...');
        ${grasaVisceral.replace('(function () {', '').replace(/}\)\(\);?\s*$/, '')}
        rutinasAgregadas = true;
    }
    
    // Agregar English Practice si no existe
    if (mentalLevel && !mentalLevel.goals.find(g => g.id === 'goal_english_2026')) {
        console.log('➕ Agregando English Practice...');
        ${englishPractice.replace('(function () {', '').replace(/}\)\(\);?\s*$/, '')}
        rutinasAgregadas = true;
    }
    
    if (rutinasAgregadas) {
        console.log('✅ Rutinas agregadas exitosamente');
        Store.save();
    } else {
        console.log('ℹ️ Todas las rutinas ya están cargadas');
    }
})();
</script>
`;

// Insertar el script antes del cierre de </body>
const htmlCompleto = htmlBase.replace('</body>', `${scriptConsolidado}\n</body>`);

// Guardar el archivo completo
fs.writeFileSync('index_completo.html', htmlCompleto, 'utf8');

console.log('✅ Archivo creado: index_completo.html');
console.log('\n📱 Este archivo incluye todas las rutinas:');
console.log('   - Geómetra Místico (Espiritual)');
console.log('   - Ancestros y Guías (Espiritual)');
console.log('   - Reducción Grasa Visceral (Físico)');
console.log('   - English Practice (Mental)');
console.log('\n💡 Puedes transferir este archivo a tu tablet y abrirlo directamente.');
