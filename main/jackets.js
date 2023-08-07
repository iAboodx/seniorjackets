const menuToggle = document.querySelector('.toggle');
const showcase = document.querySelector('.showcase');
menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    showcase.classList.toggle('active');
})


const buyleather = document.querySelector(".buyleather")
const buycotton = document.querySelector(".buycotton")
const calucator = document.querySelector(".calucator")
const buy = document.querySelector(".buy")
let wrapper = document.querySelectorAll(".wrapper")
const backbtn = document.querySelector(".backbtn")

const itemid = document.getElementById("itemid")
let atotal = 0

buyleather.addEventListener('click', (e) => {
    wrapper.forEach(e => {
        e.style.display = "none"

    })

    backbtn.style.display = "block"
    itemid.value = "Leather sleeves x1"
    const total = document.getElementById("total")
    let intg = parseInt(total.innerText)
    total.innerText = intg + 230



})
buycotton.addEventListener('click', (e) => {
    itemid.value = "Full cotton x1"
    wrapper.forEach(e => {
        e.style.display = "none"

    })
    backbtn.style.display = "block"

    const total = document.getElementById("total")
    let intg = parseInt(total.innerText)
    total.innerText = intg + 190

})
function backb() {
    var isAllCheck = false;
    document.querySelectorAll('input[type=checkbox]').forEach(el => el.checked = isAllCheck);
    const total = document.getElementById("total")
    total.innerText = "0"
    backbtn.style.display = "none"
    wrapper.forEach(e => {
        e.style.display = "inline-flex"
    })
    itemid.value = "Add a jacket"

}
function addValue() {
    const total1 = document.getElementById("total")
    let checkBox = document.getElementById('myCheck');
    let totlaint = parseInt(total1.innerText)


    if (checkBox.checked == true) {
        total1.innerText = totlaint + 20


    } else if (checkBox.checked == false) {
        total1.innerText = totlaint - 20

    }
}
function addValue2() {
    const total2 = document.getElementById("total")
    let checkBox = document.getElementById('myCheck2');
    let totlaint = parseInt(total2.innerText)


    if (checkBox.checked == true) {
        total2.innerText = totlaint + 15

    } else if (checkBox.checked == false) {
        total2.innerText = totlaint - 15

    }

}
function addValue3() {
    const total3 = document.getElementById("total")
    let checkBox = document.getElementById('myCheck3');
    let totlaint = parseInt(total3.innerText)


    if (checkBox.checked == true) {
        total3.innerText = totlaint + 15

    } else if (checkBox.checked == false) {
        total3.innerText = totlaint - 15

    }

}
function addValue4() {
    const total4 = document.getElementById("total")
    let checkBox = document.getElementById('myCheck4');
    let totlaint = parseInt(total4.innerText)


    if (checkBox.checked == true) {
        total4.innerText = totlaint + 15

    } else if (checkBox.checked == false) {
        total4.innerText = totlaint - 15

    }

}
function addValue5() {
    const total5 = document.getElementById("total")
    let checkBox = document.getElementById('myCheck5');
    let totlaint = parseInt(total5.innerText)


    if (checkBox.checked == true) {
        total5.innerText = totlaint + 15

    } else if (checkBox.checked == false) {
        total5.innerText = totlaint - 15

    }

}
function addValue6() {
    const total6 = document.getElementById("total")
    let checkBox = document.getElementById('myCheck6');
    let totlaint = parseInt(total6.innerText)


    if (checkBox.checked == true) {
        total6.innerText = totlaint + 15

    } else if (checkBox.checked == false) {
        total6.innerText = totlaint - 15

    }

}

let discountbtn = document.querySelector(".discountbtn")
let discount = document.querySelector(".discount")
discountbtn.addEventListener('click', (e) => {
    discount.style.display = "block"
})

let exitbtn = document.getElementById("exit")
exitbtn.addEventListener('click', (e) => {
    discount.style.display = "none"

})

let fillform = document.querySelector(".fillform")
fillform.addEventListener('click', (e) => {
    alert("Use PowerPoint App to Edit this file")
})