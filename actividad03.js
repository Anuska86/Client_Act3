//clase Extra con precio e imagen

class Extra {
  constructor() {
    this.price = null;
    this.url = null;
  }
  getHTML() {
    return `<span><img class="image" src='${this.url}' />${this.price}</span>`;
  }
}

//Creando extras 

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
    let stringIni = `<span>${this.name} ${this.speed}km/h [`;
    let stringMid = "";
    for (let i = 0; i < this.extras.length; i++) {
      stringMid += this.extras[i].getHTML() + " ";
    }
    let stringEnd = `]</span><br/>`;
    let returnString = [stringIni, stringMid, stringEnd].join(" ");
    return returnString;
  }
}

let extraDisponibles = [extra, extra2];

let coche = new Coche();
coche.name = "Tesla";
coche.speed = "450";
coche.addExtra(extra);
coche.addExtra(extra2);
console.log(coche.getHTML());

let coche2 = new Coche();
coche2.name = "Volvo";
coche2.speed = "350";
coche2.addExtra(extra);
coche2.addExtra(extra2);
console.log(coche2.getHTML());

function mostrarExtras() {
  let result = '<span id="extrasPrueba">';
  for (let i = 0; i < extraDisponibles.length; i++) {
    result += `<span id="extraDisponibles${i}">`+extraDisponibles[i].getHTML() + "</span> ";
  }
  return result+"</span>";
}

let cochesDisponibles = new Array();
cochesDisponibles[coche.name] = coche;
cochesDisponibles[coche2.name] = coche2;
console.log(cochesDisponibles);

function assignExtraToCar() {
  const node = document.createElement("div");
  let stringIni = '<div id="carForm"><label>Extra:</label><select id="extra" name="extra">';
  for (let i = 0; i < extraDisponibles.length; i++) {
    stringIni += `<option value="${i}">${i}</option>`;
  }
  stringIni += "</select>";
  stringIni +=
    '<label>Nombre del coche:</label><select id="carName" name="carName">';
  let keys = Object.keys(cochesDisponibles);
  for (let i = 0; i < keys.length; i++) {
    let name = cochesDisponibles[keys[i]].name;
    stringIni += `<option value="${name}">${name}</option>`;
  }
  stringIni += "</select></div>";
  node.innerHTML=stringIni;
  document.getElementById("carDiv").appendChild(node);
  //return stringIni;
  //carDiv
}

function mostrarCoches() {
  let result = '<span id="carsPrueba">';
  let keys = Object.keys(cochesDisponibles);
  for (let i = 0; i < keys.length; i++) {
    result += cochesDisponibles[keys[i]].getHTML() + " ";
  }
  return result+'</span>';
}

function addExtras() {
  let extra = new Extra();
  extra.price = document.getElementById("price").value+" €";
  extra.url = "./imgs/" + document.getElementById("images").value + ".jpg";

  extraDisponibles.push(extra);
  const span = document.createElement("span");
  const node = document.createElement("img");
  node.class="image";
  node.src = extra.url;
  node.style = "  padding: 5px;width: 150px;height: 150px;"
  span.innerHTML = extra.price;
  span.appendChild(node);
  document.getElementById("extrasPrueba").appendChild(span);
  console.log(extraDisponibles);
  $("#carForm").remove();
  assignExtraToCar();
}

function addCar() {
  let coche = new Coche();
  coche.name = document.getElementById("name").value;
  coche.speed = document.getElementById("velocity").value;

  cochesDisponibles[coche.name] = coche;
  const spanCar =  document.createElement("span");
  spanCar.innerHTML = coche.name+ " " + coche.speed+ "km/h [ ]";
  document.getElementById("carsPrueba").appendChild(spanCar);
  console.log(cochesDisponibles);
  $("#carForm").remove();
  assignExtraToCar();
}

function deleteExtras() {
  let choosenNumber = document.getElementById("number").value;

  if (choosenNumber <= extraDisponibles.length) {
    let extra = "#extraDisponibles"+choosenNumber;
    $(extra).remove();
    extraDisponibles.splice(choosenNumber, 1);
    mostrarExtras();
    setTimeout(alert("Elemento borrado"), 1000);
  } else {
    alert("La posición elegida no existe en el array");
  }
}

function addExtratoCar() {
  let choosenExtra = parseInt(document.getElementById("extra").value);
  let choosenCar = document.getElementById("carName").value;

  let extraObject = extraDisponibles[choosenExtra];
  let carObject = cochesDisponibles[choosenCar];

  carObject.extras.push(extraObject);
}
