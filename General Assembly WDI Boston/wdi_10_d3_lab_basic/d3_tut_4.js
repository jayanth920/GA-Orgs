window.onload = function(){
    var canvas,
        dataArray = [20, 40, 50],
        bars;

    // provide a canvas to paint on
    canvas = d3.select('body')
        .append('svg')
        .attr('width', 500)
        .attr('heigth', 500);

    // bar chart
    bars = canvas.selectAll('rect')
        .data(dataArray)  // bind the data
        .enter()  // All the entries
        .append('rect')
        .attr('width', function(d){
            // d is one data element
            return d * 10;  // Make bars 200, 400 and 500 pixels wide
        })
        .attr('height', 50) // all bars are 50 pixels high
        .attr('y', function(d, i){
            // set the y different to separate all the bars down the page.
            return i * 100;
        });



};
