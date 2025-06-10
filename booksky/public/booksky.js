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
// selecting log in
var log_in = document.querySelector(".log");
var logemail = document.getElementById("login-mail");
var logpassword = document.getElementById("login-pass");
var submit = document.querySelector(".log-submit");
var popup3 = document.querySelector(".popup3");
var logcancel = document.querySelector(".log-cancel");
// selecting sign up
var sign_up = document.querySelector(".sig");
var popup4 = document.querySelector(".popup4");
var submit_sig = document.querySelector(".sig-submit");
var sigemail = document.getElementById("sig-mail");
var sigpassword = document.getElementById("sig-pass");
var signame = document.getElementById("sig-name");
var sigcancel = document.querySelector(".sig-cancel");

addbook.addEventListener("click", function (event) {
  event.preventDefault();
  var title = titlein.value;
  var author = autherin.value;
  var discription = discin.value;
  if (title === "" || author === "" || discription === "") {
    alert("Please fill in all the fields.");
    return;
  }
   else {
    event.preventDefault();
    var div = document.createElement("div");
    div.setAttribute("class", "book-containet");
    div.innerHTML = `<h2>${titlein.value}</h2>
    <h5>${autherin.value}</h5>
    <p>${discin.value}</p>
    <button onclick="del(event)">Delete</button>`;
    container.append(div);
    titlein.value = null;
    autherin.value = null;
    discin.value = null;
    popoverlay.style.display = "none";
    popup.style.display = "none";
  }
});
var del1;

function del(event) {
  event.preventDefault();
  popup2.style.display = "block";
  popoverlay.style.display = "block";
  del1 = event.target.parentElement;
}

function ok(event) {
  event.preventDefault();
  if (del1) {
    del1.remove();
    del1 = null;
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

function no(event) {
  event.preventDefault();
  popup2.style.display = "none";
  popoverlay.style.display = "none";
}

log_in.addEventListener("click", function (event) {
  event.preventDefault();
  popoverlay.style.display = "block";
  popup3.style.display = "block";
});

submit.addEventListener("click", function (event) {
  event.preventDefault();
  var mail = logemail.value;
  var pass = logpassword.value;

  if (mail === "" || pass === "") {
    alert("❗ Fill the Email and Password");
    return;
  }

  fetch("/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ email: mail, password: pass })
  })
  .then(response => response.text())
  .then(result => {
    alert(result);
    if (result.includes("Login Successful")) {
      log_in.textContent="Loged"
      logemail.value = "";
      logpassword.value = "";
      popoverlay.style.display = "none";
      popup3.style.display = "none";
    }
  })
  .catch(error => {
    console.error("Login error:", error);
    alert("⚠️ Error during login");
  });
});

logcancel.addEventListener("click", function (event) {
  event.preventDefault();
  logemail.value = null;
  logpassword.value = null;
  popoverlay.style.display = "none";
  popup3.style.display = "none";
});

sign_up.addEventListener("click", function (event) {
  event.preventDefault();
  popoverlay.style.display = "block";
  popup4.style.display = "block";
});

sigcancel.addEventListener("click", function (event) {
  event.preventDefault();
  sigemail.value = null;
  sigpassword.value = null;
  signame.value = null;
  popoverlay.style.display = "none";
  popup4.style.display = "none";
});

submit_sig.addEventListener("click", function (event) {

  var sig_name = signame.value.trim();
  var sigmail = sigemail.value.trim();
  var sigpass = sigpassword.value.trim();

  if (sig_name === "" || sigmail === "" || sigpass === "") {
    alert("Fill all the field");
    return;
  } 
  // Frontend validation passed — send to backend
  const signupData = {
    name: sig_name,
    email: sigmail,
    password: sigpass
  };

  // POST request to backend
  fetch("http://localhost:3000/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(signupData)
  })
    .then((response) => response.text())
    .then((message) => {
      alert(message); // Show backend response
      // Reset form and close popup
      sigemail.value = "";
      sigpassword.value = "";
      signame.value = "";
      popoverlay.style.display = "none";
      popup4.style.display = "none";
    })
    .catch((error) => {
      console.error("Error submitting signup:", error);
      alert("Error sending data to server.");
    });
});
