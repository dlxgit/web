
function onSelectShapeType() {
    resetDependingContent();
    clearCanvas();
    getElementById("calculation-result").innerHTML = "";
}

function onCalculateResult() {
    const currentSelectShapeType = getCurrentSelectedOptionValue();
    const shape = new ShapeFactory().createShape(currentSelectShapeType);
    const resArea = shape.calculateArea();
    const resPerimeter = shape.calculatePerimeter();
    getElementById("calculation-result").innerHTML = "Area: " + resArea + "\n" + "Perimeter: " + resPerimeter;
    drawShape(shape);
}
