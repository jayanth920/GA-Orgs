const list = [];

$(() => {
  $('#submit-btn').on('click', (event) => {
    event.preventDefault();
    const text = $('#input-box').val()
    list.push(text);
    render();
  });
})

const render = () => {
  console.log('render everything in the list');
  console.log('list: ', list);
  list.forEach((item) => {

    $('ul').empty();
    list.forEach((item) => {
      $('ul').append('<li>' + item + '</li>');
    });

  });
}
