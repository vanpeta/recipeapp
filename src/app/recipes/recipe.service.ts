import { EventEmitter } from '@angular/core';

import { Recipe } from './recipe.module';

import { Ingredient } from '../shared/ingredient.model';

export class RecipeService {
	recipeSelected = new EventEmitter<Recipe>();
	
	private recipes: Recipe[] = [
    new Recipe('Lubina',
		'Lubina con limones',
		'https://static01.nyt.com/images/2015/08/14/dining/14ROASTEDSALMON/14ROASTEDSALMON-superJumbo.jpg',
		[
			new Ingredient ('Lubina', 1),
			new Ingredient ('lemons', 6)
		]),
    new Recipe('Salmon',
		'Salmon con salsa de soja','https://cdn.pixabay.com/photo/2015/04/08/13/13/food-712665_960_720.jpg',
		[
			new Ingredient ('Salmon', 1),
			new Ingredient ('soy sauce', 1)
		])
  ];

	getRecipes() {
		return this.recipes.slice();
	}
}