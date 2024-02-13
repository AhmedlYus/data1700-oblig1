const billeter = [];
const setValidering = () => {
    document.getElementById('forNavn')
}

/* The Validate function is no longer in use as i opted to use html validate instead by writing required inside the
form input with setCostumValidity(). if i would have needed a server or backend validate it would propably look something like this.
const validering = () => {
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
    };

    const etterNavnValidering = () => {
        if (etterNavn === ''){
            alert('Skrv inn etternavn!');
            return false;
        }
        return true;
    };

    const telefonValidering = () => {
        if (telefon === ''){
            alert('Skriv inn et telefon nummer.');
            return false;
        }
        return true;
    };

    const epostValidering = () => {
        if (!epost.includes('@')){
            alert('Skriv inn epost.');
            return false;
        }
        return true;
    };

    return fornavnValidering() && etterNavnValidering() && telefonValidering() && epostValidering();
};

 */
const blankt = () => {
    document.getElementById('filmer').value = '';
    document.getElementById('antall').value = '';
    document.getElementById('forNavn').value = '';
    document.getElementById('etterNavn').value = '';
    document.getElementById('telefon').value = '';
    document.getElementById('epost').value = '';
};
const kinoBilleter = (event) => {

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


        let ut = "<table><tr>" +
            "<th>Film</th><th>Antall</th><th>Fornavn</th><th>Etternavn</th><th>Telefon</th><th>Epost</th>" +
            "</tr>";
        for (let t of billeter){
            ut+="<tr>";
            ut+="<td>"+t.film+"</td><td>"+t.antall+"</td><td>"+t.forNavn+"</td><td>"+t.etterNavn+"</td><td>"+t.telefon+"</td><td>"+t.epost+"</td>";
            ut+="</tr>";
        }
        document.getElementById("ut").innerHTML=ut;

    blankt();
};

const slettbilleter = () => {
    billeter.length = 0;
    const ut = document.getElementById('ut');
    ut.innerHTML = '';
};