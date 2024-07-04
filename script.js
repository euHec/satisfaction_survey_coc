let currentQuestion = 1;

function nextQuestion() {
  const current = document.querySelector(`.question[data-question="${currentQuestion}"]`);
  const inputs = current.querySelectorAll('input, select, textarea');
  let isValid = true;

  inputs.forEach(input => {
    if (input.hasAttribute('required') && !input.value) {
      isValid = false;
      input.classList.add('invalid'); // Adiciona uma classe para destacar o campo inválido, se desejar
    } else {
      input.classList.remove('invalid');
    }
  });

  if (isValid) {
    const next = document.querySelector(`.question[data-question="${currentQuestion + 1}"]`);
    if (next) {
      current.style.display = 'none';
      next.style.display = 'flex';
      currentQuestion++;
    }
  }
}

function previusQuestion() {
  const current = document.querySelector(`.question[data-question="${currentQuestion}"]`);
  const previus = document.querySelector(`.question[data-question="${currentQuestion - 1}"]`);

  if (previus) {
    current.style.display = 'none';
    previus.style.display = 'flex';
    currentQuestion--;
  }
}

function othersOptions(event) {
  const target = event.target;
  const others = document.getElementById(`${target.id}`);
  const othersComents = document.getElementById(`other${target.id}`);

  if (others.checked) {
    othersComents.style.display = 'block';
  } else {
    othersComents.style.display = 'none';
  }
}

function showOrhide(event) {
  const value = event.target.value;
  const questionDiv = event.target.closest('.question').getAttribute('data-question');
  const question = document.getElementById(`section${questionDiv}`);

  if (value === 'Sim') {
    question.style.display = 'flex';
  } else {
    question.style.display = 'none';
  }
}

function sendData(formData) {

}
