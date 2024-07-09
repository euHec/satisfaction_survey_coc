const scriptURL = "https://script.google.com/macros/s/AKfycbxCJ5RbbzpOJ8DqCmDhuMUEtmcFdxq8ksi18-iPJW5Xwr7QcFj64Xq9Qno_nhOL0d95MA/exec";
const form = document.forms['submit-to-google-sheet'];

form.addEventListener('submit', async e => {
  e.preventDefault();
  const formData = new FormData(form);

  let answers = {};

  // Collecting checkbox values
  const checkboxes = document.querySelectorAll('input[name="q4[]"]:checked');
  let checkboxValues = [];

  checkboxes.forEach((checkbox) => {
    checkboxValues.push(checkbox.value);
  });

  formData.append('q4', checkboxValues.join(', '));

  formData.forEach((value, key) => {
    if (!answers[key]) {
      answers[key] = value;
    } else {
      if (!Array.isArray(answers[key])) {
        answers[key] = [answers[key]];
      }
      answers[key].push(value);
    }
  });

  try {
    const response = await fetch(scriptURL, { method: 'POST', body: formData })
    console.log(await response.json());
  } catch (error) {
    console.log('error: ', error)
  }
});