// Get HTML Elements
const imgKarl = document.querySelector("#img-karl");
let karlImages = ["/image/karl-ok.png", "/image/karl-nei.png"];
const txtMoney = document.querySelector("#txt-style-money");
const audioGrill = document.querySelector("#grill-audio");
const audioHoldKjeft = document.querySelector("#hold-kjeft-audio");
const curser = document.querySelector("#curser");
let grill = document.querySelector("#grill");
// Get HTML Elements

const priceIncrease = 2;
let money = 0;
let krCurser = 5;
let krGrill = 100;
let clickStrength = 1;
let curserUpgradeCount = 0;
let grillUpgradeCount = 0;

let isFirstImage = true;

// Main function getting mony
imgKarl.addEventListener("click", function () {
  money = clickStrength + money;
  txtMoney.textContent = `${money} Kr.`;

  if (isFirstImage) {
    imgKarl.src = "./image/karl-nei.png";
    isFirstImage = true;
  } else {
    imgKarl.src = "./image/Karl-ok.png";
    isFirstImage = false;
  }
  isFirstImage = !isFirstImage;
});
// Main function getting mony

// Upgrade
function upgradeCurser() {
  if (money >= krCurser) {
    money -= krCurser;
    krCurser *= priceIncrease;
    curser.textContent = `${krCurser} Kr`;
    clickStrength += 1;
    txtMoney.innerHTML = `${money} Kr.`;
    audioHoldKjeft.play(0);
    curserUpgradeCount++;
  }
}

function upgradeGrill() {
  if (money >= krGrill) {
    money -= krGrill;
    krGrill *= priceIncrease;
    grill.textContent = `${krGrill} Kr`;
    clickStrength += 20;
    txtMoney.innerHTML = `${money} Kr`;
    audioGrill.play(0);
    grillUpgradeCount++;
  }
}
// Upgrade
