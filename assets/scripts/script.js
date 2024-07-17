window.onscroll = function () {
    const btn = document.getElementById('scrollTopBtn');
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        btn.style.display = 'block';
    } else {
        btn.style.display = 'none';
    }
};

// Função para rolar para o topo do documento
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
//

var hamburger = document.querySelector(".hamburger");
var mobileNavLinks = document.querySelector(".nav-links");
var navLinks = document.querySelectorAll(".nav-links a");

hamburger.addEventListener("click", function() {
    hamburger.classList.toggle("is-active");
    mobileNavLinks.classList.toggle("active");

    // Adiciona ou remove a classe no-scroll no body
    if (mobileNavLinks.classList.contains('active')) {
        document.body.classList.add('no-scroll');
    } else {
        document.body.classList.remove('no-scroll');
    }
});

// Adiciona evento de clique a todos os links do menu
navLinks.forEach(function(link) {
    link.addEventListener("click", function() {
        // Fecha o menu ao clicar no link
        hamburger.classList.remove("is-active");
        mobileNavLinks.classList.remove("active");
        
        // Remove a classe no-scroll no body
        document.body.classList.remove('no-scroll');
    });
});


//
const sr = ScrollReveal({
    origin: 'top',
    distance: '30px', // Reduz a distância
    duration: 2000, // Reduz a duração
    delay: 300, // Reduz o atraso
    //reset: true //animation repeat
})
 

sr.reveal(`.nav-item, .contact-header`)
sr.reveal(`.navbar-brand, .home-section .left-side, .About-city .left-side, .about-us .container1 .left-side, .about-us .container2 .right-side, .about-us .container3 .left-side, .attraction1 .attraction-info, .attraction3 .attraction-info, #carousel2, .contact-content .img-area`,{origin:'left'})
sr.reveal(`.home-section .right-side, .About-city .right-side, .about-us .container1 .right-side, .about-us .container2 .left-side, .about-us .container3 .right-side, .attraction2 .attraction-info, #carousel1, #carousel3, .contact-content .contact-area`,{origin:'right'})
sr.reveal(`.about-city-img2, .destiny-header`,{origin:'bottom'})
sr.reveal(`.about-city-img1, .gallery-item, .testimony-1, .testimony-3`,{origin:'left',interval: 200})
sr.reveal(`.about-city-img3, .other-attractions .item, .testimony-2`,{origin:'right',interval: 200})
sr.reveal(`.nav-item,.corp-footer, .links, .infos-footer`,{interval: 200})
