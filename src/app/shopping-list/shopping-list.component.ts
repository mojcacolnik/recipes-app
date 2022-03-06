import { ShoppingListService } from './shopping-list.service';
import { Ingredient } from './../shared/ingredient.model';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[] = [];
  private sub: Subscription;

  constructor(private shoppinglistService: ShoppingListService) {}

  ngOnInit(): void {
    this.ingredients = this.shoppinglistService.getIngredients();
    this.sub = this.shoppinglistService.ingredientsChanged.subscribe(
      (ingredients: Ingredient[]) => {
        this.ingredients = ingredients;
      }
    );
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  onIngredientAdded(ingredient: Ingredient): void {
    this.shoppinglistService.addIngredient(ingredient);
  }
}
