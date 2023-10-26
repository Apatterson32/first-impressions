class Circle {
  //  adds shapeColor from user input
  constructor() {
      this.shapeColor = shapeColor;
  }
// uses svg syntax & adds user color choice
  render() {
      return `<circle cx="150 cy="100" r"80" fill="${this.shapeColor}" />`
  }
}


class Triangle {
  constructor() {
    this.shapeColor = this.shapeColor;
  }

  render() {
    return `<polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}"/>`
  }
}


class Square {
  constructor() {
    this.shapeColor = this.shapeColor;
  }

  render() {
    return `<rect width="200" height="200" fill="${this.shapeColor}"/>`
  }
}


// exports the classes to index.js
module.exports = {Circle, Triangle, Square}