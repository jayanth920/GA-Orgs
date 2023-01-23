window.onload = function(){
    // selectAll may have 3 selection lists. Update, Edit and Exit selection lists.

    // Case 1
    // DOM elements < data elements (Enter selection list)

    // Case 2
    // DOM elements > data elements (Exit selection list)

    // Case 3
    // DOM elements = data elements (Update selection list)

    var canvas,
        data,
        circle,
        circle2,
        circles;

    data = [10, 20, 30, 40];

    canvas = d3.select('body')
        .append('svg')
        .attr('width', 500)
        .attr('height', 500)

    // Create 2 Circles in the DOM
    circle = canvas.append('circle')
        .attr('cx', 50)
        .attr('cy', 50)
        .attr('r', 25);

    circle2 = canvas.append('circle')
        .attr('cx', 100)
        .attr('cy', 50)
        .attr('r', 25);

    // Update selection contains all the circles existing on the page already.
    // Incrementally bind data elements to each of these circles
    // circle1 will be bound to 10 and be red
    // circle2 will be bound to 20 and be red

    // Enter selection will be created if we still have data elements but NO more circles existing on the page.
    // We'll create Enter selection elements for each data element that can't be associated with a cirle element.
    // Then well apply attributes to each of Enter selection element.

    // Add a circle for data element 30  and 40. They'll be green.
    circles = canvas.selectAll('circle')
        .data(data)    // bind 10 to circle1 and 20 to circle2 as they exist in the update selection
        .attr('fill', 'red')  // make circle1 and circle2 red they exists in the update selection
        .enter()   // enter selection, ran out of circles on page but still have data elements.
        .append('circle') // Add a circle
        .attr('cx', function(d, i){ return i * 100 }) // apply to each circle
        .attr('cy', function(d, i){ return i * 100 }) // apply to each circle
        .attr('fill', 'green') // apply to each circle
        .attr('r', 25); // apply to each circle

};
