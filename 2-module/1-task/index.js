let salaries = {
  John:1000,
  Ann: 1600,
  Pete: 1300,
  month: "December",
  currency: 'USD',
  isPayed: false,
}
function sumSalary(salaries) {
  let sum =0;
  for (let key in salaries) {
    if (isFinite(salaries[key])===false) {
      continue;
    }
    else if (typeof (salaries[key] == "number")){
      sum +=salaries[key];
      continue;
    }  
  }
  return sum;
}
