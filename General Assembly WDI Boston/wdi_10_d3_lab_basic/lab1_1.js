window.onload = function(){
    var theData = [ 1, 2, 3 ],
        p;
    // select all the <p> tags
    p = d3.select("body").selectAll("p")
        .data(theData)
        .enter()  // there are no <p> tags so we create a 'virtual' element that each piece of data can be assigned
        .append("p")  // append a <p> tag to each virtual tag
        .text("hello "); // insert the text "hello " into each <p> tag
};
