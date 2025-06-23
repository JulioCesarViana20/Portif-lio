
  const secretNumber = Math.floor(Math.random() * 11);

  document.getElementById("submitGuess").addEventListener("click", () => {
    let guess = parseInt(document.getElementById("userInput").value);
    const resultEl = document.getElementById("result");

    if (isNaN(guess)) {
      resultEl.textContent = "Digite um número válido!";
      return;
    }

    if (guess === secretNumber) {
      resultEl.textContent = "Parabéns! Você acertou!";
    } else {
      resultEl.textContent = `Errado! O número era ${secretNumber}.`;
    }
  });

