const formulario = document.querySelector(".formulario");
let tareaEditando = null;

formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log("Formulario enviado");

    //valores del input 
    const titulo = document.getElementById("tarea-titulo").value.trim();
    const descripcion = document.getElementById("tarea-descripcion").value.trim();

    if (titulo === "" || descripcion === "") {
    alert("Por favor completa ambos campos.");
    return;
}

    if (tareaEditando) {
        tareaEditando.querySelector(".item-title").textContent = titulo;
        tareaEditando.querySelector(".item-description").textContent = descripcion;

        tareaEditando = null;
        document.getElementById("agregar").textContent = "Agregar tarea";
        formulario.reset();
        return; 
    }

    // agregar una tarea
    const item = document.createElement("li");
    item.classList.add("item"); 
    item.innerHTML = `
    <div class="item-content">
    <p class="item-title">${titulo}</p>
    <p class="item-description">${descripcion}</p>
    </div>
    <div class="item-buttons">
        <button class="btn-borrar">✖</button>
        <button class="btn-editar">✏️</button>
    </div>
`;

    const botonBorrar = item.querySelector(".btn-borrar");
    botonBorrar.addEventListener('click', () => {
        item.remove();
    });

    const botonEditar = item.querySelector(".btn-editar");
    botonEditar.addEventListener('click', () => {
        const tituloActual = item.querySelector(".item-title").textContent;
        const descripcionActual = item.querySelector(".item-description").textContent;

        document.getElementById("tarea-titulo").value = tituloActual;
        document.getElementById("tarea-descripcion").value = descripcionActual;

        tareaEditando = item;
        document.getElementById("agregar").textContent = "Guardar cambios";
    });

    const lista = document.getElementById("list-items")
    lista.appendChild(item);
});

formulario.reset();