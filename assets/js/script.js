//display time on top of the page.
var time = moment().format('MMMM Do YYYY, h:mm:ss a');
 console.log(time);
var curentTime= document.querySelector('#currentDay');
console.log(curentTime);
document.getElementById("currentDay").innerHTML = time;

let getTextarea = function (hour) {
   let schedule = JSON.parse(window.localStorage.getItem("discribtion"));

   if (!discribtion) {
       discribtion = [];
   } else {
      for (let i =0; i< discribtion.length; i++) {
          if (discribtion[i].hour == hour) {
              return discribtion[i].text;
           }
      }
   }
   return "";
}
  console.log(localStorage)


//const button = document.querySelector('.saveBtn');

//create a varible that saves whatever they put in the discribtion colum into the local storege.


//add event listner to the save button and save it to the 
//button.addEventListener('click' );



// moment js format

moment().format('MMMM Do YYYY, h:mm:ss a');