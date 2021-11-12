//DICHIARAZIONE
// Nome utente
const userName = prompt('Ciao, come ti chiami?');

// Cognome utente
const userSurname = prompt('Ciao ' + userName + '...qual è il tuo cognome?');

// Colore preferito utente
const favoriteColor = prompt('Il tuo colore preferito?');

// Numero finale della password utente
const numberPassword = 21;

//LOGICA
const userPassword = userName + userSurname + favoriteColor + numberPassword;

//OUTPUT
document.getElementById('text-password').innerHTML = 'Ciao ' + userName + ' ' + userSurname + '! La tua password è: ' + userPassword;