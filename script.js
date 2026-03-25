document.addEventListener("DOMContentLoaded", () => {

    const buscador = document.getElementById("buscador");
    const cards = document.querySelectorAll(".card");

    buscador.addEventListener("input", () => {
        const texto = buscador.value.toLowerCase();

        cards.forEach(card => {
            const contenido = card.textContent.toLowerCase();

            if (contenido.includes(texto)) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    });

});