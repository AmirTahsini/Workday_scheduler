var rootEl = $('#root');
var saveButton = $('.saveBtn');
var timeBlockHour;
var id;


$(function () {
  var currentTime = dayjs().hour();
  console.log(currentTime);
  var timeBlock = $('.time-block');
  for(var i = 0; i < timeBlock.length; i++) {
    // console.log(timeBlock[i]);
    // This returns the id hour
    // console.log(timeBlock[i].getAttribute('id').split('-')[1]);
    timeBlockHour = timeBlock[i].getAttribute('id').split('-')[1];
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
  id = event.target.previousSibling.parentNode.getAttribute('id');
  var savedEvent = {
    text: textValue,
    id: id
  };
  localStorage.setItem(id, JSON.stringify(savedEvent));
}

saveButton.on('click', this, savedEvent);

/*function getEvents() {
  var savedText = JSON.parse(localStorage.getItem('key'));
  console.log(savedText);
  return savedText;
    $("textarea").text = savedText;
}
}*/

function getEvents() {
  var savedText = JSON.parse(localStorage.getItem(id));
  console.log(savedText);
  return savedText;
}
getEvents();

}); 


//make a separate function for getting the localstorage
// var key = "hour-" + i
// var key = `hour-${i}`
// localStorage.getItem(key)
// loop 9-17 