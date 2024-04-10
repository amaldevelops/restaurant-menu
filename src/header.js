// Header generate module

import image from './restaurant.jpg';

export function header(){
const content=document.querySelector("#content");
const heading=document.createElement("h1");
heading.textContent="Welcome To StarTrek restaurant, Melbourne";
content.appendChild(heading);
    
const banner=document.createElement("img");
banner.src=image;

banner.alt="Star Trek Banner";
content.appendChild(banner);
}