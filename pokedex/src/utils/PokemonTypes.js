import bug from '../assets/PokemonsTypes/bug.svg'
import dark from '../assets/PokemonsTypes/dark.svg'
import dragon from '../assets/PokemonsTypes/dragon.svg'
import electric from '../assets/PokemonsTypes/electric.svg'
import fairy from '../assets/PokemonsTypes/fairy.svg'
import fighting from '../assets/PokemonsTypes/fighting.svg'
import fire from '../assets/PokemonsTypes/fire.svg'
import flying from '../assets/PokemonsTypes/flying.svg'
import ghost from '../assets/PokemonsTypes/ghost.svg'
import grass from '../assets/PokemonsTypes/grass.svg'
import ground from '../assets/PokemonsTypes/ground.svg'
import ice from '../assets/PokemonsTypes/ice.svg'
import normal from '../assets/PokemonsTypes/normal.svg'
import poison from '../assets/PokemonsTypes/poison.svg'
import psychic from '../assets/PokemonsTypes/psychic.svg'
import rock from '../assets/PokemonsTypes/rock.svg'
import steel from '../assets/PokemonsTypes/steel.svg'
import water from '../assets/PokemonsTypes/water.svg'


export const pokemonTypes = (type) => {
    switch(type) {
      case "bug":
        return bug;
      case "dark":
        return dark;
      case "dragon":
        return dragon;
      case "electric":
        return electric;
      case "fairy":
        return fairy;
      case "fighting":
        return fighting;
      case "fire":
        return fire;
      case "flying":
        return flying;
      case "ghost":
        return ghost;
      case "grass":
        return grass;
      case "ground":
        return ground;
      case "ice":
        return ice;
      case "normal":
        return normal;
      case "poison":
        return poison;
      case "psychic":
        return psychic;
      case "rock":
        return rock;
      case "steel":
        return steel;
      case "water":
        return water;
      default:
        return water;
    }
  };
