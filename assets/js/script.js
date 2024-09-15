function generateUrl() {
    let id = Math.round(1000000 + Math.random() * 9000000);
    return `https://www.omdbapi.com/?i=tt${id}&plot=short&type=movies&apikey=c42371fd`;
}


function getPic() {
    $.ajax({
    url: generateUrl(),
    method: 'GET',
    dataType: 'json',
    success: function(info) {
    if (info.Poster !== 'N/A' && info.Type === 'movie') {
    renderPic(info);
    } else {
    getPic(); // Reintentar si no hay película o cartel válido
    }
    },
    error: function(error) {
    console.error('Error al obtener la película:', error);
    }
    });
    }

$(document).ready(function() {
    for (let index = 1; index < 9; index++) {
        getPic();
    }
});
function renderPic(data) {
    console.log(data);
   
    mostrarDatos(data);
}

function mostrarDatos(info) {
    console.log(info);

    const nuevaInfo = info;

   
    let posterDiv = $("<div></div>").addClass("recomendaciones");

   
    $("<img>").attr("src", nuevaInfo.Poster).appendTo(posterDiv);

   
    $("<h3></h3>").text(nuevaInfo.Title).appendTo(posterDiv);
    $("<p></p>").text(nuevaInfo.Actors).appendTo(posterDiv);


    $("#recomendaciones").append(posterDiv);
}



