function cargarHeader() {
    fetch('header.html')
      .then(response => response.text())
      .then(data => {
        document.getElementById('header-container').innerHTML = data;
      });
  }
  
  document.addEventListener('DOMContentLoaded', cargarHeader);
  
  function cargarFooter() {
    fetch('footer.html')
      .then(response => response.text())
      .then(data => {
        document.getElementById('footer-container').innerHTML = data;
      });
  }
  
  document.addEventListener('DOMContentLoaded', cargarFooter);
  