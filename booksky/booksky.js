var add=document.getElementById("add-popup")
var popoverlay=document.querySelector(".popup-overlay")
var popup=document.querySelector(".popup")
var cancel=document.getElementById("cancel-popup")
add.addEventListener('click',function(){
    popoverlay.style.display="block"
    popup.style.display="block"
})
cancel.addEventListener('click',function(event){
    event.preventDefault()
    popoverlay.style.display="none"
    popup.style.display="none"
})
// select title,auther,description,add
var container=document.querySelector('.container')
var addbook=document.getElementById('add-book')
var titlein=document.getElementById("book-title-input")
var autherin=document.getElementById("book-author-input")
var discin=document.getElementById("book-discription-input")
addbook.addEventListener('click',function(event){
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute('class',"book-containet")
    div.innerHTML=`<h2>${titlein.value}</h2>
    <h5>${autherin.value}</h5>
    <p>${discin.value}</p>
    <button onclick="del(event)">Delete</button>`
    container.append(div)
    popoverlay.style.display="none"
    popup.style.display="none"
})

function del(event){
    event.preventDefault()
    event.target.parentElement.remove()
}



