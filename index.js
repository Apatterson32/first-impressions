const inquirer = require("inquirer");
const fs = require("fs");
const path = require('path');


// Importing shapes from shape.js
const {Circle, Triangle, Square} = require('./lib/shapes');

//Function to validate color input
function isValidColor(input) {
    // Checks input for validity on color keyword or hexadecimal code
    const colorKeywordPattern = /^(red|green|blue|purple|orange|yellow|pink|black|brown|gray|indigo|white)$/;
    const hexadecimalColorPattern = /^#[0-9A-Fa-f]{6}$/;

    return colorKeywordPattern.test(input) || hexadecimalColorPattern.test(input);
}

// Using inquirer package to prompt user questions below in the terminal
function promptUser(){
    return inquirer.prompt([

        {
            type: 'input',
            message: 'Input 3 letters to represent your logo',
            name: 'logo',
            validate: function(input) {
            if (input.length <= 3) {
                return true;
            } else {
                return 'Input field allows up to 3 characters';
            }
            }
        },

        {
            type: 'list',
            message: 'Please choose which shape for your logo',
            name: 'shapes',
            choices:
            [
                'Circle',
                'Square',
                'Triangle'
            ]
        },

        {
            type: 'input',
            message:'Input a hexadecimal value or color keyword to choose your text color',
            name: 'textColor',
            validate: function (input) {
                return isValidColor(input) ? true : 'Enter a valid color keyword or hexadecimal value';
            }
        },

        {
            type: 'input',
            message: 'Input a hexadecimal value or color keyword for the shape of your logo',
            name: 'shapeColor',
            validate: function (input) {
                return isValidColor(input) ? true : 'Enter a valid color keyword or hexadecimal value';
        }
      },
    ]);
}
// Function to create and save the SVG logo based on user input
function createLogo(logo, shapes, textColor, shapeColor) {
    let selectedShape;
  
    switch (shapes) {
      case 'Circle':
        selectedShape = new Circle(shapeColor, textColor, logo);
        break;
      case 'Square':
        selectedShape = new Square(shapeColor, textColor, logo);
        break;
      case 'Triangle':
        selectedShape = new Triangle(shapeColor, textColor, logo);
        break;
      default:
        console.log('Invalid shape choice');
        return;
    }
  
    // Create the SVG content
    const svgContent = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      ${selectedShape.render(logo, textColor)}
    </svg>`;
  
    // Defines output file path
    const outputFilePath = path.join(__dirname, 'examples', 'logo.svg');

    // Save the SVG content to a file named "logo.svg"
    fs.writeFileSync(outputFilePath, svgContent);
  
    console.log('Generated logo.svg');
  }
 
// Main function to run the application
async function run() {
    try {
      const userInput = await promptUser();
      const { logo, shapes, textColor, shapeColor } = userInput;
      
      createLogo(logo, shapes, textColor, shapeColor);
    } catch (error) {
      console.error('An error occurred:', error);
    }
  }
  
  run();
  