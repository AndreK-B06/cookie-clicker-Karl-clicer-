const imgKarl = document.querySelector("#img-karl");
const moneyEl = document.querySelector("#money-el");
let myImage = document.getElementById("img");

let karlImages = ["/image/karl-ok.png", "/image/narl-nei.png"];

let money = 0;
let clickStreng = 1;
const priceIncres = 2;

/* -----------------------------------
!!!!!!!!!!!!! On click !!!!!!!!!!!!!!!
--------------------------------------*/
let isFirstImage = true;
/* --- !! --*/
//  Jobbes forsat med å fikse på å bytte bilde
imgKarl.addEventListener("click", function () {
  money = clickStreng + money;
  moneyEl.textContent = `${money} Kr.`;
  //
  if (isFirstImage) {
    imgKarl.src = "./image/karl-nei.png";
    console.log("Karl nei");
    isFirstImage = true;
  } else {
    imgKarl.src = "./image/Karl-ok.png";
    isFirstImage = false;
  }
  isFirstImage = !isFirstImage;
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
    audioHoldKjeftEl.play(0);
  } else if (money >= krCurser) {
    money -= krCurser;
    krCurser *= priceIncres;
    curserEl.textContent = `${krCurser} Kr`;
    clickStreng += 1;
    moneyEl.innerHTML = `${money} Kr.`;
    audioHoldKjeftEl.play(0);
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
    audioGrillEl.play(0);
  } else if (money >= krGrill) {
    money -= krGrill;
    krGrill *= priceIncres;
    grillEl.textContent = `${krGrill} Kr`;
    clickStreng += 20;
    moneyEl.innerHTML = `${money} Kr`;
    audioGrillEl.play(0);
  }
}
