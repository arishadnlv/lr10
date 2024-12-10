//прокрутка при клике
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        let href = this.getAttribute('href').substring(1);

        const scrollTarget = document.getElementById(href);
        // ИЗМЕНЕНО:  Выбираем первый элемент с классом scrollto
        const topOffset = document.querySelector('.scrollto')?.offsetHeight || 0;  // || 0 - обработка случая, если элемент не найден

        const elementPosition = scrollTarget.getBoundingClientRect().top;
        const offsetPosition = elementPosition - topOffset;

        window.scrollBy({
            top: offsetPosition,
            behavior: "smooth"
        });
    });
});

//стрелка вверх
const backToTopButton = document.querySelector('.back-to-top');

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 300) { // Показать стрелку, если прокручено больше, чем на 300px
    backToTopButton.style.display = 'block';
  } else {
    backToTopButton.style.display = 'none';
  }
});


backToTopButton.addEventListener('click', (e) => {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

//бургер
const burgerMenu = document.querySelector('.burger_menu');
const nav = document.querySelector('.nav');

burgerMenu.addEventListener('click', () => {
  nav.classList.toggle('_active');
  burgerMenu.classList.toggle('_active'); 
  //Optional: Smooth scrolling to the top when opening the menu
  if (nav.classList.contains('_active')) {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
});

//Optional: Close the menu if a link is clicked
const navItems = document.querySelectorAll('.nav-item');
navItems.forEach(item => {
  item.addEventListener('click', () => {
    nav.classList.remove('_active');
    burgerMenu.classList.remove('_active');
  });
});

//Optional: Close the menu if clicking outside the menu area
document.addEventListener('click', (e) => {
  if (!nav.contains(e.target) && !burgerMenu.contains(e.target) && nav.classList.contains('_active')) {
    nav.classList.remove('_active');
    burgerMenu.classList.remove('_active');
  }
});