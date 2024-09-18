$(document).ready(function() {
    // Obtener el parámetro "title" de la URL
    const urlParams = new URLSearchParams(window.location.search);
    const movieTitle = urlParams.get('title');

    if (movieTitle) {
        fetchMovieDetails(movieTitle);
    }

    function fetchMovieDetails(title) {
        const apiKey = 'ed96ba01'; // Reemplaza con tu clave de la API de OMDb
        const url = `https://www.omdbapi.com/?t=${encodeURIComponent(title)}&apikey=${apiKey}`;

        $.ajax({
            url: url,
            method: 'GET',
            success: function(data) {
                if (data.Response === "True") {
                    renderMovieDetails(data);
                } else {
                    $('#moviesInfos').html('<p>Película no encontrada.</p>');
                }
            },
            error: function() {
                $('#moviesInfos').html('<p>Error al buscar la película.</p>');
            }
        });
    }

    function renderMovieDetails(movie) {
        $('#moviesInfos').html(`
            <h2>${movie.Title}</h2>
            <img src="${movie.Poster}" alt="Poster de ${movie.Title}">
            <p>Año: ${movie.Year}</p>
            <p>Género: ${movie.Genre}</p>
            <p>Director: ${movie.Director}</p>
            <p>Plot: ${movie.Plot}</p>
        `);
    }
});

console.log(movie)