var now = dayjs().format("dddd, MMMM D, YYYY");
$("#currentDay").text(now);

var currentHour = dayjs().format("HH");
console.log(currentHour);

var time08 = document.getElementById("08");
var time09 = document.getElementById("09");
var time10 = document.getElementById("10");
var time11 = document.getElementById("11");
var time12 = document.getElementById("12");
var time13 = document.getElementById("13");
var time14 = document.getElementById("14");
var time15 = document.getElementById("15");
var time16 = document.getElementById("16");

var timesId = [time08.id, time09.id, time10.id, time11.id, time12.id, time13.id, time14.id, time15.id, time16.id]

var times = [time08, time09, time10, time11, time12, time13, time14, time15, time16]

function timeIndicator() {
    console.log(timesId);
    console.log(times);
    for (var i = 0; i < times.length; i++) {
        // add correct class, appending to current classes i/a
        if (timesId[i] < currentHour) {
            times[i].className += times[i].className ? ' past' : 'past';
        } else if (timesId[i] > currentHour) {
            times[i].className += times[i].className ? ' future' : 'future';
        } else {
            times[i].className += times[i].className ? ' present' : 'present';
        }
    }
};

function init() {
    timeIndicator()
};

init();
