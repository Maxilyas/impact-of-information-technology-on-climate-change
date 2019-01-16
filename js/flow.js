
function flow_p1(scroll)
{
    //Make an SVG Container
    var width = $(window).width()/2;
var height = $(window).height();


    var svgContainer = d3.select("#vis").selectAll("svg")
    svgContainer.attr("width", width)
                .attr("height", height);

    var y = $(window).width()/2;
    var x =100;
//    svgContainer.attr('transform',`translate(`+-x+`,-`+1400+`) rotate(-90)`);



//The data for our line
 var spam = [ { "x": 1,   "y": 0, value: 114 , opacity: "1", color: " green"},
{ "x": 2,   "y": 1, value: 114 , opacity: "1", color: " green"},
{ "x": 3,   "y": 2, value: 114 , opacity: "1", color: " green"},
{ "x": 4,   "y": 3, value: 114 , opacity: "1", color: " green"},
{ "x": 5,   "y": 4, value: 114 , opacity: "1", color: " green"},
{ "x": 6,   "y": 5, value: 114 , opacity: "1", color: " green"},
{ "x": 7,   "y": 6, value: 114 , opacity: "1", color: " green"},
{ "x": 8,   "y": 7, value: 114 , opacity: "1", color: " green"},
{ "x": 9,   "y": 8, value: 114 , opacity: "1", color: " green"},
{ "x": 10,   "y": 9, value: 114 , opacity: "1", color: " green"},
{ "x": 10,   "y": 10, value: 114 , opacity: "1", color: " green"},
{ "x": 11,   "y": 11, value: 114 , opacity: "1", color: " green"},
{ "x": 12,   "y": 12, value: 114 , opacity: "1", color: " green"},
{ "x": 13,   "y": 13, value: 114 , opacity: "1", color: " green"},
{ "x": 14,   "y": 14, value: 114 , opacity: "1", color: " green"},
{ "x": 15,   "y": 15, value: 114 , opacity: "1", color: " green"},
{ "x": 16,   "y": 16, value: 114 , opacity: "1", color: " green"},
{ "x": 17,   "y": 17, value: 114 , opacity: "1", color: " green"},
{ "x": 18,   "y": 18, value: 114 , opacity: "1", color: " green"},
{ "x": 19,   "y": 19, value: 114 , opacity: "1", color: " green"},
{ "x": 20,   "y": 20, value: 114 , opacity: "1", color: " green"},
{ "x": 20,   "y": 200, value: 114 , opacity: "1", color: " green"}];


var obsolescence = [
{ "x": 26,   "y": 0, value: 22 , opacity: "1", color: "#e68c40"},
{ "x": 26,   "y": 1, value: 22 , opacity: "1", color: "#e68c40"},
{ "x": 26,   "y": 2, value: 22 , opacity: "1", color: "#e68c40"},
{ "x": 26,   "y": 3, value: 22 , opacity: "1", color: "#e68c40"},
{ "x": 26,   "y": 4, value: 22 , opacity: "1", color: "#e68c40"},
{ "x": 26,   "y": 5, value: 22 , opacity: "1", color: "#e68c40"},
{ "x": 26,   "y": 6, value: 22 , opacity: "1", color: "#e68c40"},
{ "x": 26,   "y": 7, value: 22 , opacity: "1", color: "#e68c40"},
{ "x": 26,   "y": 8, value: 22 , opacity: "1", color: "#e68c40"},
{ "x": 26,   "y": 9, value: 22 , opacity: "1", color: "#e68c40"},
{ "x": 26,   "y": 10, value: 22 , opacity: "1", color: "#e68c40"},
{ "x": 26,   "y": 11, value: 22 , opacity: "1", color: "#e68c40"},
{ "x": 26,   "y": 12, value: 22 , opacity: "1", color: "#e68c40"},
{ "x": 26,   "y": 13, value: 22 , opacity: "1", color: "#e68c40"},
{ "x": 26,   "y": 14, value: 22 , opacity: "1", color: "#e68c40"},
{ "x": 26,   "y": 15, value: 22 , opacity: "1", color: "#e68c40"},
{ "x": 26,   "y": 16, value: 22 , opacity: "1", color: "#e68c40"},
{ "x": 26,   "y": 17, value: 22 , opacity: "1", color: "#e68c40"},
{ "x": 26,   "y": 18, value: 22 , opacity: "1", color: "#e68c40"},
{ "x": 26,   "y": 19, value: 22 , opacity: "1", color: "#e68c40"},
{ "x": 26,   "y": 20, value: 22 , opacity: "1", color: "#e68c40"},
{ "x": 26,   "y": 200, value: 22 , opacity: "1", color: "#e68c40"}];


mail = [
{ "x": 30,   "y": 0, value: 0.416 , opacity: "1", color: "#31c120"},
{ "x": 30,   "y": 1, value: 0.416 , opacity: "1", color: "#31c120"},
{ "x": 30,   "y": 2, value: 0.416 , opacity: "1", color: "#31c120"},
{ "x": 30,   "y": 3, value: 0.416 , opacity: "1", color: "#31c120"},
{ "x": 29,   "y": 4, value: 0.416 , opacity: "1", color: "#31c120"},
{ "x": 29,   "y": 5, value: 0.416 , opacity: "1", color: "#31c120"},
{ "x": 29,   "y": 6, value: 0.416 , opacity: "1", color: "#31c120"},
{ "x": 29,   "y": 7, value: 0.416 , opacity: "1", color: "#31c120"},
{ "x": 29,   "y": 8, value: 0.416 , opacity: "1", color: "#31c120"},
{ "x": 29,   "y": 9, value: 0.416 , opacity: "1", color: "#31c120"},
{ "x": 28,   "y": 10, value: 0.416 , opacity: "1", color: "#31c120"},
{ "x": 28,   "y": 11, value: 0.416 , opacity: "1", color: "#31c120"},
{ "x": 28,   "y": 12, value: 0.416 , opacity: "1", color: "#31c120"},
{ "x": 28,   "y": 13, value: 0.416 , opacity: "1", color: "#31c120"},
{ "x": 28,   "y": 14, value: 0.416 , opacity: "1", color: "#31c120"},
{ "x": 28,   "y": 15, value: 0.416 , opacity: "1", color: "#31c120"},
{ "x": 28,   "y": 16, value: 0.416 , opacity: "1", color: "#31c120"},
{ "x": 27.3,   "y": 17, value: 0.416 , opacity: "1", color: "#31c120"},
{ "x": 27.3,   "y": 18, value: 0.416 , opacity: "1", color: "#31c120"},
{ "x": 27.3,   "y": 19, value: 0.416 , opacity: "1", color: "#31c120"},
{ "x": 27.3,   "y": 20, value: 0.416 , opacity: "1", color: "#31c120"},
{ "x": 27.3,   "y": 200, value: 0.416 , opacity: "1", color: "#31c120"}];

 //This is the accessor function we talked about above
 var lineFunction = d3.svg.line()
                          .x(function(d) { return d.x*10; })
                          .y(function(d) { return d.y*20; })
                         .interpolate("basis-open");


//The line SVG Path we draw
var lineGraph = svgContainer.append("g")
                           .selectAll("path")
                           .data(spam)
                           .enter()
                            .append("path")
                            .classed("links", true)
                            .attr('d', function(d) { return lineFunction(spam); })
                            //.attr("d", lineFunction(spam))
                            .attr("stroke", function(d) {return d.color; })
                            .attr("stroke-width", function(d) {return d.value; })
                            .attr("fill", "none")
                            .attr("width", width)
                            .attr("height", height);

    var totalLength = lineGraph.node().getTotalLength();

    lineGraph.attr("stroke-dasharray",  totalLength + " " + totalLength)
        .attr("stroke-dashoffset", totalLength)
        .transition()
          .duration(2000)
          .ease("linear")
          .attr("stroke-dashoffset", 0);


var lineGraph2 = svgContainer.append("g")
                           .selectAll("path")
                           .data(obsolescence)
                           .enter()
                            .append("path")
                            .classed("links", true)
                            .attr('d', function(d) { return lineFunction(obsolescence); })
                            //.attr("d", lineFunction(spam))
                            .attr("stroke", function(d) {return d.color; })
                            .attr("stroke-width", function(d) {return d.value; })
                            .attr("fill", "none")
                            .attr("width", width)
                            .attr("height", height)
                            .attr("opacity", 0.2);


var lineGraph3 = svgContainer.append("g")
                           .selectAll("path")
                           .data(mail)
                           .enter()
                            .append("path")
                            .classed("links", true)
                            .attr('d', function(d) { return lineFunction(mail); })
                            //.attr("d", lineFunction(spam))
                            .attr("stroke", function(d) {return d.color; })
                            .attr("stroke-width", function(d) {return d.value; })
                            .attr("fill", "none")
                            .attr("width", width)
                            .attr("height", height)
                            .attr("opacity", 0.2);
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
