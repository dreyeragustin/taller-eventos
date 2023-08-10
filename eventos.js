document.addEventListener('DOMContentLoaded', function() {
    const Div1 = document.getElementById('Div');
  
    Div1.addEventListener('click', function() {
      alert('Hola! Soy el div');
    });
  });
  
  function saludar(event) {
    event.stopPropagation();
    alert('Hola!');
  }