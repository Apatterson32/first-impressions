const Circle = require('./circle');

test('Circle renders with correct color', () => {
    const circle = new Circle();
    circle.setColor('red');
    expect(circle.render()).toBe('<circle cx="150" cy="100" r="80" fill="red"/>');
});