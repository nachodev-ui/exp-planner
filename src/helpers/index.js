export const formatearCantidad = (gasto) => {

  return gasto.toLocaleString("es-CL", {
    style: "currency",
    currency: "CLP",
  })

}

export const generarId = () => {
  const random = Math.random().toString(36).substring(2)
  const fecha = Date.now().toString(36)

  return random + fecha
}

export const formatearFecha = (fecha) => {
  const fechaOriginal = new Date(fecha)

  const opciones = {
    year: "numeric",
    month: "long",
    day: "2-digit",
  }

  return fechaOriginal.toLocaleDateString("es-ES", opciones)
}
