// put your javascript code here
var category_template,animals_template,animal_template;

var current_category = animals_data.category[0];
var current_animal = current_category.animals[0];


function showTemplate(template, data){
	var html    = template(data);
	$('#content').html(html);
}


$(document).ready(function(){

	//
	// compile all of our templates ready for use
	//
	var source   = $("#category-template").html();
	category_template = Handlebars.compile(source);
	
	source   = $("#animals-template").html();
	animals_template = Handlebars.compile(source);
	
	
	source   = $("#animal-template").html();
	animal_template = Handlebars.compile(source);

	// 
	//  clicking on the categorys tab shows the 
	//  thumbnails of all the categorys
	//
	$("#category-tab").click(function () {

		// displays the categorys template
		showTemplate(category_template, animals_data);

		// make the categorys tab the active one
		// first make the currently active tab inactive
		$(".nav-tabs .active").removeClass("active");
		// then make categorys tab active
		$("#category-tab").addClass("active");
		
		
				$(".category-thumbnail").click(function (){
			
			// get the index (position in the array)
			// of the category we clicked on
			// "this" is the element that was clicked on
			// data("id") gets the attribute data-id
			// (which we set to the index of the category in
			// the array - @index)
			var index = $(this).data("id");

			// set the current category to this category
			current_category = animals_data.category[index];

			// displays the animals template
			showTemplate(animals_template, current_category);

			// add an on click al all the animal thumbnails
			// which displays the animal in a modal popup
			$(".animal-thumbnail").click(function (){
				// get the index (position in the array)
				// of the  we clicked on
				// "this" is the element that was clicked on
				// data("id") gets the attribute data-id
				// (which we set to the index of the animal in
				// the array - @index)
				var index = $(this).data("id");

				// set the current animal to this animal
				current_animal = current_category.animals[index];
				
				// displays the single animal template
				showTemplate(animal_template, current_animal);
			});
		});
		
		
	});


		$("#animal-tab").click(function () {
		
		// displays the animals template
		showTemplate(animals_template, current_category);

		// make the animals tab the active one
		// first make the currently active tab inactive
		$(".nav-tabs .active").removeClass("active");
		// then make animals tab active
		$("#animal-tab").addClass("active");

		// add an on click al all the animal thumbnails
		// which displays the animal in a modal popup
		$(".animal-thumbnail").click(function (){
			// get the index (position in the array)
			// of the animal we clicked on
			// "this" is the element that was clicked on
			// data("id") gets the attribute data-id
			// (which we set to the index of the animal in
			// the array - @index)
			var index = $(this).data("id");

			// set the current animal to this animal
			current_animal = current_category.animals[index];
			
			// displays the single animal template
			showTemplate(animal_template, current_animal);
		});
	});

	
	
	$("#category-tab").click();
	
	
	
});