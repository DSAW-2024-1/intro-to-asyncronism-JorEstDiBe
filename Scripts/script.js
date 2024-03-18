window.addEventListener('DOMContentLoaded', async () => { //find 5 random quotes/characters to display the moment the page loades, so it displays something since the begining
    try {
        const data = await fetch('https://thesimpsonsquoteapi.glitch.me/quotes?count=5'); 
        const comments = await data.json();
        console.log(comments);

        display_characters(comments); 
    } catch (error) {
        console.error('Error fetching random quotes:', error);
    }
});

const button = document.querySelector('#search_fetch');
const button2 = document.querySelector('#search_by_quote');
const button3 = document.querySelector('#search_by_character');
const button_searchByAll = document.querySelector('#search_all');
const btn_hlp = document.getElementById('info_bttn');
const display_inf = document.getElementById('info_');

button.addEventListener('click', async () => { //search for number of random quotes desired to be displayed
    try { // manejo de errores y excepciones en dado caso de que ocurra un error al momento de hacer "fecth" a la informacion que contiene el API
        const input_nmb = document.getElementById("count_filter").value;
        const data = await fetch('https://thesimpsonsquoteapi.glitch.me/quotes?count=' + input_nmb);
        const comments = await data.json();
        console.log(comments);

        display_characters(comments);

        document.getElementById("count_filter").value = '';
    } catch (error) {
        console.error('Error fetching quotes:', error); //mensaje de error/fallo dirigido al 'desarrollador'
        alert("¡An Error has been found! please try again later"); //mensaje de error/fallo dirigido al usuario
    }
});

button2.addEventListener('click', async () => { //search for quote from a character
    try {
        const data = await fetch('https://thesimpsonsquoteapi.glitch.me/quotes');
        const comments = await data.json();
        console.log(comments);

        display_characters(comments);

        document.getElementById("count_filter").value = '';
    } catch (error) {
        console.error('Error fetching quotes:', error);
        alert("¡An Error has been found! please try again later");
    }
});

button3.addEventListener('click', async () => { //search for character's name
    try {
        const input_char = document.getElementById("character_filter").value;
        const data = await fetch('https://thesimpsonsquoteapi.glitch.me/quotes?character=' + input_char); //indentacion de aquel informacion que se usa para realizar una busqueda en especifico con respecto a las opcines de filtro establecidas
        const comments = await data.json();
        console.log(comments); //modo de verificar que informacion y en que formato la API retorna la informacion

        display_characters(comments);

        document.getElementById("character_filter").value = '';
    } catch (error) {
        console.error('Error fetching quotes:', error);
        alert("¡An Error has been found! please try again later");
    }
});

button_searchByAll.addEventListener('click', async () => { //search a certain number of quotes from a specific character
    try {
        const input_char = document.getElementById("character_filter").value;
        const input_nmb = document.getElementById("count_filter").value;
        const data = await fetch('https://thesimpsonsquoteapi.glitch.me/quotes?count=' + input_nmb + '&character=' + input_char);
        const comments = await data.json();
        console.log(comments);

        display_characters(comments);

        document.getElementById("count_filter").value = '';
        document.getElementById("character_filter").value = ''; //Limpiar el contenido de los Inputs
    } catch (error) {
        console.error('Error fetching quotes:', error);
        alert("¡An Error has been found! please try again later");
    }
});

function display_characters(comments) {
    const charactersDiv = document.getElementById('characters');
    charactersDiv.innerHTML = ''; // Limpiar el contenido actual

    comments.forEach(comment => {
        const characterElement = document.createElement('div');
        characterElement.classList.add('character');

        const imageElement = document.createElement('img');
        imageElement.src = comment.image;

        const quoteElement = document.createElement('p');
        quoteElement.textContent = `"${comment.quote}" - ${comment.character}`;

        characterElement.appendChild(imageElement);
        characterElement.appendChild(quoteElement);
        charactersDiv.appendChild(characterElement);
    });
}

btn_hlp.addEventListener('mouseover', () => {  // allo
    display_inf.style.visibility = 'visible';
    display_inf.style.opacity = 1;
});
  
btn_hlp.addEventListener('mouseout', () => {
    display_inf.style.visibility = 'hidden';
    display_inf.style.opacity = 0;
});