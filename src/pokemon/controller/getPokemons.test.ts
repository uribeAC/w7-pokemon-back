import { Request, Response } from "express";
import PokemonController from "./PokemonController.js";
import { legendaryPokemons } from "../fixtures.js";

describe("Given the getPokemons function", () => {
  describe("When it receives a request for pokemons", () => {
    const req = {} as Request;
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    } as Pick<Response, "status" | "json">;

    const pokemonController = new PokemonController(legendaryPokemons);

    afterEach(() => {
      jest.clearAllMocks();
    });

    test("Then it should call the received response's method status with 200", () => {
      pokemonController.getPokemons(req, res as Response);

      expect(res.status).toHaveBeenCalledWith(200);
    });

    test("Then it should call the received response's method json with 'Kyogre', 'Groudon' and 'Rayquaza'", () => {
      pokemonController.getPokemons(req, res as Response);

      expect(res.json).toHaveBeenCalledWith({ pokemons: legendaryPokemons });
    });
  });
});
