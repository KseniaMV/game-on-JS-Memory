/*section is downloaded by timeOut() in getImages.js*/
/*function returns to the game page*/
function tryAgain(){
  let buttonTryAgain = document.querySelector(".home_button");
  buttonTryAgain.addEventListener("click", ()=>{
      window.location.href = "index.html";
  });
};