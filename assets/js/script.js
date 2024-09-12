$(document).ready(function() {
    const apikey = 'efb82061'; 
    const query = obtenerConsulta(); 
    const url = `https://www.omdbapi.com/?apikey=${apikey}&s=${query}`;

    $.ajax({
        type: 'GET',
        url: url,
        datatype: 'json',
        async: true,
        success: function(data) {
            
                mostrarPeliculas(data.Search);
           
        },
        error: function(error) {
            console.log("Error en la solicitud", error);
        }
        
        
    });

    function obtenerConsulta() {
        
        let consulta = prompt("Ingresa el término de búsqueda:", "Barbie");
        return consulta 
    }

    function mostrarPeliculas(peliculas) {
      
        console.log(peliculas)
        const moviesContainer = $('#movies-container');
        moviesContainer.empty(); 

        peliculas.forEach(function(pelicula) {
            const poster = pelicula.Poster ; 
            const movieTitle = pelicula.Title ;

           
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
