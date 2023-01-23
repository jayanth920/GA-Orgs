window.onload = function(){
    var canvas, circle;
    // Append an element
    d3.select("body")
        .append("p")
        .style('color', 'red')
        .text("hello there");

    // provide a canvas to paint on
    canvas = d3.select('body')
        .append('svg')
        .attr('width', 500)
        .attr('heigth', 500);

    d3.append('circle')

    console.log(d3);
};
