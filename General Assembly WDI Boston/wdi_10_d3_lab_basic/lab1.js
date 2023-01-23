window.onload = function(){
    // Append an element
    d3.select("body").append("p");

    // Append a SVG circle
    d3.select("body").append("svg").attr("width", 50).attr("height", 50).append("circle").attr("cx", 25).attr("cy", 25).attr("r", 25).style("fill", "purple");

}
