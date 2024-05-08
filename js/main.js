

const eta = parseInt(Number(prompt('inserisci la tua età')));
const km = parseInt(Number(prompt('inserisci i km che vuoi percorrere')));
const prezzoKm = 0.21;
const sconto18 = 20;
const scontoOver65 = 40;
const prezzo = km * prezzoKm;
let prezzoScontato;
if (!isNaN(eta) && !isNaN(km)) {
    if (eta < 18) {
        prezzoScontato = prezzo - ((prezzo * sconto18) / 100);
        document.getElementById('price').innerHTML = ('prezzo: ') + prezzo + ('€  ') + ('al tuo biglietto è stato applicato uno sconto del 20%: ') + prezzoScontato + ('€');

    } else if (eta > 64) {
        prezzoScontato = prezzo - ((prezzo * scontoOver65) / 100);
        document.getElementById('price').innerHTML = ('prezzo: ') + prezzo + ('€  ') + ('al tuo biglietto è stato applicato uno sconto del 40%: ') + prezzoScontato + ('€');
    } else {
        document.getElementById('price').innerHTML = ('al tuo biglietto non è stato applicato nessuno sconto: ') + prezzo + ('€');

    }
} else {
    document.getElementById('price').innerHTML = ('Hai inserito dei valori errati ');
}



