// Header generate module

import image from './restaurant.jpg';

export function header(){
const content=document.querySelector("#content");
const heading=document.createElement("h1");
heading.textContent="Welcome To StarTrek restaurant - Melbourne (Disclaimer: Please note such a restaurant does not exist, this website is made to learn about Webpack).The primary objective of this project is to gain proficiency in Webpack and JavaScript ES6 Modules within the context of real software development projects. Due to focusing more on learning these technologies, the appearance and functionality may not meet high standards. The project entails dynamically rendering a restaurant homepage using JavaScript to generate the entire contents of the website.";
content.appendChild(heading);
    
const banner=document.createElement("img");
banner.src=image;

banner.alt="Star Trek Banner";
content.appendChild(banner);
}