// open & Close Filter

// open & Close Menu
var filter = document.querySelector('.filter')
function open_Filter() {
    filter.classList.toggle("active")
}






var all_products_json;

// add product in swiper 

fetch('items.json')
            .then(response => response.json())
            .then(data => {
     
                all_products_json = data
               
                const products_dev = document.getElementById('products_dev');
         
                data.forEach(product => {

                    
                    // إنشاء عنصر <p> لعرض السعر القديم في حالة وجوده
                    const oldPriceParagraph = product.old_price ? `<p class="old_price">$${product.old_price}</p>` : '';
                    const percentageDiscount = product.old_price ? `<span class="sale_present">% ${Math.floor((product.old_price - product.price) / product.old_price * 100)}</span>` : '';
                
                    products_dev.innerHTML +=`
                        <div id="${product.id}" class="product swiper-slide">
                            <div class="icons">
                                <span><i onclick="addToCard(${product.id} , this)" class="fa-solid fa-cart-arrow-down addToCart_Btn"></i></span>
                                <span><i class="fa-solid fa-heart"></i></span>
                                <span><i class="fa-solid fa-share"></i></span>
                            </div>
                
                            ${percentageDiscount}
                
                            <div class="img_product">
                                <img src="${product.img}" alt="${product.name}">
                                <img class="img_hover" src="${product.img_hover}" alt="${product.name}">
                            </div>
                
                            <h3 class="name_product"><a href="item.html">${product.name}</a></h3>
                
                            <div class="stars">
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star-half-stroke"></i>
                            </div>
                
                            <div class="price">
                                <p><span>$${product.price}</span></p>
                                ${oldPriceParagraph} <!-- إضافة عنصر السعر القديم -->
                            </div>
                        </div>`;
                });
                

         
            });



