import { Request, Response } from "express";
import { groudon, kyogre, rayquaza } from "../../fixtures.js";
import PokemonController from "../PokemonController.js";

describe("Given the addToPokeball function", () => {
  const res = {
    status: jest.fn().mockReturnThis(),
    json: jest.fn(),
  } as Pick<Response, "status" | "json">;

  const legendaryPokemons = [kyogre, groudon, rayquaza];
  let pokemonController = new PokemonController(legendaryPokemons);

  groudon.isCaptured = true;

  afterEach(() => {
    jest.clearAllMocks();

    kyogre.isCaptured = false;
    pokemonController = new PokemonController(legendaryPokemons);
  });

  describe("When it receives a request with Kyogre id and it's not captured", () => {
    const req = {
      params: { pokemonId: kyogre.id },
    } as Pick<Request, "params">;

    test("Then it should call the received response's method status with 200", () => {
      pokemonController.addToPokeball(req as Request, res as Response);

      expect(res.status).toHaveBeenCalledWith(200);
    });

    test("Then it should call the received response's method json with the pokemon 'Kyoge' captured", () => {
      const { name } = kyogre;
      pokemonController.addToPokeball(req as Request, res as Response);

      expect(kyogre.isCaptured).toBe(true);
      expect(res.json).toHaveBeenCalledWith(expect.objectContaining({ name }));
    });
  });

  describe("When it receives a request with Groudon id and it's already captured", () => {
    const req = {
      params: { pokemonId: groudon.id },
    } as Pick<Request, "params">;

    test("Then it should call the received response's method status with 409", () => {
      pokemonController.addToPokeball(req as Request, res as Response);

      expect(res.status).toHaveBeenCalledWith(409);
    });

    test("Then it should call the received response's method json with a 'Pokemon already in pokeball' error", () => {
      pokemonController.addToPokeball(req as Request, res as Response);

      expect(res.json).toHaveBeenCalledWith({
        error: "Pokemon already in pokeball",
      });
    });
  });
});
