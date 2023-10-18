
// Fonction pour charger le contenu de la page via AJAX
function loadPage(page) 
{
    const xhr = new XMLHttpRequest();
    console.log( xhr );

    // Preparation de la requete
    xhr.open(
        'GET',              // Methode GET | POST | PUT | PATCH | DELETE | HEAD | CUSTOM | OPTION
        page + '.html',     // URL | URI | URN
        true                // TRUE = Asynchrone | FALSE = Synchrone
    );

    xhr.onreadystatechange = function() {

        // xhr.readyState
        // 0 : il ne se passe rien, pas de requete envoyée
        // 1 : envois de la requete, tentative de contact du serveur
        // 2 : reponse (ping) du serveur
        // 3 : Recception de la data depuis le serveur
        // 4 : Requete terminée
        console.log( xhr.readyState );

        if (xhr.readyState === 4 && xhr.status === 200) {
            console.log( xhr.response );
            console.log( xhr.responseText );
            console.log( xhr.responseType );
            document.getElementById('content').innerHTML = xhr.responseText;
        }
    };

    xhr.send();
}

// Gestion des liens de navigation avec AJAX
document.getElementById('homeLink').addEventListener('click', function(event) {
    event.preventDefault();
    loadPage('home');
});

document.getElementById('aboutLink').addEventListener('click', function(event) {
    event.preventDefault();
    loadPage('about');
});

document.getElementById('contactLink').addEventListener('click', function(event) {
    event.preventDefault();
    loadPage('contact');
});

// Charger la page "Accueil" par défaut au chargement de la page
loadPage('home');
