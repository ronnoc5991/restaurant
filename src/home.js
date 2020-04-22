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
    //topDiv.style.gridRowStart = "1";
    //topDiv.style.gridRowEnd = "2";
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
    link1.style.fontSize = "20px";
    link1.style.fontFamily = "Arial";

        const linkInner1 = document.createElement('div');
        linkInner1.innerHTML = "LINK 1";
        linkInner1.style.margin = "auto";
        linkInner1.style.color = "white";
        linkInner1.style.fontSize = "20px";
        linkInner1.style.fontFamily = "Arial";

        link1.appendChild(linkInner1);

    const link2 = document.createElement('div');
    link2.id = "link2";
    link2.style.display = "flex";
    link2.style.flexBasis = "10%";
    link2.style.height = "50px";
    link2.style.fontSize = "20px";
    link2.style.fontFamily = "Arial";

        const linkInner2 = document.createElement('div');
        linkInner2.innerHTML = "LINK 2";
        linkInner2.style.margin = "auto";
        linkInner2.style.color = "white";
        linkInner2.style.fontSize = "20px";
        linkInner2.style.fontFamily = "Arial";

        link2.appendChild(linkInner2);

    const nameDiv = document.createElement('div');
    nameDiv.id = "nameDiv";
    nameDiv.style.height = "110px";
    nameDiv.style.width = "270px";
    //nameDiv.style.margin = "auto";
    nameDiv.style.display = "flex";
    nameDiv.style.border = "10px solid white";

    const div3 = document.createElement('div');
    div3.style.margin = "auto";
    div3.innerHTML = "Dodo & Coco";
    div3.style.fontSize = "40px";
    div3.style.color = "white";
    div3.style.fontWeight = "bold";
    div3.style.fontFamily = "Arial";

    const link3 = document.createElement('div');
    link3.id = "link3";
    link3.style.flexBasis = "10%";
    link3.style.height = "50px";
    link3.innerHTML = "LINK 3";
    link3.style.fontSize = "20px";
    link3.style.color = "white";
    link3.style.fontFamily = "Arial";

    const link4 = document.createElement('div');
    link4.id = "link4";
    link4.style.flexBasis = "10%";
    link4.style.height = "50px";
    link4.innerHTML = "LINK 4";
    link4.style.fontSize = "20px";
    link4.style.color = "white";
    link4.style.fontFamily = "Arial";

    const middleDiv = document.createElement('div');
    middleDiv.style.display = "flex";
    middleDiv.style.gridRowStart = "2";
    middleDiv.style.gridRowEnd = "3";

    
    const middle = document.createElement('div');
    middle.style.border = "10px solid white";
    middle.style.display = "flex";
    middle.style.width = "1000px";
    middle.style.height = "500px";
    middle.style.margin = "auto";
    middle.style.opacity = ".25";
    middle.style.backgroundColor = "white";

    middleDiv.appendChild(middle)
    nameDiv.appendChild(div3);
    topDiv.appendChild(link1);
    topDiv.appendChild(link2);
    topDiv.appendChild(nameDiv);
    topDiv.appendChild(link3);
    topDiv.appendChild(link4);
    topWrapper.appendChild(topDiv);
    containerDiv.appendChild(topWrapper);
    containerDiv.appendChild(middleDiv);

    return containerDiv;
}


export default home