function ucFirst(str) {
  if (str=="") { 
  return str; 
  }
  else {
  let strOne=str[0];
  let str2=strOne.toLocaleUpperCase() + str.slice(1);
  return str2 ; 
  };    
}
ucFirst();