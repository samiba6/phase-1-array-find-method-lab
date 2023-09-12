// code your solution here 
const record = [ { year: "2015", result: "x"}, { year: "2014", result: "N/A"}, { year: "2013", result: "L"},  ]
 function superbowlWin(array){
     function isWin(element){ 
        return element.result==="W" } 
     if (array.find(isWin)){const obj=array.find(isWin); return obj.year } 
     else{return undefined} } 