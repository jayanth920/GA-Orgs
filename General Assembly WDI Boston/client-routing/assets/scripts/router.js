'use strict';

const showAbout = () => {
  $('#about').removeClass('hidden');
};

const showProjects = () => {
  $('#projects').removeClass('hidden');
};

const showTalks = () => {
  $('#talks').removeClass('hidden');
};

$(() => {
  $('a[href="#about"]').on('click', (event) => {
    event.preventDefault();
    showAbout();
  });

  $('a[href="#projects"]').on('click', (event) => {
    event.preventDefault();
    showProjects();
  });

  $('a[href="#talks"]').on('click', (event) => {
    event.preventDefault();
    showTalks();
  });
});

module.exports = true;
