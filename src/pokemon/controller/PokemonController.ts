import { Request, Response } from "express";
import { PokemonControllerStructure } from "./types.js";
import { PokemonCommonData, PokemonStructure } from "../types.js";
import Pokemon from "../Pokemon.js";

class PokemonController implements PokemonControllerStructure {
  constructor(private pokemons: PokemonStructure[]) {}

  getPokemons = (_req: Request, res: Response): void => {
    res.status(200).json({ pokemons: this.pokemons });
  };

  getPokemon = (req: Request, res: Response): void => {
    const pokemonId = req.params.pokemonId;

    const pokemon = this.pokemons.find((pokemon) => pokemon.id === pokemonId);

    if (!pokemon) {
      res.status(404).json({ error: "Pokemon not found in pokedex" });
      return;
    }

    res.status(200).json(pokemon);
  };

  addPokemon = (req: Request, res: Response): void => {
    const pokemon = req.body as PokemonCommonData;

    const pokemonName =
      pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);

    const newPokemon = new Pokemon(
      pokemonName,
      pokemon.pokedexPosition,
      pokemon.imageUrl,
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

  deletePokemon = (req: Request, res: Response): void => {
    const pokemonId = req.params.pokemonId;

    const pokemonToDelete = this.pokemons.find(
      (pokemon) => pokemon.id === pokemonId,
    );

    if (!pokemonToDelete) {
      res.status(404).json({ error: "Pokemon not found in pokedex" });
      return;
    }

    const pokemonToDeletePosition = this.pokemons.findIndex(
      (pokemon) => pokemon.id === pokemonId,
    );
    this.pokemons.splice(pokemonToDeletePosition, 1);

    res.status(200).json(pokemonToDelete);
  };

  addToPokeball = (req: Request, res: Response): void => {
    const pokemonId = req.params.pokemonId;

    const pokemonCaptured = this.pokemons.find(
      (pokemon) => pokemon.id === pokemonId,
    );

    if (!pokemonCaptured) {
      res.status(404).json({ error: "Pokemon not found in pokedex" });
      return;
    }

    if (pokemonCaptured.isCaptured) {
      res.status(409).json({ error: "Pokemon already in pokeball" });
      return;
    }

    pokemonCaptured.isCaptured = true;

    res.status(200).json(pokemonCaptured);
  };

  removeFromPokeball = (req: Request, res: Response): void => {
    const pokemonId = req.params.pokemonId;

    const pokemonFree = this.pokemons.find(
      (pokemon) => pokemon.id === pokemonId,
    );

    if (!pokemonFree) {
      res.status(404).json({ error: "Pokemon not found in pokedex" });
      return;
    }

    if (!pokemonFree.isCaptured) {
      res.status(409).json({ error: "Pokemon already free" });
      return;
    }

    pokemonFree.isCaptured = false;

    res.status(200).json(pokemonFree);
  };
}

export default PokemonController;
