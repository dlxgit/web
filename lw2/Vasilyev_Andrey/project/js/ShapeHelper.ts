
function drawShape(myShape) {
    const fillColor = getElementById("fill-color") as HTMLInputElement;
    const borderColor = getElementById("border-color") as HTMLInputElement;
    if (fillColor && fillColor.value) {
        myShape.setFillColor(fillColor.value);
    }
    if (borderColor && borderColor.value) {
        myShape.setBorderColor(borderColor.value);
    }

    const canvas = getElementById("canvas") as HTMLCanvasElement;
    clearCanvas();

    myShape.draw(canvas);
}

function clearCanvas() {
    const canvas = getElementById("canvas") as HTMLCanvasElement;
    canvas.getContext("2d").clearRect(0, 0, canvas.width, canvas.height);
}
