window.onload = function(){
    // run WEBrick on port 5000. This will serve the data files.
    // ruby -run -e httpd . -p5000

    // d3.json("http://localhost:5000/d3_tut_10.json", function(data){
    d3.json("/d3_tut_10.json", function(data){
        var canvas,
            circle;

        canvas = d3.select('body')
            .append('svg')
            .attr('width', 500)
            .attr('height', 500);
        canvas.selectAll('rect')
            .data(data)
            .attr('width', function(d){
                return d.age * 10;
            })
            .attr('height', 50)
            .attr('y', function(d, i){
                return i * 50;
            })
            .attr('fill', 'blue');

    });
};
