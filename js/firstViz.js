
function makeChart(svg)
{

    var margin = {top: 0, right: 10, bottom: 40, left: 20},
        width = 500 - margin.left - margin.right,
        height = 520 - margin.top - margin.bottom;

    // Parse the date / time
    var parseDate = d3.time.format("%Y").parse;

    // Set the ranges
    var x = d3.time.scale().range([0, width]);
    var y = d3.scale.linear().range([height, 0]);

    // Define the axes
    var xAxis = d3.svg.axis().scale(x)
        .orient("bottom").ticks(5);

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
            .style("opacity", "0");

	// Add the X Axis
	svg.append("g")
	    .attr("class", "x leoLine")
	    .attr("transform", "translate(0," + height + ")")
	    .call(xAxis);

	// Add the Y Axis
	svg.append("g")
	    .attr("class", "y leoLine")
	    .call(yAxis);

        pathLineChart.transition()
            .duration(2000)
            .style("opacity", "1");
    });
}



function addStep(nbStep)
{
    // Get the data
    d3.csv("./data/data.csv", function(error, data) {
        for (var i = 0; i<1; i++) {
	    data[i].date = parseDate(data[i].date);
	    data[i].TWh = +data[i].TWh;
	};

	// Scale the range of the data
	x.domain(d3.extent(data, function(d) { return d.date; }));
	y.domain([0, d3.max(data, function(d) { return d.TWh; })]);

	// Add the valueline path.
	svg.append("path")
	    .attr("class", "lineChart")
	    .attr("d", valueline(data));

	// Add the X Axis
	svg.append("g")
	    .attr("class", "x leoLine")
	    .attr("transform", "translate(0," + height + ")")
	    .call(xAxis);

	// Add the Y Axis
	svg.append("g")
	    .attr("class", "y leoLine")
	    .call(yAxis);
    });
}
