// Script to fix malformed HTML tags with extra spaces
const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'index.html');
let content = fs.readFileSync(filePath, 'utf8');

// Fix the malformed closing div tag: < /div > to </div>
content = content.replace(/< \/div >/g, '</div>');

// Fix any other malformed tags with spaces
content = content.replace(/< div /g, '<div ');
content = content.replace(/< \/button>/g, '</button>');
content = content.replace(/< textarea /g, '<textarea ');
content = content.replace(/< \/textarea >/g, '</textarea>');
content = content.replace(/< button /g, '<button ');

fs.writeFileSync(filePath, content, 'utf8');
console.log('✅ HTML tags fixed successfully!');
