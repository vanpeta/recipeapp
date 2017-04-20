import { EventEmitter } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';

export class ShoppingListService {
	private ingredients: Ingredient[] = [
		new Ingredient('Apples', 5),
    new Ingredient('Tomatos', 3)
	];
	newIngredient = new EventEmitter<Ingredient>();

	getIngredients() {
		return this.ingredients.slice();
	}

	addIngredient (ingredient: Ingredient) {
		this.ingredients.push(ingredient);
	}
}