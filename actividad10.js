// Actividad 10: Ordenar un array de números de mayor a menor y mostrar el array actualizado.
const numeros = [23,45,67,34,12]
const ordenar = [...numeros].sort((a, b) => a - b)
console.log(ordenar.reverse())
