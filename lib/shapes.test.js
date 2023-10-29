// const Circle = require('../lib/shapes').Circle;

// test('Circle renders with correct color', () => {
//     const circle = new Circle('blue');
//     expect(circle.render()).toBe('<circle cx="150" cy="100" r="80" fill="blue"/>');
// });

// const Square = require('../lib/shapes').Square;

// test('Square renders with correct color', () => {
//     const square = new Square('pink');
//     expect(square.render()).toBe('<rect width="200" height="200" fill="pink"/>')
// })


// const Triangle = require('../lib/shapes').Triangle;

// test('Triangle renders with correct hexadecimal color', () => {
//     const triangle = new Triangle('#FF5733'); 
//     expect(triangle.render()).toBe('<polygon points="150, 18 244, 182 56, 182" fill="#FF5733"/>');
// });

const { Circle } = require('./shapes');

it('Circle renders with correct color', () => {
  const circle = new Circle('red', 'blue', 'ABC');
  const result = circle.render('ABC', 'blue', 'red');
  
  // Assertions using expect
  expect(result).toContain('<circle');
  expect(result).toContain('fill="red"');
});

