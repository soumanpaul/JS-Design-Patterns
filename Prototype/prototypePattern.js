class Shape {
    constructor(name, weigth) {
        this.name = name;
        this.weigth = weigth;
    }
    clone () {
        return new Shape(this.name, this.weigth);
    }
}

export default Shape;