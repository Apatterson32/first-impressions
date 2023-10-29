class Circle {
  //  adds shapeColor from user input
  constructor(shapeColor, textColor, text) {
      this.shapeColor = shapeColor;
      this.textColor = textColor;
      this.text = text;
  }

  setColor(color) {
    this.shapeColor = color;
  }
// uses svg syntax & adds user color choice
  render() {
      return `
      <svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
      <circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />
      <text x="150" y="115" font-size="30" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
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

  setColor(color) {
    this.shapeColor = color;
  }

  render() {
    return `
    <svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
      <polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}" />
      <text x="150" y="115" font-size="30" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
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

  setColor(color) {
    this.shapeColor = color;
  }

  render() {
    return `
    <svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
      <rect width="200" height="200" fill="${this.shapeColor}" />
      <text x="100" y="115" font-size="30" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
    </svg>
  `;
  }
}


// exports the classes to index.js
module.exports = {Circle, Triangle, Square}