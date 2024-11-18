/**
 * Convierte el valor de la carta en un numero entero
 * @param {String} carta ejemplo 'A' || '8' || '2'...
 * @returns {number}
 */
export const valorCarta = (carta) => {
    const valor = carta.substring(0, carta.length - 1);
    return isNaN(valor) ? (valor === 'A' ? 11 : 10) : valor * 1;
  };