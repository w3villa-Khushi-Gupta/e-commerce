// Featured Products Section
fetch("products_update.json")
    .then(response => response.json())
    .then(tempA=> {
        let free_tag = ` <span class="position-absolute  free">Free</span>`
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