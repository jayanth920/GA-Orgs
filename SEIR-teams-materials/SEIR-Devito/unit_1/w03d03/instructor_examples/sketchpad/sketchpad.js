const changeColor = (event) => {
    $(event.target).addClass('pink');
}

$(()=>{
    for(let i = 0; i < 1000; i++){
        let $div = $('<div>');
        $div.addClass('square');
        $('body').append($div);
    }
    $('div').on('mouseover', changeColor)
});
