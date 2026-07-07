import { randomUUID } from "node:crypto";

interface TrainerProps {
	name: string;
}

export class Trainer {
	private constructor(
		public readonly id: string,
		public readonly name: string,
	) {}

	static create(props: TrainerProps, id: string = randomUUID()): Trainer {
		if (!props.name.trim()) {
			throw new Error("Name cannot be empty");
		}

		return new Trainer(id, props.name);
	}
}
