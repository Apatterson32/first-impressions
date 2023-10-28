const inquirer = require("inquirer");
const fs = require("fs");


// Importing shapes from shape.js
const {Circle, Triangle, Square} = require('./lib/shapes');

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
            name: 'textColor'
        },

        {
            type: 'input',
            message: 'Input a hexadecimal value or color keyword for the shape of your logo',
            name: 'shapeColor',
        },
    ]);
}
// Function to create and save the SVG logo based on user input
function createLogo(logo, shapes, textColor, shapeColor) {
    let selectedShape;
  
    switch (shapes) {
      case 'Circle':
        selectedShape = new Circle(shapeColor);
        break;
      case 'Square':
        selectedShape = new Square(shapeColor);
        break;
      case 'Triangle':
        selectedShape = new Triangle(shapeColor);
        break;
      default:
        console.log('Invalid shape choice');
        return;
    }
  
    // Create the SVG content
    const svgContent = `<svg width="300" height="200">
      ${selectedShape.render(logo, textColor)}
    </svg>`;
  
    // Save the SVG content to a file named "logo.svg"
    fs.writeFileSync('logo.svg', svgContent);
  
    console.log('Generated logo.svg');
  }
  
  