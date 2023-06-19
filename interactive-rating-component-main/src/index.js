const container = document.getElementById('number-box');
const buttons = container.getElementsByClassName('number');

const submitBtn = document.querySelector('.btn')

var numberSelected = 0

// Adicione um evento de clique a cada botão
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function() {
    // Desmarque todos os botões no contêiner
    for (let j = 0; j < buttons.length; j++) {
      buttons[j].classList.remove('selected');
    }

    // Marque apenas o botão selecionado
    buttons[i].classList.add('selected');

   numberSelected = buttons[i].textContent


  });
}

submitBtn.addEventListener('click', () => {

  alert(numberSelected)  

})
