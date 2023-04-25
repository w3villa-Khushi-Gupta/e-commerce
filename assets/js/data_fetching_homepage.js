function owl4(){
    $(".fourCards").owlCarousel({
        loop: true,
        margin: 23,
        // nav: false,
        autoplay: false,
        responsive: {
            0:{
                items: 0,
            },
            300:{
                items: 1,
            },
            500: {
                items: 1
            },
            800: {
                items: 2
            },
            1200: {
                items: 3
            },
            1800: {
                items: 4
            },
        }
    });

}
function owl5(){
    $(".fiveCards").owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        autoplay: false,
        responsive: {
            0:{
                items: 0,
            },
            300:{
                items: 1,
            },
            600: {
                items: 1,
            },
            800: {
                items: 2
            },
            1000: {
                items: 3,
            },
            1400: {
                items: 4,
            },

            1800: {
                items: 5,
            },
        }
    });

}
function owl2(){
    $(".shopByBrand").owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        autoplay: false,
        responsive: {
            0:{
                items: 0,
            },
            300:{
                items: 1,
            },
            500: {
                items: 1,
            },
            600: {
                items: 2,
            },
            800: {
                items: 3
            },
            1000: {
                items: 4,
            },
            
            1800: {
                items: 6,
            },
        }
    });

}
function owl3(){
    $(".threeCards").owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        autoplay: false,
        responsive: {
            0:{
                items: 0,
            },
            300:{
                items: 1,
            },
            600: {
                items: 1
            },
            1200: {
                items: 2
            },
            1800: {
                items: 3
            },
        }
    });
}

// why_buy_from_us
        function changeContentWhyBuy(cat) {
            switch (cat) {
                case "top-categories":
                    fetch("why_buy_from_us.json")
                        .then(response => response.json())
                        .then(tempW => {
                            const x = document.getElementById("why_buy");
                            x.innerHTML="";
                            for (let i = 0; i < tempW.why_buy_from_us.length; i++) {
                                const card = tempW.why_buy_from_us[i];
                                const update = document.createElement("div");
                                update.innerHTML = `<div class="item cutouts" style="width: 20rem;style="width: 20rem;margin-left:auto;margin-right:auto;">
                                                        <img src="${card.img}" height="300" width="300">
                                                            <a class="text-white  position-absolute" href="#">${card.button}</a>
                                                    </div>`
                                x.appendChild(update)
                            }owl5();
                        });
                        break;

                case "electronics":
                fetch("electronics.json")
                        .then(response => response.json())
                        .then(tempW => {
                            const x = document.getElementById("why_buy");
                            x.innerHTML="";

                            for (let i = 0; i < tempW.electronics.length; i++) {
                                const card = tempW.electronics[i];
                                const update = document.createElement("div");
                                update.innerHTML = `<div class=" item cutouts" style="width: 20rem;style="width: 20rem;margin-left:auto;margin-right:auto;">
                                                        <img src="${card.img}" height="300" width="300">
                                                            <a class="text-white  position-absolute" href="#">${card.button}</a>
                                                    </div>`
                                x.appendChild(update)
                            }owl5();
                        });
                        break;

                case "beauty":
                fetch("beauty.json")
                        .then(response => response.json())
                        .then(tempW => {
                            const x = document.getElementById("why_buy");
                            x.innerHTML="";

                            for (let i = 0; i < tempW.beauty.length; i++) {
                                const card = tempW.beauty[i];
                                const update = document.createElement("div");
                                update.innerHTML = `<div class="item cutouts" style="width: 20rem;style="width: 20rem;margin-left:auto;margin-right:auto;">
                                                        <img src="${card.img}" height="300" width="300">
                                                            <a class="text-white  position-absolute" href="#">${card.button}</a>
                                                    </div>`
                                x.appendChild(update)
                            }owl5();
                        });
                        break;

                case "fashion":
                fetch("fashion.json")
                        .then(response => response.json())
                        .then(tempW => {
                            const x = document.getElementById("why_buy");
                            x.innerHTML="";
                            for (let i = 0; i < tempW.fashion.length; i++) {
                                const card = tempW.fashion[i];
                                const update = document.createElement("div");
                                update.innerHTML = `<div class="item cutouts" style="width: 20rem;style="width: 20rem;margin-left:auto;margin-right:auto;">
                                                        <img src="${card.img}" height="300" width="300">
                                                            <a class="text-white  position-absolute" href="#">${card.button}</a>
                                                    </div>`
                                x.appendChild(update)
                            }owl5();
                        });
                        break;

            }
        }

// function changeContentFeaturedProducts(cat){
//     switch(cat){
//         case "Featured":
//             break;
//         case "Latest":
//             break;
//         case "Bestsellers":
//             break;
//         case "Specials":
//             break;
//     }
// }
// Featured Products Section
fetch("products_update.json")
    .then(response => response.json())
    .then(tempA => {
        let free_tag = `<span class="position-absolute  free">Free</span>`
        let per_tag = `<span class="position-absolute  seventy">-70%</span>`
        let top_tag = `<span class="position-absolute  top_brands">Top Brands</span>`
        let hot_tag = `<span class="position-absolute  hot">Hot</span>`

        const x = document.getElementById("product_list");
        x.style.display = "flex";
        for (let i = 0; i < tempA.products_update.length; i++) {
            const product = tempA.products_update[i];
            const update = document.createElement("a")
            // update.style.overflow = "hidden";
            update.innerHTML = `
            <a href="searchedProduct.html?product_id=${product.id}">
            <div class="card  px-0 d-flex" style="width: 20rem;margin-left:auto;margin-right:auto;overflow:hidden" id="${product.name}">
              <img class="card-img-top position-relative" src="${product.img}" alt="Card image cap" height="300">
              <span class="position-absolute  pre_order">${product.label}</span>
                    ${product.percentage ? per_tag : ""}
                    ${product.free ? free_tag : ""}
                    ${product.top_brand ? top_tag : ""}
                    ${product.sale ? hot_tag : ""}

            

              <div class="erickson d-flex justify-content-between bg-light p-2">
                  <a href="#">${product.brand}</a>
                  <h6>${product.model}</h6>
              </div>
              <div class="headphones p-2">
                  <h5 class="card-title">${product.name}</h5>
                      <p class="card-text">$${product.price} <s> ${product.strikethrough}</s></p>
              </div>
              <div class="action d-flex justify-content-between p-2">
                  <div class="quantity d-flex">
                      <input name="quantity" type="number" class="quantity_input" min="1" max="10" value="1" style="width:3rem" >
                  </div>
                  <button class="btn btn-primary " style="border-radius:5px" onclick="add_to_cart(event,${product.id},'cart')">ADD TO CART</button>
                  <div class="emo d-flex ">
                     <button onclick="add_to_cart(event,${product.id},'wishlist')"><i class="fa-regular fa-heart mx-2"></i></button>
                      <i class="fa-solid fa-right-left m-2"></i>
                  </div>
              </div>
              <div class="xtra d-flex justify-content-between bg-light p-2">
                  <a href="#" class="card-link d-flex justify-content-around">
                      <h6>$ Buy Now</h6>
                  </a>
                  <a href="#" class="card-link d-flex justify-content-around">
                      <h6>? Question</h6>
                  </a>
              </div>
          </div></a>
`
            x.appendChild(update);
        }

        var quantityInput = document.getElementsByClassName('quantity_input')
        for (input of quantityInput) {
            input.addEventListener('change', quantityChanged)
        }
        owl4()

    })


// NEW IN FASHION
    fetch("new_in_fashion.json")
    .then(response => response.json())
    .then(tempB => {
        let label_tag = `<span class="position-absolute  pre_order">2-3 Days</span>`
        let new_tag = `<span class="position-absolute  hot">New</span>`
        let per_tag = `<span class="position-absolute  seventy">Top Brands</span>`

        console.log("visible")
        const y = document.getElementById("other_cards");
        for (let i = 0; i < tempB.new_in_fashion.length; i++) {
            const product = tempB.new_in_fashion[i];
            const update = document.createElement("div");
            update.innerHTML = `<div class="card  p-1" style="width: 18rem;" id="hell">
        <img class="card-img-top p-2 " src="${product.img}" alt="Card image cap">
        ${product.label ? label_tag : ""}
        ${product.new ? new_tag : ""}
        ${product.top_brands ? per_tag : ""}

        <div class="headphones ">
            <a class="card-title text-primary px-2" href="#">${product.type}</a>
            <p class="card-text px-2">${product.price}</p>
        </div>
        <hr >
        <div class="action d-flex justify-content-around">
            <button class="btn btn-primary my-2" style="border-radius:5px">ADD TO CART</button>
            <div class="emo d-flex ">
                <i class="fa-regular fa-heart mx-2 my-3"></i>
                <i class="fa-solid fa-right-left mx-2 my-3"></i>
            </div>
        </div>
    </div>`
            
    y.append(update);
        }
        // owl4()

    })
// shop by brands
fetch("shop_by_brand.json")
.then(response => response.json())
.then(tempS => {
    const x = document.getElementById("car-act");
    for (let i = 0; i < tempS.shop_by_brand.length; i++) {
        const product = tempS.shop_by_brand[i];
        const update = document.createElement("div");
        update.innerHTML = `<div class="itemBrands " style="width:10rem">
                                <img src="${product.brand}" class="img-thumbnail">
                            </div>`
        x.appendChild(update);

    }
    owl2()
})

// improved gallery

fetch("improved_gallery.json")
    .then(response => response.json())
    .then(tempI => {
        const x = document.getElementById("imp_gal");
        for (let i = 0; i < tempI.improved_gallery.length; i++) {
            const product = tempI.improved_gallery[i];
            const update = document.createElement("div");
            update.innerHTML = `<div style="width:10rem; height: 10rem;">
        <img src="${product.gal}" class="img-thumbnail" >
    </div>`
            x.appendChild(update);
        }
    })



// from_our_blog
fetch("from_our_blog.json")
    .then(response => response.json())
    .then(tempF => {
        const x = document.getElementById("latest_post")
        for (let i = 0; i < tempF.from_our_blog.length; i++) {
            const product = tempF.from_our_blog[i];
            const update = document.createElement("div")
            update.innerHTML = `<div class="fromOurBlogCard" style="margin-left:auto;margin-right:auto">
        <div class="card">
            <img class="card-img-top "
                src="${product.img}" alt="Card image cap">
            <span class="date position-absolute">${product.date1}<br>${product.date2}</span>
            <div class="card-body text-center p-0 my-2">
                <div class="icons bg-light d-flex py-2 justify-content-evenly">
                    <div class="d-flex ">
                        <i class="fa-solid fa-user"></i>
                        <h6>${product.user}</h6>
                    </div>
                    <div class="d-flex">
                        <i class="fa-solid fa-comment-dots"></i>
                        <h6>${product.comment}</h6>
                    </div>
                    <div class="d-flex">
                        <i class="fa-solid fa-eye"></i>
                        <h6>${product.viewers}</h6>
                    </div>
                </div>
                <div class="card-title py-2">
                    <h5>${product.heading}</h5>
                </div>
                <p class="content card-text">${product.content}
                </p>
                <a class="text-muted bg-light" href="#">Read More ➜</a>
            </div>
        </div>
    </div>
`
            x.appendChild(update)
        }
        // owl3()
    })


// what people are saying
fetch("what_people_are_saying.json")
.then(response => response.json())
.then(tempP => {
    const x = document.getElementById("people");
    for (let i = 0; i < tempP.what_people_are_saying.length; i++) {
        const product = tempP.what_people_are_saying[i];
        const update = document.createElement("div");
        update.innerHTML = `<div class="whatPeopleAreSayingCard" style="margin-left:auto;margin-right:auto" >
    <div class="card">
        <div class="card-img-top text-center">
            <i class="fa-solid fa-quote-left comma"></i>
        </div>
        <div class="card-body">
            <p class="text-center">
            ${product.content}
            </p>
            <h6 class="text-center">
            ${product.author}
            </h6>
        </div>
    </div>
</div>
`
        x.appendChild(update);
    }
    owl3()

})

    


