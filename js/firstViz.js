
function makeChart(svg)
{

    var margin = {top:0, left:0, bottom:0, right:0},
        width = 500 - margin.left - margin.right,
        height = 450 -  margin.top - margin.bottom;

    // Parse the date / time
    var parseDate = d3.time.format("%Y").parse;

    // Set the ranges
    var x = d3.time.scale().range([0, width]);
    var y = d3.scale.linear().range([height, 0]);

    // Define the axes
    var xAxis = d3.svg.axis().scale(x)
        .orient("bottom").ticks(8);

    var yAxis = d3.svg.axis().scale(y)
        .orient("left").ticks(5);

    // Define the line
    var valueline = d3.svg.line()
        .x(function(d) { return x(d.date); })
        .y(function(d) { return y(d.TWh); });
    
    // Get the data
    d3.csv("./data/data.csv", function(error, data) {
        for (var i = 0; i<26; i++) {
	    data[i].date = parseDate(data[i].date);
	    data[i].TWh = +data[i].TWh;
	};

	// Scale the range of the data
	x.domain(d3.extent(data, function(d) { return d.date; }));
	y.domain([0, d3.max(data, function(d) { return d.TWh; })]);

	// Add the valueline path.
	var pathLineChart = svg.append("path")
	    .attr("class", "lineChart")
	    .attr("d", valueline(data))
            .attr("transform", "translate(80,0)")
            .style("opacity", "0");

	// Add the X Axis
	var xAxisL = svg.append("g")
	    .attr("class", "x leoLine")
            .style("opacity", "0")
	    .attr("transform", "translate(80," + height + ")")
	    .call(xAxis);

	// Add the Y Axis
	var yAxisL = svg.append("g")
	    .attr("class", "y leoLine")
            .style("opacity", "0")
            .attr("transform", "translate(80,0)")
	    .call(yAxis);

        xAxisL.transition()
            .duration(2000)
            .style("opacity", "1");

        
        yAxisL.transition()
            .duration(2000)
            .style("opacity", "1");

        var totalLength = pathLineChart.node().getTotalLength();
        pathLineChart
            .attr("stroke-dasharray", totalLength + " " + totalLength)
            .attr("stroke-dashoffset", totalLength)
            .style("opacity", "1")
            .transition()
            .duration(6000)
            .ease("linear")
            .attr("stroke-dashoffset", 0)
    });

    $('svg')
}

