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
