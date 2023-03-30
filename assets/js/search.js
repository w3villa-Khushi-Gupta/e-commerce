// searching functionality
const searchBox = document.getElementById('search-box');
const searchResults = document.getElementById('search-results');
let quantity;

searchBox.addEventListener('input', function (event) {
    const searchTerm = event.target.value.toLowerCase();
    searchResults.innerHTML = '';

    if (searchTerm.length >= 1) {
        fetch('products_update.json')
            .then(response => response.json())
            .then(data => {
                const matches = data.products_update.filter(item => item.name.toLowerCase().includes(searchTerm));
                matches.forEach(item => {
                    const link = document.createElement('button');
                    link.style.display = "block"
                    link.innerHTML = `<button" onclick=searchResult(event,${item.id})> ${item.name}</button>`
                    searchResults.appendChild(link);
                    
                });
            });
    }
})
// searching functionality




// to remove homePage content and display searchPage
const shut = document.getElementById("shut1")
const search_page = document.getElementById("searchPage")
const searchButton = document.getElementById("serachButton")

searchButton.onclick = function (e) {
    e.preventDefault()
    shut.style.display = "none"
    search_page.style.display = "block"
}
// to remove homePage content and display searchPage


// (leftSide) =/- button functinality
const plusButton = document.getElementsByClassName("plus")
const minusButton = document.getElementsByClassName("minus")
const plusMenu = document.getElementsByClassName("plusMenu")

for (let i = 0; i < plusButton.length; i++) {
    plusButton[i].addEventListener('click', function () {
        plusMenu[i].style.display = 'block';
        minusButton[i].style.display = 'block';
        plusButton[i].style.display = 'none';

    });
    minusButton[i].addEventListener('click', function () {
        plusMenu[i].style.display = 'none';
        minusButton[i].style.display = 'none';
        plusButton[i].style.display = 'block';
    });

}
// (leftSide) =/- button functinality



// to display searched items in searchPage(rightSide)
searchShow = []
function searchResult(event,id) {
    event.preventDefault()
    // console.log(title)
    // let titleVal=document.getElementById("search-box")
    // titleVal.value=title;
    const item = document.getElementById("searchItem");
    
    item.innerHTML='';

        fetch('products_update.json')
        .then(response => response.json())
        .then(data => {
            let free_tag = `<span class="position-absolute  free">Free</span>`
            let per_tag = `<span class="position-absolute  seventy">-70%</span>`
            let top_tag = `<span class="position-absolute  top_brands">Top Brands</span>`
            let hot_tag = `<span class="position-absolute  hot">Hot</span>`
    
            item.style.display = "flex";
        
        for (let i = 0; i < data.products_update.length; i++) {

            const product = data.products_update[i];

            if(product.id===id){
                const update = document.createElement("div")
                update.style.overflow = "hidden";
                update.innerHTML = `<div class="card  px-0 d-flex" style="width: 20rem;" id="${product.name}">
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
                      <i class="fa-solid fa-right-left mx-2"></i>
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
                item.appendChild(update);
            }
    
            }
            
    })

}
// to display searched items in searchPage(rightSide)

