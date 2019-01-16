//The data for our lines
 var spam = [ { "x": 1,   "y": 0, value: 114 , opacity: "1", color: " green"},
{ "x": 20,   "y": 20, value: 114 , opacity: "1", color: " green"},
{ "x": 20,   "y": 200, value: 114 , opacity: "1", color: " green"}];


var obsolescence = [
{ "x": 26,   "y": 0, value: 22 , opacity: "1", color: "#e68c40"},
{ "x": 26,   "y": 20, value: 22 , opacity: "1", color: "#e68c40"},
{ "x": 26,   "y": 200, value: 22 , opacity: "1", color: "#e68c40"}];


var mail = [
{ "x": 30,   "y": 0, value: 0.416 , opacity: "1", color: "#31c120"},
{ "x": 27.2,   "y": 20, value: 0.416 , opacity: "1", color: "#31c120"},
{ "x": 27.2,   "y": 200, value: 0.416 , opacity: "1", color: "#31c120"}];


var veille = [
{ "x": 50,   "y": 0, value: 113.5 , opacity: "0.2", color: "#336eff"},
{ "x": 33,   "y": 20, value: 113.5 , opacity: "0.2", color: "#336eff"},
{ "x": 33,   "y": 200, value: 113.5 , opacity: "0.2", color: "#336eff"}];


var streaming = [
{ "x": 80,   "y": 0, value: 200 , opacity: "0.2", color: "#C70039"},
{ "x": 48.8,   "y": 22, value: 200 , opacity: "0.2", color: "#C70039"},
{ "x": 48.8,   "y": 200, value: 200 , opacity: "0.2", color: "#C70039"}];



function flow_p1(scroll)
{
    //Make an SVG Container
    var width = $(window).width()/2;
    var height = $(window).height();

    var svgContainer = d3.select("#vis").selectAll("svg")
    svgContainer.attr("width", width)
                .attr("height", height);

 var lineFunction = d3.svg.line()
                          .x(function(d) { return d.x*10; })
                          .y(function(d) { return d.y*20; })
                         .interpolate("cardinal");


var lineGraph = svgContainer.append("g")
                         .selectAll("path")
                         .data(mail)
                         .enter()
                          .append("path")
                          .classed("links", true)
                          .attr('d', function(d) { return lineFunction(mail); })
                          .attr("stroke", function(d) {return d.color; })
                          .attr("stroke-width", function(d) {return d.value; })
                          .attr("fill", "none")
                          .attr("width", width)
                          .attr("height", height)
                          .attr("opacity", 1);

var lineGraph2 = svgContainer.append("g")
                           .selectAll("path")
                           .data(obsolescence)
                           .enter()
                            .append("path")
                            .classed("links", true)
                            .attr('d', function(d) { return lineFunction(obsolescence); })
                            .attr("stroke", function(d) {return d.color; })
                            .attr("stroke-width", function(d) {return d.value; })
                            .attr("fill", "none")
                            .attr("width", width)
                            .attr("height", height)
                            .attr("opacity", 0);

var lineGraph3 = svgContainer.append("g")
                         .selectAll("path")
                         .data(spam)
                         .enter()
                          .append("path")
                          .classed("links", true)
                          .attr('d', function(d) { return lineFunction(spam); })
                          .attr("stroke", function(d) {return d.color; })
                          .attr("stroke-width", function(d) {return d.value; })
                          .attr("fill", "none")
                          .attr("width", width)
                          .attr("height", height)
                          .attr("opacity", 0);

var lineGraph4 = svgContainer.append("g")
                           .selectAll("path")
                           .data(veille)
                           .enter()
                            .append("path")
                            .classed("links", true)
                            .attr('d', function(d) { return lineFunction(veille); })
                            .attr("stroke", function(d) {return d.color; })
                            .attr("stroke-width", function(d) {return d.value; })
                            .attr("fill", "none")
                            .attr("width", width)
                            .attr("height", height)
                            .attr("opacity", 0);

var lineGraph5 = svgContainer.append("g")
                           .selectAll("path")
                           .data(streaming)
                           .enter()
                            .append("path")
                            .classed("links", true)
                            .attr('d', function(d) { return lineFunction(streaming); })
                            .attr("stroke", function(d) {return d.color; })
                            .attr("stroke-width", function(d) {return d.value; })
                            .attr("fill", "none")
                            .attr("width", width)
                            .attr("height", height)
                            .attr("opacity", 0);

var totalLength = lineGraph.node().getTotalLength();

lineGraph.attr("stroke-dasharray",  totalLength + " " + totalLength)
        .attr("stroke-dashoffset", totalLength)
        .transition()
          .duration(2000)
          .ease("linear")
          .attr("stroke-dashoffset", 0);
}



function flow_p2(scroll)
{
    //Make an SVG Container
    var width = $(window).width()/2;
    var height = $(window).height();

    var svgContainer = d3.select("#vis").selectAll("svg")
    svgContainer.attr("width", width)
                .attr("height", height);

 var lineFunction = d3.svg.line()
                          .x(function(d) { return d.x*10; })
                          .y(function(d) { return d.y*20; })
                         .interpolate("cardinal");


var lineGraph = svgContainer.append("g")
                         .selectAll("path")
                         .data(mail)
                         .enter()
                          .append("path")
                          .classed("links", true)
                          .attr('d', function(d) { return lineFunction(mail); })
                          .attr("stroke", function(d) {return d.color; })
                          .attr("stroke-width", function(d) {return d.value; })
                          .attr("fill", "none")
                          .attr("width", width)
                          .attr("height", height)
                          .attr("opacity", 1);

var lineGraph2 = svgContainer.append("g")
                           .selectAll("path")
                           .data(obsolescence)
                           .enter()
                            .append("path")
                            .classed("links", true)
                            .attr('d', function(d) { return lineFunction(obsolescence); })
                            .attr("stroke", function(d) {return d.color; })
                            .attr("stroke-width", function(d) {return d.value; })
                            .attr("fill", "none")
                            .attr("width", width)
                            .attr("height", height)
                            .attr("opacity", 1);

var lineGraph3 = svgContainer.append("g")
                         .selectAll("path")
                         .data(spam)
                         .enter()
                          .append("path")
                          .classed("links", true)
                          .attr('d', function(d) { return lineFunction(spam); })
                          .attr("stroke", function(d) {return d.color; })
                          .attr("stroke-width", function(d) {return d.value; })
                          .attr("fill", "none")
                          .attr("width", width)
                          .attr("height", height)
                          .attr("opacity", 0);

var lineGraph4 = svgContainer.append("g")
                           .selectAll("path")
                           .data(veille)
                           .enter()
                            .append("path")
                            .classed("links", true)
                            .attr('d', function(d) { return lineFunction(veille); })
                            .attr("stroke", function(d) {return d.color; })
                            .attr("stroke-width", function(d) {return d.value; })
                            .attr("fill", "none")
                            .attr("width", width)
                            .attr("height", height)
                            .attr("opacity", 0);

var lineGraph5 = svgContainer.append("g")
                           .selectAll("path")
                           .data(streaming)
                           .enter()
                            .append("path")
                            .classed("links", true)
                            .attr('d', function(d) { return lineFunction(streaming); })
                            .attr("stroke", function(d) {return d.color; })
                            .attr("stroke-width", function(d) {return d.value; })
                            .attr("fill", "none")
                            .attr("width", width)
                            .attr("height", height)
                            .attr("opacity", 0);

var totalLength = lineGraph2.node().getTotalLength();

lineGraph2.attr("stroke-dasharray",  totalLength + " " + totalLength)
        .attr("stroke-dashoffset", totalLength)
        .transition()
          .duration(2000)
          .ease("linear")
          .attr("stroke-dashoffset", 0);
}



function flow_p3(scroll)
{
    //Make an SVG Container
    var width = $(window).width()/2;
    var height = $(window).height();

    var svgContainer = d3.select("#vis").selectAll("svg")
    svgContainer.attr("width", width)
                .attr("height", height);

 var lineFunction = d3.svg.line()
                          .x(function(d) { return d.x*10; })
                          .y(function(d) { return d.y*20; })
                         .interpolate("cardinal");


var lineGraph = svgContainer.append("g")
                         .selectAll("path")
                         .data(mail)
                         .enter()
                          .append("path")
                          .classed("links", true)
                          .attr('d', function(d) { return lineFunction(mail); })
                          .attr("stroke", function(d) {return d.color; })
                          .attr("stroke-width", function(d) {return d.value; })
                          .attr("fill", "none")
                          .attr("width", width)
                          .attr("height", height)
                          .attr("opacity", 1);

var lineGraph2 = svgContainer.append("g")
                           .selectAll("path")
                           .data(obsolescence)
                           .enter()
                            .append("path")
                            .classed("links", true)
                            .attr('d', function(d) { return lineFunction(obsolescence); })
                            .attr("stroke", function(d) {return d.color; })
                            .attr("stroke-width", function(d) {return d.value; })
                            .attr("fill", "none")
                            .attr("width", width)
                            .attr("height", height)
                            .attr("opacity", 1);

var lineGraph3 = svgContainer.append("g")
                         .selectAll("path")
                         .data(spam)
                         .enter()
                          .append("path")
                          .classed("links", true)
                          .attr('d', function(d) { return lineFunction(spam); })
                          .attr("stroke", function(d) {return d.color; })
                          .attr("stroke-width", function(d) {return d.value; })
                          .attr("fill", "none")
                          .attr("width", width)
                          .attr("height", height)
                          .attr("opacity", 1);

var lineGraph4 = svgContainer.append("g")
                           .selectAll("path")
                           .data(veille)
                           .enter()
                            .append("path")
                            .classed("links", true)
                            .attr('d', function(d) { return lineFunction(veille); })
                            .attr("stroke", function(d) {return d.color; })
                            .attr("stroke-width", function(d) {return d.value; })
                            .attr("fill", "none")
                            .attr("width", width)
                            .attr("height", height)
                            .attr("opacity", 0);

var lineGraph5 = svgContainer.append("g")
                           .selectAll("path")
                           .data(streaming)
                           .enter()
                            .append("path")
                            .classed("links", true)
                            .attr('d', function(d) { return lineFunction(streaming); })
                            .attr("stroke", function(d) {return d.color; })
                            .attr("stroke-width", function(d) {return d.value; })
                            .attr("fill", "none")
                            .attr("width", width)
                            .attr("height", height)
                            .attr("opacity", 0);

var totalLength = lineGraph3.node().getTotalLength();

lineGraph3.attr("stroke-dasharray",  totalLength + " " + totalLength)
        .attr("stroke-dashoffset", totalLength)
        .transition()
          .duration(2000)
          .ease("linear")
          .attr("stroke-dashoffset", 0);
}

function flow_p4(scroll)
{
    //Make an SVG Container
    var width = $(window).width()/2;
    var height = $(window).height();

    var svgContainer = d3.select("#vis").selectAll("svg")
    svgContainer.attr("width", width)
                .attr("height", height);

 var lineFunction = d3.svg.line()
                          .x(function(d) { return d.x*10; })
                          .y(function(d) { return d.y*20; })
                         .interpolate("cardinal");


var lineGraph = svgContainer.append("g")
                         .selectAll("path")
                         .data(mail)
                         .enter()
                          .append("path")
                          .classed("links", true)
                          .attr('d', function(d) { return lineFunction(mail); })
                          .attr("stroke", function(d) {return d.color; })
                          .attr("stroke-width", function(d) {return d.value; })
                          .attr("fill", "none")
                          .attr("width", width)
                          .attr("height", height)
                          .attr("opacity", 1);

var lineGraph2 = svgContainer.append("g")
                           .selectAll("path")
                           .data(obsolescence)
                           .enter()
                            .append("path")
                            .classed("links", true)
                            .attr('d', function(d) { return lineFunction(obsolescence); })
                            .attr("stroke", function(d) {return d.color; })
                            .attr("stroke-width", function(d) {return d.value; })
                            .attr("fill", "none")
                            .attr("width", width)
                            .attr("height", height)
                            .attr("opacity", 1);

var lineGraph3 = svgContainer.append("g")
                         .selectAll("path")
                         .data(spam)
                         .enter()
                          .append("path")
                          .classed("links", true)
                          .attr('d', function(d) { return lineFunction(spam); })
                          .attr("stroke", function(d) {return d.color; })
                          .attr("stroke-width", function(d) {return d.value; })
                          .attr("fill", "none")
                          .attr("width", width)
                          .attr("height", height)
                          .attr("opacity", 1);

var lineGraph4 = svgContainer.append("g")
                           .selectAll("path")
                           .data(veille)
                           .enter()
                            .append("path")
                            .classed("links", true)
                            .attr('d', function(d) { return lineFunction(veille); })
                            .attr("stroke", function(d) {return d.color; })
                            .attr("stroke-width", function(d) {return d.value; })
                            .attr("fill", "none")
                            .attr("width", width)
                            .attr("height", height)
                            .attr("opacity", 1);

var lineGraph5 = svgContainer.append("g")
                           .selectAll("path")
                           .data(streaming)
                           .enter()
                            .append("path")
                            .classed("links", true)
                            .attr('d', function(d) { return lineFunction(streaming); })
                            .attr("stroke", function(d) {return d.color; })
                            .attr("stroke-width", function(d) {return d.value; })
                            .attr("fill", "none")
                            .attr("width", width)
                            .attr("height", height)
                            .attr("opacity", 0);

var totalLength = lineGraph4.node().getTotalLength();

lineGraph4.attr("stroke-dasharray",  totalLength + " " + totalLength)
        .attr("stroke-dashoffset", totalLength)
        .transition()
          .duration(2000)
          .ease("linear")
          .attr("stroke-dashoffset", 0);
}


function flow_p5(scroll)
{
    //Make an SVG Container
    var width = $(window).width()/2;
    var height = $(window).height();

    var svgContainer = d3.select("#vis").selectAll("svg")
    svgContainer.attr("width", width)
                .attr("height", height);

 var lineFunction = d3.svg.line()
                          .x(function(d) { return d.x*10; })
                          .y(function(d) { return d.y*20; })
                         .interpolate("cardinal");


var lineGraph = svgContainer.append("g")
                         .selectAll("path")
                         .data(mail)
                         .enter()
                          .append("path")
                          .classed("links", true)
                          .attr('d', function(d) { return lineFunction(mail); })
                          .attr("stroke", function(d) {return d.color; })
                          .attr("stroke-width", function(d) {return d.value; })
                          .attr("fill", "none")
                          .attr("width", width)
                          .attr("height", height)
                          .attr("opacity", 1);

var lineGraph2 = svgContainer.append("g")
                           .selectAll("path")
                           .data(obsolescence)
                           .enter()
                            .append("path")
                            .classed("links", true)
                            .attr('d', function(d) { return lineFunction(obsolescence); })
                            .attr("stroke", function(d) {return d.color; })
                            .attr("stroke-width", function(d) {return d.value; })
                            .attr("fill", "none")
                            .attr("width", width)
                            .attr("height", height)
                            .attr("opacity", 1);

var lineGraph3 = svgContainer.append("g")
                         .selectAll("path")
                         .data(spam)
                         .enter()
                          .append("path")
                          .classed("links", true)
                          .attr('d', function(d) { return lineFunction(spam); })
                          .attr("stroke", function(d) {return d.color; })
                          .attr("stroke-width", function(d) {return d.value; })
                          .attr("fill", "none")
                          .attr("width", width)
                          .attr("height", height)
                          .attr("opacity", 1);

var lineGraph4 = svgContainer.append("g")
                           .selectAll("path")
                           .data(veille)
                           .enter()
                            .append("path")
                            .classed("links", true)
                            .attr('d', function(d) { return lineFunction(veille); })
                            .attr("stroke", function(d) {return d.color; })
                            .attr("stroke-width", function(d) {return d.value; })
                            .attr("fill", "none")
                            .attr("width", width)
                            .attr("height", height)
                            .attr("opacity", 1);

var lineGraph5 = svgContainer.append("g")
                           .selectAll("path")
                           .data(streaming)
                           .enter()
                            .append("path")
                            .classed("links", true)
                            .attr('d', function(d) { return lineFunction(streaming); })
                            .attr("stroke", function(d) {return d.color; })
                            .attr("stroke-width", function(d) {return d.value; })
                            .attr("fill", "none")
                            .attr("width", width)
                            .attr("height", height)
                            .attr("opacity", 1);

var totalLength = lineGraph5.node().getTotalLength();

lineGraph5.attr("stroke-dasharray",  totalLength + " " + totalLength)
        .attr("stroke-dashoffset", totalLength)
        .transition()
          .duration(2000)
          .ease("linear")
          .attr("stroke-dashoffset", 0);
}
