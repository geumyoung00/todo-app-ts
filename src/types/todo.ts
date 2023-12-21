export class todo {
	id: string;
	text: string;

	constructor(text: string) {
		this.id = new Date().toISOString();
		this.text = text;
	}
}
