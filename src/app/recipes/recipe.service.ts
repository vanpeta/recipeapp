import { Recipe } from './recipe.module';

export class RecipeService {
	private recipes: Recipe[] = [
    new Recipe('A test Recipe', 'This is a simple test','https://static01.nyt.com/images/2015/08/14/dining/14ROASTEDSALMON/14ROASTEDSALMON-superJumbo.jpg'),
    new Recipe('Another test Recipe', 'This is a simple test','https://static01.nyt.com/images/2015/08/14/dining/14ROASTEDSALMON/14ROASTEDSALMON-superJumbo.jpg')
  ];

	getRecipes() {
		return this.recipes.slice();
	}
}