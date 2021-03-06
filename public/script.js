const cards = document.querySelectorAll('.card');
const button = document.querySelectorAll('.btn');
const recipeIngredients = document.querySelector('.ingredients');
const recipePreparation = document.querySelector('.preparation');
const recipeAdditionalInfo = document.querySelector('.additional-info');

for(let card of cards){  
  card.addEventListener('click', function(){
    window.location.href = `/recipes/${card.id}`;
  });
}

for(let btn of button){
  btn.addEventListener('click', function(){
    const className = btn.parentNode.getAttribute('class');

    const showNHide = function (selector, type) {
      if(type == 'add'){
        return selector.classList.add('hide')
      } else if(type == 'remove'){
        return selector.classList.remove('hide')
      }
    }

    if(btn.textContent == 'Esconder') {
      btn.textContent = 'Mostrar';
      if(className == 'ingredients-header') {
        showNHide(recipeIngredients, 'add');
      } else if (className == 'preparation-header'){
        showNHide(recipePreparation, 'add');
      } else if (className == 'additional-info__header') {
        showNHide(recipeAdditionalInfo, 'add');
      }
    } else {
      btn.textContent = 'Esconder';
      if(className == 'ingredients-header') {
        showNHide(recipeIngredients, 'remove');
      } else if (className == 'preparation-header'){
        showNHide(recipePreparation, 'remove');
      } else if (className == 'additional-info__header') {
        showNHide(recipeAdditionalInfo, 'remove');
      }
    }
  })
}
