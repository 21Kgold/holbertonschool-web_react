import $ from "jquery";
import _ from "lodash";
import "../css/main.css";

let count = 0;

function updateCounter() {
    count += 1;
    $('#count').text(`${count} clicks on the button`);
}

$(document).ready(function() {
    $('body').append('<div id="logo"></div>');
    $('body').append('<p>Holberton Dashboard</p>');
    $('body').append('<p>Dashboard data for the students</p>');
    $('body').append('<button type="button" id="startButton">Click here to get started</button>');
    $('body').append('<p id="count"></p>');
    $('body').append('<p>Copyright - Holberton School</p>');

    // Use event delegation to handle the click event
    $('body').on('click', '#startButton', _.debounce(updateCounter, 500));
});
