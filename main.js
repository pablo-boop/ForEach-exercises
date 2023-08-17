//?Test valorant teams
//console.error("Exercicio dos times de valorant");

/*const teams = ["Loud", "Furia", "Mibr", "DRX"];

teams.forEach(team => {
    console.log(`Hello, ${team}!`);
});*/

//?Test names
//console.error("Exercicio dos nomes");

/*const names = ["Whendy", "Bob", "Stuart", "Xandy"];

names.forEach((name) => {
    console.log(`Hi, ${name}!`);
});*/

//?Exercise log only on pair numbers
//console.error("Exercicio dos numeros pares");

/*const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

numbers.forEach((number, index) => {
    if(number %2 == 0) {
        console.log(`O número ${number}, pertence a posição ${index} do array!`);
    }
});*/

//?Exercise cars
//console.error("Exercicio dos carros");

/*const cars = [
    {
        marca: "Ford",
        modelo: "Focus"
    },
    {
        marca: "Porsche",
        modelo: "Panamera"
    },
    {
        marca: "Mustang",
        modelo: "Dodger"
    }
];

cars.forEach((car) => {
    console.log(`Marca: ${car.marca} - Modelo: ${car.modelo}`);
});*/

//!Challenge of the day

class Car {
    constructor(marca, modelo) {
        this.marca = marca;
        this.modelo = modelo;
    }
}

class CarList {
    constructor() {
        this.cars = [];
    }

    addCar(param) {
        this.cars.push(param)
    }
}

const carList = new CarList()

function showCars() {
    carList.cars.forEach((car) => {
        console.log(`marca: ${car.marca}, modelo: ${car.modelo}`);
    });
}

function createCar() {
    let brand = document.getElementById("brand").value;
    let model = document.getElementById("model").value;

    if(brand == "" || model == "") {
        alert("erro ksksksk")
    } else {
        const novo = new Car(brand, model)
        carList.addCar(novo)
    
        brand = document.getElementById("brand").value = "";
        model = document.getElementById("model").value = "";
    
        console.error(`Carros registrados: ${carList.cars.length}`);
    
        showCars()
    }
}
