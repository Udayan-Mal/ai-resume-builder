const { createCanvas, loadImage } = require('canvas');
const fs = require('fs');
const path = require('path');

async function addRoundedCorners(inputPath, outputPath, radius = 20) {
  try {
    // Load the original image
    const image = await loadImage(inputPath);
    
    // Create a canvas with the same dimensions as the image
    const canvas = createCanvas(image.width, image.height);
    const ctx = canvas.getContext('2d');
    
    // Create a rounded rectangle path
    ctx.beginPath();
    ctx.moveTo(radius, 0);
    ctx.lineTo(image.width - radius, 0);
    ctx.quadraticCurveTo(image.width, 0, image.width, radius);
    ctx.lineTo(image.width, image.height - radius);
    ctx.quadraticCurveTo(image.width, image.height, image.width - radius, image.height);
    ctx.lineTo(radius, image.height);
    ctx.quadraticCurveTo(0, image.height, 0, image.height - radius);
    ctx.lineTo(0, radius);
    ctx.quadraticCurveTo(0, 0, radius, 0);
    ctx.closePath();
    
    // Clip the context to the rounded rectangle
    ctx.clip();
    
    // Draw the image
    ctx.drawImage(image, 0, 0);
    
    // Convert canvas to buffer
    const buffer = canvas.toBuffer('image/png');
    
    // Write the output file
    fs.writeFileSync(outputPath, buffer);
    
    console.log(`Successfully created rounded image: ${outputPath}`);
  } catch (error) {
    console.error('Error processing image:', error);
  }
}

// Get command line arguments
const args = process.argv.slice(2);

// Default values
let inputFileName = 'board-img.png';
let radius = 20;

// Parse command line arguments
if (args.length > 0) {
  inputFileName = args[0];
}
if (args.length > 1) {
  radius = parseInt(args[1]) || 20;
}

// Define paths
const inputPath = path.join(__dirname, '../public/images', inputFileName);
const outputFileName = inputFileName.replace(/\.(\w+)$/, '-rounded.$1');
const outputPath = path.join(__dirname, '../public/images', outputFileName);

// Check if input file exists
if (!fs.existsSync(inputPath)) {
  console.error(`Error: Input file not found: ${inputPath}`);
  console.log('Usage: node scripts/add-rounded-corners.js [filename] [radius]');
  console.log('Example: node scripts/add-rounded-corners.js board-img.png 25');
  process.exit(1);
}

// Create scripts directory if it doesn't exist
if (!fs.existsSync(path.dirname(__filename))) {
  fs.mkdirSync(path.dirname(__filename), { recursive: true });
}

console.log(`Processing: ${inputFileName} with radius: ${radius}`);
// Process the image
addRoundedCorners(inputPath, outputPath, radius); 