//Simulador interactivo: Reserva de alojamiento en "Estancia Los Galeses"

alert("Bienvenido/a a Estancia Los Galeses");

let pax =prompt("Ingrese la cantidad de huéspedes");

while ((pax == "") || (pax > "4") || (pax == "0")) {
    alert("Error. La estancia cuenta con habitaciones capaces de alojar hasta 4 personas.");
    pax = prompt("Ingrese la cantidad de huéspedes");
}

//Elección de tipo de habitación

switch (pax) {
    case "1":
        alert("Le recomendamos la habitación single .\n Su precio es de $ 2500 por noche");
        break;
    case "2":
        alert("Le recomendamos la habitación doble.\n Su precio es de $ 2800 por noche");
        break;
    case "3":
        alert("Le recomendamos la habitación triple.\n Su precio es de $ 3200 por noche");
        break;
    case "4":
        alert("Le recomendamos la habitación cuadruple.\n Su precio es de $ 3500 por noche");
        break;
    default:
        alert("No has ingresado ninguna persona");
            
        break;
    }

let options = prompt("Ingrese el tipo de habitación elegida por favor. \n 1. Habitación single \n 2. Habitación doble \n 3. Habitación triple \n 4. Habitación cuádruple ");

//Eleccion de cantidad de noches de alojamiento

let noches = prompt("Ingrese la cantidad de noches que desea");

function result() {
        switch (options) {
    case "1":
        alert(`El precio final es de $ ${noches * 2500}`);
        break;
    case "2":
        alert(`El precio final es de $ ${noches * 2800}`);
        break;
    case "3":
        alert(`El precio final es de $ ${noches * 3200}`);
        break;
    case "4":
        alert(`El precio final es de  $${noches * 3500}`);
        break;
    default:
        alert("Opción no válida");
        break;
    }
}
result();





