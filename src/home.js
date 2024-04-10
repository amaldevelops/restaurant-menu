// Home Screen Module
function home()
{
       
    let homeDiv;

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
    location.textContent="Location: 00000000 Bourke Street, Melbourne";
    homeDiv.appendChild(location);



}

export {home};