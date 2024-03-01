const billeter = [];

const blankt = () => {
    document.getElementById('filmer').value = '';
    document.getElementById('antall').value = '';
    document.getElementById('forNavn').value = '';
    document.getElementById('etterNavn').value = '';
    document.getElementById('telefon').value = '';
    document.getElementById('epost').value = '';
};
const kinoBilleter = () => {
    const film = document.getElementById('filmer').value;
    const antall = document.getElementById('antall').value;
    const fornavn = document.getElementById('forNavn').value;
    const etternavn = document.getElementById('etterNavn').value;
    const telefon = document.getElementById('telefon').value;
    const epost = document.getElementById('epost').value;

    const validering = () => {
        const visError = (elementId, melding) => {
            const errorEl = document.getElementById(`${elementId}-error`);
            if (errorEl) {
                errorEl.textContent = melding;
            }
        };
        const filmVal = () => {
            if (film === ''){
                visError('filmer', 'Velg en film');
                return false;
            }
            return true;
        };
        const antallVal = () => {
            if (antall < 1){
                visError('antall', 'Antall må være 1 eller mer');
                return false;
            }
            return true;
        };
        const fornavnVal = () => {
            if (fornavn.trim() === ''){
                visError('forNavn', 'Fornavn, Skriv inn ditt fornavn');
                return false;
            }
            return true;
        };
        const etternavnVal = () => {
            if (etternavn.trim() === ''){
                visError('etterNavn', 'Etternavn, Skriv inn ditt etternavn');
                return false;
            }
            return true;
        };
        const telefonVal = () => {
            if (telefon.trim() === '' || !/^[0-9]{8}$/.test(telefon)){
                visError('telefon', 'Telefon, skriv inn gyldig telefonnummer');
                return false;
            }
            return true;
        };
        const epostVal = () => {
            if (epost.trim() === '' || !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(epost)){
                visError('epost', 'Epost, Skriv inn gyldig epost');
                return false;
            }
            return true;
        };
        return filmVal() && antallVal() && fornavnVal() && etternavnVal() && telefonVal() && epostVal();
    };

    const ticket = {
        film: film,
        antall: antall,
        fornavn: fornavn,
        etternavn: etternavn,
        telefon: telefon,
        epost: epost,
    };

    if (validering()){
        billeter.push(ticket);

        let ut = "<table><tr>" +
            "<th>Film</th><th>Antall</th><th>Fornavn</th><th>Etternavn</th><th>Telefon</th><th>Epost</th>" +
            "</tr>";
        for (let t of billeter){
            ut+="<tr>";
            ut+="<td>"+t.film+"</td><td>"+t.antall+"</td><td>"+t.fornavn+"</td><td>"+t.etternavn+"</td><td>"+t.telefon+"</td><td>"+t.epost+"</td>";
            ut+="</tr>";
        }
        document.getElementById("ut").innerHTML=ut;

        blankt();
    }
};

const slettbilleter = () => {
    billeter.length = 0;
    const ut = document.getElementById('ut');
    ut.innerHTML = '';
};
