const tempI = document.querySelector("#temp");
const moneyEl = document.querySelector("#money-el");
let curserEL = document.querySelector("#curser-el");

let karlImages = ["/image/Karl-ok.png", "/image/Karl-nei.png"];

let money = 0;
let clickStreng = 1;
let krCurser = 5;
const priceIncres = 2;
tempI.addEventListener("click", function () {
  money = clickStreng + money;
  moneyEl.textContent = `${money} Kr.`;
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
