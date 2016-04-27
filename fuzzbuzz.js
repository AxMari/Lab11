function isDivisibleby(i,y){
  return i % y === 0;
}
function Search(i,y){
  var num = i;
  var string = num.toString(a);
  var a = string.indexOf(y);
  return a >= 0;
}

function find(i,y){
  return (isDivisibleby(i,y) || Search(i,y));
}


function fizzBuzz(){
  for(var i = 1; i <= 100; i++){
    if(find(i,3) && find(i,5) && find(i,7)){
      console.log("FizzBuzzWoof");
      
    }else if(find(i,3) && find(i,5)){
      console.log("FizzBuzz");
    
    }else if(find(i,3) && find(i,7)){
       console.log("FizzWoof");
    
    }else if(find(i,5) && find(i,7)){
       console.log("BuzzWoof");
      
    }else if(find(i,3)){
       console.log("Fizz");
    
    }else if(find(i,5)){
       console.log("Buzz");
      
    }else if(find(i,7)){
       console.log("woof");
      
    }else{
       console.log(i);
    }
  }  
}

fizzBuzz();