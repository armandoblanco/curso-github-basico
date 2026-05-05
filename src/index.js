/**
 * Proyecto de práctica — Curso de GitHub Fundamentos
 *
 * Este archivo es un punto de partida para los ejercicios del curso.
 * Los participantes lo modificarán durante los módulos para practicar
 * el flujo de trabajo con Git y GitHub.
 */

function saludar(nombre) {
  if (!nombre || typeof nombre !== "string") {
    return "Hola, mundo!";
  }
  return `Hola, ${nombre}!`;
}

function sumar(a, b) {
  return (a + b)/2;
}

module.exports = { saludar, sumar };

console.log(saludar("Participante"));
