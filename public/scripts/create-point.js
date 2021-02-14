

function populateUFs(){
    const UFSelect = document.querySelector("select[name=uf]")

    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
    .then( res => res.json() )
    .then( states => {

        for( const state of states ){
            UFSelect.innerHTML += `<option value="${state.id}">${state.nome}</option>`
        }
    } )
}

populateUFs()



function getCities(event){
    const citySelect = document.querySelector("[name=city]")
    const stateInput = document.querySelector("[name=state]")
    
    const ufValue = event.target.value

    const indexOfSelectedState = event.target.selectedIndex
    stateInput.value = event.target.options[indexOfSelectedState].text

    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`

    citySelect.innerHTML = "<option value> Selecione a cidade</option> "
    citySelect.disabled = true

    fetch(url)
    .then( res => res.json() )
    .then( cities => {
        
        for( const city of cities ){
            citySelect.innerHTML += `<option value="${city.nome}">${city.nome}</option>`
        }

        citySelect.disabled = false
        } )
}

document
    .querySelector("select[name=uf]")
    .addEventListener( "change", getCities )

//Itens de Coleta

const itensToCollect = document.querySelectorAll(".itens-grid li")

for (const item of itensToCollect){
    item.addEventListener("click", handleSelectedItem)
}

const  collectedItens = document.querySelector("input[name=itens]")
let selectedItens = []


function handleSelectedItem (event){
    const itemLi = event.target
    
    //adicionar ou remover uma classe com js
    itemLi.classList.toggle("selected")


    const itemId = event.target.dataset.id

    //verificar se existem itens selecionados, se sim
    //pegar os itens selecionados
    const alreadySelected = selectedItens.findIndex( item => {
        const itemFound = item == itemId
        return itemFound
    })

    //se já estiver selecionado, tirar da selecao
    if(alreadySelected >= 0){
        const filteredItens = selectedItens.filter ( item => {
            const itemIsDiferent = item != itemId
            return itemIsDiferent
        })

        selectedItens = filteredItens
    } 

    //se nao estiver, adicionar a selecao
    else {
        selectedItens.push(itemId)

    }

    //att o campo escondido com itens os selecionados 
    //linha 58
    collectedItens.value = selectedItens


}