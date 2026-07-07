import { randomUUID } from "node:crypto";

export type PokemonType =
	| "normal"
	| "fire"
	| "water"
	| "electric"
	| "grass"
	| "ice"
	| "fighting"
	| "poison"
	| "ground"
	| "flying"
	| "psychic"
	| "bug"
	| "rock"
	| "ghost"
	| "dragon"
	| "dark"
	| "steel"
	| "fairy";

interface PokemonProps {
	name: string;
	species: string;
	types: PokemonType[];
	level: number;
	trainerId: string;
}

export class Pokemon {
	private constructor(
		public readonly id: string,
		public readonly name: string,
		public readonly species: string,
		public readonly types: PokemonType[],
		public readonly level: number,
		public readonly trainerId: string,
		public readonly capturedAt: Date,
	) {}

	static create(props: PokemonProps, id: string = randomUUID()): Pokemon {
		if (!props.name.trim()) {
			throw new Error("Name cannot be empty");
		}

		if (props.types.length < 1 || props.types.length > 2) {
			throw new Error("Pokemon must have between 1 and 2 types");
		}

		if (props.level < 1 || props.level > 100) {
			throw new Error("Level must be between 1 and 100");
		}

		if (!props.trainerId.trim()) {
			throw new Error("Pokemon must belong to a trainer");
		}

		return new Pokemon(
			id,
			props.name,
			props.species,
			props.types,
			props.level,
			props.trainerId,
			new Date(),
		);
	}
}
