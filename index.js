const loadApi = async (id) => {
    const pokemon = id.toLowerCase();
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/" + pokemon);
    if (response.status === 200) {
        const data = await response.json();
        document.getElementById("pokemon").style.display = "block";
        document.getElementById("name").innerHTML = data.name.toUpperCase();
        document.getElementById("pokemonImage").src = data.sprites.other["official-artwork"].front_default;
        document.getElementById("type1").innerHTML = data.types[0].type.name.toUpperCase();
        if(data.types[1]){
            document.getElementById("type2").style.display = "inline-flex";
            document.getElementById("type2").innerHTML = data.types[1].type.name.toUpperCase();
        } else {
            document.getElementById("type2").style.display = "none";
        }

    }
}

document.getElementById("form").addEventListener("submit", (e) => {
    e.preventDefault();
    loadApi(document.getElementById("search").value);
})