const homeLink = document.getElementById("home-link");

homeLink.addEventListener("click", function (event) {
    event.preventDefault();

    document.body.style.backgroundColor = "#f3f4f6";

    window.scrollTo({ top: 0, behavior: 'smooth' });
});




const buttoncolarchange = document.getElementById("Buttonchangecolur");

buttoncolarchange.addEventListener("click", function() {
    document.body.style.backgroundColor = "#ffeb3b";
});




const apiUrl = 'https://jsonplaceholder.typicode.com/posts';

function fetchDestinations() {
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const destinationList = document.getElementById("destination-list");
            destinationList.innerHTML = '';

            data.forEach(post => {
                const article = document.createElement('article');
                article.style.marginBottom = '20px';
                article.style.padding = '10px';
                article.style.border = '1px solid #ccc';
                article.style.borderRadius = '8px';
                article.style.display = 'flex';
                article.style.flexDirection = 'column';
                article.style.alignItems = 'center';
                article.style.justifyContent = 'center';
                article.style.textAlign = 'center';

                const title = document.createElement('h3');
                title.style.color = '#333';
                title.style.fontSize = '1.5em';
                title.textContent = post.title; 

                const description = document.createElement('p');
                description.style.fontSize = '1em';
                description.textContent = post.body; 

               
                article.appendChild(title);
                article.appendChild(description);
               

                destinationList.appendChild(article);
            });
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

fetchDestinations();