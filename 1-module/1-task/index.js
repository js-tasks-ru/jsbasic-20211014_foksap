function factorial(n) {
    let FirstFactorial = 1;
    for (i=1; i<=n ; i++){
      FirstFactorial *=i
    }
    return FirstFactorial;
  }

factorial(0); // 1
factorial(1); // 1
factorial(3); // 6
factorial(5); // 120