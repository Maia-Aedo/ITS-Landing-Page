// funcion para abrir el mnu
function toggleNav() {
    var nav = document.getElementById("nav");
    var iconMenu = document.getElementById("bars")

    /* al nav y container de íconos le añade la clase open del metodo toggle 
    toggle agrega o elimina una clase al elto */
    nav.classList.toggle("open");

     // alternar el menu de barras por equis
     if (iconMenu.classList.contains("fa-bars")) {
        // si el menu contiene el icono de barras, lo elimina y añade el de X
        iconMenu.classList.remove("fa-bars");
        iconMenu.classList.add("fa-times");
    } else {
        // si el menu es X lo cambia por las barras
        iconMenu.classList.remove("fa-times");
        iconMenu.classList.add("fa-bars");
    }
}
