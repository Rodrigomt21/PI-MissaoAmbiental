
  document.addEventListener('DOMContentLoaded', function() {
    const chk = document.getElementById('chk');
    chk.addEventListener('change', () => {
      document.body.classList.toggle('dark');
    });
  });
  

  document.addEventListener('DOMContentLoaded', function() {
    const chk = document.getElementById('chk');
    
    const modo = localStorage.getItem('modoContraste');
  
    if (modo === 'dark') {
      document.body.classList.add('dark');
      chk.checked = true; 
    }
  
    chk.addEventListener('change', () => {
      if (chk.checked) {
        document.body.classList.add('dark');
        localStorage.setItem('modoContraste', 'dark');
      } else {
        document.body.classList.remove('dark');
        localStorage.setItem('modoContraste', 'light'); 
      }
    });
  });
  