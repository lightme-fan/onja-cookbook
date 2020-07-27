// Grabbing elements I need
const form = document.querySelector('form');
const inputs = form.querySelectorAll('input');
const submitBtn = form.querySelectorAll('.sbumit-btn');
const ingredientBtn = form.querySelector('.ingredients-btn');
const stepBtn = form.querySelector('.step-btn');

// Function to handle the ingredient button
const handleIngredientBtn = (event) => {
  const ingredient = document.querySelector('.ingredient');
  const ingrendientNumber = ingredient.children.length + 1;
  const newIngredient = `
  <input type="text" id="ingredient${ingrendientNumber}" name="ingredient${ingrendientNumber}">
  `
  ingredient.insertAdjacentHTML('beforeend', newIngredient);
}
ingredientBtn.addEventListener('click', handleIngredientBtn);

// A function to handle step button to add new process
const handleStepBtn = (event) => {
  const step = document.querySelector('.step');
  const stepNum = step.children.length + 1;
  const newStep = `
  <input type="text" id="step${stepNum}" name="step${stepNum}">
  `
  step.insertAdjacentHTML('beforeend', newStep);
}
stepBtn.addEventListener('click', handleStepBtn);

// Handling the submit button
const handleSubmitBtn = (event) => {
  event.preventDefault();
  const forms = event.currentTarget;
  
  // Grabbing all inputs
  // Distructure
  const { recipeName, imageUrl, author, level, timing } = forms;
    
  // Looping
  const ingredient = document.querySelector('.ingredient');
  const ingredients = [];
  for(let i = 0; i < ingredient.children.length; i++) {
    ingredients.push(ingredient.children[i].children[0].value);
    console.log(ingredients);
  }

  const step = document.querySelector('.step');
  const steps = [];
  for (let i = 0; i < step.children.length, i++;) {
    steps.push(step.children[i].children[0].value);
  }


  // This is the recipe array
  const recipe = [
    {
      title: `${recipeName.value}`,
      picture: `${imageUrl.value}`,
      author: `${author.value}`,
      difficulty: `${level.value}`,
      timing: `${timing.value}`,
      ingredients: `${ingredients}`,
      steps: `${steps}`
    },
  ];

  console.log(recipe);
}

form.addEventListener('submit', handleSubmitBtn);
