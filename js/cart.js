/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
const table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);
let cart;

function loadCart() {
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  cart = new Cart(cartItems);
  // for(let i=0; i<cart.length; i++)
  // {

  //   new Product(cart[i].filePath,cart[i].name);
  //   renderCart();
  // }
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {
  // Credits to stackoverflow
  let newtbody = document.getElementById('tbody');
  newtbody.textContent='';
   
}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {

  // TODO: Find the table body
  let tableBody = document.getElementById('tbody');
  // table.append(tableBody);

  // TODO: Iterate over the items in the cart
  for(let i = 0; i<cart.items.length; i++ ){
    let tR = document.createElement('tr');
    tableBody.appendChild(tR);
    let tD1 = document.createElement('td');
    tD1.textContent = 'X';
    tR.appendChild(tD1);
    
    
    let tD2 = document.createElement('td');
    tD2.textContent=cart.items[i].quantity;
    tR.appendChild(tD2);
    
    
    let tD3 = document.createElement('td');
   
    tD3.textContent=cart.items[i].product;
    tR.appendChild(tD3);
    
    


  }
  // TODO: Create a TR
  // TODO: Create a TD for the delete link, quantity,  and the item
  // TODO: Add the TR to the TBODY and each of the TD's to the TR

}

function removeItemFromCart(event) {

  // cart.removeItem();
  // cart.saveToLocalStorage();
  // clearCart();
  // loadCart();

  if (event.target.textContent === 'X') {
  console.log(event.target.id);
    cart.removeItem(event.target.id);
    
    
    }
    localStorage.setItem('cart',JSON.stringify(cart.items));
  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  // TODO: Save the cart back to local storage
  // TODO: Re-draw the cart table
  renderCart();
}

// This will initialize the page and draw the cart on screen
renderCart();
