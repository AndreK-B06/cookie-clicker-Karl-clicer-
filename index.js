const tempI = document.querySelector("#temp");
const moneyEl = document.querySelector("#money-el");
let curserEL = document.querySelector("#curser-el");
let myImage = document.querySelector("img");

let karlImages = ["/image/Karl-ok.png", "/image/Karl-nei.png"];

let money = 0;
let clickStreng = 1;
let krCurser = 5;
const priceIncres = 2;

/* -----------------------------------
!!!!!!!!!!!!! On click !!!!!!!!!!!!!!!
--------------------------------------*/

tempI.addEventListener("click", function () {
  money = clickStreng + money;
  moneyEl.textContent = `${money} Kr.`;
  let changeImg = myImage.getAttribute("src");
  if (changeImg === "./image/Karl-ok.png") {
    myImage.setAttribute("scr", "./image/Karl-nei.png");
    console.log("karl nei");
  } else {
    myImage.setAttribute("src", "./image/karl-ok.png");
    console.log("karl ok");
  }
});

/* -----------------------------------
!!!!!!!!!!!!! Curser Upgrade !!!!!!!!!
--------------------------------------*/

function upgradeCurser() {
  if (money === krCurser) {
    money -= krCurser;
    krCurser *= priceIncres;
    curserEL.textContent = `${krCurser} Kr`;
    clickStreng += 1;
    moneyEl.innerHTML = `${money} Kr.`;
  } else if (money >= krCurser) {
    money -= krCurser;
    krCurser *= priceIncres;
    curserEL.textContent = `${krCurser} Kr`;
    clickStreng += 1;
    moneyEl.innerHTML = `${money} Kr.`;
  }
}
