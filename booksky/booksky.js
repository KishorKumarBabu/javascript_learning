var add = document.getElementById("add-popup");
var popoverlay = document.querySelector(".popup-overlay");
var popup = document.querySelector(".popup");
var cancel = document.getElementById("cancel-popup");
var popup2 = document.querySelector(".popup2");
var div1 = document.querySelector(".book-containet");
add.addEventListener("click", function () {
  popoverlay.style.display = "block";
  popup.style.display = "block";
});
// select title,auther,description,add
var container = document.querySelector(".container");
var addbook = document.getElementById("add-book");
var titlein = document.getElementById("book-title-input");
var autherin = document.getElementById("book-author-input");
var discin = document.getElementById("book-discription-input");
addbook.addEventListener("click", function (event) {
  var title = titlein.value;
  var author = autherin.value;
  var discription = discin.value;
if (title === "" || author === "" || discription === "") {
    alert("Please fill in all the fields.");
    return;}
else{
    event.preventDefault();
    var div = document.createElement("div");
    div.setAttribute("class", "book-containet");
    div.innerHTML = `<h2>${titlein.value}</h2>
    <h5>${autherin.value}</h5>
    <p>${discin.value}</p>
    <button onclick="del(event)">Delete</button>`;
    container.append(div);
    popoverlay.style.display = "none";
    popup.style.display = "none";
  }
});
var del1
function del(event) {
  event.preventDefault();
  popup2.style.display = "block";
  popoverlay.style.display = "block";
  del1 = event.target.parentElement;
}
function ok(event) {
    event.preventDefault()
  if(del1){
    del1.remove()
    del1=null
  }
  popup2.style.display = "none";
  popoverlay.style.display = "none";
  
}
cancel.addEventListener("click", function (event) {
  event.preventDefault();
  popoverlay.style.display = "none";
  popup.style.display = "none";
  titlein.value = null;
  autherin.value = null;
  discin.value = null;
});

