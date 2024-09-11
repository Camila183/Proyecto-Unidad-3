$(document).ready(function() {
    const apikey = 'efb82061'; // Tu clave API
    const query = 'monster high'; // Lo que estás buscando
    const url = `https://www.omdbapi.com/?apikey=${apikey}&s=${query}`;

    // Hacemos la solicitud con jQuery
    $.ajax({
        url: url,
        type: 'GET',
        success: function(data) {
            // Verificamos si la respuesta es correcta
            if (data.Response === "True") {
                mostrarPeliculas(data.Search);
            } else {
                console.log("Error: " + data.Error);
            }
        },
        error: function(error) {
            console.log("Error en la solicitud", error);
        }
        
        
    });

    // Función para mostrar las películas en el HTML
    function mostrarPeliculas(peliculas) {
        console.log(peliculas)
        const moviesContainer = $('#movies-container');
        moviesContainer.empty(); // Limpiar cualquier contenido previo

        peliculas.forEach(function(pelicula) {
            const poster = pelicula.Poster ; // Si no hay imagen, usamos una por defecto
            const movieTitle = pelicula.Title ;

            // Agregar cada película al contenedor
            const movieDiv = `
                <div class="movie">
                    <img src="${poster}" alt="${movieTitle}">
                    <div class="movie-title">${movieTitle}</div>
                </div>
            `;
            moviesContainer.append(movieDiv);
        });
    }
});
