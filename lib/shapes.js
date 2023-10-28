class Circle {
  //  adds shapeColor from user input
  constructor(shapeColor) {
      this.shapeColor = shapeColor;
  }

  setColor(color) {
    this.shapeColor = color;
  }
// uses svg syntax & adds user color choice
  render() {
      return `<circle cx="150" cy="100" r="80" fill="${this.shapeColor}"/>`
  }
}


class Triangle {
  constructor(shapeColor) {
    this.shapeColor = shapeColor;
  }

  setColor(color) {
    this.shapeColor = color;
  }

  render() {
    return `<polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}"/>`
  }
}


class Square {
  constructor(shapeColor) {
    this.shapeColor = shapeColor;
  }

  setColor(color) {
    this.shapeColor = color;
  }

  render() {
    return `<rect width="200" height="200" fill="${this.shapeColor}"/>`
  }
}


// exports the classes to index.js
module.exports = {Circle, Triangle, Square}