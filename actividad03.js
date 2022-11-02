class Extra {
  constructor() {
    this.price = null;
    this.url = null;
  }
  getHTML() {
    return `<span><img class="image" src='${this.url}' />${this.price}</span>`;
  }
}

let extra = new Extra();
extra.price = "17€";
extra.url = "./imgs/banana.jpg";
console.log(extra.getHTML());

let extra2 = new Extra();
extra2.price = "18€";
extra2.url = "./imgs/wheels.jpg";
console.log(extra2.getHTML());

class Coche {
  constructor() {
    this.name = null;
    this.speed = null;
    this.extras = [];
  }
  addExtra(extra) {
    this.extras.push(extra);
  }
  getHTML() {
    let stringIni = `<span>${this.name} ${this.speed} [`;
    let stringMid = "";
    for (let i = 0; i < this.extras.length; i++) {
      stringMid += this.extras[i].getHTML() + " ";
    }
    let stringEnd = `]</span><br/>`;
    let returnString = [stringIni, stringMid, stringEnd].join(" ");
    return returnString;
  }
}

let coche = new Coche();
coche.name = "Tesla";
coche.speed = "450km/h";
coche.addExtra(extra);
coche.addExtra(extra2);
console.log(coche.getHTML());

let extraDisponibles = [extra, extra2];

function mostrarExtras() {
  let result = "";
  for (let i = 0; i < extraDisponibles.length; i++) {
    result += extraDisponibles[i].getHTML() + " ";
  }
  return result;
}

let cochesDisponibles = new Array();
cochesDisponibles[coche.name] = coche;
console.log(cochesDisponibles);

function mostrarCoches() {
  let result = "";
  let keys = Object.keys(cochesDisponibles);
  for (let i = 0; i < keys.length; i++) {
    result += cochesDisponibles[keys[i]].getHTML() + " ";
  }
  return result;
}

function addExtras() {
  let extra = new Extra();
  extra.price = document.getElementById("price").value;
  extra.url = "./imgs/" + document.getElementById("images").value + ".jpg";

  extraDisponibles.push(extra);
  mostrarExtras();
  console.log(extraDisponibles);
}

function addCar(){
  let coche = new Coche();
  coche.name =document.getElementById("name").value;
  coche.speed = document.getElementById("velocity").value;

  cochesDisponibles[coche.name]=coche;
  mostrarCoches();
  console.log(cochesDisponibles);

}

function deleteExtras() {
let choosenNumber=document.getElementById("number").value;

if (choosenNumber<=extraDisponibles.length) {
  extraDisponibles.splice(choosenNumber,1);
  mostrarExtras();
  alert("Elemento borrado");
} 

else {
  alert("La posición elegida no existe en el array");
}

}

function addExtratoCar() {
  //TODO
}
