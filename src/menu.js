//***************** Menu Module *****************


function menuGenerate ()
{
    
    let menuDiv;

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

export {menuGenerate};