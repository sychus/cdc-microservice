function getNumbers(n: number): number[] {
  const secret: number[] = [];

  for (let i = 2; i <= n; i++) {
    let myboolean = true;
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        myboolean = false;
        break;
      }
    }
    if (myboolean) {
      secret.push(i);
    }
  }

  return secret;
}

console.log('result: ', getNumbers(130));