$(function(){
	
	var presetLayout = {
		name: "preset"
	};
	
	var style = {
		selectors: {
			"node": {
				fillColor: "#555",
				height: 30,
				width: 30,
				labelFontSize: 12,
				labelFillColor: "#fff",
				labelOutlineColor: "#555",
				labelOutlineWidth: 3,
				labelValign: "middle",
				labelHalign: "middle",
				labelText: {
					passthroughMapper: "name"
				},
				labelFontWeight: "bold"
			},
			
			"node.category": {
				height: 50,
				width: 50
			},
			
			"node:selected": {
				borderWidth: 3,
				borderColor: "yellow"
			},
			
			".layout": {
				fillColor: "#1f62b6",
				labelOutlineColor: "#1f62b6"
			},
			
			"edge[source='layouts']": {
				lineColor: "#a3c6f2",
				sourceArrowColor: "#a3c6f2",
				targetArrowColor: "#a3c6f2"
			},
			
			".style": {
				fillColor: "#de8b29",
				labelOutlineColor: "#de8b29"
			},
			
			"edge[source='styles']": {
				lineColor: "#f9cd98",
				sourceArrowColor: "#f9cd98",
				targetArrowColor: "#f9cd98"
			},
			
			".api": {
				fillColor: "#6eb846",
				labelOutlineColor: "#6eb846"
			},
			
			"edge[source='api']": {
				lineColor: "#b4f093",
				sourceArrowColor: "#b4f093",
				targetArrowColor: "#b4f093"
			},
		}
	};
	
	var sizeMapper = {
		defaultValue: 30,
		customMapper: function( ele ){ return this.data("name").length * 5 + 10; }
	};
	
	var ex1Style = $.extend(true, {}, style, {
		selectors: {
			"node": { height: sizeMapper, width: sizeMapper },
			"node.category": { height: sizeMapper, width: sizeMapper, shape: "rectangle" },
			"edge": { sourceArrowShape: "circle", targetArrowShape: "triangle" }
		}
	});
	
	$("#cy").cy({
		
		elements: {
			nodes: [
			        {
			        	data: { id: "cy", name: "Cytoscape Web", tooltip: "Cytoscape Web is a graph visualisation library that allows for complex styling, rich event bindings, and concise selectors to query the graph." },
			        	classes: "category"
			        },
			        
			        // Layouts
			        //////////////////////////////////////////////
			        
			        {
			        	data: { id: "layouts", name: "Layouts", tooltip: "Cytoscape Web can have any number of layouts with its plugin system.  We've included a few here for you to try." },
			        	classes: "layout category"
			        },
			        
			        {
			        	data: { id: "grid", name: "Grid", tooltip: "Try out the grid layout." },
			        	classes: "layout"
			        },
			        
			        {
			        	data: { id: "random", name: "Random", tooltip: "Try out the random layout." },
			        	classes: "layout"
			        },
			        
			        {
			        	data: { id: "arbor", name: "Arbor", tooltip: "Try out the force-directed arbor layout." },
			        	classes: "layout"
			        },
			        
			        {
			        	data: { id: "preset", name: "Preset", tooltip: "Try out the preset layout.  The preset layout was used to place the nodes initially.", options: presetLayout },
			        	classes: "layout"
			        },
			        
			        // Styles
			        //////////////////////////////////////////////
			        
			        {
			        	data: { id: "styles", name: "Visual style", tooltip: "Styling in Cytoscape Web combines selectors with mappers, providing rich, CSS-like control over style with the power of Cytoscape's mapper concept." },
			        	classes: "style category"
			        },
			        
			        {
			        	data: { id: "size", name: "Example", tooltip: "Just for fun, set a different visual style.", style: ex1Style },
			        	classes: "style"
			        },
			        
			        {
			        	data: { id: "initial", name: "Initial", tooltip: "Go back to the initial style.", style: style },
			        	classes: "style"
			        },
			        
			        // API
			        //////////////////////////////////////////////
			        
			        {
			        	data: { id: "api", name: "Super easy API", tooltip: "Borrowing concepts and conventions from jQuery, Cytoscape Web is easy to use yet powerful." },
			        	classes: "api category"
			        },
			        
			        {
			        	data: { id: "animation", name: "Animation example", code: 'this.animate({ bypass: { color: "red" } });' },
			        	classes: "api"
			        }
			        
			],
			edges: [
			       { data: { source: "cy", target: "layouts" } },
			       { data: { source: "cy", target: "styles" } },
			       
			       { data: { source: "layouts", target: "grid" } },
			       { data: { source: "layouts", target: "random" } },
			       { data: { source: "layouts", target: "arbor" } },
			       { data: { source: "layouts", target: "preset" } },
			       
			       { data: { source: "styles", target: "size" } },
			       { data: { source: "styles", target: "initial" } }
			]
		},
		
		style: style,
		
		ready: function(){
			window.cy = this; // just for debugging in the console
		}
	
	});
	
});