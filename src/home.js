import mmenu from './menu';

const home = () => {
    
    const lowerDisplay = document.createElement('div');
    lowerDisplay.id = "lowerDisplay";
    lowerDisplay.style.display = "flex";
    lowerDisplay.style.width = "1000px";
    lowerDisplay.style.height = "500px";
    lowerDisplay.style.margin = "auto";
    lowerDisplay.style.backgroundColor = "rgba(255, 255, 255, 0.5)";

    const lowerItem1 = document.createElement('div');
    lowerItem1.className = "lowerImage clickable";
    lowerItem1.style.flexBasis = "32%";
    lowerItem1.style.height = "480px";
    lowerItem1.style.backgroundImage = "url(../photos/breakfast.jpg)"
    lowerItem1.style.backgroundSize = "cover";
    lowerItem1.style.margin = "auto";
    lowerItem1.style.filter = "grayscale(30%) blur(1px)";

    const lowerItem2 = document.createElement('div');
    lowerItem2.className = "lowerImage clickable";
    lowerItem2.style.flexBasis = "32%";
    lowerItem2.style.height = "480px";
    lowerItem2.style.backgroundImage = "url(../photos/pour.jpg)"
    lowerItem2.style.backgroundSize = "cover";
    lowerItem2.style.margin = "auto";
    lowerItem2.style.filter = "grayscale(30%) blur(1px)";

    const lowerItem3 = document.createElement('div');
    lowerItem3.className = "lowerImage clickable";
    lowerItem3.style.flexBasis = "32%";
    lowerItem3.style.height = "480px";
    lowerItem3.style.backgroundImage = "url(../photos/cake.jpg)"
    lowerItem3.style.backgroundSize = "cover";
    lowerItem3.style.margin = "auto";
    lowerItem3.style.filter = "grayscale(30%) blur(1px)";

    lowerDisplay.appendChild(lowerItem1);
    lowerDisplay.appendChild(lowerItem2);
    lowerDisplay.appendChild(lowerItem3);

    const lowerItems = lowerDisplay.querySelectorAll('.lowerImage');
    for (let i = 0; i<lowerItems.length; i++) {
        lowerItems[i].addEventListener("mouseover", lowerHoverOn);
        lowerItems[i].addEventListener("mouseout", lowerHoverOff);
    }

    function lowerHoverOn() {
        this.style.filter = "grayscale(0%)";
        this.style.transform = "scale(1.01)";
        this.style.cursor = "pointer";
    }

    function lowerHoverOff() {
        this.style.filter = "grayscale(30%) blur(1px)";
        this.style.transform = "scale(1)";
        this.style.cursor = "auto";
    }

    return lowerDisplay;
}


export default home