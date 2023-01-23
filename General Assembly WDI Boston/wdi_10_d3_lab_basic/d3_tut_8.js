window.onload = function(){
    // Transitions
    var canvas,
        circle;

    canvas = d3.select('body')
        .append('svg')
        .attr('width', 500)
        .attr('height', 500);

    // Create 2 Circles in the DOM
    circle = canvas.append('circle')
        .attr('cx', 50)
        .attr('cy', 50)
        .attr('r', 25);

    circle.transition()
        .duration(2000) // delay for 2000 milliseconds, 2 sec
        .attr('fill', 'red')
        .attr('cx', 100)  // to the right 100 px
        .transition()
        .duration(1000)
        .attr('cy', 200)  // down 200 px
        .each('start', function(){
           d3.select(this).attr('fill', 'green');  // at start of this transition set to green
        })
        .transition()
        .attr('cx', 50)
        .each('end', function(){
           d3.select(this).attr('fill', 'blue');
        });


};
