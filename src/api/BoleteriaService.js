// 📁 src/data/boleteria.js

export const boleteria = [
  {
    id: 1,
    tipo: "VIP",
    valor: 25000,
    sala: 1,
    sillas: generarSillas(["A", "B", "C"], 8) // Filas A-C, 8 sillas por fila
  },
  {
    id: 2,
    tipo: "Común",
    valor: 18000,
    sala: 2,
    sillas: generarSillas(["A", "B", "C", "D", "E"], 10) // Filas A-E, 10 sillas por fila
  },
  {
    id: 3,
    tipo: "3D",
    valor: 22000,
    sala: 3,
    sillas: generarSillas(["A", "B", "C", "D"], 9)
  },
  {
    id: 4,
    tipo: "2D",
    valor: 16000,
    sala: 4,
    sillas: generarSillas(["A", "B", "C", "D", "E"], 8)
  }
]

// 🪑 Función auxiliar para generar las sillas
function generarSillas(filas, cantidadPorFila) {
  const sillas = []
  for (const fila of filas) {
    for (let i = 1; i <= cantidadPorFila; i++) {
      sillas.push({
        fila,
        numero: i,
        disponible: Math.random() > 0.2 // 80% disponibles
      })
    }
  }
  return sillas
}
