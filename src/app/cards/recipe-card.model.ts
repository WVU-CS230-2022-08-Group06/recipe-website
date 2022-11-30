export class RecipeCardModel
{
    recipePicture: string;
    desc:string;
    recipeName: string;
    allergies: string;
    ingredients: String;
    style: string;
    category: string;


    constructor(recipePicture: string, desc:string, recipeName: string, allergies: string, ingredients: String, style: string, category: string) 
    {
        this.recipePicture = recipePicture;
        this.desc = desc;
        this.recipeName = recipeName;
        this.allergies = allergies;
        this.ingredients = ingredients;
        this.style = style;
        this.category = category;

    }
}