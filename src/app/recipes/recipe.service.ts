import { EventEmitter, Injectable } from '@angular/core';

import { Recipe } from './recipe.module';

import { Ingredient } from '../shared/ingredient.model';

import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
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
		'Salmon con salsa de soja','https://images.food52.com/VRSsnY-midXT3jJtm_paYaEKVik=/753x502/2dd88c62-689c-43cf-874e-b96d901fc58d--20120804_food52_08-21-12-2799.jpg',
		[
			new Ingredient ('Salmon', 1),
			new Ingredient ('soy sauce', 1)
		])
  ];

	constructor(private slService: ShoppingListService) { }

	getRecipes() {
		return this.recipes.slice();
	}

	addingredientsToShoppingList (ingredients: Ingredient[]) {
		this.slService.addIngredients(ingredients);
	}
}