import home from './home';
import menu from './menu';
import contact from './contact';

const content = document.getElementById("content");

const containerDiv = document.createElement('div');
    containerDiv.id = "container";
    containerDiv.style.backgroundImage = "url(../photos/coffee.jpg)"
    containerDiv.style.backgroundSize = "cover";
    containerDiv.style.flexBasis = "100%";
    containerDiv.style.height = "100%";
    containerDiv.style.width = "100%";
    containerDiv.style.display = "grid";
    containerDiv.style.gridTemplateRows = "1fr 4fr";
    content.appendChild(containerDiv);

const topWrapper = document.createElement('div');
    topWrapper.style.gridRowStart = "1";
    topWrapper.style.gridRowEnd = "2";
    topWrapper.style.display = "flex";
    topWrapper.style.width = "100%";
    containerDiv.appendChild(topWrapper);//x

const topDiv = document.createElement('div');
    topDiv.id = "topDiv";
    topDiv.style.display = "flex";
    topDiv.style.justifyContent = "space-evenly";
    topDiv.style.alignItems = "center";
    topDiv.style.flexBasis = "60%";
    topDiv.style.height = "cover";
    topDiv.style.margin = "auto";
    topWrapper.appendChild(topDiv);//x

const link1 = document.createElement('div');
    link1.id = "link1";
    link1.style.display = "flex";
    link1.style.flexBasis = "10%";
    link1.style.height = "50px";
    topDiv.appendChild(link1);//x

    const linkInner1 = document.createElement('div');
        linkInner1.innerHTML = "MENU";
        linkInner1.className = "link clickable";
        linkInner1.id = "menuLink";
        link1.appendChild(linkInner1);

const nameDiv = document.createElement('div');
    nameDiv.id = "nameDiv";
    nameDiv.className = "title clickable"
    nameDiv.style.height = "110px";
    nameDiv.style.width = "270px";
    nameDiv.style.display = "flex";
    nameDiv.style.border = "10px solid white";
    topDiv.appendChild(nameDiv);//x

const nameText = document.createElement('div');
    nameText.style.margin = "auto";
    nameText.className = "title clickable";
    nameText.innerHTML = "El Cafe";
    nameText.style.fontSize = "40px";
    nameText.style.color = "white";
    nameText.style.fontWeight = "bold";
    nameText.style.fontFamily = "Arial";
    nameDiv.appendChild(nameText);//x

const link2 = document.createElement('div');
    link2.id = "link2";
    link2.style.display = "flex";
    link2.style.flexBasis = "10%";
    link2.style.height = "50px";
    topDiv.appendChild(link2);//x

    const linkInner2 = document.createElement('div');
        linkInner2.innerHTML = "CONTACT";
        linkInner2.className = "link clickable";
        linkInner2.id = "contactLink";
        link2.appendChild(linkInner2);

const lowerDiv = document.createElement('div');
    lowerDiv.style.display = "flex";
    lowerDiv.style.gridRowStart = "2";
    lowerDiv.style.gridRowEnd = "3";
    containerDiv.appendChild(lowerDiv);//x




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
    this.style.cursor = "pointer";
}
function removeTitleEffects() {
    nameText.style.color = "white";
    this.style.borderColor = "white";
    this.style.cursor = "auto";
}
function addHoverEffects() {
    this.style.transform = "scale(1.01)";
    this.style.color = "#ece0d1";
    this.style.cursor = "pointer";
}
function removeHoverEffects() {
    this.style.transform = "scale(1)";
    this.style.color = "#dbc1ac";
    this.style.cursor = "auto";
}

var menuLink = document.getElementById("menuLink").addEventListener("click", function(){
    loadMenu();
});
var contactLink = document.getElementById("contactLink").addEventListener("click", function(){
    loadContact();
});
var homeLink = document.getElementById("nameDiv").addEventListener("click", function(){
    loadHome();
});




function clearContent() {
    lowerDiv.removeChild(lowerDiv.childNodes[0]);
    //var lowerDisplay = content.getElementById("lowerDisplay");
    //lowerDisplay.remove();
}

function loadHome() {
    clearContent();
    lowerDiv.appendChild(home())
}

function loadMenu() {
    clearContent();
    lowerDiv.appendChild(menu())
}

function loadContact() {
    clearContent();
    lowerDiv.appendChild(contact())
}


loadHome();