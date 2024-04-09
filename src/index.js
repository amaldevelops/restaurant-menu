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

// ********** Home **********

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

/*
function home()
{

    homeDiv=document.createElement("div");
    homeDiv.setAttribute('id', 'homeDiv');
    content.appendChild(homeDiv);
    
    const introHeading=document.createElement("h1");
    introHeading.textContent="About Star Trek Restaurant";
    homeDiv.appendChild(introHeading);
    
    const intro=document.createElement("p");
    intro.textContent="Established in the year 2024 in the vibrant city of Melbourne, the StarTrek restaurant has quickly become a beloved destination for fans of the iconic Star Trek: The Next Generation TV series. Situated in the heart of the city, this restaurant is a homage to the futuristic adventures of the USS Enterprise and its crew.From the moment patrons step through the doors of the StarTrek restaurant, they are transported into the world of Captain Jean-Luc Picard, Commander William Riker, and the rest of the Enterprise-D crew. The interior of the restaurant is adorned with memorabilia and decor inspired by the show, creating an immersive experience for restaurants.The menu at StarTrek restaurant is a culinary journey through the beloved series, with each dish carefully crafted to pay homage to the characters and themes of Star Trek: The Next Generation. From classic favorites to creative interpretations, there's something for every fan to enjoy. Guests can start their meal with Captain Picard's Earl Grey Tea, a comforting blend of tea that pays tribute to the captain's signature beverage. For appetizers, they might indulge in Riker's Ribs, tender and succulent ribs slow-cooked to perfection and served with a tangy barbecue sauce.For the main course, options abound. Worf's Klingon Gagh offers a playful twist on the traditional Klingon delicacy, while Data's Circuit Fries provide a crunchy and satisfying snack inspired by the android's mechanical nature. And of course, no trip to StarTrek restaurant would be complete without trying The Borg Burger, a futuristic take on the classic burger featuring unique toppings and flavors. To round off the meal, guests can satisfy their sweet tooth with Beverly's Blue Jello, a nostalgic treat that harks back to scenes from the Enterprise's mess hall. Whether it's a casual meal with friends or a themed gathering for die-hard Trekkies, StarTrek restaurant offers a dining experience like no other. With its delicious food, immersive atmosphere, and unwavering dedication to all things Star Trek, it's no wonder that fans keep coming back to boldly dine where no one has dined before."
    
    homeDiv.appendChild(intro);
    
    const OpenTimesHeading=document.createElement("h1");
    OpenTimesHeading.textContent="Opening Times";
    homeDiv.appendChild(OpenTimesHeading);
    
    const openTimesList=["Sunday: 8am - 8pm", "Monday: 6am - 6pm", "Tuesday: 6am - 6pm", "Wednesday: 6am - 6pm", "Thursday: 6am - 10pm", "Friday: 6am - 10pm","Saturday: 8am - 10pm"
    ];

    openTimesList.forEach(times=>{
        const openTimes = document.createElement("p");
        openTimes.textContent=times;
        homeDiv.appendChild(openTimes);

    });

   
    const location=document.createElement("h1");
    location.textContent="Location: 10 Bourke Street, Melbourne";
    homeDiv.appendChild(location);

    resetScreen()


}

*/

/*
//***************** Menu *****************


document.querySelector("#Menu").addEventListener('click',function(){
    menuGenerate();
});

function menuGenerate ()
{
    content.removeChild(homeDiv);

    menuDiv=document.createElement("div");
    menuDiv.setAttribute('id','menuDiv');
    content.appendChild(menuDiv);

    const menuHeading=document.createElement("h1");
    menuHeading.textContent="Menu";
    menuDiv.appendChild(menuHeading);

    const menuItems=["Captain Picard's Earl Grey Tea: A comforting blend of Earl Grey tea, just like Captain Picard enjoys on the bridge of the USS Enterprise. Served hot. - $2.50",
    "Riker's Ribs: Tender and juicy ribs slow-cooked to perfection, just like Commander Riker would enjoy on shore leave. Served with your choice of barbecue sauce. - $15.99" ,
    "Worf's Klingon Gagh: While we can't promise real worms, our version of Klingon Gagh features hearty noodles in a savory sauce, guaranteed to satisfy your warrior's appetite. Served with a side of spicy sauce. - $12.99",
    "Geordi's Visor Vision Salad: A colorful and refreshing salad featuring a mix of fresh vegetables, paying homage to Geordi La Forge's iconic visor. Served with your choice of dressing. - $8.99",
    "Data's Circuit Fries: Crispy french fries served with a side of dipping sauce, reminiscent of the circuits that power Lieutenant Commander Data's positronic brain. - $6.99",
    "Deanna's Empathic Soup: A comforting soup featuring a blend of flavors that are sure to warm the heart, inspired by Counselor Troi's empathic abilities. Served with a slice of fresh bread. - $9.99",
    "Beverly's Blue Jello: A sweet and nostalgic treat reminiscent of the blue-colored dessert often seen on the USS Enterprise. Served chilled. - $4.99",
    "The Borg Burger: Resistance is futile against our Borg Burger! A futuristic take on the classic burger, featuring a juicy patty topped with unique ingredients and a special sauce. Served with your choice of side. - $13.99",
    "Holodeck Special Pizza: Step into the culinary adventures of the Holodeck with our customizable pizza. Choose from a variety of toppings to create your own delicious masterpiece. - $11.99 (additional toppings $1.00 each)",
    "Q's Quantum Quiche: An enigmatic quiche featuring a mix of flavors that are sure to surprise and delight, inspired by the mischievous Q. Served with a side salad. - $10.99"

    ]



const menu=document.createElement("ol");


menuItems.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    // Append <li> to <ol>
    menu.appendChild(li);
    menuDiv.appendChild(menu);

});


}

*/
