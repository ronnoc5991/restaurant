const menu = () => {

    const lowerDisplay = document.createElement('div');
    lowerDisplay.id = "lowerDisplay";
    lowerDisplay.className = "box";
    lowerDisplay.style.display = "flex";
    lowerDisplay.style.flexWrap = "wrap";
    lowerDisplay.style.width = "500px";
    lowerDisplay.style.height = "500px";
    lowerDisplay.style.margin = "auto";

    const menuContent = document.createElement('div');
    menuContent.style.textAlign = "center";
    menuContent.style.justifyContent = "center";
    menuContent.style.margin = "auto";
    menuContent.innerHTML = "Lorem ipsum dolor sit amet.<br><br><br>Consectetur adipiscing elit, sed do eiusmod tempor incididunt.<br><br><br>Ut labore et dolore magna aliqua.<br><br><br>Nec tincidunt praesent semper feugiat nibh sed pulvinar proin.<br>";
    menuContent.style.color = "var(--start-link-color)";
    menuContent.style.fontSize = "18px";
    lowerDisplay.appendChild(menuContent);

    return lowerDisplay;
}


export default menu