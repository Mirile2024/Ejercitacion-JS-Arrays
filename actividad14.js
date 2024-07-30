// Actividad 14: Crear un array de números y encontrar todos los números pares.
const array = [12,25,14,6,3,78]
const pares = []
for (let index = 0; index < array.length; index++) {
  if (array[index] % 2 === 0) {
    pares.push(array[index])
  }
}
console.log(pares)
