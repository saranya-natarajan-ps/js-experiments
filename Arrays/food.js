function getFoodPrice(meal){
    let items = meal.length;
    let subTotal = 0;
    for (let i = 0;i < items; i++){
        subTotal = subTotal + meal[i].price;
    }
    let tax = subTotal * 8/100;
    let tips = subTotal * 18/100;
    totalPrice = subTotal+tax+tips;

    console.log("Sub Total: "+subTotal+"\nTax(8%): "+tax.toFixed(2)+"\nTips(18%): "+tips.toFixed(2)+"\nTotal Due: "+totalPrice.toFixed(2));
}

let lunch = [
    {item: "Chicken Fajitas", price: 19.95},
    {item: "Chips and Guacamole", price: 5.25},
    {item: "Sweet Tea", price: 2.79}
  ];

  getFoodPrice(lunch);

