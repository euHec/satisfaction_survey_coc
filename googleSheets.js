const scriptURL = "https://script.google.com/macros/s/AKfycbxCJ5RbbzpOJ8DqCmDhuMUEtmcFdxq8ksi18-iPJW5Xwr7QcFj64Xq9Qno_nhOL0d95MA/exec";
const form = document.forms['submit-to-google-sheet'];

form.addEventListener('submit', async e => {
  e.preventDefault();
  const formData = new FormData(form);

  try {
    const response = await fetch(scriptURL, { method: 'POST', body: formData })
    console.log(await response.json());
  } catch (error) {
    console.log('error: ', error)
  }
});