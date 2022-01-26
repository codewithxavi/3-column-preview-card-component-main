// Guardar el estado (columna activa)
let columnaActiva = 1

// Seleccionar las columnas
const COLUMNAS = document.querySelectorAll(".columna")

// Escuchas los 'clicks' en cada una de ellas
COLUMNAS.forEach((columna, indice) => {
  columna.addEventListener("click", function () {
    cambiarColumna(indice)
  })
})

// Cambiar el estado de las columnas
function cambiarColumna(indice) {
  COLUMNAS[columnaActiva].classList.remove("activa")
  COLUMNAS[indice].classList.add("activa")
  columnaActiva = indice
}