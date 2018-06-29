 var items = document.getElementsByClassName('item');
// console.log(items);

//var cart = [
//     { name: "beginnerJs", price: 1800,},
//     { name: "beginnerFsw", price: 1800,},
//     { name: "beginnerPyth", price: 1800,},
//     { name: "intermediateJs", price: 1800,},
//     { name: "intermediateFsw", price: 1200,},
//     { name: "intermediatePyth", price: 1800,},
//];

var cart = [
    // { name: name, price: price,},
    // { name: name, price: price,},
    // { name: name, price: price,},
    // { name: name, price: price,},
    // { name: name, price: price,},
    // { name: name, price: price,},
];

function addCart (name, price) {

    //create item
    let item = {
        name: name, 
        price: price,
    };
    
//     console.log(item);

    //check if array empty
    if(cart.length != 0){
        //search an item in an array
        var check = false;
        for(let cartItem in cart){
            if(cart[cartItem].name === item.name){
                check = true;
            }  
        }

        //if check returns false,  item was not found in the array.
        if(!check){ cart.push(item)}

        //else push to array
    } else {
        cart.push(item);
    }
  
    console.log(cart);
//
    //get cart div
    var div = document.getElementById('cart');
    //clear cart
    div.innerHTML = "";

    //show cart with updated array
    for(let value in cart){

        // Create a <li> node
        var node = document.createElement("LI"); 
        // Create a text node               
        var textnode = document.createTextNode(cart[value].name);

        // Append the text to <li>
        node.appendChild(textnode);

        // Append <li> to <ul> with id="myList"                             
        div.appendChild(node);
    }
}

function removeCart(name){ // Removes one item
      for (var i in cart) {
          if (cart[i].name === name) { // "3" === 3 false
              cart[i].count--; // cart[i].count --
              if (cart[i].count === 0) {
                  cart.splice(i, 1);
              }
              break;
          }
      }
      console.log(cart);
};
	 


//STILL TO DO
//remove an item from cart
//write a function that calculates the total of the cart
//add a quantity to cart items
//be able to increase and decrease the quantity 
//REMEMBER the cart total must update as the quantity changes