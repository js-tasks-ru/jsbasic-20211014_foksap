function checkSpam(str) {
   let bottomStr= str.toLowerCase()
   if(bottomStr.includes("1xbet") || bottomStr.includes("xxx")){
   return true;
  }
  else {
    return false;
  }
} 
(checkSpam("1xBet"));  
(checkSpam("XXX")); 
(checkSpam("innocent rabbit")); 