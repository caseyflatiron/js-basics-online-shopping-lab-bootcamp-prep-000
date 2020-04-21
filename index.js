var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 let price = Math.floor((Math.random() * 100) + 1)
 let itemToAdd = {
   itemName: `${item.toString()}`,
   itemPrice: price, 
 }
 cart.push(itemToAdd)
 return `${item.toString()} has been added to your cart.`
}

function viewCart() {
  let itemizedCart = []
  if (cart.length > 0){
    for (let i = 0; i < cart.length; i++){
      let and = ''
    if (i === cart.length - 1 && cart.length > 1){
      and = ' and'
    }
    itemizedCart.push(`${and} ${cart[i].itemName} at $${cart[i].itemPrice}`)
  }
  return `In your cart, you have${itemizedCart.toString()}.`
  }
  else {
  return "Your shopping cart is empty."
}
}

function total() {
  function reducer(total, current) {
    return total + current
  }
  let total = []
  if (cart.length > 0){
    for (let i = 0; i < cart.length; i++){
      total.push(cart[i].itemPrice)
    }
  }
  return total.reduce(reducer, 0)
}

function removeFromCart(item) {
    for (let i = 0; i < cart.length; i++){
      if (cart[i].itemName === item){
        cart.splice(i, 1)
       }
    }
}

function placeOrder(cardNumber) {
  if (cardNumber){
    cart = []
    return`Your total cost is $${total()}, which will be charged to the card ${cardNumber}`
  }
  else {
    return "Sorry, we don't have a credit card on file for you."
  }
}
