const contenedor = document.getElementById("contenedor");

const mensaje = document.getElementById("mensaje");

fetch("https://api-colombia.com/api/v1/Department")

.then(response => response.json())

.then(data => {

    mensaje.style.display = "none";

    data.slice(0,15).forEach(dep => {

        contenedor.innerHTML += `

        <div class="card">

            <div class="card-body">

                <h2>${dep.name}</h2>

                <p>
                    <strong>Región:</strong>
                    ${dep.region}
                </p>

                <p>
                    <strong>Población:</strong>
                    ${dep.population}
                </p>

                <p>
                    <strong>Superficie:</strong>
                    ${dep.surface}
                </p>

                <p>
                    ${dep.description}
                </p>

            </div>

        </div>

        `;
    });

})

.catch(error => {

    mensaje.innerHTML = "❌ Error al cargar datos";

    console.log(error);

});