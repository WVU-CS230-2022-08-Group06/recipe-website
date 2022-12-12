export class RecipeCardModel
{
    recipePicture: string;
    desc:string;
    recipeName: string;
    ingredients: String;
    style: string;
    category: string;
    steps: string;
    cookTime: number;
    prepTime: number;
    // may or may not use this? would use it for the name of who recommended a recipe
    recommend: string | undefined;
    creatorName: string;
    savedBy: string;


    constructor(recipePicture: string, desc:string, recipeName: string, ingredients: String, style: string, category: string, steps: string,
        recommend: string, cook: number, prep: number, creator: string, save: string) 
    {
        this.recipePicture = recipePicture;
        this.desc = desc;
        this.recipeName = recipeName;
        this.ingredients = ingredients;
        this.style = style;
        this.category = category;
        this.steps = steps;
        this.recommend = recommend;
        this.cookTime = cook;
        this.prepTime = prep;
        this.creatorName = creator;
        this.savedBy = save;

    }
}