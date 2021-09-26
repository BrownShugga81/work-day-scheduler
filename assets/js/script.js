// moment to view current date
var currentDate = moment();
$("#currentDay").text(currentDate.format("dddd, MMM Do"));


function nine() {
   // var taskContent = document.querySelector("#9am");
    //var savedContent = document.querySelector("9am");
    var saveBtn9 = document.querySelector("#save9");

    saveBtn9.addEventListener("click", function(){
        changeSavedContent();
        console.log("test");
    });

   // savedContent.textContent = localStorage.getItem("data");
    //taskContent.value = localStorage.getItem("data");
        
    function changeSavedContent() {
        //localStorage.setItem("data", taskContent.value);
        //savedContent.textContent = taskContent.value;
        console.log("test");
    };    
};    
        