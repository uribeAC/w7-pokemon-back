import Pokemon from "../Pokemon.js";
import { PokemonStructure } from "../types.js";

const bulbasaur = new Pokemon(
  "Bulbasaur",
  "0001",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
);

const ivysaur = new Pokemon(
  "Ivysaur",
  "0002",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
);

const venusaur = new Pokemon(
  "Venusaur",
  "0003",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png",
);

const charmander = new Pokemon(
  "Charmander",
  "0004",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
);

const charmeleon = new Pokemon(
  "Charmeleon",
  "0005",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png",
);

const charizard = new Pokemon(
  "Charizard",
  "0006",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png",
);

const squirtle = new Pokemon(
  "Squirtle",
  "0007",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
);

const wartortle = new Pokemon(
  "Wartortle",
  "0008",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png",
);

const blastoise = new Pokemon(
  "Blastoise",
  "0009",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png",
);

export const pokemons: PokemonStructure[] = [
  bulbasaur,
  ivysaur,
  venusaur,
  charmander,
  charmeleon,
  charizard,
  squirtle,
  wartortle,
  blastoise,
];
