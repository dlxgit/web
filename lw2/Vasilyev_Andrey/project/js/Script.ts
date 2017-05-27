function bindFunctions() {
    const idArr = ["fill-color", "border-color", "circle-x", "circle-y",
    "circle-radius", "rectangle-x", "rectangle-y", "rectangle-width",
    "rectangle-height", "triangle-x1", "triangle-y1", "triangle-x2",
    "triangle-y2", "triangle-x3", "triangle-y3"];

    for (const id of idArr) {
        document.getElementById(id).onchange = onCalculateResult;
    }

    const selectBinding = document.getElementById("selectShape");
    selectBinding.onchange = onSelectShapeType;
}

window.onload = bindFunctions;
