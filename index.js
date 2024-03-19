// Code your solution in this file!
function distanceFromHqInBlocks(someValue){
 if (someValue<42){
    return(42-someValue);
 }else{
    return (someValue-42);
 } 
}

function distanceFromHqInFeet(someValue){
 distanceFromHqInBlocks(someValue);{
    if (someValue<42){
        return(42-someValue)*264;
     }else{
        return (someValue-42)*264;
     } 
 }
 
}

function distanceTravelledInFeet(start,destination){
  if(destination>start){
    return(destination-start)*264;
  }else{
    return(start-destination)*264;
  }   
}

function calculatesFarePrice(start,destination){
let dist=Math.abs(destination-start)*264;
let price;
if(dist<=400){
    return price=0;
}else if(dist>=400 && dist<2000){
    return price=(dist-400)*0.02
}else if(dist>2000 && dist<=2500){
    return price=(25);
}else{
    return "cannot travel that far"
}  
}
    

