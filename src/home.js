const home = () => {

    const containerDiv = document.createElement('div');
    containerDiv.id = "container";
    containerDiv.style.backgroundImage = "url(../photos/coffee.jpg)"
    containerDiv.style.backgroundSize = "cover";
    containerDiv.style.flexBasis = "100%";
    containerDiv.style.height = "100%";
    containerDiv.style.width = "100%";
    containerDiv.style.display = "grid";
    containerDiv.style.gridTemplateRows = "1fr 4fr";

    const topWrapper = document.createElement('div');
    topWrapper.style.gridRowStart = "1";
    topWrapper.style.gridRowEnd = "2";
    topWrapper.style.display = "flex";
    topWrapper.style.width = "100%";

    const topDiv = document.createElement('div');
    topDiv.id = "topDiv";
    topDiv.style.display = "flex";
    topDiv.style.justifyContent = "space-evenly";
    topDiv.style.alignItems = "center";
    topDiv.style.flexBasis = "60%";
    topDiv.style.height = "cover";
    topDiv.style.margin = "auto";

    const link1 = document.createElement('div');
    link1.id = "link1";
    link1.style.display = "flex";
    link1.style.flexBasis = "10%";
    link1.style.height = "50px";

        const linkInner1 = document.createElement('div');
        linkInner1.innerHTML = "MENU";
        linkInner1.className = "link";
        link1.appendChild(linkInner1);

    const nameDiv = document.createElement('div');
    nameDiv.id = "nameDiv";
    nameDiv.className = "title"
    nameDiv.style.height = "110px";
    nameDiv.style.width = "270px";
    nameDiv.style.display = "flex";
    nameDiv.style.border = "10px solid white";

    const nameText = document.createElement('div');
    nameText.style.margin = "auto";
    nameText.className = "title";
    nameText.innerHTML = "Dodo & Coco";
    nameText.style.fontSize = "40px";
    nameText.style.color = "white";
    nameText.style.fontWeight = "bold";
    nameText.style.fontFamily = "Arial";

    const link2 = document.createElement('div');
    link2.id = "link2";
    link2.style.display = "flex";
    link2.style.flexBasis = "10%";
    link2.style.height = "50px";

        const linkInner2 = document.createElement('div');
        linkInner2.innerHTML = "CONTACT";
        linkInner2.className = "link";
        link2.appendChild(linkInner2);

    const lowerDiv = document.createElement('div');
    lowerDiv.style.display = "flex";
    lowerDiv.style.gridRowStart = "2";
    lowerDiv.style.gridRowEnd = "3";

    
    const lowerDisplay = document.createElement('div');
    //lowerDisplay.style.border = "10px solid rgba(255, 255, 255, 0.5)";
    lowerDisplay.style.display = "flex";
    lowerDisplay.style.width = "1000px";
    lowerDisplay.style.height = "500px";
    lowerDisplay.style.margin = "auto";
    lowerDisplay.style.backgroundColor = "rgba(255, 255, 255, 0.5)";

    const lowerItem1 = document.createElement('div');
    lowerItem1.style.flexBasis = "32%";
    lowerItem1.style.height = "480px";
    lowerItem1.style.backgroundImage = "url(../photos/breakfast.jpg)"
    lowerItem1.style.backgroundSize = "cover";
    lowerItem1.style.margin = "auto";

    const lowerItem2 = document.createElement('div');
    lowerItem2.style.flexBasis = "32%";
    lowerItem2.style.height = "480px";
    lowerItem2.style.backgroundImage = "url(../photos/pour.jpg)"
    lowerItem2.style.backgroundSize = "cover";
    lowerItem2.style.margin = "auto";

    const lowerItem3 = document.createElement('div');
    lowerItem3.style.flexBasis = "32%";
    lowerItem3.style.height = "480px";
    lowerItem3.style.backgroundImage = "url(../photos/cake.jpg)"
    lowerItem3.style.backgroundSize = "cover";
    lowerItem3.style.margin = "auto";

    lowerDisplay.appendChild(lowerItem1);
    lowerDisplay.appendChild(lowerItem2);
    lowerDisplay.appendChild(lowerItem3);
    lowerDiv.appendChild(lowerDisplay)
    nameDiv.appendChild(nameText);
    topDiv.appendChild(link1);
    topDiv.appendChild(nameDiv);
    topDiv.appendChild(link2);
    topWrapper.appendChild(topDiv);
    containerDiv.appendChild(topWrapper);
    containerDiv.appendChild(lowerDiv);

    var linksClass = topDiv.querySelectorAll('.link');
    for (let i=0; i<linksClass.length; i++) {
        linksClass[i].style.margin = "auto";
        linksClass[i].style.color = "#dbc1ac";
        linksClass[i].style.fontSize = "25px";
        linksClass[i].style.fontFamily = "Arial";
        linksClass[i].style.fontWeight = "bold";
        linksClass[i].addEventListener("mouseover", addHoverEffects);
        linksClass[i].addEventListener("mouseout", removeHoverEffects);
    };
    var titleLinks = topDiv.querySelectorAll('.title');
    for (let i=0; i<titleLinks.length; i++) {
        titleLinks[i].addEventListener("mouseover", addTitleEffects);
        titleLinks[i].addEventListener("mouseout", removeTitleEffects);
    }
    function addTitleEffects() {
        nameText.style.color = "#ece0d1";
        this.style.borderColor = "#ece0d1";
    }
    function removeTitleEffects() {
        nameText.style.color = "white";
        this.style.borderColor = "white";
    }
    function addHoverEffects() {
        //this.style.fontWeight = "bold";
        this.style.transform = "scale(1.1)";
        this.style.color = "#ece0d1";
    }
    function removeHoverEffects() {
        //this.style.fontWeight = "normal";
        this.style.transform = "scale(1)";
        this.style.color = "#dbc1ac";
    }

    return containerDiv;
}


export default home