// Search bar
const searchBox = document.getElementById('search-box');
const searchResults = document.getElementById('search-results');

searchBox.addEventListener('input', function(event) {
    const searchTerm = event.target.value.toLowerCase();
    searchResults.innerHTML = '';

    if (searchTerm.length >= 1) {
        fetch('products_update.json')
            .then(response => response.json())
            .then(data => {
                const matches = data.products_update.filter(item => item.name.toLowerCase().includes(searchTerm));
                matches.forEach(item => {
                    const li = document.createElement('li');
                    li.innerText = item.name;
                    searchResults.appendChild(li);
                });
            });
    }
})


// why_buy_from_us
fetch("why_buy_from_us.json")
    .then(response => response.json())

    .then(tempW=>{
        console.log("helloooooooooooooooooooooo")
        const x= document.getElementById("why_buy");
        for (let i=0;i<tempW.why_buy_from_us.length;i++){
            const card=tempW.why_buy_from_us[i];
            const update=document.createElement("div");
            update.innerHTML=`<div class="cutouts" style="width: 20rem;">
            <img src="${card.img}" height="300" width="300">
                <a class="text-white  position-absolute" href="#">Go Somewhere</a>
        </div>`
            x.appendChild(update)
        }
})





// Featured Products Section
fetch("products_update.json")
    .then(response => response.json())
    .then(tempA=> {
        let free_tag =`<span class="position-absolute  free">Free</span>`
        let per_tag=`<span class="position-absolute  seventy">-70%</span>`
        let top_tag=`<span class="position-absolute  top_brands">Top Brands</span>`
        let hot_tag=`<span class="position-absolute  hot">Hot</span>`
        
        const x = document.getElementById("product_list");
        x.style.display="flex";
        for (let i = 0; i < tempA.products_update.length; i++) {
            const product = tempA.products_update[i];
              const update = document.createElement("div")
              update.innerHTML=`<div class="card  px-0 d-flex" style="width: 20rem;" id="hell">
              <img class="card-img-top position-relative" src="${product.img}" alt="Card image cap" height="300">
              <span class="position-absolute  pre_order">${product.label}</span>
                    ${product.percentage?per_tag:""}
                    ${product.free?free_tag:""}
                    ${product.top_brand?top_tag:""}
                    ${product.sale?hot_tag:""}

            

              <div class="erickson d-flex justify-content-between bg-light p-2">
                  <a href="#">${product.brand}</a>
                  <h6>${product.model}</h6>
              </div>
              <div class="headphones p-2">
                  <h5 class="card-title">${product.name}</h5>
                      <p class="card-text">${product.price} <s> ${product.strikethrough}</s></p>
              </div>
              <div class="action d-flex justify-content-between p-2">
                  <div class="quantity d-flex">
                      <input name="quantity" type="number" class="quantity_input" min="1" max="10" value="1" style="width:3rem">
                  </div>
                  <button class="btn btn-primary">ADD TO CART</button>
                  <div class="emo d-flex ">
                      <i class="fa-regular fa-heart px-2"></i>
                      <i class="fa-solid fa-right-left"></i>
                  </div>
              </div>
              <div class="xtra d-flex justify-content-between bg-light p-2">
                  <a href="#" class="card-link d-flex justify-content-around">
                      <i class="fa-solid fa-circle-dollar"></i>
                      <h6>Buy Now</h6>
                  </a>
                  <a href="#" class="card-link d-flex justify-content-around">
                      <i class="fa-solid fa-circle-question"></i>
                      <h6>Question</h6>
                  </a>
              </div>
          </div>
`
        x.appendChild(update);
        }

    })



// New in fashion section


fetch("new_in_fashion.json")
    .then(response=> response.json())
    .then(tempB=> {
        let label_tag=`<span class="position-absolute  pre_order">2-3 Days</span>`
        let new_tag=`<span class="position-absolute  hot">New</span>`
        let per_tag=`<span class="position-absolute  seventy">Top Brands</span>`
        
    console.log("visible")
    const y = document.getElementById("other_cards");
    for(let i=0;i<tempB.new_in_fashion.length;i++){
        const product=tempB.new_in_fashion[i];
        const update=document.createElement("div");
        update.innerHTML=`<div class="card  p-1" style="width: 18rem;" id="hell">
        <img class="card-img-top p-2 " src="${product.img}" alt="Card image cap">
        ${product.label?label_tag:""}
        ${product.new?new_tag:""}
        ${product.top_brands?per_tag:""}

        <div class="headphones ">
            <a class="card-title text-primary" href="#">${product.type}</a>
            <p class="card-text">${product.price}</p>
        </div>
        <hr >
        <div class="action d-flex justify-content-around">
            <button class="btn btn-primary">ADD TO CART</button>
            <div class="emo d-flex ">
                <i class="fa-regular fa-heart px-2"></i>
                <i class="fa-solid fa-right-left"></i>
            </div>
        </div>
    </div>`
    y.append(update);
    }
   
})

// shop by brands
fetch("shop_by_brand.json")
.then(response=>response.json())
.then(tempS=> {
    const x=document.getElementById("car-act");
    const y=document.getElementById("car-inact");
    for( let i=0;i<tempS.shop_by_brand.length;i++){
        const product=tempS.shop_by_brand[i];
        const update=document.createElement("div");
        update.innerHTML=`<div class="brands col-1" style="width:10rem">
        <img src="${product.brand}" class="img-thumbnail">
    </div>`
    x.appendChild(update);

    }
    for( let i=0;i<tempS.shop_by_brand.length;i++){
        const product=tempS.shop_by_brand[i];
        const update=document.createElement("div");
        update.innerHTML=`<div class="brands col-1" style="width:10rem">
        <img src="${product.brand}" class="img-thumbnail">
    </div>`
    y.appendChild(update)
    }

})

// improved gallery

fetch("improved_gallery.json")
.then(response=>response.json())
.then(tempI=>{
    const x=document.getElementById("imp_gal");
    for(let i=0;i<tempI.improved_gallery.length;i++){
        const product=tempI.improved_gallery[i];
        const update=document.createElement("div");
        update.innerHTML=`<div class="col-1" style="width:10rem; height: 10rem;" style>
        <img src="${product.gal}" class="img-thumbnail" >
    </div>`
        x.appendChild(update);
    }
})

// from_our_blog
fetch("from_our_blog.json")
.then(response=>response.json())
.then(tempF=> {
    const x=document.getElementById("latest_post")
    for(let i=0;i<tempF.from_our_blog.length;i++){
        const product=tempF.from_our_blog[i];
        const update=document.createElement("div")
        update.innerHTML=`<div class="col-4 " style="width: 30rem;">
        <div class="card">
            <img class="card-img-top position-relative"
                src="${product.img}" alt="Card image cap">
            <span class="date position-absolute">${product.date1}<br>${product.date2}</span>
            <div class="card-body text-center p-0">
                <div class="icons bg-muted d-flex py-2 justify-content-evenly">
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
                <a class="text-muted" href="#">Read More ➜</a>
            </div>
        </div>
    </div>
`
        x.appendChild(update)
    }
})

// what people are saying
fetch("what_people_are_saying.json")
.then(response=> response.json())
.then(tempP=>{
    const x=document.getElementById("people");
    for(let i=0;i<tempP.what_people_are_saying.length;i++){
        const product=tempP.what_people_are_saying[i];
        const update=document.createElement("div");
        update.innerHTML=`<div class="col-3" style="width: 30rem;">
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
})

// most-viewed
fetch("most_viewed.json")
.then(response=> response.json())
.then(tempV=>{
    const x =document.getElementById("most_viewed");
    for(let i=0;i<tempV.most_viewed.length;i++){
        const product=tempV.most_viewed[i];
        const update=document.createElement("div");
        update.innerHTML=`            <div class="col-3" style="width: 25rem;">
        <div class="item d-flex p-2 bg-white">
            <img src=" ${product.img}" height="100" width="100" />
            <div class="item-body">
                <h4> ${product.name}</h4>
                <h6> ${product.price}</h6>
                <div class="icons d-flex justify-content-evenly">
                    <i class="fa-regular fa-cart-shopping"></i>
                    <i class="fa-regular fa-heart"></i>
                    <i class="fa-solid fa-arrow-right-arrow-left"></i>
                </div>
            </div>
        </div>
    </div>
`
        x.appendChild(update);
    }
})
