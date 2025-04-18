import { Request, Response } from "express";
import { groudon, kyogre, rayquaza } from "../../fixtures.js";
import PokemonController from "../PokemonController.js";

describe("Given the deletePokemon function", () => {
  const res = {
    status: jest.fn().mockReturnThis(),
    json: jest.fn(),
  } as Pick<Response, "status" | "json">;

  let legendaryPokemons = [kyogre, groudon, rayquaza];
  let pokemonController = new PokemonController(legendaryPokemons);

  afterEach(() => {
    jest.clearAllMocks();

    legendaryPokemons = [kyogre, groudon, rayquaza];
    pokemonController = new PokemonController(legendaryPokemons);
  });

  describe("When it receives a request with Kyogre id that is already in the pokedex", () => {
    const req = {
      params: { pokemonId: kyogre.id },
    } as Pick<Request, "params">;

    test("Then it should call the received response's method status with 200", () => {
      pokemonController.deletePokemon(req as Request, res as Response);

      expect(res.status).toHaveBeenCalledWith(200);
    });

    test("Then it should call the received response's method json with a pokemon named 'Kyogre'", () => {
      const { name } = kyogre;

      pokemonController.deletePokemon(req as Request, res as Response);

      expect(res.json).toHaveBeenCalledWith(expect.objectContaining({ name }));
    });

    test("Then Kyogre should not be in the pokedex", () => {
      pokemonController.deletePokemon(req as Request, res as Response);

      expect(legendaryPokemons).not.toContain(kyogre);
    });
  });

  describe("When it receives a request with Entei id and the pokemon ins't in the pokedex", () => {
    const req = {
      params: { pokemonId: "Entei123456789" },
    } as Pick<Request, "params">;

    test("Then it should call the received response's method status with 404", () => {
      pokemonController.deletePokemon(req as Request, res as Response);

      expect(res.status).toHaveBeenCalledWith(404);
    });

    test("Then it should call the received response's method json with a 'Pokemon not found in pokedex' error", () => {
      pokemonController.deletePokemon(req as Request, res as Response);

      expect(res.json).toHaveBeenCalledWith({
        error: "Pokemon not found in pokedex",
      });
    });
  });
});
