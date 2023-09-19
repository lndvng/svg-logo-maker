class Shape {
    constructor (triangle, circle, square) {
        this.triangle = triangle;
        this.circle = circle;
        this.square - square;
    }
}

Shape.prototype.isText = (text) => {
    if (text.length > 3) {
        return false;
    }
}

module.exports = shape;