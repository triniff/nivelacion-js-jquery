$(document).ready(function(){
	console.log("I'm ready >:O");
	$(".recipe .js-menu").hide(); //SELECCIONANDO EL DIV JS-BACK DE RECIPE(RECIPE.HTML)

	$(".js-show-make").click(function() {
  		$(".page").addClass("make");
  		$(".js-show-recipe").removeClass("active");
  		$(this).addClass("active");
	});
	$(".js-show-recipe").click(function() {
  		$(".page").removeClass("make");
  		$(".js-show-make").removeClass("active");
  		$(this).addClass("active");
	});
	
	$(".js-back").click(function(){ //AGREGANDO FUNCIONALIDAD BOTON (?)
		$(".recipe .js-menu").toggle();
	})
})