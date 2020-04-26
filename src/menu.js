const menu = () => {

    const lowerDisplay = document.createElement('div');
    lowerDisplay.id = "lowerDisplay";
    lowerDisplay.style.display = "flex";
    lowerDisplay.style.flexWrap = "wrap";
    lowerDisplay.style.width = "1000px";
    lowerDisplay.style.height = "500px";
    lowerDisplay.style.margin = "auto";


    const flipBox = document.createElement('div');
    lowerDisplay.appendChild(flipBox);
    flipBox.className = "flip-box";
    flipBox.style.margin = "auto";
    flipBox.style.flexBasis = "400px";
    flipBox.style.height = "300px";
    flipBox.style.perspective = "500px";
    flipBox.style.backgroundColor = "transparent";

    const flipBoxInner = document.createElement('div');
    flipBox.appendChild(flipBoxInner);
    flipBoxInner.className = "flip-box-inner";
    flipBoxInner.style.position = "relative";
    flipBoxInner.style.width = "100%";
    flipBoxInner.style.height = "100%";
    flipBoxInner.style.textAlign = "center";
    flipBoxInner.style.transition = "transform 0.8s";
    flipBoxInner.style.transformStyle = "preserve-3d";

    const flipBoxFront = document.createElement('div');
    //flipBoxFront.innerHTML = "Front Side Yo";
    flipBoxFront.style.position = "absolute";
    flipBoxFront.style.width = "100%";
    flipBoxFront.style.height = "100%";
    flipBoxFront.style.backfaceVisibility = "hidden";
    flipBoxFront.style.backgroundColor = "black";
    flipBoxInner.appendChild(flipBoxFront);

    const flipBoxBack = document.createElement('div')
    //flipBoxBack.innerHTML = "Back Side Yo";
    flipBoxBack.style.position = "absolute";
    flipBoxBack.style.width = "100%";
    flipBoxBack.style.height = "100%";
    flipBoxBack.style.backfaceVisibility = "hidden";
    flipBoxBack.style.backgroundColor = "white";
    flipBoxBack.style.transform = "rotateY(180deg)";
    flipBoxInner.appendChild(flipBoxBack);

    return lowerDisplay;
}


export default menu