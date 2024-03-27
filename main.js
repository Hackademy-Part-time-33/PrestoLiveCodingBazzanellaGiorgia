//cattura elementi
let myNavBar = document.querySelector("myNavbar")
let link = document.querySelectorAll("nav.link")





window.addEventListener("scroll", () => {
    let scrolled = window.scrollY;

    if (scrolled > 90) {
        myNavBar.classList.add("nav-blur")

        links.forEach((link) => {
            link.style.color = 'var(--white)';
            link.addEventListener("mouseenter", ()=> {

            })
        })
    } else {
        myNavBar.classList.remove("nav-blur")
    }
}
)