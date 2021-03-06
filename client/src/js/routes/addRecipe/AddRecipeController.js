function AddRecipeController ($scope, $rootScope, $location, DataService) {
  const ingredients = []

  $scope.addIngredient = function () {
    const {name, quantity} = $scope
    ingredients.push({name, quantity})
    $scope.ingredients = ingredients
    console.log('Ingredient added')
  }

  $scope.addRecipe = function () {
    const {title, recipeImg, description, ingredients} = $scope
    console.log({title, recipeImg, description, ingredients})
    DataService.addRecipe({title, recipeImg, description, ingredients})
      .then(() => $location.path('/'))
  }
}

module.exports = AddRecipeController
