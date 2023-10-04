const tempI = document.querySelector("#temp");
const moneyEl = document.querySelector("#money-el");
let myImage = document.querySelector("img");

// let karlImages = ["/image/karl-ok.png", "/image/narl-nei.png"];

let money = 0;
let clickStreng = 1;
const priceIncres = 2;

/* -----------------------------------
!!!!!!!!!!!!! On click !!!!!!!!!!!!!!!
--------------------------------------*/
//  Jobbes forsat med å fikse på å bytte bilde
tempI.addEventListener("click", function () {
  money = clickStreng + money;
  moneyEl.textContent = `${money} Kr.`;
  let changeImg = myImage.getAttribute("src");
  if (changeImg === "./image/karl-ok.png") {
    myImage.setAttribute("scr", "./image/karl-nei.png");
    console.log("karl nei");
  } else if (changeImg === "./image/karl-nei.png") {
    myImage.setAttribute("src", "./image/karl-ok.png");
    console.log("karl ok");
  } else {
    console.log("Error");
  }
});
/* -----------------------------------
!!!!!!!!!!!!! Upgrade !!!!!!!!!
--------------------------------------*/

/* -----------------------------------
!!!!!!!!!!!!! Audio !!!!!!!!!
--------------------------------------*/
const audioGrillEl = document.querySelector("#grill-audio");
const audioHoldKjeftEl = document.querySelector("#hold-kjeft-audio");

/* -----------------------------------
!!!!!!!!!!!!! Curser Upgrade !!!!!!!!!
--------------------------------------*/
const curserEl = document.querySelector("#curser-el");
let krCurser = 5;

function upgradeCurser() {
  if (money === krCurser) {
    money -= krCurser;
    krCurser *= priceIncres;
    curserEl.textContent = `${krCurser} Kr`;
    clickStreng += 1;
    moneyEl.innerHTML = `${money} Kr.`;
    audioHoldKjeftEl.play();
  } else if (money >= krCurser) {
    money -= krCurser;
    krCurser *= priceIncres;
    curserEl.textContent = `${krCurser} Kr`;
    clickStreng += 1;
    moneyEl.innerHTML = `${money} Kr.`;
    audioHoldKjeftEl.play();
  }
}
/* -----------------------------------
!!!!!!!!!!!!! Grill Upgrade !!!!!!!!!
--------------------------------------*/
let grillEl = document.querySelector("#grill");
let krGrill = 100;
function upgradeGrill() {
  if (money == krGrill) {
    money -= krGrill;
    krGrill *= priceIncres;
    grillEl.textContent = `${krGrill} Kr`;
    clickStreng += 20;
    moneyEl.innerHTML = `${money} Kr`;
    audioGrillEl.play();
  } else if (money >= krGrill) {
    money -= krGrill;
    krGrill *= priceIncres;
    grillEl.textContent = `${krGrill} Kr`;
    clickStreng += 20;
    moneyEl.innerHTML = `${money} Kr`;
    audioGrillEl.play();
  }
}
