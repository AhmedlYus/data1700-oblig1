const billeter = [];

const validering= () => {

    let forNavn = document.getElementById("forNavn").value;
    let etterNavn = document.getElementById("etterNavn").value;
    let telefon = document.getElementById("telefon").value;
    let epost = document.getElementById("epost").value;
    // input validering
    const fornavnValidering = () => {
        if (forNavn === ''){
            alert('Skriv inn et fornavn før kjøp.');
            return false;
        }
        return true;
    }
   const etterNavnValidering = () => {
        if (etterNavn === ''){
            alert('Skrv inn etternavn!');
            return false;
        }
        return true;
   }
   const telefonValidering = () => {
        if (telefon === ''){
            alert('Skriv inn et telefon nummer.');
            return false;
        }
        return true;
   }
   const epostValidering = () => {
       if (!epost.includes('@')){
           alert('Skriv inn epost.');
           return false;
       }
       return true;
   }
   return fornavnValidering() && etterNavnValidering() && telefonValidering() && epostValidering();
}
const blankt = () => {
    document.getElementById('filmer').value = '';
    document.getElementById('antall').value = '';
    document.getElementById('forNavn').value = '';
    document.getElementById('etterNavn').value = '';
    document.getElementById('telefon').value = '';
    document.getElementById('epost').value = '';
}
const kinoBilleter = () => {
    if (!validering()) {
        return false;
    }
    const film = document.getElementById('filmer').value;
    const antall = document.getElementById('antall').value;
    const forNavn = document.getElementById('forNavn').value;
    const etterNavn = document.getElementById('etterNavn').value;
    const telefon = document.getElementById('telefon').value;
    const epost = document.getElementById('epost').value;

    const ticket = {
        film: film,
        antall: antall,
        forNavn: forNavn,
        etterNavn: etterNavn,
        telefon: telefon,
        epost: epost,
    };
    billeter.push(ticket);


    billeter.forEach((ticket, i) => {
        ut.innerHTML += `<p>Film: ${ticket.film}, Antall: ${ticket.antall}, Navn: ${ticket.forNavn} ${ticket.etterNavn}, Telefon: ${ticket.telefon}, Epost: ${ticket.epost}</p>`;
    });
    blankt();
};
