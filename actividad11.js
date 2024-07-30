// Actividad 11: Crear un array de números y filtrar los números mayores a 10.

const array = [12, 34, 3, 5, 78, 56, 4]
const mayores = []
for (let index = 0; index < array.length; index++) {
  if (array[index] >10) {
    mayores.push(array[index])
  }
}
console.log(mayores)
