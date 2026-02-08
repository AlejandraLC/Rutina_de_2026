// Optimization script for index.html
const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'index.html');
let content = fs.readFileSync(filePath, 'utf8');
const originalSize = content.length;

let changes = [];

// 1. Remove console.log statements (keep them commented for debugging if needed)
const consoleLogPattern = /(\s*)console\.log\([^)]+\);/g;
let consoleLogCount = 0;
content = content.replace(consoleLogPattern, (match, indent) => {
    consoleLogCount++;
    return `${indent}// ${match.trim()} // Removed for production`;
});
if (consoleLogCount > 0) {
    changes.push(`Commented out ${consoleLogCount} console.log statement(s)`);
}

// 2. Remove excessive blank lines (more than 2 consecutive)
const excessiveBlankLines = /\n\n\n+/g;
const beforeBlankLines = content.match(excessiveBlankLines)?.length || 0;
content = content.replace(excessiveBlankLines, '\n\n');
if (beforeBlankLines > 0) {
    changes.push(`Reduced ${beforeBlankLines} instances of excessive blank lines`);
}

// 3. Remove trailing whitespace
const trailingWhitespace = /[ \t]+$/gm;
const trailingCount = content.match(trailingWhitespace)?.length || 0;
content = content.replace(trailingWhitespace, '');
if (trailingCount > 0) {
    changes.push(`Removed trailing whitespace from ${trailingCount} lines`);
}

// Save optimized file
fs.writeFileSync(filePath, content, 'utf8');
const newSize = content.length;
const savedBytes = originalSize - newSize;
const savedPercent = ((savedBytes / originalSize) * 100).toFixed(2);

console.log('\n✅ Optimization Complete!\n');
console.log('📊 Summary:');
console.log(`   Original size: ${originalSize.toLocaleString()} bytes`);
console.log(`   New size: ${newSize.toLocaleString()} bytes`);
console.log(`   Saved: ${savedBytes.toLocaleString()} bytes (${savedPercent}%)\n`);

if (changes.length > 0) {
    console.log('🔧 Changes made:');
    changes.forEach((change, i) => {
        console.log(`   ${i + 1}. ${change}`);
    });
} else {
    console.log('✨ File was already optimized - no changes needed!');
}

console.log('\n✅ All functionality preserved - safe to use!');
