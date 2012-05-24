$(function(){

	var $cy = $("#cy");
	var smallScreen = window.screen.width <= 320;

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

				$button
					.removeAttr("disabled")
					.bind("click", function(){
						if( smallScreen ){
							$(window).scrollTo( $cy, {
								duration: 250,
								onAfter: function(){
									setTimeout(function(){
										seval( script );
									}, 250);
								}
							} );
						} else {
							seval( script );
						}
					});

				if( url.match(/init\.js/) ){
					$cy.addClass("loaded");
					seval( script );
				}
			}
		});
	});



	$("#fit-button").bind("click", function(){
		cy.layout();
	});

	if( !smallScreen ){
		$cy
			.waypoint(function(e, direction){
				$(this).toggleClass("sticky", direction == "down");
			})
			.width( $cy.width() );
	}

	

});