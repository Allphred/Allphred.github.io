document.addEventListener("DOMContentLoaded", function() {
    var btn = document.getElementById("btnVolverArriba");

    window.onscroll = function() {
        if (document.documentElement.scrollTop > 300) { 
            btn.style.display = "block";
        } else {
            btn.style.display = "none";
        }
    };
});

/*Alerta*/
const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
const appendAlert = (message, type) => {
  const wrapper = document.createElement('div')
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="submit" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('')

  alertPlaceholder.append(wrapper)
}

const alertTrigger = document.getElementById('liveAlertBtn')
if (alertTrigger) {
  alertTrigger.addEventListener('click', () => {
    appendAlert('✅ ¡Tu mensaje ha sido procesado con éxito!')
  })
}



// Dark mode
// document.getElementById('theme-toggle').addEventListener('click', function() {
//   const body = document.body;
//   const currentTheme = body.getAttribute('data-bs-theme');

//   if (currentTheme === 'dark') {
//     body.removeAttribute('data-bs-theme');
//     this.innerHTML = '<i class="fas fa-moon"></i>';
//   } else {
//     body.setAttribute('data-bs-theme', 'dark');
//     this.innerHTML = '<i class="fas fa-sun"></i>';
//   }
// });

// Dark mode nuevo
document.addEventListener('DOMContentLoaded', function() {
  const themeToggle = document.getElementById('theme-toggle');
  const body = document.body;

  const savedTheme = localStorage.getItem('theme');

  if (savedTheme === 'dark') {
    body.setAttribute('data-bs-theme', 'dark');
    themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
  } else {
    body.removeAttribute('data-bs-theme');
    themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
  }

  themeToggle.addEventListener('click', function() {
    const currentTheme = body.getAttribute('data-bs-theme');

    if (currentTheme === 'dark') {
      body.removeAttribute('data-bs-theme');
      this.innerHTML = '<i class="fas fa-moon"></i>';
      localStorage.setItem('theme', 'light'); 
    } else {
      body.setAttribute('data-bs-theme', 'dark');
      this.innerHTML = '<i class="fas fa-sun"></i>';
      localStorage.setItem('theme', 'dark'); 
    }
  });
});