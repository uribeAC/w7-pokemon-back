import Pokemon from "../Pokemon.js";
import { PokemonStructure } from "../types.js";

const bulbasaur = new Pokemon(
  "Bulbasaur",
  "0001",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
);

const ivysaur = new Pokemon(
  "Ivysaur",
  "0002",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png",
);

const venusaur = new Pokemon(
  "Venusaur",
  "0003",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png",
);

const charmander = new Pokemon(
  "Charmander",
  "0004",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
);

const charmeleon = new Pokemon(
  "Charmeleon",
  "0005",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/5.png",
);

const charizard = new Pokemon(
  "Charizard",
  "0006",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png",
);

const squirtle = new Pokemon(
  "Squirtle",
  "0007",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
);

const wartortle = new Pokemon(
  "Wartortle",
  "0008",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/8.png",
);

const blastoise = new Pokemon(
  "Blastoise",
  "0009",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/9.png",
);

const articuno = new Pokemon(
  "Articuno",
  "0144",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/144.png",
);

const zapdos = new Pokemon(
  "Zapdos",
  "0145",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/145.png",
);

const moltres = new Pokemon(
  "Moltres",
  "0146",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/146.png",
);

const mewtwo = new Pokemon(
  "Mewtwo",
  "0150",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/150.png",
);

const mew = new Pokemon(
  "Mew",
  "0151",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/151.png",
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
  articuno,
  zapdos,
  moltres,
  mewtwo,
  mew,
];
