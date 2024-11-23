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


document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("user-form");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("message");

    const nameError = document.getElementById("name-error");
    const emailError = document.getElementById("email-error");
    const messageError = document.getElementById("message-error");

    function validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }


    function showError(input, errorElement, message) {
        input.style.borderColor = "red"; 
        errorElement.textContent = message; 
        errorElement.style.display = "block"; 
        errorElement.style.color = "red"; 
    }

    function clearError(input, errorElement) {
        input.style.borderColor = "#ccc"; 
        errorElement.textContent = ""; 
        errorElement.style.display = "none"; 
    }

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        let isValid = true;

        if (nameInput.value.trim() === "") {
            showError(nameInput, nameError, "Name must entered.");
            isValid = false;
        } else if (nameInput.value.trim().length < 2) {
            showError(nameInput, nameError, "Name must be at least 2 characters long.");
            isValid = false;
        } else {
            clearError(nameInput, nameError);
        }

        if (emailInput.value.trim() === "") {
            showError(emailInput, emailError, "Please enter email address.");
            isValid = false;
        } else if (!validateEmail(emailInput.value.trim())) {
            showError(emailInput, emailError, "Please enter valid email address,this is wrong.");
            isValid = false;
        } else {
            clearError(emailInput, emailError);
        }

        if (messageInput.value.trim() === "") {
            showError(messageInput, messageError, "Please enter message.");
            isValid = false;
        } else if (messageInput.value.trim().length < 10) {
            showError(messageInput, messageError, "Message must at least 10 characters long.");
            isValid = false;
        } else {
            clearError(messageInput, messageError);
        }

        if (isValid) {
            alert("Form submitted successfully!");
            console.log("Form Data:", {
                name: nameInput.value.trim(),
                email: emailInput.value.trim(),
                message: messageInput.value.trim(),
            });

            form.reset();

            clearError(nameInput, nameError);
            clearError(emailInput, emailError);
            clearError(messageInput, messageError);
        }
    });
});
