const imgKarl = document.querySelector("#img-karl");
const moneyEl = document.querySelector("#money-el");

let karlImages = ["/image/karl-ok.png", "/image/narl-nei.png"];

let money = 0;
let clickStreng = 1;
const priceIncres = 2;

let isFirstImage = true;
let CickCount = 0;
imgKarl.addEventListener("click", function () {
  money = clickStreng + money;
  moneyEl.textContent = `${money} Kr.`;

  if (isFirstImage) {
    imgKarl.src = "./image/karl-nei.png";
    isFirstImage = true;
  } else {
    imgKarl.src = "./image/Karl-ok.png";
    isFirstImage = false;
  }
  isFirstImage = !isFirstImage;
});

const audioGrillEl = document.querySelector("#grill-audio");
const audioHoldKjeftEl = document.querySelector("#hold-kjeft-audio");


const curserEl = document.querySelector("#curser-el");
let krCurser = 5;
let curserUpgradeCount = 0;

function upgradeCurser() {
  if (money === krCurser) {
    money -= krCurser;
    krCurser *= priceIncres;
    curserEl.textContent = `${krCurser} Kr`;
    clickStreng += 1;
    moneyEl.innerHTML = `${money} Kr.`;
    audioHoldKjeftEl.play(0);
    curserUpgradeCount++;
  } else if (money >= krCurser) {
    money -= krCurser;
    krCurser *= priceIncres;
    curserEl.textContent = `${krCurser} Kr`;
    clickStreng += 1;
    moneyEl.innerHTML = `${money} Kr.`;
    audioHoldKjeftEl.play(0);
    curserUpgradeCount++;
  }
}

let grillEl = document.querySelector("#grill");
let krGrill = 100;
let grillUpgradeCount = 0;
//
function upgradeGrill() {
  if (money == krGrill) {
    money -= krGrill;
    krGrill *= priceIncres;
    grillEl.textContent = `${krGrill} Kr`;
    clickStreng += 20;
    moneyEl.innerHTML = `${money} Kr`;
    audioGrillEl.play(0);
    grillUpgradeCount++;
  } else if (money >= krGrill) {
    money -= krGrill;
    krGrill *= priceIncres;
    grillEl.textContent = `${krGrill} Kr`;
    clickStreng += 20;
    moneyEl.innerHTML = `${money} Kr`;
    audioGrillEl.play(0);
    grillUpgradeCount++;
  }
}

let curserCounterEL = document.querySelector("#curser-conter");

function contUppgrades() {
  curserCounterEL.textContent = `${grillUpgradeCount}`;
  console.log("Funksjonen kjører");
}
contUppgrades();
