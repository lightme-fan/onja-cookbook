// Grabbing elements I need
const form = document.querySelector('form');
const inputs = form.querySelectorAll('input');
const submitBtn = form.querySelectorAll('.sbumit-btn');

const ingredientBtn = form.querySelector('.ingredients-btn');
const stepBtn = form.querySelector('.step-btn');

// Function to handle the ingredient button
const handleIngredientBtn = (event) => {
  event.preventDefault();
  const newIngredient = `
  <label for="steps"></label>
  <input type="text" id="steps">
  `
  const ingredient = document.querySelector('.ingredient');
  ingredient.insertAdjacentHTML('beforeend', newIngredient);
}
ingredientBtn.addEventListener('click', handleIngredientBtn);

// A function to handle step button to add new process
const handleStepBtn = (event) => {
  event.preventDefault();
  const newStep = `
  <label for="steps"></label>
  <input type="text" id="steps">
  `
  const step = document.querySelector('.step');
  step.insertAdjacentHTML('beforeend', newStep);
}
stepBtn.addEventListener('click', handleStepBtn);