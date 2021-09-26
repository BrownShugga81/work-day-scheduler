// moment to view current date
var currentDate = moment();
$("#currentDay").text(currentDate.format("dddd, MMM Do"));


// 9am block
var taskContent = document.querySelector("#nineAM");
var savedContent = document.querySelector("#nineAM");
var saveBtn9 = document.querySelector("#save9");

saveBtn9.addEventListener("click", function(){
    changeSavedContent();
        //console.log("test");
});

savedContent.textContent = localStorage.getItem("data");
taskContent.value = localStorage.getItem("data");
        
function changeSavedContent() {
    localStorage.setItem("data", taskContent.value);
    savedContent.textContent = taskContent.value;
        //console.log("test");
};
    
// 10am block  

var taskContent2 = document.querySelector("#tenAM");
var savedContent2 = document.querySelector("#tenAM");
var saveBtn10 = document.querySelector("#save10");

saveBtn10.addEventListener("click", function(){
    changeSavedContent2();
});

savedContent2.textContent = localStorage.getItem("data2");
taskContent2.value = localStorage.getItem("data2");
    
function changeSavedContent2() {
    localStorage.setItem("data2", taskContent2.value);
    savedContent2.textContent = taskContent2.value;
};

// 11am block

var taskContent3 = document.querySelector("#elevenAM");
var savedContent3 = document.querySelector("#elevenAM");
var saveBtn11 = document.querySelector("#save11");

saveBtn11.addEventListener("click", function(){
    changeSavedContent3();
});

savedContent3.textContent = localStorage.getItem("data3");
taskContent3.value = localStorage.getItem("data3");
    
function changeSavedContent3() {
    localStorage.setItem("data3", taskContent3.value);
    savedContent3.textContent = taskContent3.value;
};

// 12PM block

var taskContent4 = document.querySelector("#twelvePM");
var savedContent4 = document.querySelector("#twelvePM");
var saveBtn12 = document.querySelector("#save12");

saveBtn12.addEventListener("click", function(){
    changeSavedContent4();
});

savedContent4.textContent = localStorage.getItem("data4");
taskContent4.value = localStorage.getItem("data4");
    
function changeSavedContent4() {
    localStorage.setItem("data4", taskContent4.value);
    savedContent4.textContent = taskContent4.value;
};

// 1pm block

var taskContent5 = document.querySelector("#onePM");
var savedContent5 = document.querySelector("#onePM");
var saveBtn1 = document.querySelector("#save1");

saveBtn1.addEventListener("click", function(){
    changeSavedContent5();
});

savedContent5.textContent = localStorage.getItem("data5");
taskContent5.value = localStorage.getItem("data5");
    
function changeSavedContent5() {
    localStorage.setItem("data5", taskContent5.value);
    savedContent5.textContent = taskContent5.value;
};

// 2pm block

var taskContent6 = document.querySelector("#twoPM");
var savedContent6 = document.querySelector("#twoPM");
var saveBtn2 = document.querySelector("#save2");

saveBtn2.addEventListener("click", function(){
    changeSavedContent6();
});

savedContent6.textContent = localStorage.getItem("data6");
taskContent6.value = localStorage.getItem("data6");
    
function changeSavedContent6() {
    localStorage.setItem("data6", taskContent6.value);
    savedContent6.textContent = taskContent6.value;
};

// 3pm block

var taskContent7 = document.querySelector("#threePM");
var savedContent7 = document.querySelector("#threePM");
var saveBtn3 = document.querySelector("#save3");

saveBtn3.addEventListener("click", function(){
    changeSavedContent7();
});

savedContent7.textContent = localStorage.getItem("data7");
taskContent7.value = localStorage.getItem("data7");
    
function changeSavedContent7() {
    localStorage.setItem("data7", taskContent7.value);
    savedContent7.textContent = taskContent7.value;
};

// 4pm block

var taskContent8 = document.querySelector("#fourPM");
var savedContent8 = document.querySelector("#fourPM");
var saveBtn4 = document.querySelector("#save4");

saveBtn4.addEventListener("click", function(){
    changeSavedContent8();
});

savedContent8.textContent = localStorage.getItem("data8");
taskContent8.value = localStorage.getItem("data8");
    
function changeSavedContent8() {
    localStorage.setItem("data8", taskContent8.value);
    savedContent8.textContent = taskContent8.value;
};

// 5pm block

var taskContent9 = document.querySelector("#fivePM");
var savedContent9 = document.querySelector("#fivePM");
var saveBtn5 = document.querySelector("#save5");

saveBtn5.addEventListener("click", function(){
    changeSavedContent9();
});

savedContent9.textContent = localStorage.getItem("data9");
taskContent9.value = localStorage.getItem("data9");
    
function changeSavedContent9() {
    localStorage.setItem("data9", taskContent9.value);
    savedContent9.textContent = taskContent9.value;
};