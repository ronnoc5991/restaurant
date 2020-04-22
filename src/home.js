const home = () => {

    const titleDiv = document.createElement('div');
    titleDiv.style.backgroundImage = "url(../photos/beach.jpg)"
    titleDiv.style.backgroundSize = "cover";
    titleDiv.style.flexBasis = "100%";
    titleDiv.style.height = "100%";
    titleDiv.style.width = "100%";
    titleDiv.style.display = "flex";

    const inner = document.createElement('div');
    inner.style.backgroundColor = "white";
    inner.style.height = "20%";
    inner.style.flexBasis = "30%";
    inner.style.margin = "auto";
    inner.style.display = "flex";
    inner.style.border = "5px double black";

    const div3 = document.createElement('div');
    div3.style.margin = "auto";
    div3.innerHTML = "Dodo & Coco";
    div3.style.fontSize = "40px";
    div3.style.color = "black";

    inner.appendChild(div3);
    titleDiv.appendChild(inner);

    return titleDiv;
}


export default home