
const popularesData = document.getElementById("populares");
const resultadosBusqueda = document.getElementById("resultados");
const formBusqueda = document.getElementById("formBusqueda");
const inputBusqueda = document.getElementById("inputBusqueda");

const dibujarPopulares = ({results = []}) =>{
    popularesData.innerHTML = "";
    results.forEach((peli) => {
        const divTemporal = document.createElement("div");
        divTemporal.classList.add("col-xl-3", "col-lg-3", "col-md-4", "col-sm-6", "mb-3"); /**Agregando el diseño de las tarjetas */
        divTemporal.innerHTML = `
                <div class="card shadow">
                    <img src="https://image.tmdb.org/t/p/w500${peli.poster_path}" alt="" class="card-img-top">
                    <div class="card-body">
                        <h5 class="card-title">
                            ${peli.original_title}
                        </h5>
                        <p class="card-text">
                            ${peli.overview.substr(0,100)} ... <a href ="#">Leer más </a>
                        </p>
                        <small class="text-muted"> 
                            ${peli.release_date}
                        </small>
                    </div>
                </div>
            `
            popularesData.appendChild(divTemporal);
    })
}

const getPeliculasPopulares = () => {
    const urlTMDB = "https://api.themoviedb.org/3/movie/popular?api_key=21f868542818e08208619ee3222527ee&language=es-ES"
    fetch(urlTMDB).then((peticion) => {
        peticion.json().then((data) => {
            dibujarPopulares(data);  
        })
    })
}
getPeliculasPopulares();

    /**
     * encodeURI(string_con_espacios_y_simbolos)
     * Codifica un strign para que pueda viajar a través de una URL.
     * El valor codificado es retornado.
     */
    
    /**
     * TO-DO:
     * Hacer fetch a la url y dibujar el resultado de las películas que
     * coincidan con la búsqueda en un div que sea exclusivo de los resultados
     * de las búsqueda.
     */




const dibujarResultadosPeliculas = ({results = []}) => {
    resultadosBusqueda.innerHTML = "";
    results.forEach((encontrado) => {
        const divTemporal = document.createElement("div");
        divTemporal.classList.add("col-xl-3", "col-lg-3", "col-md-4", "col-sm-6", "mb-3"); /**Agregando el diseño de las tarjetas */
        divTemporal.innerHTML = `
                <div class="card shadow">
                    <img src="https://image.tmdb.org/t/p/w500${encontrado.poster_path}" alt="" class="card-img-top">
                    <div class="card-body">
                        <h5 class="card-title">
                            ${encontrado.original_title}
                        </h5>
                        <p class="card-text">
                            ${encontrado.overview.substr(0,100)} ... <a href ="#">Leer más </a>
                        </p>
                        <small class="text-muted"> 
                            ${encontrado.release_date}
                        </small>
                    </div>
                </div>
            `
            resultadosBusqueda.appendChild(divTemporal);
    })
}

 
formBusqueda.onsubmit = e => {
    e.preventDefault(); //Para que la página no se vaya actualizar al enviar el formulario.
    let busqueda = inputBusqueda.value;
    encodeURI(busqueda); 
    let url = `https://api.themoviedb.org/3/search/movie?api_key=21f868542818e08208619ee3222527ee&language=es-ES&query=${busqueda}&page=1&include_adult=false`;
    fetch(url).then((consulta) => {
        consulta.json().then((data) => {
            dibujarResultadosPeliculas(data);
        })
    })
}
