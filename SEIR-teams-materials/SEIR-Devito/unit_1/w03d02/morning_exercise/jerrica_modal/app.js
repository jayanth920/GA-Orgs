$( () => {
  // ===================
  // GRABBING ELEMENTS
  // ===================
  const $openBtn = $('#openModal');
  const $modal = $('#modal');
  const $closeBtn = $('#close');

  // ===================
  // EVENT HANDLER
  // ===================
  // opens the modal
  const openModal = () => {
    $modal.css('display', 'block');
  }
  // closes the modal
  const closeModal = () => {
    $modal.css('display', 'none');
  }

  // ===================
  // EVENT LISTENERS
  // ===================
  // about the game button
  $openBtn.on('click', openModal);
  // close button
  $closeBtn.on('click', closeModal);

  // ===================
  // HAVE MODAL POP UP
  // ===================
  setTimeout(openModal, 2000)
});
