import Pokemon from "../Pokemon.js";
import { PokemonStructure } from "../types.js";

const bulbasaur = new Pokemon(
  "Bulbasaur",
  "0001",
  "https://i.ibb.co/S4Qc4LJ0/1.webp",
);

const ivysaur = new Pokemon(
  "Ivysaur",
  "0002",
  "https://i.ibb.co/fz6VPQzr/2.webp",
);

const venusaur = new Pokemon(
  "Venusaur",
  "0003",
  "https://i.ibb.co/XfS2kqXM/3.webp",
);

const charmander = new Pokemon(
  "Charmander",
  "0004",
  "https://i.ibb.co/pHKDkKV/4.webp",
);

const charmeleon = new Pokemon(
  "Charmeleon",
  "0005",
  "https://i.ibb.co/60nDrX0V/5.webp",
);

const charizard = new Pokemon(
  "Charizard",
  "0006",
  "https://i.ibb.co/N67jMTNg/6.webp",
);

const squirtle = new Pokemon(
  "Squirtle",
  "0007",
  "https://i.ibb.co/6cVSTznB/7.webp",
);

const wartortle = new Pokemon(
  "Wartortle",
  "0008",
  "https://i.ibb.co/JWWwWHM1/8.webp",
);

const blastoise = new Pokemon(
  "Blastoise",
  "0009",
  "https://i.ibb.co/8Lp7SRDs/9.webp",
);

const articuno = new Pokemon(
  "Articuno",
  "0144",
  "https://i.ibb.co/7NxKrbZm/144.webp",
);

const zapdos = new Pokemon(
  "Zapdos",
  "0145",
  "https://i.ibb.co/yjJzCb1/145.webp",
);

const moltres = new Pokemon(
  "Moltres",
  "0146",
  "https://i.ibb.co/TBqs5PF4/146.webp",
);

const mewtwo = new Pokemon(
  "Mewtwo",
  "0150",
  "https://i.ibb.co/ZpfRt9Hq/150.webp",
);

const mew = new Pokemon("Mew", "0151", "https://i.ibb.co/FLPgynPb/151.webp");

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
