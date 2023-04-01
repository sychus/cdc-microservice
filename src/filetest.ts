function play(w: string, maxGuesses: number): void {
  const wordLetters = w.split("");
  const guessedLetters = new Set<string>();
  let incorrectGuesses = 0;

  const showWord = (): string => {
    let result = "";
    for (const letter of wordLetters) {
      if (guessedLetters.has(letter)) {
        result += letter;
      } else {
        result += "_";
      }
      result += " ";
    }
    return result.trim();
  };

  const getGuess = (): string => {
    let guess: string;
    do {
      guess = prompt(`Enter a letter (${maxGuesses - incorrectGuesses} guesses left):`);
      if (guess === null) {
        return "";
      }
      guess = guess.trim().toLowerCase();
    } while (guess.length !== 1 || guessedLetters.has(guess));
    return guess;
  };

  while (incorrectGuesses < maxGuesses) {
    console.log(showWord());
    const guess = getGuess();
    if (!guess) {
      console.log("Game aborted.");
      return;
    }
    guessedLetters.add(guess);
    if (wordLetters.includes(guess)) {
      console.log(`Correct! "${guess}" is in the word.`);
      if (guessedLetters.size === wordLetters.length) {
        console.log(`Congratulations, you won! The word was "${w}".`);
        return;
      }
    } else {
      console.log(`Incorrect. "${guess}" is not in the word.`);
      incorrectGuesses++;
    }
  }
  console.log(`You lost! The word was "${w}".`);
}
