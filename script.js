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
  <input type="text" id="ingredients" name="ingredient">
  `
  const ingredient = document.querySelector('.ingredient');
  ingredient.insertAdjacentHTML('beforeend', newIngredient);
}
ingredientBtn.addEventListener('click', handleIngredientBtn);

// A function to handle step button to add new process
const handleStepBtn = (event) => {
  event.preventDefault();
  const newStep = `
  <input type="text" id="steps" name="step">
  `
  const step = document.querySelector('.step');
  step.insertAdjacentHTML('beforeend', newStep);
}
stepBtn.addEventListener('click', handleStepBtn);

// Handling the submit button
const handleSubmitBtn = (event) => {
  event.preventDefault();
  const forms = event.target;
  
  // Grabbing all inputs
  const recipeName = forms.recipe.value;
  const imageUrl = forms.picture.value;
  const author = forms.author.value;
  const level = forms.level.value;
  const timing = forms.time.value;

  const ingredient = document.querySelector('.ingredient');
  for(let i = 0; i < ingredient.children.length; i++) {
    const ingredientList = ingredient.children;
    ingredientList[i] = form.ingredient.value;
  }

  const step = document.querySelector('.step');
  for (let i = 0; i < step.children.length, i++;) {
    const stepList = step.children;
    stepList[i] = form.step.value;
  }


  // This is the recipe array
  const recipe = [
    {
      title: `${recipeName}`,
      picture: `${imageUrl}`,
      author: `${author}`,
      difficulty: `${level}`,
      timing: `${timing}`,
      ingredients: `${ingredient}`,
      steps: `${step}`
    },
  ];

  console.log(recipe);
}

form.addEventListener('submit', handleSubmitBtn);

// function submitForms() {
//   var forms = document.getElementsByTagName("form");
//   var inputs;
//   var tempResult = {};
//   result = [];
//   for (var i = 0; i < forms.length; i++) {
//     inputs = forms[i].getElementsByTagName("input");
//     tempResult = {};
//     for (var j = 0; j < inputs.length; j++)
//       tempResult[inputs[j].name] = inputs[j].value;
//     result.push(tempResult);
//   }
//   console.log(result);
// }