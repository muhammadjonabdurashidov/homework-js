var elForm = document.querySelector(".form");
var infoAge = document.querySelector(".input");
var infoText = document.querySelector (".text");

elForm.addEventListener("submit", function(evt) {
  evt.preventDefault();

  if (isNaN(infoAge.value)) {
    infoText.textContent = "Iltimos son kiriting!";
  }
  else if (infoAge.value == 0) {
    infoText.textContent = "yoshingizni kiriting!";
  }
  else if (infoAge.value > 200) {
    infoText.textContent = "tog'ri yoshingizni kiriting!";
  }
  else if (infoAge.value > 60) {
    infoText.textContent = "sizga chipta bepul";
  }
  else if (infoAge.value > 20) {
    infoText.textContent = "sizga chipta 1800 so'm";
  }
  else if (infoAge.value < 7) {
    infoText.textContent = "sizga chipta bepul";
  }
  else if (infoAge.value > 7) {
    infoText.textContent = "sizga chipta 1400 so'm";
  } 
})

// var elForm = document.querySelector(".forumuz");
// var infoName = document.querySelectorAll(".input2");
// var infoAgeone = document.querySelectorAll(".input3");
// var infoTextone = document.querySelectorAll(".text2")


// elForm.addEventListener("submit", function(evt) {
//   evt.preventDefault();

//   if (isNaN(infoAgeone.value)) {
//   infoTextone.textContent = "iltimos son kiriting";
//   }
//   else if (infoAgeone.value < 2000) {
//    infoTextone.textContent = "pulingiz yetmadi"
//   }
//   else if (infoAgeone.value > 2000) {
//     infoTextone.textContent = "pulingiz yetti ketishingiz mumkun"
//   }
// })