// Script to fix the broken index.html by removing orphaned code
const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'index.html');
let content = fs.readFileSync(filePath, 'utf8');

// Find and remove the orphaned code block (lines with e.stopPropagation through the closing };)
const orphanedCodePattern = /\s+e\.stopPropagation\(\);[\s\S]*?\s+\};\s+(?=\s+grid\.appendChild\(btn\);)/;

content = content.replace(orphanedCodePattern, '\n\n                        ');

fs.writeFileSync(filePath, content, 'utf8');
console.log('✅ File fixed successfully!');
