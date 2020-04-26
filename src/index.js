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
    containerDiv.appendChild(topWrapper);

const topDiv = document.createElement('div');
    topDiv.id = "topDiv";
    topDiv.style.display = "flex";
    topDiv.style.justifyContent = "space-evenly";
    topDiv.style.alignItems = "center";
    topDiv.style.flexBasis = "60%";
    topDiv.style.height = "cover";
    topDiv.style.margin = "10 auto";
    topWrapper.appendChild(topDiv);

const link1 = document.createElement('div');
    link1.id = "link1";
    link1.style.display = "flex";
    link1.style.flexBasis = "10%";
    link1.style.height = "50px";
    topDiv.appendChild(link1);

    const linkInner1 = document.createElement('div');
        linkInner1.innerHTML = "MENU";
        linkInner1.className = "link clickable";
        linkInner1.id = "menuLink";
        link1.appendChild(linkInner1);

const nameDiv = document.createElement('div');
    nameDiv.id = "nameDiv";
    nameDiv.className = "title clickable";
    nameDiv.style.height = "160px";
    nameDiv.style.width = "160px";
    nameDiv.style.display = "flex";
    nameDiv.style.border = "10px solid white";
    nameDiv.style.alignItems = "center";
    nameDiv.style.justifyContent = "center";
    nameDiv.style.borderRadius = "50%";
    topDiv.appendChild(nameDiv);

const nameTitle = document.createElement('div');
    nameTitle.style.margin = "auto";
    nameTitle.style.fontFamily = "Arial";
    nameTitle.style.fontWeight = "bold";
    nameTitle.style.fontSize = "40px";
    nameTitle.innerHTML = "Cafe";
    nameTitle.style.color = "white";
    nameDiv.appendChild(nameTitle);

const link2 = document.createElement('div');
    link2.id = "link2";
    link2.style.display = "flex";
    link2.style.flexBasis = "10%";
    link2.style.height = "50px";
    topDiv.appendChild(link2);

    const linkInner2 = document.createElement('div');
        linkInner2.innerHTML = "CONTACT";
        linkInner2.className = "link clickable";
        linkInner2.id = "contactLink";
        link2.appendChild(linkInner2);

const lowerDiv = document.createElement('div');
    lowerDiv.style.display = "flex";
    lowerDiv.style.gridRowStart = "2";
    lowerDiv.style.gridRowEnd = "3";
    containerDiv.appendChild(lowerDiv);




    var linksClass = topDiv.querySelectorAll('.link');
for (let i=0; i<linksClass.length; i++) {
    linksClass[i].style.margin = "auto";
    linksClass[i].style.color = "var(--start-link-color)";
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
    this.style.transition = "border-radius 1s";
    this.style.borderRadius = "0%";
    this.style.cursor = "pointer";
}
function removeTitleEffects() {
    this.style.borderRadius = "50%";
    this.style.cursor = "auto";
}
function addHoverEffects() {
    this.style.transform = "scale(1.01)";
    this.style.color = "var(--hover-link-color)";
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
    var children = lowerDiv.childNodes
    for (let i = 0; i<children.length; i++){
        lowerDiv.removeChild((lowerDiv.childNodes[0]));
    }
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