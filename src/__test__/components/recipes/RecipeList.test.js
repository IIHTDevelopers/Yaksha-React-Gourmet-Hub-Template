const fs = require('fs');
const path = require('path');

describe('boundary', () => {
    let fileContent;

    beforeAll(() => {
        const filePath = path.resolve(__dirname, '../../../components/recipes/RecipeList.js');
        fileContent = fs.readFileSync(filePath, 'utf8');
    });

    test('RecipeListComponent boundary should fetch all recipes', () => {
        expect(fileContent).toMatch(/RecipeService\.getAllRecipes\(\)/);
    });

    test('RecipeListComponent boundary should contain handleGetDetails function', () => {
        expect(fileContent).toMatch(/const handleGetDetails = \(recipe\) =>/);
    });

    test('RecipeListComponent boundary should contain handlePaymentSuccess function', () => {
        expect(fileContent).toMatch(/const handlePaymentSuccess = \(recipeId\) =>/);
    });

    test('RecipeListComponent boundary should contain handleAddRecipe function', () => {
        expect(fileContent).toMatch(/const handleAddRecipe = \(newRecipe\) =>/);
    });

    test('RecipeListComponent boundary should render search bar', () => {
        expect(fileContent).toMatch(/<SearchBar searchTerm=\{searchTerm\} setSearchTerm=\{setSearchTerm\} \/>/);
    });

});
