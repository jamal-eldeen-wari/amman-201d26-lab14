/* global Product, Cart */

'use strict';

// Set up an empty cart for use on this page.
const cart = new Cart([]);

// On screen load, we call this method to put all of the busmall options
// (the things in the Product.allProducts array) into the drop down list.
function populateForm() {

  //TODO: Add an <option> tag inside the form's select for each product
  const selectElement = document.getElementById('items');
  for (let i in Product.allProducts) {
    let op=document.createElement('option');
    selectElement.appendChild(op);
    op.textContent=Product.allProducts[i].name;


  }

}


// When someone submits the form, we need to add the selected item to the cart
// object, save the whole thing back to local storage and update the screen
// so that it shows the # of items in the cart and a quick preview of the cart itself.
function handleSubmit(event) {
  event.preventDefault();

  // TODO: Prevent the page from reloading

  // Do all the things ...
  addSelectedItemToCart();
  cart.saveToLocalStorage();
  updateCounter();
  updateCartPreview();

}

// TODO: Add the selected item and quantity to the cart
function addSelectedItemToCart() {
let item=document.getElementById('items').value;
let quantity=Number(document.getElementById('quantity').value);

  // TODO: suss out the item picked from the select list
  // TODO: get the quantity
  // TODO: using those, add one item to the Cart
  cart.addItem(item,quantity);
}
let counter=0;
// TODO: Update the cart count in the header nav with the number of items in the Cart
function updateCounter() {

  let itemcounter=document.getElementById('itemCount');
  counter=cart.items.length;
  itemcounter.textContent=counter;
}

// TODO: As you add items into the cart, show them (item & quantity) in the cart preview div
function updateCartPreview() {


  let cartcount=document.getElementById('cartContents');
  let ul = document.createElement('ul');
      cartContents.appendChild(ul);
      let li = document.createElement('li');
      ul.appendChild(li);
  // TODO: Get the item and quantity from the form
  // TODO: Add a new element to the cartContents div with that information
  let itms=document.getElementById('items').value;
let quant = Number(document.getElementById('quantity').value);
li.textContent= `${itms} : ${quant}`;
}

// Set up the "submit" event listener on the form.
// This is the trigger for the app. When a user "submits" the form, it will
// Call that handleSubmit method above and kick off the whole process
const catalogForm = document.getElementById('catalog');
catalogForm.addEventListener('submit', handleSubmit);

// Before anything else of value can happen, we need to fill in the select
// drop down list in the form.
populateForm();
