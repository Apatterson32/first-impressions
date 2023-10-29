const { Circle } = require('./shapes');

it('Circle renders with correct color', () => {
  const circle = new Circle('red', 'blue', 'ABC');
  const result = circle.render('ABC', 'blue', 'red');
  
  // Assertions using expect
  expect(result).toContain('<circle');
  expect(result).toContain('fill="red"');
});

const { Square } = require('./shapes');

it('Square renders with correct color', () => {
  const square = new Square('red', 'blue', 'ABC');
  const result = square.render('ABC', 'blue', 'red');

  expect(result).toContain('<rect');
  expect(result).toContain('fill="red"');
});

const { Triangle } = require('./shapes');

it('Triangle renders with correct color', () => {
  const triangle = new Triangle('red', 'blue', 'ABC');
  const result = triangle.render('ABC', 'blue', 'red');

  expect(result).toContain('<polygon');
  expect(result).toContain('fill="red"');
});

