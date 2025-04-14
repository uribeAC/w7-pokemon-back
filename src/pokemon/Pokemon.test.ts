import Pokemon from "./Pokemon.js";

describe("Given a pokemon instance", () => {
  describe("When is instantiated with 'Toucannon'", () => {
    test("Then it should have the name 'Toucannon'", () => {
      const expectedName = "Toucannon";

      const toucannonPokemon = new Pokemon("Toucannon", "", "");
      const actualName = toucannonPokemon.name;

      expect(actualName).toBe(expectedName);
    });

    test("Then it should have the pokedex position '0733'", () => {
      const expectedPosition = "0733";

      const toucannonPokemon = new Pokemon("", "0733", "");
      const actualPosition = toucannonPokemon.pokedexPosition;

      expect(actualPosition).toBe(expectedPosition);
    });
  });
});
