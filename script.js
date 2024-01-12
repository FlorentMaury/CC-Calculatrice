// EXERCICE UN.


// Je recupère les éléments du DOM.
let calculate        = document.querySelector('#calculate');
let toggleCalculator = document.querySelector('#calcToggle');
let calculator       = document.querySelector('#calculator');
let number1          = document.querySelector('#number1');
let operator         = document.querySelector('#operator');
let number2          = document.querySelector('#number2');
let infos            = document.querySelector('#infos');

// Cette fonction permet de faire apparaître ou disparaître la calculatrice.
toggleCalculator.addEventListener('click', (event) => {
    event.preventDefault();
    if (calculator.style.display === 'none') {
        calculator.style.display = 'block';
        toggleCalculator.textContent = 'Faire disparaître la calculatrice.';
    } else {
        calculator.style.display = 'none';
        toggleCalculator.textContent = 'Faire réapparaître la calculatrice.';
    }
});

// Cette fonction est le moteur de la calculatrice.
calculate.addEventListener('click', (event) => {
    event.preventDefault();
    let number1  = parseFloat(document.querySelector('#number1').value);
    let number2  = parseFloat(document.querySelector('#number2').value);
    let operator = document.querySelector('#operator').value;

    // Ces conditions font apparaître une alerte en fonction de l'opérateur choisi.
    if (operator == 'add') {
        alert(`${number1} + ${number2} = ${number1 + number2}`);
    }
    else if (operator == 'subtract') {
        alert(`${number1} - ${number2} = ${number1 - number2}`);
    }
    else if (operator == 'multiply') {
        alert(`${number1} * ${number2} = ${number1 * number2}`);
    }
    else if (operator == 'divide') {
        alert(`${number1} / ${number2} = ${number1 / number2}`);
    }
});

// Ces événements permettent d'afficher des informations sur le fonctionnement de la calculatrice (type infobulle).
number1.addEventListener('mouseover', () => {
    infos.textContent = 'Choisissez un nombre.';
});

operator.addEventListener('mouseover', () => {
    infos.textContent = 'Choisissez un opérateur.';
});

number2.addEventListener('mouseover', () => {
    infos.textContent = 'Choisissez un nombre.';
});

calculate.addEventListener('mouseover', () => {
    infos.textContent = 'Calculez le total.';
});

// Réaffiche le texte par défaut lorsque la souris n'est plus sur aucun élément.
[number1, operator, number2, calculate].forEach(element => {
    element.addEventListener('mouseout', () => {
        infos.textContent = 'Pour plus d\'infos, ou des questions, passez la souris au-dessus des éléments.';
    });
});