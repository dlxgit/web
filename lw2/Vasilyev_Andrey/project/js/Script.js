
//onCalculateResult init
var bindFunctions = function() {
    //var arr = [];

    var idArr = ["fill-color", "border-color", "circle-x", "circle-y", "circle-radius", "rectangle-x", "rectangle-y", "rectangle-width", "rectangle-height",
    "triangle-x1", "triangle-y1", "triangle-x2", "triangle-y2", "triangle-x3", "triangle-y3"];

    for(var j = 0; j < idArr.length; j++) {
        //arr.push(document.getElementById(idArr[j]));
        document.getElementById(idArr[j]).onchange = onCalculateResult;
    }

    //for (var i = 0; i < arr.length; i++) {
        //arr[i].onchange = onCalculateResult;
    //}

    var selectBinding = document.getElementById("selectShape");
    selectBinding.onchange = onSelectShapeType;
}


window.onload = function(){
    bindFunctions();
}