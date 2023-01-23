
// module.exports = {};


var each = function(list, action) {
  for (var i = 0; i < list.length; i++) {
    action(list[i], i)
  };
  return list;
}


// we will implement a 
// contains function
//    takes two params
//    a list to search
//    a item to search for

var contains = function(list, item){
  var result = false;

  each(list, function(currentItem){
    if (currentItem === item){
      result = true;
    }
  })

  // list.forEach( function(currentItem){
  //   if (currentItem === item){
  //     result = true;
  //   }
  // });

  // for (var i = 0, currentItem; i < list.length; i++) {
  //   currentItem = list[i]
  //   if ( currentItem === item ) {
  //     result = true;
  //   }
  // };

  return result;
}

module.exports.each = each;
module.exports.contains = contains;

