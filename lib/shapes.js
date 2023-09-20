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

// Function to generate SVG string based on user input
function generateSVG(answers) {
    // if user chooses circle for shape, svg will render circle logo
    if (answers.shape == 'Circle') {
      let newCircle = new Circle(answers.text, answers.textColor, answers.shapeColor)
      return newCircle.render();
   // if user chooses triangle for shape, svg will render triangle logo
    } else if (answers.shape == 'Triangle') {
      let newTriangle = new Triangle(answers.text, answers.textColor, answers.shapeColor)
      return newTriangle.render();
   // if user chooses square for shape, svg will render square logo
    } else if (answers.shape == 'Square') {
      let newSquare = new Square(answers.text, answers.textColor, answers.shapeColor)
      return newSquare.render();
    }
  }

module.exports = { Circle, Triangle, Square, generateSVG };