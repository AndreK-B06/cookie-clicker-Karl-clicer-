const karl = document.querySelector("#kal-sint");
const moneyEl = document.querySelector("#money-el");
let curserEL = document.querySelector("#curser-el");

let money = 0;
let clickStreng = 1;
let krCurser = 5;
const priceIncres = 2;

karl.addEventListener("click", function () {
  money = clickStreng + money;
  moneyEl.textContent = `${money} Kr.`;
});

function karlNei() {
  document.querySelector("#karl-sint").src == Image / karlNei.png;
}

function KarlOk() {
  document.querySelector("#karl-sint").src == Image / KarlOk.png;
}
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
