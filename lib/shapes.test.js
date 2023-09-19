const Shape = require('./shapes');

describe('Shape', () => {
    it('should create blue triangle', () => {
        const shape = new Shape();

        shape.setColor("blue");
        expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
    })
})