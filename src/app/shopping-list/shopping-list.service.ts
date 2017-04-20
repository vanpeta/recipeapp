import { EventEmitter } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';

export class ShoppingListService {
	ingredientsChanged = new EventEmitter<Ingredient[]>();
	private ingredients: Ingredient[] = [];

	newIngredient = new EventEmitter<Ingredient>();

	getIngredients() {
		return this.ingredients.slice();
	}

	addIngredient (ingredient: Ingredient) {
		this.ingredients.push(ingredient);
		this.ingredientsChanged.emit(this.ingredients.slice());
	}
	
	addIngredients (ingredients: Ingredient[]) {
	// 	for (let ingredient of ingredients ) {
	// 		this.addIngredient(ingredient);
	// 	}
	// This would work but it would emit a lot of innesary events
	this.ingredients.push(...ingredients);
	this.ingredientsChanged.emit(this.ingredients.slice());
	}
}