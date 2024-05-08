// calculate gross pay 

let payrate="17.30";
let wh="45";

function calGross(payRate,hoursWorked)
{
    let grossPay;
    payRate=parseFloat(payRate);
    hoursWorked=parseInt(hoursWorked);
    if (hoursWorked>40)
    {
        grossPay=((1.5*payRate*(hoursWorked-40))+(payRate*40));
    }
    else
    {
        grossPay=(hoursWorked*payRate);
    }
    return(grossPay.toFixed(2));
}
console.log("Grosspay for payrate "+payrate+" and "+wh+" hours : " +calGross(payrate,wh));

