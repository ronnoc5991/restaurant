const contact = () => {
    
    const lowerDisplay = document.createElement('div');
    lowerDisplay.id = "lowerDisplay";
    lowerDisplay.style.display = "flex";
    lowerDisplay.style.flexWrap = "wrap";
    lowerDisplay.style.width = "1000px";
    lowerDisplay.style.height = "500px";
    lowerDisplay.style.margin = "auto";
    lowerDisplay.style.alignItems = "center";
    lowerDisplay.style.justifyContent = "center";

    const lowerItem1 = document.createElement('div');

    lowerItem1.style.width = "80%";
    lowerItem1.style.height = "95%";
    lowerItem1.style.backgroundColor = "black";
    lowerItem1.style.backgroundImage = "url(../photos/cup.jpg)";
    lowerItem1.style.backgroundSize = "cover";

    lowerDisplay.appendChild(lowerItem1);

    return lowerDisplay;
}


export default contact