export class RecipeCardModel
{
    recipePicture: string;
    desc:string;
    recipeName: string;
    ingredients: String;
    style: string;
    category: string;
    steps: string;
    // may or may not use this? would use it for the name of who recommended a recipe
    recommend: string | undefined;


    constructor(recipePicture: string, desc:string, recipeName: string, ingredients: String, style: string, category: string, steps: string,
        recommend: string) 
    {
        this.recipePicture = recipePicture;
        this.desc = desc;
        this.recipeName = recipeName;
        this.ingredients = ingredients;
        this.style = style;
        this.category = category;
        this.steps = steps;
        this.recommend = recommend;

    }
}