function item(target) {
  // get the item name
  const itemName = target.childNodes[5].childNodes[1].innerText;

  // select the list div and append the selected item name
  const itemNameList = document.getElementById("item-name-list");
  const itemCount = itemNameList.childElementCount;
  const p = document.createElement("p");
  p.classList.add("font-semibold");
  p.innerText = `${itemCount + 1}. ${itemName}`;
  itemNameList.appendChild(p);

  // get the item price
  const itemPriceString = target.childNodes[5].childNodes[3].childNodes[0].innerText;
  const itemPrice = parseFloat(itemPriceString);

  // insert the total calculate price in total price section
  const totalPrice = document.getElementById("total-price");
  const totalPriceString = totalPrice.innerText;
  const totalPriceNumber = parseFloat(totalPriceString);
  const totalCalculate = itemPrice + totalPriceNumber;
  totalPrice.innerText = totalCalculate.toFixed(2);

  // insert the grand total calculate price in grand total price section
  const grandPrice = document.getElementById("grand-price");
  const grandPriceString = grandPrice.innerText;
  const grandPriceNumber = parseFloat(grandPriceString);
  const grandCalculate = itemPrice + grandPriceNumber;
  grandPrice.innerText = grandCalculate.toFixed(2);

  // check if the total price bigger then 0 the purchase button show
  const purchaseBtn = document.getElementById("purchase-btn");
  if (totalCalculate > 0) {
    purchaseBtn.removeAttribute("disabled");
    purchaseBtn.classList.remove("bg-gray-300");
    purchaseBtn.classList.add("bg-[#E527B2]");
  } else {
    purchaseBtn.setAttribute("disabled", true);
    purchaseBtn.classList.add("bg-gray-300");
  }

  // check if the total price bigger then 200 the discount apply button show
  const discountBtn = document.getElementById("discount-apply");
  if (totalCalculate >= 200) {
    discountBtn.removeAttribute("disabled");
    discountBtn.classList.remove("bg-gray-300");
    discountBtn.classList.add("bg-[#E527B2]");
  } else {
    discountBtn.setAttribute("disabled", true);
    discountBtn.classList.add("bg-gray-300");
  }

  // calculate discount and get the grand total price
  discountBtn.addEventListener("click", function discountApply() {
    const couponInput = document.getElementById("discount").value;
    if (couponInput === "SELL200") {
      const discountCheck = (totalCalculate / 100) * 20;
      const afterDiscount = totalCalculate - discountCheck;
      document.getElementById("discount-price").innerText =
        discountCheck.toFixed(2);
      document.getElementById("grand-price").innerText =
        afterDiscount.toFixed(2);
      document.getElementById("error-msg").classList.add("hidden");
    } else {
      document.getElementById("error-msg").classList.remove("hidden");
    }
  });
}

// clear all section after modal click
function goHome() {
  document.getElementById("discount").value = "";
  document.getElementById("item-name-list").innerText = "";
  document.getElementById("total-price").innerText = "00.00";
  document.getElementById("grand-price").innerText = "00.00";
  document.getElementById("discount-price").innerText = "00.00";

  document.getElementById("discount-apply").setAttribute("disabled", true);
  document.getElementById("discount-apply").classList.add("bg-gray-300");

  document.getElementById("purchase-btn").setAttribute("disabled", true);
  document.getElementById("purchase-btn").classList.remove("bg-[#E527B2]");
}
