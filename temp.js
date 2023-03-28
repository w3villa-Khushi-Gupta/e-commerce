let r= prompt("Enter the area of circle");
let a = Math.PI *r *r;
alert("Area =" + a);


// login and register
//?????????????????  modals ?????????????????????????
var loginModal = document.getElementById("login-modal");
var registerModal = document.getElementById("register-modal");
const loginCloseButton = loginModal.querySelector('.close');
const registerCloseButton = registerModal.querySelector('.close');

const submit_btn = document.getElementById("submit");
const verify_btn = document.getElementById("verify")

const user_arr = [];
const temp_arr = JSON.parse(localStorage.getItem("users")) || [];

// When the user clicks on the button, open the modal
function openModal(modalId) {
    if (modalId === 'login-modal') {
        loginModal.style.display = "block";
    } else if (modalId === 'register-modal') {
        registerModal.style.display = "block";
    }
}
// Add event listeners to the close buttons
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
}
// ???????????????????? fetching data ????????????????????????????

submit_btn.addEventListener('click', (e) => {
    e.preventDefault();


    const userId = Date.now() + Math.floor(Math.random() * 1000);

    let user_name = document.getElementById("email_register").value;
    let pass = document.getElementById("password_register").value;
    let c_pass = document.getElementById("confirm_password").value;


    if (pass !== c_pass) {
        alert("Confirmation password do not match!  Try again.");
        return;
    }

    const userData = {
        id: userId,
        username: user_name,
        password: pass
    };
    console.log(temp_arr);
    for (let i = 0; i < temp_arr.length; i++) {
        if (temp_arr[i].username === user_name) {
            alert("User already exists!")
            return;
        }


    }
    if(!temp_arr.length){
        user_arr.push(userData);
        localStorage.setItem("users", JSON.stringify(user_arr));
        alert("Successfully Registered.");
        registerModal.style.display = 'none';
    
    }

})

verify_btn.addEventListener('click', (e) => {
    e.preventDefault();

    let login = document.getElementById("login_form");
    let user_login = document.getElementById("email_login");
    let pass_login = document.getElementById("pass_login");

    for (let i = 0; i < temp_arr.length; i++) {
        const stored_user = temp_arr[i].username;
        const stored_pass = temp_arr[i].password;

        if (stored_user !== user_login.value) {
            alert("User does'nt exist");
            return;
        }
        else if (stored_pass !== pass_login.value) {
            alert("Invalid Password");
            return;
        }
        else {
            login.reset();
            alert("Successfully Logged In");
            loginModal.style.display = "none";
            return;
        }

    }
})
        // <h6>Quantity:1*${quantity}=${"quantity"}</h6>
        const quantity=document.getElementById("qunatity").value;
        <h6>Total Price: 1 * ${quantity} = ${product.price * quantity}</h6>

    //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++=
        
        
        
        
const wishlist = []
const cart = []
async function add_to_cart(purpose, event, productId) {
    event.preventDefault();

    const response = await fetch('products_update.json');
    const data = await response.json();

    const x = document.getElementById("disp_cart")
    const y = document.getElementById("wishlist")

    const product = data.products_update.find(product => product.id === productId);


    if (purpose === 'wishlist') {
        wishlist.push(productId)
        // if (wishlist.map(x)===productId)
        //     return
        // else {
            let wishlist_con = document.createElement("div");
            wishlist_con.innerHTML += `<div class="cart_item d-flex justify-content-around">
            <div class="image"><img src="${product.img}" height=100 width=100></div>
            <div class="heading">
                <h5>${product.name}</h5>
                <h6>$${product.price}</h6>
                </div>
                </div>
                <hr>`
            y.appendChild(wishlist_con);


        
    }
    else if (purpose === 'cart') {
        cart.push(productId)
        // if (cart.map(x)===productId)
        //     return
        // else {
            let cart_con = document.createElement("div");
            cart_con.innerHTML += `<div class="cart_item d-flex justify-content-around">
            <div class="image"><img src="${product.img}" height=100 width=100></div>
            <div class="heading">
                <h5>${product.name}</h5>
                <h6>$${product.price}</h6>
                <h6>Quantity:1*${quantity}=${quantity}</h6>
                <h6>Total Price: 1 * ${quantity} = $${product.price * quantity}</h6>
            </div>
        
        </div>
        <hr>
        `;

            x.appendChild(cart_con);
        

    }
    // let quantity=document.getElementById("quantity").value;
    // console.log(quantity);
    console.log(product.name);
}
function toggleWhyBuyCategories(elem) {
    let activElem = document.getElementsByClassName("active-why-buy")[0];
    activElem.classList.remove("active-why-buy");
    elem.classList.add("active-why-buy");
    displayWhyBuyUs(elem.innerHTML.trim());
  }

//   
const userData={
    isLoggedIn:true
}
users.push(userData)
localStorage.setItem("users", JSON.stringify(user_arr));
