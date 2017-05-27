
class Triangle extends Shape {
    private x1;
    private y1;
    private x2;
    private y2;
    private x3;
    private y3;

    constructor() {
        super();
        this.x1 = 0;
        this.y1 = 0;
        this.x2 = 0;
        this.y2 = 0;
        this.x3 = 0;
        this.y3 = 0;
        // Object.setPrototypeOf(this, Triangle.prototype);
    }

    public getX1() {
        return this.x1;
    }

    public getX2() {
        return this.x2;
    }

    public getX3() {
        return this.x3;
    }

    public getY1() {
        return this.y1;
    }

    public getY2() {
        return this.y2;
    }

    public getY3() {
        return this.y3;
    }

    public setX1(value) {
        this.x1 = value;
    }

    public setX2(value) {
        this.x2 = value;
    }

    public setX3(value) {
        this.x3 = value;
    }

    public setY1(value) {
        this.y1 = value;
    }

    public setY2(value) {
        this.y2 = value;
    }

    public setY3(value) {
        this.y3 = value;
    }

    public calculateArea() {
        return Math.abs((this.x1 - this.x3) * (this.y2 - this.y3) - (this.x2 - this.x3) * (this.y1 - this.y3)) * 0.5;
    }

    public calculatePerimeter() {
        const length1 = Math.sqrt(Math.pow(Math.abs(this.x1 - this.x2), 2) + Math.pow(Math.abs(this.y1 - this.y2), 2));
        const length2 = Math.sqrt(Math.pow(Math.abs(this.x2 - this.x3), 2) + Math.pow(Math.abs(this.y2 - this.y3), 2));
        const length3 = Math.sqrt(Math.pow(Math.abs(this.x1 - this.x3), 2) + Math.pow(Math.abs(this.y1 - this.y3), 2));
        return length1 + length2 + length3;
    }

    public draw(canvas: HTMLCanvasElement) {
        const context = canvas.getContext("2d");
        context.lineWidth = this.getLineWidth();
        context.strokeStyle = this.borderColor;
        context.fillStyle = this.fillColor;
        context.beginPath();
        context.moveTo(this.x1, this.y1);
        context.lineTo(this.x2, this.y2);
        context.lineTo(this.x3, this.y3);
        context.closePath();
        context.fill();
        context.stroke();
    }
}
