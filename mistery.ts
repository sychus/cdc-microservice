function getNumbers(n: number): number[] {
  const secret: number[] = [];

  for (let i = 2; i <= n; i++) {
    let isPrime = true;
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      secret.push(i);
    }
  }

  return secret;
}

console.log('result: ', getNumbers(110));