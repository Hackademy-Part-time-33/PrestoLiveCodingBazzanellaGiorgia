//cattura elementi
let myNavbar = document.querySelector("#myNavbar");
let link = document.querySelectorAll(".nav-link");
let logo = document.querySelector(".img-logo");


console.dir(logo);

console.log(window);

window.addEventListener("scroll", () => {
    let scrolled = window.scrollY;

    if (scrolled > 0) {
        changeNavbar('nav-blur', 'logo-bianco', 'var(--white)', '2px solid var(--gold)', 'transparent');
    } else {
        myNavbar.classList.remove('nav-blur');
        changeNavbar('nav-custom', 'logo-nero', 'var(--black)', 'transparent', 'transparent');
    };

});

function changeNavbar(background, imglogo, color1, color2, color3) {
    myNavbar.classList.add(background);
    logo.src = `http://127.0.0.1:5500/repositary/${imglogo}.png`;


    link.forEach((link) => {
        link.style.color = color1;
        link.addEventListener("mouseenter", () => {
            link.style.borderBottom = color2;
        });
        link.addEventListener("mouseleave", () => {
            link.style.borderBottom = color3;
        });
    });
};


/* le chiamate asincrone in js sono un metodo che aspetta prima il caricamento della pagina e poi parte la chiamata (html, css, js non asincrono e alla fine la chiamata asincrona) setInterval()
cleatInterval blocca l'intervallo ma ha bisogno di un parametro che rappresenti l'intervallo stesso */
/* interseptionObserver() è un oggetto che ci permette di attivare un qualcosa quando l'utente arriva ad un determinato punto. */



let firstNumber = document.querySelector("#firstNumber")
let secNumber = document.querySelector("#secNumber")
let terNumber = document.querySelector("#terNumber")


let count = 0;
/* con funzione si rende generale e si richiama il singolo */
function createInterval(number, element, timing) {
    let count = 0;
    let interval = setInterval(
        () => {
            /* set di istruzioni */
            if (count < number) {
                count++
                element.innerHTML = count;
            } else {
                clearInterval(firstNumber);
            }
        }, timing)
};

let confirm = false;


let observer = new IntersectionObserver(
    (enrties) => {
        enrties.forEach((entry) => {
            if (entry.isIntersecting && confirm == false) {
                createInterval(380, firstNumber, 20);
                createInterval(256, secNumber, 20);
                createInterval(250, terNumber, 20);
                confirm = true
            }
        }
        )
    }

);
observer.observe(firstNumber);


/* swiper oggetto con chivi e valori */
const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'vertical',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });