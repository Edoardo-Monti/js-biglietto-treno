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

    let chilometri = parseInt(document.getElementById("chilometri").value)

    // let chilometri = document.getElementById("chilometri").value
    // chilometri = parseInt(chilometri)

    let eta = parseInt(document.getElementById("eta").value)
    console.log(eta)

    const prezzoAlChilometro = 0.21
    let prezzoBigliettoIntero = prezzoAlChilometro * chilometri
    let sconto20percento = prezzoBigliettoIntero * 0.20
    let sconto40percento = prezzoBigliettoIntero * 0.40
    let childPrice = prezzoBigliettoIntero - sconto20percento

    console.log(`${prezzoBigliettoIntero}`)

    if(eta <= 17){
        document.getElementById(`prezzoformaumana`).innerHTML = `prezzo ticket:<h1>${childPrice}</h1>`
    }else if(eta >= 65){
        document.getElementById(`prezzoformaumana`).innerHTML = `prezzo ticket:<h1>${prezzoBigliettoIntero - sconto40percento}</h1>`
    }else{
        document.getElementById(`prezzoformaumana`).innerHTML = `prezzo ticket:<h1>${prezzoBigliettoIntero}</h1>`
    }
    
    
    let rounded = Math.round((childPrice + Number.EPSILON) * 100) / 100;
    console.log(rounded);
    console.log(`${childPrice}`)
}






