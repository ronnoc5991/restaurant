const menu = () => {

    const lowerDisplay = document.createElement('div');
    lowerDisplay.id = "lowerDisplay";
    lowerDisplay.style.display = "flex";
    lowerDisplay.style.flexWrap = "wrap";
    lowerDisplay.style.width = "1000px";
    lowerDisplay.style.height = "500px";
    lowerDisplay.style.margin = "auto";

    const lowerItem1 = document.createElement('div');
    lowerItem1.className = "lowerImage clickable";
    lowerItem1.style.flexBasis = "70%";
    lowerItem1.style.height = "500px";
    lowerItem1.style.backgroundImage = "url(../photos/menu.jpg)"
    lowerItem1.style.backgroundSize = "cover";
    lowerItem1.style.margin = "auto";

    lowerDisplay.appendChild(lowerItem1);

    return lowerDisplay;
}


export default menu