// Script to fix malformed HTML tags with extra spaces
const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'index.html');
let content = fs.readFileSync(filePath, 'utf8');

console.log('🔧 Fixing malformed HTML tags...\n');

// Count occurrences before fixing
const beforeCount = (content.match(/\" \>/g) || []).length;
console.log(`Found ${beforeCount} malformed tags with extra spaces\n`);

// Fix: Remove space before > in HTML tags
// Pattern: " > should become ">
content = content.replace(/\" \>/g, '">');

// Also fix: ' > should become '>
content = content.replace(/\' \>/g, "'>');

// Count after fixing
const afterCount = (content.match(/\" \>/g) || []).length;

// Save fixed content
fs.writeFileSync(filePath, content, 'utf8');

console.log('✅ Fixed HTML tags!');
console.log(`   Before: ${beforeCount} malformed tags`);
console.log(`   After: ${afterCount} malformed tags`);
console.log('\n🔄 Reload the page to see the changes!\n');
