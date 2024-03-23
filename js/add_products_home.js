fetch('items.json')
            .then(response => response.json())
            .then(data => {
     
                all_products_json = data
               
                const swiper_sale_items = document.getElementById('swiper_sale_items');
                const other_product_swiper = document.getElementById('other_product_swiper');
                const other_product_swiper2 = document.getElementById('other_product_swiper2');
         
                data.forEach(product => {
                    if(product.old_price){
                    const percentageDiscount = Math.floor((product.old_price - product.price) / product.old_price * 100); 
                        
                     swiper_sale_items.innerHTML +=`
                     <div id="${product.id}" class="product swiper-slide">

                     <div class="icons">
                         <span><i onclick="addToCard(${product.id} , this)" class="fa-solid fa-cart-arrow-down addToCart_Btn"></i></span>
                         <span><i class="fa-solid fa-heart"></i></span>
                         <span><i class="fa-solid fa-share"></i></span>
                     </div>

                      <span class="sale_present">%${percentageDiscount}</span>

                     <div class="img_product">
                         <img src="${product.img}" alt="${product.name}">
                         <img class="img_hover" src="${product.img_hover}" alt="${product.name}">
                     </div>

                     <h3 class="name_product"><a href="item.html">${product.name}</a> </h3>

                     <div class="stars">
                         <i class="fa-solid fa-star"></i>
                         <i class="fa-solid fa-star"></i>
                         <i class="fa-solid fa-star"></i>
                         <i class="fa-solid fa-star"></i>
                         <i class="fa-solid fa-star-half-stroke"></i>
                     </div>

                     <div class="price">
                         <p><span>$${product.price}</span></p>
                         <p class="old_price">$${product.old_price}</p>
                     </div>
                 </div>
                    `;
               
                    }
                   
             
                });

                data.forEach(product => {
                    if(!product.old_price){
                    other_product_swiper.innerHTML +=`
                     <div ${product.id} class="product swiper-slide">

                     <div class="icons">
                         <span><i onclick="addToCard(${product.id} , this)" class="fa-solid fa-cart-arrow-down"></i></span>
                         <span><i class="fa-solid fa-heart"></i></span>
                         <span><i class="fa-solid fa-share"></i></span>
                     </div>


                     <div class="img_product">
                         <img src="${product.img}" alt="${product.name}">
                         <img class="img_hover" src="${product.img_hover}" alt="${product.name}">
                     </div>

                     <h3 class="name_product"><a href="item.html">${product.name}</a> </h3>

                     <div class="stars">
                         <i class="fa-solid fa-star"></i>
                         <i class="fa-solid fa-star"></i>
                         <i class="fa-solid fa-star"></i>
                         <i class="fa-solid fa-star"></i>
                         <i class="fa-solid fa-star-half-stroke"></i>
                     </div>

                     <div class="price">
                         <p><span>$${product.price}</span></p>
                     </div>
                 </div>
                    `;
                }
                });

                data.forEach(product => {
                    if(!product.old_price){
                    other_product_swiper2.innerHTML +=`
                     <div ${product.id} class="product swiper-slide">

                     <div class="icons">
                         <span><i onclick="addToCard(${product.id} , this)" class="fa-solid fa-cart-arrow-down"></i></span>
                         <span><i class="fa-solid fa-heart"></i></span>
                         <span><i class="fa-solid fa-share"></i></span>
                     </div>


                     <div class="img_product">
                         <img src="${product.img}" alt="${product.name}">
                         <img class="img_hover" src="${product.img_hover}" alt="${product.name}">
                     </div>

                     <h3 class="name_product"><a href="item.html">${product.name}</a> </h3>

                     <div class="stars">
                         <i class="fa-solid fa-star"></i>
                         <i class="fa-solid fa-star"></i>
                         <i class="fa-solid fa-star"></i>
                         <i class="fa-solid fa-star"></i>
                         <i class="fa-solid fa-star-half-stroke"></i>
                     </div>

                     <div class="price">
                         <p><span>$${product.price}</span></p>
                     </div>
                 </div>
                    `;
                }
                });

            });