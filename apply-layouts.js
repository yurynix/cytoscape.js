$(function(){
	
	$("#cy").cy(function(){
		var cy = this;
		
		cy.elements(".layout").not(".category").bind("click", function(){
			var layout = this.data("id");
			
			cy.layout({
				name: layout
			});
		});
	});
	
});