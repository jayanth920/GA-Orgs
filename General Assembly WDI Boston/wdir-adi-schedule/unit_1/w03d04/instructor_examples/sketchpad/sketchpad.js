$(()=>{
    const changeColor = (event) => {
        $(event.target).addClass('pink');
    };
    const $input = $('input');
    const $button = $('button');
    $button.on('click', (event)=>{
        $('div').remove();
        const num = $input.val();
        for(let i =0; i < num; i++){
            const $div = $('<div>').addClass('square');
            $('body').append($div);
            $div.on('mouseover', changeColor);
        }
    });
});
