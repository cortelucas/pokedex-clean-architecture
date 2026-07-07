import { describe, expect, it } from "vitest";
import { Pokemon } from "../../../src/domain/entities/pokemon";

describe("Pokemon entity", () => {
	it("should create a pokemon with valid data", () => {
		const pokemon = Pokemon.create({
			name: "Pikachu",
			species: "Pikachu",
			types: ["electric"],
			level: 5,
			trainerId: "trainer-1",
		});

		expect(pokemon.name).toBe("Pikachu");
		expect(pokemon.species).toBe("Pikachu");
		expect(pokemon.types).toEqual(["electric"]);
		expect(pokemon.level).toBe(5);
		expect(pokemon.trainerId).toBe("trainer-1");
		expect(pokemon.id).toBeDefined();
		expect(pokemon.capturedAt).toBeInstanceOf(Date);
	});

	it("should allow a pokemon with two types", () => {
		const pokemon = Pokemon.create({
			name: "Bulbasaur",
			species: "Bulbasaur",
			types: ["grass", "poison"],
			level: 5,
			trainerId: "trainer-1",
		});

		expect(pokemon.types).toEqual(["grass", "poison"]);
	});

	it("should not allow an empty name", () => {
		expect(() =>
			Pokemon.create({
				name: "",
				species: "Pikachu",
				types: ["electric"],
				level: 5,
				trainerId: "trainer-1",
			}),
		).toThrow("Name cannot be empty");
	});

	it("should not allow a pokemon with zero types", () => {
		expect(() =>
			Pokemon.create({
				name: "Pikachu",
				species: "Pikachu",
				types: [],
				level: 5,
				trainerId: "trainer-1",
			}),
		).toThrow("Pokemon must have between 1 and 2 types");
	});

	it("should not allow a pokemon with more than two types", () => {
		expect(() =>
			Pokemon.create({
				name: "Pikachu",
				species: "Pikachu",
				types: ["electric", "fire", "water"],
				level: 5,
				trainerId: "trainer-1",
			}),
		).toThrow("Pokemon must have between 1 and 2 types");
	});

	it("should not allow level below 1", () => {
		expect(() =>
			Pokemon.create({
				name: "Pikachu",
				species: "Pikachu",
				types: ["electric"],
				level: 0,
				trainerId: "trainer-1",
			}),
		).toThrow("Level must be between 1 and 100");
	});

	it("should not allow level above 100", () => {
		expect(() =>
			Pokemon.create({
				name: "Pikachu",
				species: "Pikachu",
				types: ["electric"],
				level: 101,
				trainerId: "trainer-1",
			}),
		).toThrow("Level must be between 1 and 100");
	});

	it("should not allow an empty trainerId", () => {
		expect(() =>
			Pokemon.create({
				name: "Pikachu",
				species: "Pikachu",
				types: ["electric"],
				level: 5,
				trainerId: "",
			}),
		).toThrow("Pokemon must belong to a trainer");
	});
});
