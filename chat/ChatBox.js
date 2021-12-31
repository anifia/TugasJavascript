let resultChat = document.querySelector(".result-chat");
const inputChat = document.querySelector(".input-chat");
const btnChat = document.querySelector(".send");

btnChat.addEventListener("click", function(){
    resultChat.innerHTML = resultChat.innerHTML + "<br>" + inputChat.value;
    inputChat.value = "";
})
// document.querySelector(".send").addEventListener("click", function(){
//     document.querySelector("input-chat");
// });
// var box = querySelector(".result-chat");
// var text = querySelector(".");

// document.getElementById("myBtn").addEventListener("click", function() {
//     myFunction(p1, p2);
// });

// function myFunction(a, b) {
//     var result = a * b;
//     document.getElementById("demo").innerHTML = result;