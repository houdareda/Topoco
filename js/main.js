// open & Close Cart
var cart = document.querySelector('.cart')
function open_cart() {
    cart.classList.add("active")
}
function close_cart() {
    cart.classList.remove("active")
}

// open & Close Menu
var menu = document.querySelector('.links ul')
function open_Menu() {
    menu.classList.add("active")
}
function close_Menu() {
    menu.classList.remove("active")
}


// item Image

let bigImage = document.getElementById('big_img')

    function myProduct(item) {
    bigImage.src = item
}

var all_products_json;

var items_in_cart = document.querySelector(".items_in_cart")           
let product_cart =  [];

function addToCard(id , ele){
    product_cart.push(all_products_json[id]);
    ele.classList.add("active");
    getCartItems()
}

let price_cart_head = document.querySelector('.price_cart_head')
let price_cart_total = document.querySelector('.price_cart_total')
let count_item_head = document.querySelector('.count_item')
let count_item_cart = document.querySelector('.count_item_cart')

function getCartItems() {
    let total_Price = 0;

    let tem = ""
    for(let i = 0 ; i < product_cart.length; i++ ){
        tem +=`
        <div class="item_cart">
        <img src="${product_cart[i].img}" alt="">
        <div class="content">
            <h4>${product_cart[i].name}</h4>
            <p class="price_cart">$${product_cart[i].price}</p>
        </div>
        <button onClick="remove_from_wishList(${i})" class="delete_item"><i class="fa-solid fa-trash-can"></i></button>
    </div>
        `
        total_Price += product_cart[i].price
   
    }
    
    items_in_cart.innerHTML = tem

    price_cart_head.innerHTML = "$" + total_Price
    price_cart_total.innerHTML = "$" + total_Price
    count_item_head.innerHTML = product_cart.length
    count_item_cart.innerHTML = `(${product_cart.length} Item in Cart)`
}

function remove_from_wishList(index) {
    product_cart.splice(index, 1);
    getCartItems();

    let addToCartButtons = document.querySelectorAll('.addToCart_Btn');

    for (let q = 0; q < addToCartButtons.length; q++) {
        addToCartButtons[q].classList.remove("active")
        product_cart.forEach(product => {

            if (product.id == q) {
                
                addToCartButtons[q].classList.add("active")
            }
            
        })
      
    }
  }
 
