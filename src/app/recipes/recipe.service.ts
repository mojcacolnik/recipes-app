import { Subject } from 'rxjs';
import { ShoppingListService } from './../shopping-list/shopping-list.service';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Recipe } from './recipe.model';

@Injectable({ providedIn: 'root' })
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(
      'Test Recipe',
      'this is a test',
      'https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1934&q=80',
      [new Ingredient('Meat', 1), new Ingredient('French Fries', 20)]
    ),
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number): Recipe {
    return this.recipes[index];
  }

  addIngredientToShoppingList(ingredients: Ingredient[]): void {
    this.slService.addIngredients(ingredients);
  }
}
