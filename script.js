var rootEl = $('#root');
var saveButton = $('.saveBtn');
var timeBlockHour;

$(function () {
  var currentTime = dayjs().hour();
  console.log(currentTime);
  var timeBlock = $('.time-block');
  for(var i = 0; i < timeBlock.length; i++) {
    // console.log(timeBlock[i]);
    // This returns the id hour
    // console.log(timeBlock[i].getAttribute('id').split('-')[1]);
    timeBlockHour = timeBlock[i].getAttribute('id').split('-')[1];

  // if (currentTime > timeBlockHour) {
  //   id.attr('class', 'past');
  //  } else (currentTime < timeBlockHour) {
  //   id.attr('class', 'future');
  //  } else if (currentTime === timeBlockHour) {
  //   id.attr('class', 'present');
  //  }

   if(currentTime > timeBlockHour) {
    $(`#hour-${timeBlockHour}`).addClass('past');
   } else if (currentTime < timeBlockHour) {
    $(`#hour-${timeBlockHour}`).addClass('future');
     } else if (currentTime === timeBlockHour) {
      $(`#hour-${timeBlockHour}`).addClass('present');
     }
  }

  var date = dayjs().format('MMM, D YYYY');
$('#currentDay').text(date);

function savedEvent (event) {
  console.log(event.target.previousSibling.parentNode.getAttribute('id'));
  var textValue = event.target.previousSibling.previousSibling.value;
  var id = event.target.previousSibling.parentNode.getAttribute('id');
  var savedEvent = {
    text: textValue,
    id: id
  };

  localStorage.setItem(id, JSON.stringify(savedEvent)); // how to reference "this"
  localStorage.getItem("events");

}

saveButton.on('click', this, savedEvent);

//make a separate function for getting the localstorage
// var key = "hour-" + i
// var key = `hour-${i}`
// localStorage.getItem(key)
// loop 9-17 

  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
}); 

// var date = dayjs().format('MMM, D YYYY');
// $('#currentDay').text(date);

// function savedEvent (event) {
//   console.log(event.target.parent)
//   // var savedEvent = {
//   //   text: // how to select text from event
//   //   id: // how to select id for each event
//   // } 

//   // localStorage.setItem("events", this.savedEvent); // how to reference "this"
//   // localStorage.getItem("events");

// }

// saveButton.on('click', this, savedEvent);




/*
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with time blocks for standard business hours
WHEN I view the time blocks for that day
THEN each time block is color-coded to indicate whether it is in the past, present, or future
WHEN I click into a time block
THEN I can enter an event
WHEN I click the save button for that time block
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist
*/