import './index.css';
import image from './restaurant.jpg';
import {menuGenerate} from './menu.js'; 
import {home} from './home.js';
console.log("This Works A+++");


const content=document.querySelector("#content");
const heading=document.createElement("h1");
heading.textContent="Welcome To StarTrek restaurant, Melbourne";
content.appendChild(heading);
    
const banner=document.createElement("img");
banner.src=image;

banner.alt="Star Trek Banner";
content.appendChild(banner);

home();

document.querySelector("#Home").addEventListener('click',function(){
    home();
});

document.querySelector("#Menu").addEventListener('click',function(){
    menuGenerate();
});

function resetScreen()
{
    // content.removeChild(menuDiv); 
    // content.remove();
    // content.style.display = 'none';

    
    // location.reload();

    // 

}