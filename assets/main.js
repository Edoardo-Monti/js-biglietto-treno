/*
- Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
    -input/prompt richiesta km ed eta
- Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
    - esempio 20 * 20 =
- va applicato uno sconto del 20% per i minorenni
    -condizione if su eta, poi
    - prezzo * 0.2
- va applicato uno sconto del 40% per gli over 65.
    -condizione if su eta, poi
    - prezzo * 0.4
- L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.
*/



// METODO 1


function prezzo(){

    let chilometri = document.getElementById(`chilometri`).value
    let eta = document.getElementById(`eta`).value
    const prezzoAlChilometro = 0.21
    let prezzoBigliettoIntero = `${prezzoAlChilometro * chilometri}`
    let prezzo20percento = `${prezzoBigliettoIntero * 0.20}`
    let prezzo40percento = `${prezzoBigliettoIntero * 0.40}`

    console.log(`${prezzoBigliettoIntero}`)

    if(eta <= 17){
        console.log(`il prezzo diventa:${prezzoBigliettoIntero - prezzo20percento}`)
    }else if(eta >= 18 || eta < 65){
        console.log(`${prezzoBigliettoIntero}`)
    }
    
    if(eta >= 65){
        console.log(`il prezzo diventa:${prezzoBigliettoIntero - prezzo40percento}`)
    }
    
   
}


document.getElementById(`prezzoformaumana`).innerHTML = prezzo();


// document.getElementById(`prezzoformaumana`).addEventListener(`click`, function(){
//     prezzo();
// })



