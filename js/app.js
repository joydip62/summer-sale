function item(target) {
  const itemName = target.childNodes[5].childNodes[1].innerText;

  const itemNameList = document.getElementById("item-name-list");
  const itemCount = itemNameList.childElementCount;
  const p = document.createElement("p");
  p.classList.add("font-semibold");
  p.innerText = `${itemCount + 1}. ${itemName}`;
  itemNameList.appendChild(p);

  const itemPriceString = target.childNodes[5].childNodes[3].childNodes[0].innerText;
  const itemPrice = parseFloat(itemPriceString);

  const totalPrice = document.getElementById("total-price");
  const totalPriceString = totalPrice.innerText;
  const totalPriceNumber = parseFloat(totalPriceString);
  const totalCalculate = itemPrice + totalPriceNumber;
  totalPrice.innerText = totalCalculate.toFixed(2);

  const grandPrice = document.getElementById("grand-price");
  const grandPriceString = grandPrice.innerText;
  const grandPriceNumber = parseFloat(grandPriceString);
  const grandCalculate = itemPrice + grandPriceNumber;
  grandPrice.innerText = grandCalculate.toFixed(2);

  const purchaseBtn = document.getElementById("purchase-btn");
  if (parseFloat(totalCalculate) >= 200) {
    purchaseBtn.removeAttribute("disabled");
    purchaseBtn.classList.remove("bg-gray-300");
    purchaseBtn.classList.add("bg-[#E527B2]");
  } else {
    purchaseBtn.setAttribute("disabled", true);
    purchaseBtn.classList.add("bg-gray-300");
  }

  document.getElementById("discount-apply").addEventListener("click", function () {
      const discountCheck = (totalCalculate / 100) * 20;
      const afterDiscount = totalCalculate - discountCheck;
      // console.log(disCheck);
      document.getElementById("discount-price").innerText = discountCheck.toFixed(2);
      document.getElementById("grand-price").innerText =
        afterDiscount.toFixed(2);
    });
}

document.getElementById("discount").addEventListener("keyup", function (e) {
  const discountBtn = document.getElementById("discount-apply");
  const text = e.target.value;
  if (text === "SELL200") {
    discountBtn.removeAttribute("disabled");
    discountBtn.classList.remove("bg-gray-300");
    discountBtn.classList.add("bg-[#E527B2]");
  } else {
    discountBtn.setAttribute("disabled", true);
    discountBtn.classList.add("bg-gray-300");
  }
});
