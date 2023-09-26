const tempI = document.querySelector("#temp");
const moneyEl = document.querySelector("#money-el");
let curserPrice = document.querySelector("#price-curser-el");

let money = 0;
let clickStreng = 1;
let krCurser = 2;

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
    moneyEl.innerHTML = `${money} Kr.`;
    krCurser *= krCurser;
    //priceCurserEL.innerHTML = `${curserPrice} Kr`;
    clickStreng += 1;
  } else if (money >= krCurser) {
    money -= krCurser;
    moneyEl.innerHTML = `${money} Kr.`;
    clickStreng += 1;
  }
}
