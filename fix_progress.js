// Script to fix the updateProgressIndicator function
const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'index.html');
let content = fs.readFileSync(filePath, 'utf8');

// Find and replace the complex updateProgressIndicator function with a simple one
const oldFunction = /updateProgressIndicator\(date, goalId\) \{[\s\S]*?\/\/ by finding the progress grid and updating just that goal's row\s*\}/;

const newFunction = `updateProgressIndicator() {
                // Save current scroll position
                const scrollY = window.scrollY;
                
                // Re-render dashboard to update progress indicators
                App.renderView('dashboard');
                
                // Restore scroll position after a brief delay
                setTimeout(() => {
                    window.scrollTo(0, scrollY);
                }, 10);
            }`;

if (content.match(oldFunction)) {
    content = content.replace(oldFunction, newFunction);

    // Also update the call to not pass parameters
    content = content.replace(/this\.updateProgressIndicator\(date, goalId\);/, 'this.updateProgressIndicator();');

    fs.writeFileSync(filePath, content, 'utf8');
    console.log('✅ Successfully updated updateProgressIndicator function!');
} else {
    console.log('❌ Could not find the function to replace');
    console.log('Searching for updateProgressIndicator...');
    const matches = content.match(/updateProgressIndicator[^}]*\{/g);
    if (matches) {
        console.log('Found:', matches);
    }
}
