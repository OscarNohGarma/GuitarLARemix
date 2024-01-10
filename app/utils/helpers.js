export const formatearFecha = (fecha) => {
  const fechaNueva = new Date(fecha);
  const opciones = {
    year: "numeric",
    month: "long",
    day: "2-digit",
  };

  return fechaNueva.toLocaleDateString("es-ES", opciones);
};

export const concatenarContenido = (contenido) => {
  let contenidoConcatenado = "";

  contenido.forEach((parrafo) => {
    if (
      parrafo.children &&
      parrafo.children.length > 0 &&
      parrafo.children[0].text
    ) {
      contenidoConcatenado += parrafo.children[0].text + "\n\n";
    }
  });

  return contenidoConcatenado.trim();
};
