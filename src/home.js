//import menu from './menu';
import lowerItem1 from './home-lower-1';
import lowerItem2 from './home-lower-2';
import lowerItem3 from './home-lower-3';

const home = () => {
    
    const lowerDisplay = document.createElement('div');
    lowerDisplay.id = "lowerDisplay";
    lowerDisplay.style.display = "flex";
    lowerDisplay.style.width = "1000px";
    lowerDisplay.style.height = "500px";
    lowerDisplay.style.margin = "auto";
    lowerDisplay.style.backgroundColor = "rgba(255, 255, 255, 0.5)";

    lowerDisplay.appendChild(lowerItem1());
    lowerDisplay.appendChild(lowerItem2());
    lowerDisplay.appendChild(lowerItem3());

    return lowerDisplay;
}


export default home