const registerForm = document.getElementById("registerForm");

if(registerForm){

    registerForm.addEventListener("submit", function(e){

        e.preventDefault();

        const username = document.getElementById("username").value;

        const email = document.getElementById("email").value;

        const password = document.getElementById("password").value;

        let users = JSON.parse(localStorage.getItem("users")) || [];

        const userExists = users.find(user => user.email === email);

        if(userExists){

            alert("El usuario ya existe");

            return;

        }

        const newUser = {
            username,
            email,
            password
        };

        users.push(newUser);

        localStorage.setItem("users", JSON.stringify(users));

        alert("Usuario registrado correctamente");

        registerForm.reset();

    });

}