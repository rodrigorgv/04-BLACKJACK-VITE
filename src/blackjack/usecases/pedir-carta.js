/**
 * toma la ultima carta del deck y la devuelve
 * @param {Array<String>} deck ejemplo: ['C', 'D', 'H', 'S'];
 * @returns {String} ejemplo: 'A'
 */
export const pedirCarta = (deck) => {
    if (!deck || deck.length === 0) {
      throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    return carta;
  };