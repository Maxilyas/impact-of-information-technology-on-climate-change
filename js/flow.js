
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


/*    d3.selectAll("#vis" + " .innerCont").remove();
    $("#vis").append(chartInnerDiv);
    chart = d3.select("#vis" + " .innerCont");
*/
/*    //Draw the line
    var circle = svgContainer.append("line")
                           .attr("x1", 5)
                           .attr("y1", 5)
                           .attr("x2", 50)
                           .attr("y2", 50)
                         .attr("stroke-width", 2)
                           .attr("stroke", "black");*/

   const data = {
       nodes: [
           { id: "A1" },
           { id: "B1" }
       ],
       links: [
           { source: "A1", target: "B1", value: 0.416 },
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
               .attr("fill", "none")
               .attr("stroke", "#606060")
               .attr("stroke-width", d => d.width)
               .attr("stoke-opacity", 0.5);

    let nodes = svgContainer.append("g")
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
               .attr("opacity", 0.8);
}



function flow_p2(scroll)
{
}

function flow_p3(scroll)
{
}

function flow_p4(scroll)
{
}

function flow_p5(scroll)
{

}
