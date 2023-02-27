const url = "https://rickandmortyapi.com/api/character";
fetch(url, {method: 'GET'})
.then(response => response.json())
.then(function(json){
    var container = document.querySelector(".container")
    json.results.map(function(results){
        container.innerHTML +=`
            <div class=card > <img src=`+ results.image +`> 
            <h3>`+results.name+` </h3>
            <p> <strong>Genêro: </strong>`+results.gender+` </p>
            <p> <strong>Especie: </strong> `+results.species+` </p>
            <p> <strong>Status: </strong>`+results.status+` </p>
            </div>
        `
    })
    
})


