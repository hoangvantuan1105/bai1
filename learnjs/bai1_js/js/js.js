const addButtons = document.querySelectorAll(".addBtn");
const cartTable = document.getElementById("cartTable");
const totalPriceEl = document.getElementById("totalPrice");

let total = 0;

addButtons.forEach(button => {
  button.addEventListener("click", () => {
    const productDiv = button.parentElement;
    const name = productDiv.querySelector("span:nth-child(1)").innerText;
    const price = parseInt(productDiv.querySelector("span:nth-child(2)").innerText);

    // thêm sản phẩm vào bảng
    const newRow = cartTable.insertRow();
    newRow.insertCell(0).innerText = name;
    newRow.insertCell(1).innerText = price;

    // cộng tổng tiền
    total += price;
    totalPriceEl.innerText = total;
  });
});
