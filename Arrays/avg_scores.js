function getAverage(scores){
    let scorelength = scores.length;
    let sum = 0;
    for (let i = 0; i < scorelength; i++){
        sum = sum +scores[i];
    }
    return sum/scorelength;
}

let myScores = [92, 98, 84, 76, 89, 99, 100]; 
let yourScores = [82, 98, 94, 88, 92, 100, 100];

console.log("My Average is "+getAverage(myScores).toFixed(2));
console.log("Your Average is "+getAverage(yourScores).toFixed(2));
