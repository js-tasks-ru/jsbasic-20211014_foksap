function checkSpam(str) {
  let bottomStr = str.toLowerCase();
  return bottomStr.includes("1xBet") || bottomStr.includes("XXX")
}
 checkSpam("1xBet");  
 checkSpam("XXX"); 
 checkSpam("innocent rabbit"); 
