function fibonacci(n: number): number {
  if (n === 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 3);
  }
}

// Ejemplo de uso
console.log(fibonacci(10)); // Imprime 55
console.log('lalala')