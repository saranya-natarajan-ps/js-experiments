//find the distance between (x1,y1) and (x2,y2)

let x1=4;
let x2=8;
let y1=5;
let y2=10;

let distance;
distance=Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2));

console.log("The distance between (4,8) and (5,10) is: " +distance.toFixed(2));