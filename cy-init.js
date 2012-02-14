$(function(){
	
	$("#cy").cy({
		
		elements: {
			nodes: [
			        {
			        	data: { id: "cy", name: "Cytoscape Web" },
			        	classes: "category"
			        },
			        
			        // Layouts
			        //////////////////////////////////////////////
			        
			        {
			        	data: { id: "layouts", name: "Layouts", tooltip: "Cytoscape Web can have any number of layouts with its plugin system." },
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
			        
			        // Styles
			        //////////////////////////////////////////////
			        
			        {
			        	data: { id: "style", name: "Visual style" },
			        	classes: "style big"
			        },
			        
			        {
			        	data: { id: "size", name: "" },
			        	classes: "style"
			        }
			        
			        
			        
			],
			edges: [
			       { data: { source: "cy", target: "layouts" } },
			       
			       { data: { source: "layouts", target: "grid" } },
			       { data: { source: "layouts", target: "random" } },
			       { data: { source: "layouts", target: "arbor" } }
			]
		},
		
		style: {
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
					lineColor: "#a3c6f2"
				},
				
				".style": {
					fillColor: "#de8b29",
					labelOutlineColor: "#de8b29"
				}
			}
		},
		
		ready: function(){
			window.cy = this; // just for debugging in the console
		}
	
	});
	
});