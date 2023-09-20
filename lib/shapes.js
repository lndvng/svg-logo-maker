// parent class
class Shape {
    constructor(text, textColor, shapeColor) {
        this.text = text
        this.textColor = textColor
        this.shapeColor = shapeColor
    }
}
// child class of shape, inherits parent properties and will render string for SVG input into generator 
class Circle extends Shape {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor)
    }
    render() {
        return `<svg width="300" height="300" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <circle cx="150" cy="150" r="100" fill="${this.shapeColor}" />
        <text x="75" y="175" fill="${this.textColor}" font-size="80px">${this.text}</text>
       </svg>`
    }
}
// child class of shape, inherits parent properties and will render string for SVG input into generator 
class Triangle extends Shape {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor)
    }
    render() {
        return `<svg width="300" height="300" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}"/>
        <text x="100" y="150" fill="${this.textColor}" font-size="50px">${this.text}</text>
       </svg>`
    }
}
// child class of shape, inherits parent properties and will render string for SVG input into generator 
class Square extends Shape {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor)
    }
    render() {
        return `<svg width="300" height="300" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <rect x="30" y="30" width="200" height="200" fill="${this.shapeColor}"/>
        <text x="45" y="150" fill="${this.textColor}" font-size="80px">${this.text}</text></svg> 
        `
    }
}

module.exports = Circle;
module.exports = Triangle;
module.exports = Square;