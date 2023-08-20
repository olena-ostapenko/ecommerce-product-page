let btnPlus = document.querySelector(".border-right")
let btnMinus = document.querySelector(".border-left")

let form = document.getElementById("form")
let divbasket = document.querySelector(".basket-value")
let modalQuantity=document.querySelector(".card-quantity")
let modalSum = document.querySelector(".card-sum")

let cart = [];

form.addEventListener("submit", function(event){
    event.preventDefault()

  
    if (quantity.value > 0) {
        if(cart[0] === undefined){
            cart[0] = {
                name: "Fall Limited Edition Sneakers",
                price: 125,
                qty: parseInt(quantity.value)
            }
            divbasket.classList.remove("hidden")

        }
        else {
            cart[0].qty = quantity.value*1
        
        }
        fillCart.classList.remove("hidden")
        emptyDiv.classList.add("hidden")

        divbasket.innerHTML = cart[0].qty
        // console.log(cart);  
        modalQuantity.innerHTML = " x"+ cart[0].qty
        // 
        modalSum.innerHTML = "$"+cart[0].price* quantity.value

    }

});


let emptyDiv = document.querySelector(".cart-empty")
let fillCart = document.querySelector(".cart-filled")
fillCart.classList.add("hidden")

let btnBasket = document.querySelector(".basket")
let modalWindow = document.querySelector(".modal")

let isOpened = false


btnBasket.addEventListener("click", function(event){
    event.preventDefault()
   
    if(isOpened === false){
        modalWindow.classList.remove("hidden")
        isOpened = true
    } else {
        modalWindow.classList.add("hidden")
        isOpened=false
    }
});

let deleteBtn = document.querySelector(".delite")
deleteBtn.addEventListener("click", function(event){
    event.preventDefault()

    divbasket.classList.add("hidden")
    fillCart.classList.add("hidden")
    emptyDiv.classList.remove("hidden")

      cart.splice(0, 1)
     console.log(cart);
   

})


let quantity = document.querySelector(".number-quntity")

btnPlus.addEventListener("click", function(event){
    event.preventDefault()
    quantity.value = parseInt(quantity.value) + 1
})
btnMinus.addEventListener("click", function(event){
    event.preventDefault()
    quantity.value = parseInt(quantity.value) - 1
})



