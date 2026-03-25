const buscador = document.getElementById("buscador");
const cards = document.querySelectorAll(".card");
const mensaje = document.getElementById("sinResultados");


/* cada vez que el usuario escribe hacemos que se muestre al momento del evento */
buscador.addEventListener("keyup", () => {    
    const texto = buscador.value.toLowerCase();
    let encontrados = 0;

    cards.forEach(card => {
        const contenido = card.textContent.toLowerCase();

        if (contenido.includes(texto)) {  // Verificar si coincide la busqueda con lo que escribimos 
            card.classList.remove("oculto");
            encontrados++;
        } else {
            card.classList.add("oculto");
        }
    });

    if (encontrados === 0) {
        mensaje.style.display = "block";
    } else {
        mensaje.style.display = "none";
    }
});