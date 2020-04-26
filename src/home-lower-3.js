const lowerItem3 = () => {

    const lowerItem = document.createElement('div');
        lowerItem.className = "flip-box";
        lowerItem.style.margin = "auto";
        lowerItem.style.flexBasis = "32%";
        lowerItem.style.height = "480px";
        lowerItem.style.perspective = "1100px";
        lowerItem.style.backgroundColor = "transparent";
    
        const flipBoxInner = document.createElement('div');
        lowerItem.appendChild(flipBoxInner);
        flipBoxInner.className = "flip-box-inner";
        flipBoxInner.style.position = "relative";
        flipBoxInner.style.width = "100%";
        flipBoxInner.style.height = "100%";
        flipBoxInner.style.textAlign = "center";
        flipBoxInner.style.transition = "transform 0.7s";
        flipBoxInner.style.transformStyle = "preserve-3d";
    
        const flipBoxFront = document.createElement('div');
        flipBoxFront.style.position = "absolute";
        flipBoxFront.style.width = "100%";
        flipBoxFront.style.height = "100%";
        flipBoxFront.style.backfaceVisibility = "hidden";
        flipBoxFront.style.backgroundColor = "black";
        flipBoxFront.style.backgroundImage = "url(../photos/cake.jpg)";
        flipBoxFront.style.backgroundSize = "cover";
        flipBoxInner.appendChild(flipBoxFront);
    
        const flipBoxBack = document.createElement('div')
        flipBoxBack.style.display = "flex";
        flipBoxBack.style.position = "absolute";
        flipBoxBack.style.width = "100%";
        flipBoxBack.style.height = "100%";
        flipBoxBack.style.backfaceVisibility = "hidden";
        flipBoxBack.style.backgroundColor = "white";
        flipBoxBack.style.transform = "rotateY(180deg)";
        flipBoxInner.appendChild(flipBoxBack);

        const backContent = document.createElement('div');
        backContent.className = "info"
        backContent.style.margin = "auto";
        backContent.style.color = "#38220f";
        backContent.style.fontSize = "20px";
        backContent.style.paddingLeft = "50";
        backContent.style.paddingRight = "50";
        backContent.style.fontFamily = "Arial";
        backContent.innerHTML = "<br><br>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultricies integer quis auctor elit sed vulputate mi.<br><br><br>";
        flipBoxBack.appendChild(backContent);
    
    
        return lowerItem;
    }
    
        export default lowerItem3