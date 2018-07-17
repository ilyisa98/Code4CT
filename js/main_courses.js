'use strict;'

     var products = [];
    var cart = [];

        function addProduct(productID, qty, duration, price) {
  
            var newProduct = {
                product_id: null,
                product_qty: 0,
                product_dura: 0,
                product_price: 0.00,
            };
            
            newProduct.product_id = productID;
            newProduct.product_qty = qty;
            newProduct.product_dura = duration;
            newProduct.product_price = price;

                //check if array empty
            if(products.length != 0){
                //search an item in an array
                var check = false;
                for(let productsItem in products){
                    if(products[productsItem].product_id === newProduct.product_id){
                        check = true;
                    }  
                }

                //if check returns false,  item was not found in the array.
                if(!check){ products.push(newProduct)}

                //else push to array
            } else {
                products.push(newProduct);
            }
            
            
            console.log(products);
//            products.push(newProduct);


            var html = "<table border='1|1' >";
            
            html += "<td>Course Description</td>";
            html += "<td>Quantity</td>";
            html += "<td>Duration</td>";
            html += "<td>Price</td>";
            html += "<td>Action</td>";
            for (var i = 0; i < products.length; i++) {
                html += "<tr>";
                html += "<td>" + products[i].product_id + "</td>";
                html += "<td>" + products[i].product_qty+ "</td>";
                html += "<td>" + products[i].product_dura + " Days" + "</td>";
                html += "<td>" + "R "  + products[i].product_price + "</td>";
                html += "<td><button type='submit' onClick='deleteProduct(\"" + products[i].product_id + "\", this);'/>Delete Item</button> &nbsp <button type='submit' onClick='addCart(\"" + products[i].product_id + "\", this);'/>Add to Cart</button></td>";
                html += "</tr>";
            }
            html += "</table>";
            document.getElementById("demo").innerHTML = html;

        }
        function deleteProduct(product_id, e) {
            e.parentNode.parentNode.parentNode.removeChild(e.parentNode.parentNode);
            for (var i = 0; i < products.length; i++) {
                if (products[i].product_id == product_id) {
                    products.splice(i, 1);
                }
            }
        }

        function addCart(product_id) {

            for (var i = 0; i < products.length; i++) {
                if (products[i].product_id == product_id) {
                    var cartItem = null;
                    for (var k = 0; k < cart.length; k++) {
                        if (cart[k].product.product_id == products[i].product_id) {
                            cartItem = cart[k];
                            cart[k].product_qty++;
                            break;
                        }
                    }
                    if (cartItem == null) {
                        
                        var cartItem = {
                            product: products[i],
                            product_qty: products[i].product_qty 
                        };
                        cart.push(cartItem);
                    }
                }
            }

            renderCartTable();

        }

        function renderCartTable() {
        var html = '';
        var ele = document.getElementById("demo2");
        ele.innerHTML = ''; 

        html += "<table id='tblCart' border='1|1'>";
        html += "<td>Course Description</td>";
        html += "<td>Quantity</td>";
        html += "<td>Duration</td>";
        html += "<td>Price</td>";
        html += "<td>Total</td>";
        html += "<td>Action</td></tr>";
        var GrandTotal = 0;
        for (var i = 0; i < cart.length; i++) {
            html += "<tr>";
            html += "<td>" + cart[i].product.product_id + "</td>";
//            html += "<td>" + cart[i].product.product_desc + "</td>";
            html += "<td>" + cart[i].product_qty + "</td>";
            html += "<td>" + cart[i].product.product_dura + " Days" +"</td>";
            html += "<td>" + "R "  +cart[i].product.product_price + "</td>";
            html += "<td>" + "R "  +parseFloat(cart[i].product.product_price) * parseInt(cart[i].product_qty) + "</td>";
            html += "<td><button type='submit' onClick='subtractQuantity(\"" + cart[i].product.product_id + "\", this);'/>Subtract Quantity</button> &nbsp<button type='submit' onClick='addQuantity(\"" + cart[i].product.product_id + "\", this);'/>Add Quantity</button> &nbsp<button type='submit' onClick='removeItem(\"" + cart[i].product.product_id + "\", this);'/>Remove Item</button></td>";
            html += "</tr>";

           GrandTotal += parseFloat(cart[i].product.product_price) * parseInt(cart[i].product_qty);            

        }
        document.getElementById('demo3').innerHTML = "R " + GrandTotal;
        html += "</table>";
        ele.innerHTML = html;
    }


        function subtractQuantity(product_id)
        {
            
            for (var i = 0; i < cart.length; i++) {
                if (cart[i].product.product_id == product_id) {
                    cart[i].product_qty--;
                }

                if (cart[i].product_qty == 0) {
                    cart.splice(i,1);
                }
        
            }
            renderCartTable();
        }
        function addQuantity(product_id)
        {
            
            for (var i = 0; i < cart.length; i++) {
                if (cart[i].product.product_id == product_id) {
                    cart[i].product_qty++;
                }  
            }
            renderCartTable();
        }
        function removeItem(product_id)
        {
            
            for (var i = 0; i < cart.length; i++) {
                if (cart[i].product.product_id == product_id) {
                    cart.splice(i,1);
                }

            }
            renderCartTable();
        }  

//prettyPhoto              
// Get the modal
function modall(){
var modal = document.getElementById('myModal');
    
var open = document.getElementById('openCart');
    
    open.onclick = function() { 
    modal.style.display = "block";}
    
//var open1 = document.getElementById('openCart1');
//    
//    open1.onclick = function() { 
//    modal.style.display = "block";}
//    
//var open2 = document.getElementById('openCart2');
//
//open2.onclick = function() { 
//modal.style.display = "block";}
    


// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
    modal.style.display = "none";
}
}modall();
    
//STILL TO DO
//remove an item from cart
//write a function that calculates the total of the cart
//add a quantity to cart items
//be able to increase and decrease the quantity 
//REMEMBER the cart total must update as the quantity changes