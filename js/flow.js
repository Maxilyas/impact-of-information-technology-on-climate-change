
function flow_p1(scroll)
{
    //Make an SVG Container
    var svgContainer = d3.select(scroll).append("flow")
                                        .append("svg")
                                      .attr("width", 1)
                                      .attr("height", 1);

    var y = $(window).width()/2;
    var x =100;
    svgContainer.attr('transform',`translate(`+x+`,-`+y+`) rotate(-90)`);


    svgContainer.attr("width", "100%")
                .attr("height", "100%")
                .attr("cx", 200)
                .attr("cy", 200);



    const data = {
        nodes: [
            { id: "A1" },
            { id: "A2" },
            { id: "C1" },
            { id: "D1" },
            { id: "E1" },
            { id: "F1" }
        ],
        links: [
            { source: "F1", target: "A1", value: 0.416 , opacity: "1", color: " #FFC300" },
            { source: "F1", target: "A2", value: 3.35 , opacity: "0", color: " #e68c40" },
            { source: "F1", target: "C1", value: 22 , opacity: "0", color: " #31c120" },
            { source: "F1", target: "D1", value:  113.5 , opacity: "0", color: "#336eff" },
            { source: "F1", target: "E1", value:  200 , opacity: "0", color: " #C70039" }
        ]
    }


    var sankey = d3.sankey()
                 .size([width, height])
                 .nodeId(d => d.id)
                 .nodeWidth(20)
                 .nodePadding(10)
                 .nodeAlign(d3.sankeyCenter);

    let graph = sankey(data);


    let links = svgContainer.append("g")
               .classed("links", true)
               .selectAll("path")
               .data(graph.links)
               .enter()
               .append("path")
               .classed("link", true)
               .attr("d", d3.sankeyLinkHorizontal())
               .attr("stroke", function(d){
                   return d.color;
                   })
               .attr("stroke-width",  d => d.width)
               .attr("opacity", function(d){
                   return d.opacity;
                   });
}



function flow_p2(scroll)
{
    //Make an SVG Container
    var svgContainer = d3.select(scroll).append("flow")
                                        .append("svg")
                                      .attr("width", 1)
                                      .attr("height", 1);

    var y = $(window).width()/2;
    var x =100;
    svgContainer.attr('transform',`translate(`+x+`,-`+y+`) rotate(-90)`);


    svgContainer.attr("width", "100%")
                .attr("height", "100%")
                .attr("cx", 200)
                .attr("cy", 200);



  const data = {
      nodes: [
          { id: "A1" },
          { id: "A2" },
          { id: "C1" },
          { id: "D1" },
          { id: "E1" },
          { id: "F1" }
      ],
      links: [
          { source: "F1", target: "A1", value: 0.416 , opacity: "1", color: " #FFC300" },
          { source: "F1", target: "A2", value: 3.35 , opacity: "1", color: " #e68c40" },
          { source: "F1", target: "C1", value: 22 , opacity: "0", color: " #31c120" },
          { source: "F1", target: "D1", value:  113.5 , opacity: "0", color: "#336eff" },
          { source: "F1", target: "E1", value:  200 , opacity: "0", color: " #C70039" }
      ]
  }


    var sankey = d3.sankey()
                 .size([width, height])
                 .nodeId(d => d.id)
                 .nodeWidth(20)
                 .nodePadding(10)
                 .nodeAlign(d3.sankeyCenter);

    let graph = sankey(data);


    let links = svgContainer.append("g")
               .classed("links", true)
               .selectAll("path")
               .data(graph.links)
               .enter()
               .append("path")
               .classed("link", true)
               .attr("d", d3.sankeyLinkHorizontal())
               .attr("stroke", function(d){
                   return d.color;
                   })
               .attr("stroke-width",  d => d.width)
               .attr("opacity", function(d){
                   return d.opacity;
                   });


/*    let nodes = svgContainer.append("g")
               .classed("nodes", true)
               .selectAll("rect")
               .data(graph.nodes)
               .enter()
               .append("rect")
               .classed("node", true)
               .attr("x", d => d.x0)
               .attr("y", d => d.y0)
               .attr("width", d => d.x1 - d.x0)
               .attr("height", d => d.y1 - d.y0)
               .attr("fill", "blue")
               .attr("opacity", 0.8);*/
}



function flow_p3(scroll)
{
    //Make an SVG Container
    var svgContainer = d3.select(scroll).append("flow")
                                        .append("svg")
                                      .attr("width", 1)
                                      .attr("height", 1);

    var y = $(window).width()/2;
    var x =100;
    svgContainer.attr('transform',`translate(`+x+`,-`+y+`) rotate(-90)`);


    svgContainer.attr("width", "100%")
                .attr("height", "100%")
                .attr("cx", 200)
                .attr("cy", 200);

    const data = {
        nodes: [
            { id: "A1" },
            { id: "A2" },
            { id: "C1" },
            { id: "D1" },
            { id: "E1" },
            { id: "F1" }
        ],
        links: [
            { source: "F1", target: "A1", value: 0.416 , opacity: "1", color: " #FFC300" },
            { source: "F1", target: "A2", value: 3.35 , opacity: "1", color: " #e68c40" },
            { source: "F1", target: "C1", value: 22 , opacity: "1", color: " #31c120" },
            { source: "F1", target: "D1", value:  113.5 , opacity: "0", color: "#336eff" },
            { source: "F1", target: "E1", value:  200 , opacity: "0", color: " #C70039" }
        ]
    }

    var sankey = d3.sankey()
                 .size([width, height])
                 .nodeId(d => d.id)
                 .nodeWidth(20)
                 .nodePadding(10)
                 .nodeAlign(d3.sankeyCenter);

    let graph = sankey(data);


    let links = svgContainer.append("g")
               .classed("links", true)
               .selectAll("path")
               .data(graph.links)
               .enter()
               .append("path")
               .classed("link", true)
               .attr("d", d3.sankeyLinkHorizontal())
               .attr("stroke", function(d){
                   return d.color;
                   })
               .attr("stroke-width",  d => d.width)
               .attr("opacity", function(d){
                   return d.opacity;
                   });
}

function flow_p4(scroll)
{
    //Make an SVG Container
    var svgContainer = d3.select(scroll).append("flow")
                                        .append("svg")
                                      .attr("width", 1)
                                      .attr("height", 1);

    var y = $(window).width()/2;
    var x =100;
    svgContainer.attr('transform',`translate(`+x+`,-`+y+`) rotate(-90)`);


    svgContainer.attr("width", "100%")
                .attr("height", "100%")
                .attr("cx", 200)
                .attr("cy", 200);



    const data = {
        nodes: [
            { id: "A1" },
            { id: "A2" },
            { id: "C1" },
            { id: "D1" },
            { id: "E1" },
            { id: "F1" }
        ],
        links: [
            { source: "F1", target: "A1", value: 0.416 , opacity: "1", color: " #FFC300" },
            { source: "F1", target: "A2", value: 3.35 , opacity: "1", color: " #e68c40" },
            { source: "F1", target: "C1", value: 22 , opacity: "1", color: " #31c120" },
            { source: "F1", target: "D1", value:  113.5 , opacity: "1", color: "#336eff" },
            { source: "F1", target: "E1", value:  200 , opacity: "0", color: " #C70039" }
        ]
    }


    var sankey = d3.sankey()
                 .size([width, height])
                 .nodeId(d => d.id)
                 .nodeWidth(20)
                 .nodePadding(10)
                 .nodeAlign(d3.sankeyCenter);

    let graph = sankey(data);


    let links = svgContainer.append("g")
               .classed("links", true)
               .selectAll("path")
               .data(graph.links)
               .enter()
               .append("path")
               .classed("link", true)
               .attr("d", d3.sankeyLinkHorizontal())
               .attr("stroke", function(d){
                   return d.color;
                   })
               .attr("stroke-width",  d => d.width)
               .attr("opacity", function(d){
                   return d.opacity;
                   });
}


function flow_p5(scroll)
{
    //Make an SVG Container
    var svgContainer = d3.select(scroll).append("flow")
                                        .append("svg")
                                      .attr("width", 1)
                                      .attr("height", 1);

    var y = $(window).width()/2;
    var x =100;
    svgContainer.attr('transform',`translate(`+x+`,-`+y+`) rotate(-90)`);


    svgContainer.attr("width", "100%")
                .attr("height", "100%")
                .attr("cx", 200)
                .attr("cy", 200);



    const data = {
        nodes: [
            { id: "A1" },
            { id: "A2" },
            { id: "C1" },
            { id: "D1" },
            { id: "E1" },
            { id: "F1" }
        ],
        links: [
            { source: "F1", target: "A1", value: 0.416 , opacity: "1", color: " #FFC300" },
            { source: "F1", target: "A2", value: 3.35 , opacity: "1", color: " #e68c40" },
            { source: "F1", target: "C1", value: 22 , opacity: "1", color: " #31c120" },
            { source: "F1", target: "D1", value:  113.5 , opacity: "1", color: "#336eff" },
            { source: "F1", target: "E1", value:  200 , opacity: "1", color: " #C70039" }
        ]
    }


    var sankey = d3.sankey()
                 .size([width, height])
                 .nodeId(d => d.id)
                 .nodeWidth(20)
                 .nodePadding(10)
                 .nodeAlign(d3.sankeyCenter);

    let graph = sankey(data);


    let links = svgContainer.append("g")
               .classed("links", true)
               .selectAll("path")
               .data(graph.links)
               .enter()
               .append("path")
               .classed("link", true)
               .attr("d", d3.sankeyLinkHorizontal())
               .attr("stroke", function(d){
                   return d.color;
                   })
               .attr("stroke-width",  d => d.width)
               .attr("opacity", function(d){
                   return d.opacity;
                   });
}
