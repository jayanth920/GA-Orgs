

$(() => {

  const list = [];

  // The original
  $('form').on('submit', (event) => {
    // console.log('clicked');
    console.log($('#input-box').val());

    list.push($('#input-box').val())

    event.preventDefault();
    $(event.currentTarget).trigger('reset');
    render();
  });

  // tv show
  $('#tv-submit').on('click', () => {
    // console.log('clicked');
    let inputVal = $('#tv-show-input').val();
    console.log(`Hi! Your favorite show is: ${inputVal} from input`);
  });

  const render = () => {
    console.log('render everything in the list');
    console.log('list:', list);
    $('ul').empty();
    list.forEach( item => {
      const $li = $('<li>' + item + '</li>');
      $li.on('click', doNonsense);
      $('ul').append($li);
    });
  }

  const doNonsense = (event) => {
    console.log('item clicked:', event.currentTarget);
    $(event.currentTarget).css('background-color', 'gold');
  }

});
