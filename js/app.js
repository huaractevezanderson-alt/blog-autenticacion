/* =========================
   APP GENERAL
========================= */

document.addEventListener("DOMContentLoaded", () => {

    console.log("Aplicación iniciada correctamente");

    // Verificar sesión activa
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));

    // Mostrar mensaje en consola
    if(currentUser){

        console.log(`Usuario activo: ${currentUser.username}`);

    }else{

        console.log("No hay sesión iniciada");

    }

});