import { Request, Response } from "express";
import { groudon, kyogre, rayquaza } from "../../fixtures.js";
import PokemonController from "../PokemonController.js";
import { PokemonCommonData } from "../../types.js";

describe("Given the addMonument function", () => {
  const res = {
    status: jest.fn().mockReturnThis(),
    json: jest.fn(),
  } as Pick<Response, "status" | "json">;

  let legendaryPokemons = [kyogre, groudon, rayquaza];
  let pokemonController = new PokemonController(legendaryPokemons);

  const enteiData: PokemonCommonData = {
    name: "Entei",
    pokedexPosition: "0244",
  };

  const kyogreData: PokemonCommonData = {
    name: "Kyogre",
    pokedexPosition: "0382",
  };

  afterEach(() => {
    jest.clearAllMocks();
    legendaryPokemons = [kyogre, groudon, rayquaza];
    pokemonController = new PokemonController(legendaryPokemons);
  });

  describe("When it receives a request with Gengar data", () => {
    const req = {
      body: enteiData,
    } as Pick<Request, "body">;

    test("Then it should call the received response's method status with 201", () => {
      pokemonController.addPokemon(req as Request, res as Response);

      expect(res.status).toHaveBeenCalledWith(201);
    });

    test("Then it should call the received response's method json with a pokemon named 'Entei'", () => {
      const { name } = enteiData;

      pokemonController.addPokemon(req as Request, res as Response);

      expect(res.json).toHaveBeenCalledWith(expect.objectContaining({ name }));
    });

    test("Then it should call the received response's method json with a pokemon in the pokedex position '0244'", () => {
      const { pokedexPosition } = enteiData;

      pokemonController.addPokemon(req as Request, res as Response);

      expect(res.json).toHaveBeenCalledWith(
        expect.objectContaining({ pokedexPosition }),
      );
    });
  });

  describe("When it receives a request with Kyogre data that is already in the pokedex", () => {
    const req = {
      body: kyogreData,
    } as Pick<Request, "body">;

    test("Then it should call the received response's method status with 409", () => {
      pokemonController.addPokemon(req as Request, res as Response);

      expect(res.status).toHaveBeenCalledWith(409);
    });

    test("Then it should call the received response's method json with a 'Pokemon already in pokedex' error", () => {
      pokemonController.addPokemon(req as Request, res as Response);

      expect(res.json).toHaveBeenCalledWith({
        error: "Pokemon already in pokedex",
      });
    });
  });
});
