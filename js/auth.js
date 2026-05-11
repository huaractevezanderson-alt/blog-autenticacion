const registerForm = document.getElementById("registerForm");
const loginForm = document.getElementById("loginForm");

/* =========================
   REGISTRO
========================= */

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

        window.location.href = "login.html";

    });

}

// login

if(loginForm){

    loginForm.addEventListener("submit", function(e){

        e.preventDefault();

        const email = document.getElementById("loginEmail").value;

        const password = document.getElementById("loginPassword").value;

        let users = JSON.parse(localStorage.getItem("users")) || [];

        const validUser = users.find(user =>
            user.email === email &&
            user.password === password
        );

        if(!validUser){

            alert("Credenciales incorrectas");

            return;

        }

        localStorage.setItem("currentUser", JSON.stringify(validUser));

        alert("Bienvenido");

        window.location.href = "index.html";

    });

}