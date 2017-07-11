$(document).ready(function(){
	console.log("I'm ready >:O");
	$(".recipe .js-menu").hide(); //SELECCIONANDO EL DIV JS-BACK DE RECIPE(RECIPE.HTML)

	$(".js-show-make").click(function() {
  		$(".page").addClass("make");
	});
	$(".js-show-recipe").click(function() {
  		$(".page").removeClass("make");
	});
	
})