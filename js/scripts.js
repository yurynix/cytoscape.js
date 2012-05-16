$(function(){

	function seval( code ){
		return eval( "(function(){ " + code + " })();" );
	}

	$(".code-example").each(function(){
		var $pre = $(this);
		var url = $pre.attr("data-script");
		var $button = $('<button disabled class="code-button">Run</button>');

		$pre.prevAll("p:first").prepend( $button );

		$.ajax({
			url: url,
			dataType: "text",
			success: function( script ){
				
				$pre
					.addClass("loaded")
					.html( script )
					.chili();

				$button.removeAttr("disabled");

				$button.bind("click", function(){
					$(window).scrollTo( $("#cy"), {
						duration: 250,
						onAfter: function(){
							setTimeout(function(){
								seval( script );
							}, 250);
							
						}
					} );
				});

				if( url.match(/init\.js/) ){
					$("#cy").addClass("loaded");
					seval( script );
				}
			}
		});
	});

	$("#fit-button").bind("click", function(){
		cy.layout();
	});

});