window.onload = function(){
    var data = [10, 20, 30, 40, 50];
    console.log('data = ' + data.join(','));

    data.sort(d3.descending);
    console.log('data = ' + data.join(','));

    console.log('data min = ' + d3.min(data));
    console.log('data max = ' + d3.max(data));
    console.log('data main and max = ' + d3.extent(data).join(','));
    console.log('data sum = ' + d3.sum(data));
    console.log('data mean = ' + d3.mean(data));
    console.log('data median = ' + d3.median(data));

    console.log('data shuffled = ' + d3.shuffle(data).join(','));
};
