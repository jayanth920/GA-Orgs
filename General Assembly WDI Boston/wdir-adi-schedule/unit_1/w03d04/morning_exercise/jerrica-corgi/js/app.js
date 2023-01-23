$(() => {

  // keeping track of current image displaying
  let currentImgIndex = 0;
  // keeping track of how many images there are in the carousel
  const highestIndex = $('.carousel-images').children().length - 1;
  // console.log(highestIndex);

  // when we click on the next button
  $('.next').on('click', () => {
    // console.log('clicked on next button');
    // we want the current image to hide
    $('.carousel-images').children().eq(currentImgIndex).css('display', 'none');

    if(currentImgIndex < highestIndex) {
      currentImgIndex++;
    } else {
      currentImgIndex = 0;
    }

    // we want the next image to show
    $('.carousel-images').children().eq(currentImgIndex).css('display', 'block');
  });

  // previous button
  $('.previous').on('click', () => {
    // we want the current image to hide
    $('.carousel-images').children().eq(currentImgIndex).css('display', 'none');

    // decrement the counter
    if(currentImgIndex > 0) {
      currentImgIndex--;
    } else {
      currentImgIndex = highestIndex;
    }

    // we want the previous image to show
    $('.carousel-images').children().eq(currentImgIndex).css('display', 'block');
    
  });

});
