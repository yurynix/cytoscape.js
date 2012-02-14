$(function(){
	$("#cy").cy(function(){
		var animation = cy.nodes("#animation");
		
		var code = animation.data("code");
		animation.data("tooltip", '<code>' + code + '</code>').click(function(){
			console.log(code);
			eval( code );
		});
		
	});
});