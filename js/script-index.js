$(document).ready( function(){

	//La variable "recipesArray" esta declarada en el archivo "data/recipes.js"
	renderHighlightedRecipes(recipesArray);

	$(".home .js-back").hide(); //SELECCIONANDO EL DIV JS-BACK DE HOME(INDEX.HTML)
	$(".recipe .js-menu").hide(); //SELECCIONANDO EL DIV JS-BACK DE RECIPE(RECIPE.HTML)

});


/*
* Función que se encarga de pintar TODAS las recetas que tengan 
* marcado el atributo "highlighted" como TRUE
*/
function renderHighlightedRecipes(recipesArray) {
	//console.log('Recipes: ', recipesArray);
	recipesArray.forEach(function(e){
		var pintado = e.highlighted; //LLAME A CADA ELEMENTO QUE POSEE LA PROPIEDAD "highlighted"
		if (pintado == true) { //SI ERAN TRUE
			renderRecipe(pintado); //LLAME A LA FUNCION "renderRecipe"
		}	
	})
	//$(selector).attr(atributo)
}

/*
* Función que se encarga de pintar UNA recetas que tenga 
* marcado el atributo "highlighted" como TRUE
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-recipe.html"
*/
function renderRecipe(recipe) {
	console.log('Voy a pintar la receta: ', recipe);
}



/*
* Función que se encarga de pintar todas las actividades
*/
function renderActivities(activitiesArray) {
	console.log('Activities: ', activitiesArray);
}

/*
* Función que se encarga de pintar una actividad
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-activity.html"
*/
function renderActivity(recipe) {
	
}

/*MIS FUNCIONES - NIVELACION*/
(function printNews (){
	$(".callout-news p").append('NUEVAS RECETAS'); //AGREGANDO TEXTO A P
})()

