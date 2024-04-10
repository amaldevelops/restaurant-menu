// Main ES6 Module that will be used by Webpack to generate the website

import './index.css';
import {menuGenerate} from './menu.js'; 
import {home} from './home.js';
import {header} from './header.js';
import { updateScreen } from './updateScreen.js';
console.log("This Works A+++");

const content=document.querySelector("#content");

header();
home();


document.querySelector("#Home").addEventListener('click',function(){
    updateScreen();
    home();
});

document.querySelector("#Menu").addEventListener('click',function(){
    updateScreen();
    menuGenerate();
});
