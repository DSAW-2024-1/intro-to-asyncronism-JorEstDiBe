const button = document.querySelector('#search_fetch');
const button2 = document.querySelector('#search_by_quote');
const button3 = document.querySelector('#search_by_character');
const button_searchByAll = document.querySelector('#search_all');
const btn_hlp = document.getElementById('info_bttn');
const display_inf = document.getElementById('info_');

button.addEventListener('click', async () => { //search for number of random quotes desired to be displayed
    try {
        const input_nmb = document.getElementById("count_filter").value;
        const data = await fetch('https://thesimpsonsquoteapi.glitch.me/quotes?count=' + input_nmb);
        const comments = await data.json();
        console.log(comments);

        display_characters(comments);
    } catch (error) {
        console.error('Error fetching quotes:', error);
    }
});

button2.addEventListener('click', async () => { //search for quote from a character
    try {
        const data = await fetch('https://thesimpsonsquoteapi.glitch.me/quotes');
        const comments = await data.json();
        console.log(comments);

        display_characters(comments);
    } catch (error) {
        console.error('Error fetching quotes:', error);
    }
});

button3.addEventListener('click', async () => { //search for character's name
    try {
        const input_char = document.getElementById("character_filter").value;
        const data = await fetch('https://thesimpsonsquoteapi.glitch.me/quotes?character=' + input_char);
        const comments = await data.json();
        console.log(comments);

        display_characters(comments);
    } catch (error) {
        console.error('Error fetching quotes:', error);
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
    } catch (error) {
        console.error('Error fetching quotes:', error);
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

        characterElement.style.backgroundColor = 'white';
        imageElement.style.backgroundColor = 'white';
        quoteElement.style.backgroundColor = 'white';

        characterElement.appendChild(quoteElement);
        characterElement.appendChild(imageElement);
        charactersDiv.appendChild(characterElement);
    });
}

btn_hlp.addEventListener('mouseover', () => {
    display_inf.style.visibility = 'visible';
    display_inf.style.opacity = 1;
});
  
btn_hlp.addEventListener('mouseout', () => {
    display_inf.style.visibility = 'hidden';
    display_inf.style.opacity = 0;
});

