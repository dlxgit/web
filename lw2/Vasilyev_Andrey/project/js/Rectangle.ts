class Rectangle extends Shape {

    private x;
    private y;
    private width;
    private height;

    constructor() {
        super();
        this.x = 0;
        this.y = 0;
        this.width = 0;
        this.height = 0;
        // Object.setPrototypeOf(this, Rectangle.prototype);
    }

    public getX() {
        return this.x;
    }

    public getY() {
        return this.y;
    }

    public getWidth() {
        return this.width;
    }

    public getHeight() {
        return this.height;
    }

    public setX(value) {
        this.x = value;
    }

    public setY(value) {
        this.y = value;
    }

    public setWidth(value) {
        this.width = value;
    }

    public setHeight(value) {
        this.height = value;
    }

    public calculateArea() {
        return this.width * this.height;
    }

    public calculatePerimeter() {
        return this.width + this.height + this.width + this.height;
    }

    public draw(canvas: HTMLCanvasElement) {
        const context = canvas.getContext("2d");
        context.lineWidth = this.getLineWidth();
        context.strokeStyle = this.borderColor;
        context.fillStyle = this.fillColor;
        context.beginPath();
        context.rect(this.x, this.y, this.width, this.height);
        context.closePath();
        context.fill();
        context.stroke();
    }
}
