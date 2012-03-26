$(function(){
	
	// you have to replace this when you add new nodes
	var presetLayout = {
		name: "preset",
		positions: {"cy":{"x":738.5212157568777,"y":289.0795263394625},"layouts":{"x":741.1874058454833,"y":171.64761733767347},"grid":{"x":629.8419176767356,"y":159.03836091945618},"random":{"x":704.4077453015509,"y":89.62589330524607},"arbor":{"x":828.5441799618371,"y":105.9330337698272},"preset":{"x":870.776889667075,"y":163.28478242037903},"styles":{"x":629.2050551870032,"y":352.8455726687564},"size":{"x":617.7825852551168,"y":440.1819169150772},"initial":{"x":534.7103781237981,"y":309.3550379984854},"api":{"x":862.6913548094922,"y":356.8609067340916},"animation":{"x":860.8881944758974,"y":456.0393612374793},"events":{"x":906.1538488309886,"y":272.31896040271914},"selectors":{"x":974.6887508878349,"y":401.1124684537999},"edges":{},"e1":{},"e2":{},"e3":{},"e4":{},"e5":{},"e6":{},"e7":{},"e8":{},"e9":{},"e10":{},"e11":{}}
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
				labelOutlineWidth: 2,
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
				borderWidth: 2,
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
			
			".semi": {
				opacity: 0.5
			}
		}
	};
	
	var ex1Style = $.extend(true, {}, style, {
		selectors: {
			"node": { shape: "triangle", height: 20, width: 20, labelValign: "top", labelHalign: "middle", labelOutlineWidth: 0, labelFillColor: "#000", labelFontWeight: "normal" },
			"node.category": { shape: "square", height: 65, width: 65, shape: "rectangle" },
			"edge": { sourceArrowShape: "circle", targetArrowShape: "triangle" }
		}
	});
	
	$("#cy").cy({
		
		layout: presetLayout,
		
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
			        	data: { id: "arbor", name: "Arbor", tooltip: "Try out the force-directed arbor layout.", options: { maxSimulationTime: 10000 } },
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
			        	data: { id: "api", name: "Great API", tooltip: "Borrowing concepts and conventions from jQuery, Cytoscape Web is easy to use yet powerful." },
			        	classes: "api category"
			        },
			        
			        {
			        	data: { id: "animation", name: "Animation example",
code: function(){
this.animate({ bypass: {
  height: 100,
  width: 100
} });
}
			        	},
			        	classes: "api"
			        },
			        
			        {
			        	data: { id: "events", name: "Events example", immediate: true,
code: function(){
this.one("drag", function(){
  this.data("name", "Dragged");
});
}
			        	},
			        	classes: "api"
			        },
			        
			        {
			        	data: { id: "selectors", name: "Selectors example",
code: function(){
this.neighborhood()
  .neighborhood()
  .toggleClass("semi");
}
			        	},
			        	classes: "api"
			        }
			        
			],
			edges: [
			       { data: { source: "cy", target: "layouts" } },
			       { data: { source: "cy", target: "styles" } },
			       { data: { source: "cy", target: "api" } },
			       
			       { data: { source: "layouts", target: "grid" } },
			       { data: { source: "layouts", target: "random" } },
			       { data: { source: "layouts", target: "arbor" } },
			       { data: { source: "layouts", target: "preset" } },
			       
			       { data: { source: "styles", target: "size" } },
			       { data: { source: "styles", target: "initial" } },
			       
			       { data: { source: "api", target: "animation" } },
			       { data: { source: "api", target: "events" } },
			       { data: { source: "api", target: "selectors" } }
			]
		},
		
		style: style,
		
		ready: function(){
			window.cy = this; // just for debugging in the console
			
			cy.container().cytoscapewebPanzoom();
		}
	
	});
	
});