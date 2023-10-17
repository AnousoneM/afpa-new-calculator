// Nous déclarons nos variables
let screenNb1 = document.getElementById('screenNb1');
let screenOperator = document.getElementById('screenOperator');
let screenNb2 = document.getElementById('screenNb2');
let screenResult = document.getElementById('screenResult');

// Nous déclarons une regex qui va nous permettre de savoir si un point est présent dans un texte
let regexDot = /\./g;

// Nous déclarons une variable qui va nous permettre de savoir sur quel écran nous écrivons
let screenWrite = screenNb1;

// Nous allons écouter les événements de clic sur les boutons et appeler les fonctions correspondantes.
document.addEventListener('click', function (event) {
    // Nous allons regarder l'élément s'il possède le data-type="number"
    if (event.target.dataset.type === 'number') {
        // Si oui, nous allons écrire son contenu textuel dans screenWrite

        // Nous allons regarder si le contenu textuel est un point
        if (event.target.innerText == '.') {
            // Puis nous allons regarder si le contenu textuel de screenWrite ne contient pas déjà un point
            if (!screenWrite.innerText.match(regexDot)) {
                // Si pas de point, nous écrivons le contenu textuel, soit le point
                screenWrite.innerText += event.target.innerText;
            }
        } else {
            // Sinon nous écrivons le contenu textuel
            screenWrite.innerText += event.target.innerText;
        }

    }

    // Nous allons regarder l'élément s'il possède le data-type="operator"
    if (event.target.dataset.type === 'operator') {
        // Si oui, nous allons écrire son contenu textuel dans screenOperator
        screenOperator.innerText = event.target.innerText;
        // Puis changer de screenWrite
        screenWrite = screenNb2;
    }

    // Nous allons regarder l'élément s'il possède le data-type="reset"
    if (event.target.dataset.type === 'reset') {
        // Nous effaçons tous nos écrans
        screenNb1.innerText = '';
        screenOperator.innerText = '';
        screenNb2.innerText = '';
        screenResult.innerText = '';

        // Puis changer de screenWrite sur screenNb1 de base
        screenWrite = screenNb1;
    }
});