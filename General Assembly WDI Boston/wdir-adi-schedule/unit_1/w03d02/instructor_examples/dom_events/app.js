
// document ready function
$( () => {
  // console.log('I am ready');

  const changeColor = () => {
    // learn how to just get the one we clicked on tomorrow. Promise!
    $('p').css('color', 'blanchedalmond')
  }

  const addText = () => {
    const $p = $('<p>').text('The earth is an oblate spheroid')
    $('body').append($p);
    $p.on('click', changeColor )
  }

  const changeClass = () => {
    $('body').toggleClass('black');
  }

  const $btn = $('#button');

  $btn.on('click', addText);
  $btn.on('click', changeClass);




}); // closes document ready function
