
  document.addEventListener('DOMContentLoaded', function() {
    const chk = document.getElementById('chk');
    chk.addEventListener('change', () => {
      document.body.classList.toggle('dark');
    });
  });
  

  document.addEventListener('DOMContentLoaded', function() {
    const chk = document.getElementById('chk');
    
    // Verifica se há preferência salva
    const modo = localStorage.getItem('modoContraste');
  
    // Aplica o tema correspondente
    if (modo === 'dark') {
      document.body.classList.add('dark');
      chk.checked = true; // Marcando o checkbox se o modo dark estiver ativo
    }
  
    // Alterna o modo e salva a preferência
    chk.addEventListener('change', () => {
      if (chk.checked) {
        document.body.classList.add('dark');
        localStorage.setItem('modoContraste', 'dark');
      } else {
        document.body.classList.remove('dark');
        localStorage.setItem('modoContraste', 'light'); // Opcionalmente, você pode salvar um modo 'light'
      }
    });
  });
  