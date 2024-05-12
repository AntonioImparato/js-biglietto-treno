
const invioDati = document.getElementById('invioDati');
const eta = document.getElementById('eta');
const km = document.getElementById('km');
//const eta = parseInt(Number(prompt('inserisci la tua età')));
//const km = parseInt(Number(prompt('inserisci i km che vuoi percorrere')));
const prezzoKm = 0.21;
const sconto18 = 20;
const scontoOver65 = 40;
const prezzo = km * prezzoKm;
let prezzoScontato;

invioDati.addEventListener('submit', function (event) {
    event.preventDefault();


    let eta = document.getElementById('eta');
    let km = document.getElementById('km');
    eta = parseInt(Number(eta.value));
    console.log(eta);
    km = parseInt(Number(km.value));
    console.log(km);
    const prezzoKm = 0.21;
    const sconto18 = 20;
    const scontoOver65 = 40;
    const prezzo = km * prezzoKm;
    let prezzoScontato;



    if (!isNaN(eta) && !isNaN(km)) {
        if (eta === 0) {
        } else if (eta < 18) {
            prezzoScontato = prezzo - ((prezzo * sconto18) / 100);
            document.getElementById('prezzo').innerHTML = ('prezzo: ') + prezzo + ('€  ');
            document.getElementById('prezzoScontato').innerHTML = ('Al tuo biglietto è stato applicato uno sconto del 20%: ') + prezzoScontato + ('€');
        } else if (eta > 64) {
            prezzoScontato = prezzo - ((prezzo * scontoOver65) / 100);
            document.getElementById('prezzo').innerHTML = ('prezzo: ') + prezzo + ('€  ');
            document.getElementById('prezzoScontato').innerHTML = ('Al tuo biglietto è stato applicato uno sconto del 40%: ') + prezzoScontato + ('€');
        } else {
            document.getElementById('prezzo').innerHTML = ('Al tuo biglietto non è stato applicato nessuno sconto: ') + prezzo + ('€');

        }
    } else {
        document.getElementById('prezzo').innerHTML = ('Hai inserito dei valori errati ');
    }

    document.getElementById('risultato').classList.remove('d-none');

})


document.getElementById('reset').addEventListener('click', function () {

    document.getElementById('risultato').classList.add('d-none');
})
