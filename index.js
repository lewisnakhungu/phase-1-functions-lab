// Code your solution in this file!
function distanceFromHqInBlocks (street){
    const hq = 42;
    return Math.abs(street - hq);
}
console.log(distanceFromHqInBlocks(43));
console.log(distanceFromHqInBlocks(50));
console.log(distanceFromHqInBlocks(34));

function distanceFromHqInFeet (street){
    return distanceFromHqInBlocks(street)*264;
}
console.log(distanceFromHqInFeet(43));
console.log(distanceFromHqInFeet(50));


function distanceTravelledInFeet(start, destination){
    return Math.abs(start-destination)*264;

}
console.log(distanceTravelledInFeet(43,48));
console.log(distanceTravelledInFeet(50, 60));
console.log(distanceTravelledInFeet(34, 28));

function calculatesFarePrice(start, destination) {
    let distance = distanceTravelledInFeet(start, destination);
  
    if (distance <= 400) {
      return 0; 
    } else if (distance > 400 && distance <= 2000) {
      return (distance - 400) * 0.02;
    } else if (distance > 2000 && distance <= 2500) {
      return 25;
    } else {
      return "cannot travel that far"; 
    }
  }
  
  
  console.log(calculatesFarePrice(43, 44))
    


