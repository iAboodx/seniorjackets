let menu = document.getElementById("select-name")
let options = document.querySelectorAll(".country")
let rates = 0
const menuToggle = document.querySelector('.toggle');
const showcase = document.querySelector('.showcase');
menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('active');
  showcase.classList.toggle('active');
})

function getSelectedOption() {
  var selectElement = document.getElementById("select-name");
  var selectedValue = parseInt(selectElement.value);
  let quantity = parseInt(document.getElementById("quantity").value)
  let total = document.getElementById("total")
  if (quantity > 3) {
    let totals = (Math.floor(quantity * 15))
    let aftertotal = (Math.floor(totals + selectedValue - 45))
    total.innerText = aftertotal
  } else {
    total.innerText = selectedValue
  }


}
function gettotal() {
  let total = document.getElementById("total")

  var selectElement = document.getElementById("select-name");
  var selectedValue = parseInt(selectElement.value);
  let quantity = parseInt(document.getElementById("quantity").value)
  if (selectElement.value === "0") {
    alert("Choose a country first!")
    document.getElementById("quantity").value = "3"

  } else {
    if (quantity > 3) {
      let totals = (Math.floor(quantity * 15))
      let aftertotal = (Math.floor(totals + selectedValue - 45))
      total.innerText = aftertotal
    } else {
      total.innerText = selectedValue
    }
  }

}