// export class Ingredient {
// 	public name: string;
// 	public amount: number;

// 	constructor (name: string, amount: number) {
// 		this.name = name;
// 		this.amount = amount;
// 	}
// }

//THIS IS THE SAME THAT:
export class Ingredient {
	constructor(public name: string, public amount: number) {}
}