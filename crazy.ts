function crazy(w: string): boolean {
  w = w.toLowerCase().replace(/\s/g, '');
  const wi = w.split('').reverse().join('');
  return w === wi;
}
console.log(crazy('neuquen'));
console.log(crazy('palo'));