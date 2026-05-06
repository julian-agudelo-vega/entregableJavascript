const contenedor = document.getElementById("contenedorPresidentes");

const mensaje = document.getElementById("mensaje");

fetch("https://api-colombia.com/api/v1/President")

.then(response => response.json())

.then(data => {

    mensaje.style.display = "none";

    data.slice(0,15).forEach(presidente => {

        contenedor.innerHTML += `

        <div class="card">

            <img src="${presidente.image}" alt="${presidente.name}">

            <div class="card-body">

                <h2>${presidente.name}</h2>

                <p>
                    <strong>Periodo:</strong>
                    ${presidente.startPeriodDate}
                </p>

                <p>
                    <strong>Partido:</strong>
                    ${presidente.politicalParty}
                </p>

            </div>

        </div>

        `;
    });

})

.catch(error => {

    mensaje.innerHTML = "❌ Error al cargar presidentes";

    console.log(error);

});