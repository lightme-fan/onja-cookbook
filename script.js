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
  <label for="ingredients"></label>
  <input type="text" id="ingredients">
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

// Handling the submit button
const handleSubmitBtn = (event) => {
  event.preventDefault();
  const forms = event.target;
  
  const recipeName = forms.recipe.value;
  const imageUrl = forms.picture.value;
  const level = forms.level.value;
  const timing = forms.time.value;
  const ingredient = forms.ingredient.value;
  const step = forms.step.value;

  const recipe = [
    {
      title: `${recipeName}`,
      picture: `${imageUrl}`,
      author: `${author}`,
      difficulty: `${level}`,
      timing: `${timing}`,
      ingredients: `[${ingredient}]`,
      steps: `[${step}]`
    },
  ];

  console.log(recipe);
}
form.addEventListener('submit', handleSubmitBtn);