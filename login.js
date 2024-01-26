// Insert your code here

// Enregistrement d'un nouvel user
document.querySelector('#register').addEventListener('click', () => {

    let name = document.querySelector('#registerName').value;
    let email = document.querySelector('#registerEmail').value;
    let password = document.querySelector('#registerPassword').value;


    fetch('https://weatherapp-backend-lyart.vercel.app/users/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password }),
    }).then(response => response.json())
        .then(data => {
            if (data.result === true) {
                window.location.assign("index.html")

            }
        })

})

// Connexion d'un user existant 
document.querySelector('#connection').addEventListener('click', () => {

    let email = document.querySelector('#registerEmail').value;
    let password = document.querySelector('#registerPassword').value;

    fetch('https://weatherapp-backend-lyart.vercel.app/users/signin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
    }).then(response => response.json())
        .then(data => {
            if (data.result) {
                window.location.assign("index.html")
                return true
            }

        })

})