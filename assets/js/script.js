$(document).ready(function () {
  var saveButton = $(".saveBtn");
  var eventDesc = $(".discribtion");
  var hourEl = $(".hour");
  var currentDate = moment().format("dddd MMM D, YYYY");
  $("#currentDay").text(currentDate);

  var currentHour = moment().hours();
  // console.log(localStorage.getItem("9"));
  // for (let i = 9; i = 9 ; i++) {
  //   $("textarea").attr("data-value" + i).text( localStorage.getItem(i))
  // }
  $(".row").each(function () {
    var id = $(this).attr("id");
   // eventDesc.text(localStorage.getItem(id));
   console.log();
   $(this).children("textarea").val(localStorage.getItem(id));

   // $(this).children(".eventDesc").val(getId);

    if (id > currentHour) {
      $(this).addClass("future");
    } else if (id < currentHour) {
      $(this).addClass("past");
    } else {
      $(this).addClass("present");
    }
  });

  $(".saveBtn").click(function () {
    //this is the .saveBtn class
    //Get the value of the sibling of the schedule class and make it the value of value
    var value = $(this).siblings(".discribtion").val();
    //grabbed the id from the parent element
    var parentValue = $(this).parent().attr("id");
    //Saved to localStorage
    localStorage.setItem(parentValue, value);
    console.log(value);
    console.log(parentValue);
  });
});

//display time on top of the page.
//Function displayTime(){
// var time = moment().format('dddd MMM Mo, YYYY [at] kk:mm:ss a');
// timeDisplayEl.text(time);
//}
//setInterval(time, 1000);

//var curentTime = Number.parseInt(moment().format("kk:mm"));

//function saveDiscribtion (e) {
// e.preventDefault();

// Save related form data as an object

// Use .setItem() to store object in storage and JSON.stringify to convert it as a string
//localStorage.setItem("studentGrade", JSON.stringify(studentGrade));

//create a varible that saves whatever they put in the discribtion colum into the local storege.
//add event listner to the save button and save it to the
//button.addEventListener('click' );

// moment js format
