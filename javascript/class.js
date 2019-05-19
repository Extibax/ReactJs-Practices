/* Escribir clases */

class Tarea {
  constructor(nombre, prioridad) {
    this.nombre = nombre;
    this.prioridad = prioridad;
  }

  mostrar() {
    return `${this.nombre} tiene una prioridad de ${this.prioridad}`;
  }
}

class ComprasPendientes extends Tarea {
  constructor(nombre, prioridad, cantidad) {
    super(nombre, prioridad);
    this.cantidad = cantidad;
  }
}

/* Crear los objetos */
let tarea1 = new Tarea("Aprende JavaScript", "Alta");

let tarea2 = new Tarea("Aprende React", "Alta");

let tarea3 = new Tarea("Aprende Angular", "Alta");

console.log(tarea1);
console.log(tarea2);
console.log(tarea3);
console.log(tarea3.mostrar());

/* Compras */
let compra1 = new ComprasPendientes("Jabon", "Urgente", 3);
console.log(compra1);
console.log(compra1.mostrar());
