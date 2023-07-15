const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

const findFirstNonRepeatingLetter = arrayLetters => {
  const charCount = {};

  for (let i = 0; i < arrayLetters.length; i++) {
    charCount[arrayLetters[i]] = (charCount[arrayLetters[i]] || 0) + 1;
  }

  for (let i = 0; i < arrayLetters.length; i++) {
    if (charCount[arrayLetters[i]] === 1) {
      return arrayLetters[i];
    }
  }
  return null;
};

const findUniqueCharacter = text => {
  const arrayUniqueLetterWord = [];

  const cleanedText = text.replace(/[^a-zA-Z\s]/g, '').toLowerCase();

  cleanedText.split(' ').forEach(word => {
    const arrayLetter = word.split('');
    const uniqueLetterWord = findFirstNonRepeatingLetter(arrayLetter);

    if (uniqueLetterWord) arrayUniqueLetterWord.push(uniqueLetterWord);
  });
  return findFirstNonRepeatingLetter(arrayUniqueLetterWord);
};

input.addEventListener('input', event => {
  const uniqueLetterWordWithText = findUniqueCharacter(
    event.currentTarget.value
  );
  if (!uniqueLetterWordWithText) {
    output.textContent = 'Не має унікальної літери';
    return;
  }
  output.textContent = uniqueLetterWordWithText;
});
