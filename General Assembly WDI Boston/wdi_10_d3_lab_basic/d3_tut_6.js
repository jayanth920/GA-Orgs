window.onload = function(){
    var canvas,
        dataArray = [5, 40, 50, 60],
        bars,
        width = 500,
        height = 500,
        widthScale,
        color,
        axis;

    widthScale = d3.scale
        .linear()
        .domain([0, 60])
        .range([0, width]);

    colorScale = d3.scale.linear()
        .domain([0, 60])
        .range(['red', 'blue']);

    axis = d3.svg.axis()
        .ticks(5)
        .scale(widthScale);

    // provide a canvas to paint on
    canvas = d3.select('body')
        .append('svg')
        .attr('width', width)
        .attr('heigth', height)
        .append('g')
        .attr('transform', "translate(50,50)");

    // bar chart
    bars = canvas.selectAll('rect')
        .data(dataArray)  // bind the data
        .enter()  // All the entries
        .append('rect')
        .attr('width', function(d){
            // d is one data element
            return widthScale(d);  // Make bars 200, 400 and 500 pixels wide
        })
        .attr('height', 50) // all bars are 50 pixels high
        .attr('fill',function(d){ return colorScale(d); })
        .attr('y', function(d, i){
            // set the y different to separate all the bars down the page.
            return i * 100;
        });

    canvas.append("g")
    .attr('transform', "translate(0, 400)")
    .call(axis);


};
