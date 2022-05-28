document.querySelector(".menu-btn").addEventListener("click", () =>{
    document.querySelector(".nav-menu").classList.toggle("show");
});

ScrollReveal().reveal('.showcase');
ScrollReveal().reveal('.news-cards', { delay: 500 });
ScrollReveal().reveal('.cards-banner-one', { delay: 500 });
ScrollReveal().reveal('.cards-banner-two', { delay: 500 });

$(".toggle").click(function(){
    $(".formulario").animate({
        height: "toggle",
        "padding-top": "toggle",
        "padding-bottom": "toggle",
        opacity: "toggle"
    }, "slow");
});


document.getElementById("icon-search").addEventListener("click", mostrar_buscador);
document.getElementById("cover-ctn-search").addEventListener("click", ocultar_buscador);