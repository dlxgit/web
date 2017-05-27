class ShapeFactory {

    public createShape(type: string): Shape {
        let shape;
        if (type === "circle-content") {
            shape = new Circle();
            const xCircle = getIntValueIfFilled("circle-x");
            const yCircle = getIntValueIfFilled("circle-y");
            const radius = getIntValueIfFilled("circle-radius");

            if (xCircle) {
                shape.setX(xCircle);
            }
            if (yCircle) {
                shape.setY(yCircle);
            }
            if (radius) {
                shape.setRadius(radius);
            }
        } else if (type === "rectangle-content") {
            shape = new Rectangle();
            const xRect = getIntValueIfFilled("rectangle-x");
            const yRect = getIntValueIfFilled("rectangle-y");
            const widthRect = getIntValueIfFilled("rectangle-width");
            const heightRect = getIntValueIfFilled("rectangle-height");

            if (xRect) {
                shape.setX(xRect);
            }
            if (yRect) {
                shape.setY(yRect);
            }
            if (widthRect) {
                shape.setWidth(widthRect);
            }
            if (heightRect) {
                shape.setHeight(heightRect);
            }
        } else if (type === "triangle-content") {
            shape = new Triangle();
            const x1 = getIntValueIfFilled("triangle-x1");
            const y1 = getIntValueIfFilled("triangle-y1");
            const x2 = getIntValueIfFilled("triangle-x2");
            const y2 = getIntValueIfFilled("triangle-y2");
            const x3 = getIntValueIfFilled("triangle-x3");
            const y3 = getIntValueIfFilled("triangle-y3");

            if (x1) {
                shape.setX1(x1);
            }
            if (y1) {
                shape.setY1(y1);
            }
            if (x2) {
                shape.setX2(x2);
            }
            if (y2) {
                shape.setY2(y2);
            }
            if (x3) {
                shape.setX3(x3);
            }
            if (y3) {
                shape.setY3(y3);
            }
        }
        return shape;
    }
}
