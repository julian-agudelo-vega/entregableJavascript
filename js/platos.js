const contenedor = document.getElementById("contenedorPlatos");

const mensaje = document.getElementById("mensaje");

fetch("https://api-colombia.com/api/v1/TypicalDish")

.then(response => response.json())

.then(data => {

    mensaje.style.display = "none";

    data.slice(0,15).forEach(plato => {

        contenedor.innerHTML += `

        <div class="card">

            <img src="${plato.image}" alt="${plato.name}">

            <div class="card-body">

                <h2>${plato.name}</h2>

                <p>
                    <strong>Departamento:</strong>
                    ${plato.department}
                </p>

                <p>
                    ${plato.description}
                </p>

            </div>

        </div>

        `;
    });

})

.catch(error => {

    mensaje.innerHTML = "❌ Error al cargar platos";

    console.log(error);

});