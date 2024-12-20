import _ from "underscore";


/**
 * Esta funcion crea un nuevo Deck
 * @param {Array<String>} tiposDeCarta Ejemplo: ['C', 'D', 'H', 'S'];
 * @param {Array<String>} tiposEspeciales Ejemplo: ['A', 'J', 'Q', 'K'];
 * @returns {Array<String>} Regresa un nuevo Deck
 */
export const crearDeck = (tiposDeCarta, tiposEspeciales) => {
  if (!tiposDeCarta || tiposDeCarta.length === 0) throw new Error('tipos de carta es obligatorio como un arreglo de string');
    let deck = [];
    for (let i = 2; i <= 10; i++) {
      for (let tipo of tiposDeCarta) {
        deck.push(i + tipo);
      }
    }
  
    for (let tipo of tiposDeCarta) {
      for (let esp of tiposEspeciales) {
        deck.push(esp + tipo);
      }
    }
    // console.log( deck );
    deck = _.shuffle(deck);
    return deck;
  };
