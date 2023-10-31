function getPokemonData(){
    const randomPokemonId = Math.floor(Math.random()* 120)+ 1; // selecciona un pokemoin random 
    const apiURL= `https://pokeapi.co/api/v2/pokemon/${randomPokemonId}`;//llamamos la API Y CREAMOS LA VARIABLE PARA EL ID DEL POKEMON 
    
    return fetch(apiURL)//retorna el llamado de la url para que funcione el random (osea primero 
                        //llama a uno y lo guarda, despues el otro y asi sucesivamente)
    .then(response => response.json())// toma la respuesta obtenida de la url y la guarda en un json
    .catch(e => console.error(new Error(e)));//posible error
}
document.addEventListener('DOMContentLoaded', () =>{//'DOMContentLoaded' hace que se cargue todo a lo ultimno de la pagina es como un evento load 
    const pokemon1 = getPokemonData();//se crea la constante para traer los resultados de la url de un pokemon 
    const pokemon2 = getPokemonData();
    const pokemon3 = getPokemonData();


    Promise.all([pokemon1, pokemon2, pokemon3])// la promesa para traer el dato especifico del pokemon que se quiere sumar de la url 
    .then((results) =>{
        const pok1= results[0].name;
        const attack1 = results[0].stats[1].base_stat;

        const pok2= results[1].name;
        const attack2 = results[1].stats[1].base_stat;

        const pok3= results[2].name;
        const attack3 = results[2].stats[1].base_stat;

        const totalAttack = attack1 + attack2 + attack3;
//mostramos todo en consola, aun no se como mostrar 
        console.log('nombre: ',pok1, ' ###','ataque : ', attack1);
        console.log('nombre: ',pok2, ' ###','ataque : ', attack2);
        console.log('nombre: ',pok3, ' ###','ataque  : ', attack3);
        console.log('Suma  : ', totalAttack);
    })
//posible error
    .catch(e => console.error(new Error(e)));
    
})