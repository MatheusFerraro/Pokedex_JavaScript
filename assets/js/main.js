
const pokemonLi =  document.getElementById('pokemonList')
//const loadMoreButton = document.getElementById('loadMoreButton')
const loadAllPokes = document.getElementById('loadAllPokes')
let offset = 0
const limit = 5
const maxRecords = 151





function loadPokemonItens(offset , limit ){
        pokeApi.getPokemons(offset , limit ).then((pokemons = []) => {
            const newHtml = pokemons.map((pokemon)=> `
                <li class="pokemon ${pokemon.type}">
                        <span class="number">#${pokemon.number}</span>
                        <span class="name">${pokemon.name}</span>
                    <div class="detail"> 
                        <ol class="types">
                            ${pokemon.types.map((type) =>`<li class="type ${type}">${type}</li>`).join('')}
                        </ol>
            
                        <img src="${pokemon.photo}" 
                            alt="${pokemon.name}">
                    </div>
                </li>
            `).join('')
            pokemonLi.innerHTML += newHtml       
       })
}

loadPokemonItens(offset , limit)


//loadMoreButton.addEventListener('click', () =>{
    
    //offset += limit
   // const calc = offset + limit
   // if (calc >= maxRecords){

       // const maxLimit= maxRecords - offset
        
       // loadPokemonItens(offset,maxLimit)
     //   loadMoreButton.parentElement.removeChild(loadMoreButton)

   // } else if (offset==146 && limit == 151){
     //   loadMoreButton.parentElement.removeChild(loadMoreButton)

   // } 
    
   // else {
   //     loadPokemonItens(offset, limit)

 //   }

//})// Aqui era pra ser um bottom load more que iria carregar de 5 em 5 até 150 e dps sumir, mas como fiz o bottom 
//loadAllPokes que carrega todos pokes o botao loadmore não desaparece e vice-versa voltarei quando minha logica for melhor


loadAllPokes.addEventListener('click', () =>{
    
    const maxRecords = 146
    
    offset===maxRecords


    const lost = offset +limit 
    if(lost >= maxRecords){
        const newLimit = maxRecords - offset
        loadPokemonItens(offset, newLimit)
        loadAllPokes.parentElement.removeChild(loadAllPokes)

    }  else {

        loadPokemonItens(limit, maxRecords)
        loadAllPokes.parentElement.removeChild(loadAllPokes)
    }
    
    

   
    
    
   
        
    

})







    
