const isWord = require("is-word");
const validateSpanishWord = isWord("spanish");

const generarPalabras = (req, res) => {
  try {
    let { Letters, qtyLetter } = req.body;
    // console.log("Datos de entrada:", req.body);

    // Verificar si los datos de entrada son válidos
    if (!Letters || typeof qtyLetter !== "number" || qtyLetter <= 0) {
     return res.status(400).json({ error: "Datos de entrada inválidos." });
    } 

    // Convertir las letras a minúsculas
    Letters = Letters.toLowerCase();

    // Función para generar todas las combinaciones de letras de la longitud especificada
    function generarCombinaciones(letras, palabraActual = "") {
      // Caso base: si la palabra actual tiene la longitud especificada
      console.log("actual ");
      console.log(palabraActual);
      if (palabraActual.length === qtyLetter) {
        // Validar si la palabra es válida en español
        if (validarPalabra(palabraActual)) {
          palabras.add(palabraActual);
        }
        return;
      }

      // Recorrer las letras disponibles
      for (let i = 0; i < letras.length; i++) {
        // Seleccionar la letra actual
        const letraActual = letras[i];

        // Generar una nueva cadena de letras sin la letra actual
        const nuevasLetras = letras.slice(0, i) + letras.slice(i + 1);

        // Llamar recursivamente con la nueva cadena de letras y la palabra actualizada
        generarCombinaciones(nuevasLetras, palabraActual + letraActual);
      }
    }

    // Inicializar el conjunto de palabras
    const palabras = new Set();

    // Generar todas las combinaciones posibles de palabras
    generarCombinaciones(Letters);

    // Convertir el conjunto de palabras en un arreglo de objetos con la clave "word"
    const palabrasArray = Array.from(palabras).map((word) => ({ word }));

    console.log("Palabras generadas:", palabrasArray);

    return res.status(200).json({
      data: palabrasArray,
    });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ error: "Ocurrió un error al procesar la solicitud." });
  }
};

// Función para validar si una palabra es válida en español
const validarPalabra = (palabra) => {
  return validateSpanishWord.check(palabra);
};

module.exports = { generarPalabras };
