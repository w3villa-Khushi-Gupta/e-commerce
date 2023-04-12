

const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('product_id');

const idd = Number(id);
console.log(idd);
console.log("==========", id);
fetch("products_update.json")
    .then(response => response.json())
    .then(product => {

        let per_tag = `<div class="offer">10%</div>`
        let hot_tag = `<div class="trend">HOT</div>`
        const productName=document.getElementById("productName");
        const leftSide = document.getElementById("searchProductLeft");
        for (let i = 0; i < product.products_update.length; i++) {
            const multiView = product.products_update[i];
            const sideImages = document.getElementById("smallViews");
            if (multiView.id === idd) {
                for (let i = 0; i < multiView.sideImg.length; i++) {
                    const views = multiView.sideImg[i];
                    const viewInDiv = document.createElement("div");
                    viewInDiv.innerHTML = `<div class="imageIcons ">
                                                <img src="${views.img ? views.img : ""}" >
                                            </div>`

                    sideImages.appendChild(viewInDiv);
                }

                productName.innerHTML=`${multiView.name}`;
                const update = document.createElement("div");
                update.innerHTML = `<div class="productImage position-relative" id="mainImage" >
                                        ${multiView.percentage ? per_tag : ""}
                                        ${multiView.sale ? hot_tag : ""}
                                        <img src="${multiView.img}">
                                    </div>`
                leftSide.appendChild(update);

            }

        }
    })




fetch("products_update.json")
    .then(response => response.json())
    .then(product => {
        const desTab = document.getElementById("desContent");
        const specTab = document.getElementById("specifications");
        const reviewTab = document.getElementById("reviewContent");
        const custTab = document.getElementById("customContent");
        const productDetailLeft = document.getElementById("productDetailLeft")
        const productDetailRight = document.getElementById("productDetailRight")

        for (let i = 0; i < product.products_update.length; i++) {
            menuDetail = product.products_update[i];
            if (menuDetail.id === idd) {
                descContent = document.createElement("p")
                descContent.innerHTML = `<p>${menuDetail.description}</p>`
                desTab.appendChild(descContent);
                
                heading=document.getElementById("t_head")
                row = document.getElementById("t_body");
                for (let j = 0; j < menuDetail.specification.length; j++) {
                    spec=menuDetail.specification[j];
                    console.log(spec)
                    keyVal=Object.keys(spec)
                    console.log(keyVal[j])
                    heading.innerHTML=`${keyVal[j]}`
                    row.innerHTML=`${spec.occasion?spec.occasion:""}<br>
                                        ${spec.style?spec.style:""}<br>
                                        ${spec.composition?spec.composition:""}<br>
                                        ${spec.ingredients?spec.ingredients:""}<br>
                                        ${spec.noOfCores?spec.noOfCores:""}<hr class="my-0">`

                }
                if (menuDetail.review) {
                    for (let i = 0; i < menuDetail.review.length; i++) {

                    }
                }
                else {
                    reviewContent = document.createElement("div")
                    reviewContent.innerHTML = `<h6>There are no reviews for this product.</h6>
                                                <h3>WRITE A REVIEW</h3>
                                                <h6>Please <a>login </a>or <a>register</a> to review</h6>`
                    reviewTab.appendChild(reviewContent)
                }

                for (let j = 0; j < menuDetail.customTabs.length; j++) {
                    para = menuDetail.customTabs[j];
                    customContent = document.createElement("div")
                    customContent.innerHTML = `<p>${para.para1}</p>
                                               <p> <br><p>
                                               <p>${para.para2}</p>`
                    custTab.appendChild(customContent);
                }

                priceDetail = document.createElement("div");
                priceDetail.innerHTML = `
                                            <h4 class="originalPrice text-muted"><s>${menuDetail.strikethrough}</s></h4>
                                            <h2 class="salePrice text-danger">${menuDetail.price}</h2>
                                            <h6 class="rewards text-muted " style="font-weight: 400;">${menuDetail.exTax ? "Ex Tax:" + menuDetail.exTax : ""}<br>${menuDetail.rewardPoints ? "Price in reward points:" + menuDetail.rewardPoints : ""}
                                                <br>${menuDetail.priceFor10 ? "10 or more " + menuDetail.priceFor10 : ""}<br>${menuDetail.priceFor20 ? "20 or more " + menuDetail.priceFor20 : ""}
                                                <br>${menuDetail.priceFor30 ? "30 or more " + menuDetail.priceFor30 : ""}</h6>
                                        </div>`
                productDetailLeft.appendChild(priceDetail);

                for (let j = 0; j < menuDetail.inStock.length; j++) {
                    stock=menuDetail.inStock[j];
                    reward=`<li>Reward Points:${stock.rewardPoints}</li>`
                    model=`<li>Model:${stock.model}</li>`
                    weigth=`<li>Weight:${stock.weight}</li>`
                    dimensions=`<li>Dimensions:${stock.dimensions}</li>`
                    
                    stockDetail = document.createElement("div")
                    stockDetail.innerHTML = `<div class="d-flex">
                                                <ul class="${stock.status=="In Stock"?"text-success":"text-danger"}" style="font-weight: 800;">${stock.status=="In Stock"?"✓ "+stock.status:"🚫 "+stock.status}
                                                    ${stock.rewardPoints?reward:""}
                                                    ${stock.model?model:""}
                                                    ${stock.weight?weight:""}
                                                    ${stock.dimensions?dimensions:""}
                                                </ul>
                                                <div class="icon justify-content-center">
                                                    <img class="appleLogo text-center" src="${stock.brandImg}">
                                                    <a class="d-flex justify-content-center" href="#">${stock.brand}</a>
                                                </div>
                                            </div>`
                    productDetailRight.appendChild(stockDetail);
                }


            }
        }
    })

const descriptionTab = document.getElementById("desContent");
const specificationTab = document.getElementById("display_table")
const reviewTab = document.getElementById("reviewContent")
const customTab = document.getElementById("customContent")
function showContent(tab) {
    if (tab === 'des') {
        if (descriptionTab.style.display === "none"){
            descriptionTab.style.display = "block"
            specificationTab.style.display = "none"
            reviewTab.style.display = "none"
            customTab.style.display = "none"

        }
        else
            descriptionTab.style.display = "none"
    }

    else if (tab === 'spec') {
        if (specificationTab.style.display === "none"){
            descriptionTab.style.display = "none"
            specificationTab.style.display = "block"
            reviewTab.style.display = "none"
            customTab.style.display = "none"
        }
    else
            specificationTab.style.display = "none"
    }

    else if (tab === 'rev') {
        if (reviewTab.style.display === "none"){
            descriptionTab.style.display = "none"
            specificationTab.style.display = "none"
            reviewTab.style.display = "block"
            customTab.style.display = "none"
    
        }
        else
            reviewTab.style.display = "none"

    }

    else {
        if (customTab.style.display === "none"){
            descriptionTab.style.display = "none"
            specificationTab.style.display = "none"
            reviewTab.style.display = "none"
            customTab.style.display = "block"
    
        }
        else
            customTab.style.display = "none"

    }
}





