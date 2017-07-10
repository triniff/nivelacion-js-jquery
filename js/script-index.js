$(document).ready( function(){
	//La variable "recipesArray" esta declarada en el archivo "data/recipes.js"
	renderHighlightedRecipes(recipesArray);

	$(".home .js-back").hide(); //SELECCIONANDO EL DIV JS-BACK DE HOME(INDEX.HTML)
	$(".recipe .js-menu").hide(); //SELECCIONANDO EL DIV JS-BACK DE RECIPE(RECIPE.HTML)

	renderActivities(activities);
});


/*
* Función que se encarga de pintar TODAS las recetas que tengan 
* marcado el atributo "highlighted" como TRUE
*/
function renderHighlightedRecipes(recipesArray) {
	//console.log('Recipes: ', recipesArray);
	recipesArray.forEach(function(e){
		if (e.highlighted == true) { //LLAME A CADA ELEMENTO QUE POSEE LA PROPIEDAD "highlighted", SI ERAN TRUE
			renderRecipe(e); //LLAME A LA FUNCION "renderRecipe"
		}	
	})
}

/*
* Función que se encarga de pintar UNA recetas que tenga 
* marcado el atributo "highlighted" como TRUE
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-recipe.html"
*/
function renderRecipe(recipe) {
	//console.log('Voy a pintar la receta: ', recipe);
	var titulo = recipe.name;
	var autor = recipe.source.name;
	var imagen = "img/recipes/320x350/" + titulo + ".jpg";
	$(".list-recipes").append('<a class="item-recipe" href="#"><span class="attribution"><span class="title-recipe">'+ titulo +'</span><span class="metadata-recipe"><span class="author-recipe">' + autor + '</span><span class="bookmarks-recipe"><span class="icon-bookmark"></span> </span></span></span><img src=' + imagen + ' /></a>')
}



/*
* Función que se encarga de pintar todas las actividades
*/
function renderActivities(activitiesArray) {
	console.log('Activities: ', activitiesArray);
	if (activitiesArray.length > 0) {
		$('.wrapper-message').hide();
	}
	var avatar, name, recipe, text, place, imagen;
	var imprimir = _(activitiesArray).forEach(function(e){ // underscore.js ??
		avatar = e.userAvatar;
		name = e.userName.split(" ")[0];
		recipe = e.recipeName;
		text = e.text;
		place = e.place;
		imagen = e.image;
	})
	$(".list-activities").append('<a href="#" class="item-activity"><span class="attribution"><span class="avatar"><img src="'+ avatar +'")" class="image-avatar"></span><span class="meta"><span class="author">'+ name +'</span> made <span class="recipe">'+ recipe +'</span>:' + text + '<span class="location">&mdash;' + place + '</span></span></span><div class="bg-image" style="background-image: url(' + imagen + ');"></div></a>')
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

