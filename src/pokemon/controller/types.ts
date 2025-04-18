import { Request, Response } from "express";

export interface PokemonControllerStructure {
  getPokemons: (req: Request, res: Response) => void;
  addPokemon: (req: Request, res: Response) => void;
  deletePokemon: (req: Request, res: Response) => void;
  addToPokeball: (req: Request, res: Response) => void;
}
