abstract class Shape {
    protected fillColor: string;
    protected borderColor: string;
    protected LINE_WIDTH: number;

    constructor() {
        this.borderColor = "#000000";
        this.fillColor = "#FFFFFF";
        this.LINE_WIDTH = 1;
    }

    public setFillColor(value: string) {
        this.fillColor = value;
    }
    public setBorderColor(value: string) {
        this.borderColor = value;
    }
    public getFillColor() {
        return this.fillColor;
    }
    public getBorderColor() {
        return this.borderColor;
    }

    public getLineWidth() {
        return this.LINE_WIDTH;
    }

    public abstract calculateArea(): any;
    public abstract calculatePerimeter(): any;
    public abstract draw(canvas: HTMLCanvasElement): any;
}
