import Pokemon from "./Pokemon.js";
import { PokemonStructure } from "./types.js";

export const kyogre = new Pokemon(
  "Kyogre",
  "0382",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/382.png",
);

export const groudon = new Pokemon(
  "Groudon",
  "0383",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/383.png",
);

export const rayquaza = new Pokemon(
  "Rayquaza",
  "0384",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/384.png",
);

export const legendaryPokemons: PokemonStructure[] = [
  kyogre,
  groudon,
  rayquaza,
];
