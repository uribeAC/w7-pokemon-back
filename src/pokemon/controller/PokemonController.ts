import { Request, Response } from "express";
import { PokemonControllerStructure } from "./types.js";
import { PokemonCommonData, PokemonStructure } from "../types.js";
import Pokemon from "../Pokemon.js";

class PokemonController implements PokemonControllerStructure {
  constructor(private pokemons: PokemonStructure[]) {}

  getPokemons = (_req: Request, res: Response): void => {
    res.status(200).json({ pokemons: this.pokemons });
  };

  addPokemon = (req: Request, res: Response): void => {
    const pokemon = req.body as PokemonCommonData;

    const pokemonName =
      pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
    const pokemonImage = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${Number(pokemon.pokedexPosition)}.png`;

    const newPokemon = new Pokemon(
      pokemonName,
      pokemon.pokedexPosition,
      pokemonImage,
    );

    if (
      this.pokemons.some(
        (pokemon) =>
          pokemon.name.toLowerCase() === newPokemon.name.toLowerCase(),
      )
    ) {
      res.status(409).json({ error: "Pokemon already in pokedex" });
      return;
    }

    this.pokemons.push(newPokemon);
    res.status(201).json(newPokemon);
  };
}

export default PokemonController;
