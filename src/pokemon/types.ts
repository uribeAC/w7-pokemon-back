export interface PokemonStructure {
  id: string;
  name: string;
  pokedexPosition: string;
  imageUrl: string;
  isCaptured: boolean;
}

export type PokemonCommonData = Omit<
  PokemonStructure,
  "id" | "imageUrl" | "isCaptured"
>;
