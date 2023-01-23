// if (typeof $ == 'undefined'){
//   console.log('oops! I still have to link my jQuery properly!');
// } else {console.log('I did it! I linked jQuery and this js file correctly!')};



// name all variables that are jQuery objects starting with a $

// query for this element
// const $div = $('div');

// create a new element
const $div = $('<div>');

// document ready function
$(() => {

  // code goes in here

  // console.log($('body'));

  // selecting the body element
  $('body')
  // appending the div we created to the body
    .append($div);

    $div.addClass('meat');

    const $h3 = $('<h3>');
    $h3.text('Ostrich');
    $div.append($h3);

    // another one

    const $anotherDiv = $('<div>').addClass('dairy');
    const $anotherH3 = $('<h3>').text('kefir');

    $anotherDiv.append($anotherH3);
    $('body').append($anotherDiv);


    const $divs = $('div');
    // console.log($divs);

    // $divs.hide('slow');

    const $meat = $('.meat');

    // console.log($meat);

    // $meat.remove();

    // prepending an image
    const $img = $('<img>');
    $img
      .attr('src', 'https://images.unsplash.com/photo-1452195100486-9cc805987862?auto=format&fit=crop&w=750&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D')
      .attr('alt', 'most best food ever')

    // console.log($img);

    $('body').prepend($img);

  // jQuery Collection is array-like, but doing array things may not work like you hope
  // console.log($divs[3]);

    // if there is one, you just get the one jQuery object
    const $veg = $('.vegetable');
    console.log($veg);

    // jQuery Collection and accessing within the collection
    // console.log($divs.eq(3).children());

    // just messin' around - looks like you can get the vanilla object and do vanilla stuff when using square brackets
    // HERE BE DRAGONS! DO NOT USE (unless for fun)

    // console.log($divs[3].style.filter = 'grayscale(100%)');



    $('body').css('border', '1em solid black')









}); // closes document ready
