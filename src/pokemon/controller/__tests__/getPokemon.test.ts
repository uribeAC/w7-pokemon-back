import { Request, Response } from "express";
import PokemonController from "../PokemonController.js";
import { kyogre, legendaryPokemons } from "../../fixtures.js";

describe("Given the getPokemon function", () => {
  const res = {
    status: jest.fn().mockReturnThis(),
    json: jest.fn(),
  } as Pick<Response, "status" | "json">;

  const pokemonController = new PokemonController(legendaryPokemons);

  describe("When it receives a request with Kyogre id that is in the pokedex", () => {
    const req = {
      params: { pokemonId: kyogre.id },
    } as Pick<Request, "params">;

    test("Then it should call the received response's method status with 200", () => {
      pokemonController.getPokemon(req as Request, res as Response);

      expect(res.status).toHaveBeenCalledWith(200);
    });

    test("Then it should call the received response's method json with the pokemon named 'Kyogre'", () => {
      const { name } = kyogre;
      pokemonController.getPokemon(req as Request, res as Response);

      expect(res.json).toHaveBeenCalledWith(expect.objectContaining({ name }));
    });
  });

  describe("When it receives a request with Entei id that isn't in the pokedex", () => {
    const req = {
      params: { pokemonId: "Entei1234434" },
    } as Pick<Request, "params">;

    test("Then it should call the received response's method status with 404", () => {
      pokemonController.getPokemon(req as Request, res as Response);

      expect(res.status).toHaveBeenCalledWith(404);
    });

    test("Then it should call the received response's method json with a 'Pokemon not found in pokedex' error", () => {
      pokemonController.getPokemon(req as Request, res as Response);

      expect(res.json).toHaveBeenCalledWith({
        error: "Pokemon not found in pokedex",
      });
    });
  });
});
