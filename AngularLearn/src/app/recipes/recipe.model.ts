import { Ingredient } from "../shared/ingredient.model";

export class Recipe {
  public name: string;
  public description: string;
  public imagePath: string;
  public items : Ingredient[];
  constructor(name: string, desc: string, imagePath: string, items: Ingredient[]) {
    this.name = name;
    this.description = desc;
    this.imagePath = imagePath;
    this.items = items;
  }
}
