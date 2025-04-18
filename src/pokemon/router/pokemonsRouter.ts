import { Router } from "express";
import PokemonController from "../controller/PokemonController.js";
import { pokemons } from "../data/pokemons.js";

const pokemonsRouter = Router();

const pokemonController = new PokemonController(pokemons);

pokemonsRouter.get("/", pokemonController.getPokemons);

pokemonsRouter.get("/:pokemonId", pokemonController.getPokemon);

pokemonsRouter.post("/", pokemonController.addPokemon);

pokemonsRouter.delete("/:pokemonId", pokemonController.deletePokemon);

pokemonsRouter.patch(
  "/add-to-poke-ball/:pokemonId",
  pokemonController.addToPokeball,
);

pokemonsRouter.patch(
  "/remove-from-poke-ball/:pokemonId",
  pokemonController.removeFromPokeball,
);

export default pokemonsRouter;
