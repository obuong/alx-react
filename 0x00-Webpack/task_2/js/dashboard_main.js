import $ from 'jquery';
import _ from 'lodash';

$(document).ready(function () {
    $('body').append('<p>Holberton Dashboard</p>');
    $('body').append('<p>Dashboard data for the students</p>');
    $('body').append('<button id="clickButton">Click here to get started</button>');
    $('body').append('<p id="count"></p>');
    $('body').append('<p>Copyright - Holberton School</p>');
  });

  function updateCounter() {
    let count = 0;
    const countParagraph = $('#count');
  
    function handleClick() {
      count++;
      countParagraph.text(`${count} clicks on the button`);
    }
  
    $('#clickButton').on('click', _.debounce(handleClick, 1000));
  }
  
  updateCounter();
  