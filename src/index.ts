export class Main {
	async execute(): Promise<string> {
		return "Hello World";
	}
}

const main = new Main();
main.execute();
