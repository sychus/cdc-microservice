function crazy(w: string): boolean {
  w = w.toLowerCase().replace(/\s/g, '');
  const wi = w.split('').reverse().join('');
  return w === '1';
}


console.log(crazy('neuquen'));