
function getElementById(id) {
    return document.getElementById(id);
}

function getCurrentSelectedOptionValue() {
    const select = getElementById("selectShape") as HTMLSelectElement;
    return select.options[select.selectedIndex].value;
}

function setCurrentValueVisible(select) {
    getElementById(select.options[select.selectedIndex].value).style.display = "inline";
}

function resetDependingContent() {
    const e = getElementById("selectShape") as HTMLSelectElement;
    const values = [];
    let i = 0;

    while (i < e.options.length) {
        values.push(e.options[i++].value);
    }

    for (const el of values) {
        getElementById(el).style.display = "none";
    }

    setCurrentValueVisible(e);
}

function isElementFilled(element) {
    return (element && element.value);
}

function getIntValueIfFilled(id: string) {
    const element = getElementById(id) as HTMLInputElement;
    if (isElementFilled(element)) {
        return parseInt(element.value, 10);
    }
    return false;
}
