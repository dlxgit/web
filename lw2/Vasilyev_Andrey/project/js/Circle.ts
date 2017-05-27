
class Circle extends Shape {

    private x: number;
    private y: number;
    private radius: number;

    constructor() {
        super();
        this.x = 0;
        this.y = 0;
        this.radius = 0;
        // Object.setPrototypeOf(this, Circle.prototype);
    }

    public calculateArea() {
        return (Math.PI * Math.pow(this.radius, 2));
    }

    public calculatePerimeter() {
        return (2 * Math.PI * this.radius);
    }

    public getX() {
        return this.x;
    }

    public getY() {
        return this.y;
    }

    public getRadius() {
        return this.radius;
    }

    public setX(value) {
        this.x = value;
    }

    public setY(value) {
        this.y = value;
    }

    public setRadius(value) {
        this.radius = value;
    }

    public draw(canvas: HTMLCanvasElement) {
        const context = canvas.getContext("2d");
        context.lineWidth = this.getLineWidth();
        context.strokeStyle = this.borderColor;
        context.fillStyle = this.fillColor;
        context.beginPath();
        context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
        context.closePath();
        context.stroke();
        context.fill();
    }
}
