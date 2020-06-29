const closeButton = document.querySelector('.close-modal');
const modalOverlay = document.querySelector('.modal-overlay')
const cards = document.querySelectorAll('.card');


for(let card of cards){
  let cardId = card.getAttribute('id');
  let cardTitle = card.querySelector('h3').textContent;
  let cardAuthor = card.querySelector('.author').textContent;
  
  card.addEventListener('click', function(){
    modalOverlay.querySelector('img').src=`./assets/${cardId}.png`;
    modalOverlay.querySelector('h3').textContent = cardTitle;
    modalOverlay.querySelector('.author').textContent = cardAuthor;
    modalOverlay.classList.add('active');
  });
}
closeButton.addEventListener('click', function(){
  modalOverlay.classList.remove('active');
});
