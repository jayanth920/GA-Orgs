$(() => {
  // =================
  // GLOBAL VARIABLES
  // =================
  let currentImgIndex = 0;
  let numOfImages = $('.carousel-images').children().length - 1;
  let $currentImage = $('.carousel-images').children();
  
  // =================
  // EVENT LISTENERS
  // =================
  // next button
  $('.next').on('click', () => {
    // hide the current image
    $currentImage.eq(currentImgIndex).hide();
    // increment the currentImgIndex
    if(currentImgIndex < numOfImages) {
      currentImgIndex++;
    } else {
      currentImgIndex = 0;
    }
    // show the next image
    $currentImage.eq(currentImgIndex).show();
  })

  // previous button
  $('.previous').on('click', () => {
    // hide the current image
    $('.carousel-images').children().eq(currentImgIndex).hide();
    // decrement the currentImgIndex
    if(currentImgIndex > 0) {
      currentImgIndex--;
    } else {
      currentImgIndex = numOfImages
    }
    // show the previous image
    $('.carousel-images').children().eq(currentImgIndex).show();
  })
})
