console.log('app.js');

$(() => {

  $('.outside').on('click', (event) => {
    // target will be...
    // outside and everything in it
    console.log('OUTSIDE is clicked target is:' , event.target);
    // currentTarget will be...
    // outside and everything in it
    // currentTarget of body is now outside div
    console.log('OUTSIDE currentTarget is:', event.currentTarget);

    $(event.currentTarget).css('background-color', 'black')

  });

  $('.inside').on('click', () => {
    // target will be...
    // inside and everything in it
    // target of outside and body are now inside
    console.log('INSIDE is clicked target is:' , event.target);
    // currentTarget will be...
    // inside and everything in it
    // currentTarget for other event listeners/handers are the same
    console.log('INSIDE is clicked currentTarget is:' , event.currentTarget);
    // event.stopPropagation();
  });

  $('body').on('click', () => {
    // target will be...
    // body and everything inside!
    console.log('BODY is clicked target is:' , event.target);
    // currentTarget will be...
    // body and everything inside!
    console.log('BODY is clicked currentTarget is:' , event.currentTarget);
    return false;
  });

});
