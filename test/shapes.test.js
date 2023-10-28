const Circle = require('../lib/shapes').Circle;

test('Circle renders with correct color', () => {
    const circle = new Circle('blue');
    expect(circle.render()).toBe('<circle cx="150" cy="100" r="80" fill="blue"/>');
});