//modal_to_display_cart & wishlist
function modal(id) {
    let window;
    if (id === 'cart') {
        window = document.getElementById("disp_cart");
        window.style.display = "block";

    }
    else if (id === 'wishlist') {
        window = document.getElementById("wishlist");
        window.style.display = "block";

    }

    let but1 = document.getElementById("crossC");
    let but2 = document.getElementById("crossW");

    but1.onclick = function () {
        window.style.display = "none";
    }
    but2.onclick = function () {
        window.style.display = "none";
    }
}
// MODAL TO DISPLAY WISHLIST AND CART

// ADD TO CART FUNCTIONALITY
function quantityChanged(event) {
    let input = event.target
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1;
    }
    quantity = input.value;
}

let cartProduct = [];
let wishlistProduct = [];

async function add_to_cart(event, productId, which) {
    event.preventDefault();
    const response = await fetch('products_update.json');
    const data = await response.json();

    const x = document.getElementById("disp_cart")
    const y = document.getElementById("wishlist")
    console.log(y);

    const product = data.products_update.find(product => product.id === productId);
    console.log(product.name);

    // addition of products in array
    const alreadyExists = which === 'cart' ? cartProduct.includes(productId) : wishlistProduct.includes(productId);
    if (alreadyExists) {
        alert('Product already added');
        return;
    }
    else {

        if (which === 'cart') {
            cartProduct.push(productId);
            localStorage.setItem("ProductCart", JSON.stringify(cartProduct));
        }
        else {
            wishlistProduct.push(productId);
            localStorage.setItem("wishlist", JSON.stringify(wishlistProduct));
        }

    }
    // which === 'cart' ? cartProduct.push(productId) : wishlistProduct.push(productId);
    // addition of products in array

    // cartEnquiry
    let no_of_products = cartProduct.length;
    let total = 0;
    for (i = 0; i < no_of_products; i++) {
        total += parseFloat(product.price * quantity);
        console.log(total)
    }
    document.getElementById("cartEnquiry").innerHTML = `${no_of_products} item(s) - $${total}`
    console.log(no_of_products)
    // cartEnquiry

    // creation of seperate divs for each product in cart and wishlist
    let product_selected = document.createElement("div");
    product_selected.innerHTML += `<div class="cart_item d-flex justify-content-around">
        <div class="image"><img src="${product.img}" height=100 width=100></div>
            <div class="heading">
                <h5>${product.name}</h5>
                <h6>$${product.price}</h6>
                ${which === 'cart' ? `<h6>Quantity:1*${quantity}=${quantity}</h6>
                                <h6>Total Price: 1 * ${quantity} = $${product.price * quantity}</h6>` : ''}
            </div>

        </div>
        <hr>`;

    which === 'cart' ? (x.appendChild(product_selected)) : (y.appendChild(product_selected));
}
    // creation of seperate divs for each product in cart and wishlist       
// ADD TO CART FUNCTIONALITY




// login and register
//?????????????????  modals ?????????????????????????
var loginModal = document.getElementById("login-modal");
var registerModal = document.getElementById("register-modal");
var cartModal = document.getElementById("disp_cart");
var wishlistModal = document.getElementById("wishlist");

const loginCloseButton = loginModal.querySelector('.close');
const registerCloseButton = registerModal.querySelector('.close');

const submit_btn = document.getElementById("submit");
const verify_btn = document.getElementById("verify")

const user_arr = [];
const temp_arr = [];

// open the modal
function openModal(modalId) {
    if (modalId === 'login-modal') {
        loginModal.style.display = "block";
    } else if (modalId === 'register-modal') {
        registerModal.style.display = "block";
    }
}
// close button
loginCloseButton.addEventListener('click', () => {
    loginModal.style.display = 'none';
});

registerCloseButton.addEventListener('click', () => {
    registerModal.style.display = 'none';
});

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == loginModal) {
        loginModal.style.display = "none";
    } else if (event.target == registerModal) {
        registerModal.style.display = "none";
    }
    else if (event.target == cartModal) {
        cartModal.style.display = "none";

    }
    else if (event.target == wishlistModal) {
        wishlistModal.style.display = "none";

    }
}
// ???????????????????? fetching data ????????????????????????????
// register page
submit_btn.addEventListener('click', (e) => {
    e.preventDefault();

    const userId = Date.now() + Math.floor(Math.random() * 1000);
    let user_name = document.getElementById("email_register").value;
    let pass = document.getElementById("password_register").value;
    let c_pass = document.getElementById("confirm_password").value;

    const userData = {
        id: userId,
        username: user_name,
        password: pass,
        logIn: false
    };

    if (pass !== c_pass) {
        alert("Confirmation password do not match!  Try again.");
        return;
    }

    const temp_arr = JSON.parse(localStorage.getItem("users"));;
    if (temp_arr) {
        for (let i = 0; i < temp_arr.length; i++) {
            if (temp_arr[i].username === user_name) {
                alert("User already exists!")
                return;
            }
        }
    }
    user_arr.push(userData);
    localStorage.setItem("users", JSON.stringify(user_arr));

    alert("Successfully Registered.");

    registerModal.style.display = 'none';
    openModal('login-modal');

})

// login page
verify_btn.addEventListener('click', (e) => {
    e.preventDefault();

    let temp_arr = JSON.parse(localStorage.getItem("users"));

    let login = document.getElementById("login_form");
    let user_login = document.getElementById("email_login");
    let pass_login = document.getElementById("pass_login");

    for (let i = 0; i < temp_arr.length; i++) {
        const stored_user = temp_arr[i].username;
        const stored_pass = temp_arr[i].password;
        console.log("jiiiiiiii")
        if (stored_user === user_login.value) {
            login.reset();
            found = 1;
            temp_arr[i].logIn = true;
            localStorage.setItem("users", JSON.stringify(temp_arr));
            auth(stored_user);
            break;
        }
        else if (stored_pass !== pass_login.value) {
            alert("Invalid Password");
        }
    }
    if (found) {
        alert("Successfully Logged In");
    }
    else {
        alert("User not found.")
    }
})

// To loginto user page + page remains sames on refreshing
window.onload = function () {

    const temp_arr = JSON.parse(localStorage.getItem("users"));

    for (let i = 0; i < temp_arr.length; i++) {
        user = temp_arr[i].username
        if (temp_arr[i].logIn) {
            auth(user);
        }
    }
}
function auth(username) {

    loginModal.style.display = "none";
    document.getElementById("login").style.display = "none";
    document.getElementById('register').style.display = "none"
    document.getElementById("user").style.display = "block"
    document.getElementById("welcome").innerHTML = `Welcome ${username}`
    document.getElementById("logout").style.display = "block"

}


function myclose() {
    console.log("haaaaaaaaan")
    const temp_arr = JSON.parse(localStorage.getItem("users"));
    for (let i = 0; i < temp_arr.length; i++) {
        if (temp_arr[i].logIn) {
            temp_arr[i].logIn = false;
            localStorage.setItem("users", JSON.stringify(temp_arr));
        }

        document.getElementById("user").style.display = "none"
        document.getElementById("logout").style.display = "none"

        document.getElementById("login").style.display = "block"
        document.getElementById("register").style.display = "block"

    }
}


// most-viewed
fetch("most_viewed.json")
    .then(response => response.json())
    .then(tempV => {
        const x = document.getElementById("most_viewed");
        for (let i = 0; i < tempV.most_viewed.length; i++) {
            const product = tempV.most_viewed[i];
            const update = document.createElement("div");
            update.innerHTML = `            <div class="col-3" style="width: 25rem;">
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
function point() {
    let pointer = document.getElementById("point");
    pointer.style.display = "block";
}
// function leavepoint(){
//     let pointer=document.getElementById("point");
//     pointer.style.display="none";

// }
// function toggleWhyBuyCategories(elem) {
//     let activElem = document.getElementsByClassName("active-why-buy")[0];
//     activElem.classList.remove("active-why-buy");
//     elem.classList.add("active-why-buy");
//     displayWhyBuyUs(elem.innerHTML.trim());
//   }

