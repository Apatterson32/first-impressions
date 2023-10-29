class Circle {
  //  adds shapeColor from user input
  constructor(shapeColor, textColor, text) {
      this.shapeColor = shapeColor;
      this.textColor = textColor;
      this.text = text;
  }

// uses svg syntax & adds user color choice, text and shape
  render(text, textColor, shapeColor) {
      return `
      <svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
      <circle cx="150" cy="100" r="80" fill="${shapeColor}" />
      <text x="150" y="115" font-size="30" text-anchor="middle" fill="${textColor}">${text}</text>
    </svg>
    `;
  }
}


class Triangle {
  constructor(shapeColor, textColor, text) {
    this.shapeColor = shapeColor;
    this.textColor = textColor;
    this.text = text;
  }

  render(text, textColor, shapeColor) {
    return `
    <svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
      <polygon points="150, 18 244, 182 56, 182" fill="${shapeColor}" />
      <text x="150" y="115" font-size="30" text-anchor="middle" fill="${textColor}">${text}</text>
    </svg>
  `;
  }
}


class Square {
  constructor(shapeColor, textColor, text) {
    this.shapeColor = shapeColor;
    this.textColor = textColor;
    this.text = text;
  }

  render(text, textColor, shapeColor) {
    return `
    <svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
      <rect width="200" height="200" fill="${shapeColor}" />
      <text x="100" y="115" font-size="30" text-anchor="middle" fill="${textColor}">${text}</text>
    </svg>
  `;
  }
}


// exports the classes to index.js
module.exports = {Circle, Triangle, Square}