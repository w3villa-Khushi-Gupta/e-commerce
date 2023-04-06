header=document.getElementById("header")
header.innerHTML=`    <nav class="navbar navbar-expand-lg bg-white plr nb1" id="nav1">
<div class="container-fluid ">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
        aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse d-flex justify-content-between" id="navbarSupportedContent">
        <div>
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 ">
                <li class="nav-item">
                    <a class="nav-link " href="#"><i class="fa-solid fa-house mx-1"></i>Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#"><i class="fa-solid fa-award mx-1"></i>About Us</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#"><i class="fa-regular fa-envelope mx-1"></i>Contact</a>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                        aria-expanded="false">
                        <i class="fa-sharp fa-regular fa-circle-question mx-1"></i>FAQ
                    </a>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">Action</a></li>
                        <li><a class="dropdown-item" href="#">Another action</a></li>
                        <li>
                            <hr class="dropdown-divider">
                        </li>
                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                </li>
            </ul>

        </div>
        <div>
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 ">
                <li class="nav-item dropdown ">
                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                        aria-expanded="false">
                        🏴󠁧󠁢󠁥󠁮󠁧󠁿 English
                    </a>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">🇯🇵 Japanese</a></li>
                        <li><a class="dropdown-item" href="#">🇮🇳 Hindi</a></li>
                    </ul>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                        aria-expanded="false">
                        $ Dollar
                    </a>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">₹ Rupees</a></li>
                        <li><a class="dropdown-item" href="#">€ Pound</a></li>
                    </ul>
                </li>
            </ul>

        </div>
        <div>
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 ">
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                        aria-expanded="false">
                        <i class="fa-solid fa-user "></i><i class="fa-solid fa-bars mx-1"></i>More Menus
                    </a>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">⚙ Settings</a></li>
                        <li><a class="dropdown-item" href="#">More</a></li>
                    </ul>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#"><i class="fas fa-truck mx-1"></i>Delivery
                    </a>
                </li>
            </ul>

        </div>
    </div>
</div>
</nav>

<div class=" navbar-expand-lg  plr bg-primary hide">

<div class=" d-flex justify-content-between topA py-2">
    <div class="left d-flex">
        <div class="d-flex ">
            <div class="nav-item">
                <a class="nav-link" href="#">
                    <i class="fa-solid fa-user mx-1"></i>
                    Login
                </a>
            </div>
            <div class="nav-item">

                <a class="nav-link " href="#">
                    <i class="fa-solid fa-pen mx-1"></i>
                    Register
                </a>
            </div>
        </div>
    </div>
    <div class="right d-flex ">
        <div class="d-flex">
            <div class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                    aria-expanded="false">
                    $ Dollar
                </a>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">₹ Rupees</a></li>
                    <li><a class="dropdown-item" href="#">€ Pound</a></li>
                </ul>
            </div>
            <div class="nav-item dropdown ">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                    aria-expanded="false">
                    🏴󠁧󠁢󠁥󠁮󠁧󠁿 English
                </a>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">🇯🇵 Japanese</a></li>
                    <li><a class="dropdown-item" href="#">🇮🇳 Hindi</a></li>
                </ul>
            </div>

        </div>
    </div>

</div>
</div>



<nav class="navbar navbar-expand-lg bg-body-tertiary plr nb2" id="nav2">
<div class="container-fluid d-flex justify-content-between">
    <div>
        <a class="navbar-brand" href="#" id="journal">Journal</a>

    </div>
    <div>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="searchbar"
            aria-controls="searchbar" aria-expanded="false" aria-label="Toggle navigation" order="2">
            <span"><i class="fas fa-search"></i></span>
        </button>
        <div class="collapse navbar-collapse" id="searchbar" id="search_here">
            <form class="d-flex" role="search">
                <div>
                    <button class="btn btn-primary dropdown-toggle all " type="button" data-bs-toggle="dropdown"
                        aria-expanded="false">
                        All
                    </button>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">Action</a></li>
                        <li><a class="dropdown-item" href="#">Another action</a></li>
                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                    </ul>

                </div>
                <div class="searching">
                    <input class=" form-control me-2" type="search" placeholder="Search here..."
                        aria-label="Search" id="search-box">
                    <ul id="search-results"></ul>

                </div>
                <div><button class="btn btn-primary search" type="search" id="serachButton"><i
                            class="fas fa-search"></i></button>

                </div>

            </form>

        </div>

    </div>
    <div>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent1" aria-controls="navbarSupportedContent1"
            aria-expanded="false" aria-label="Toggle navigation" order="1">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent1">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0" id="icons">
                <li class="nav-item">
                    <button class="nav-link" onclick="openModal('login-modal')" id="login">
                        <i class="fas fa-user"></i>
                        <h6>Login</h6>
                    </button>
                    <button class="nav-link" id="user">
                        <i class="fas fa-user"></i>
                        <h6 id="welcome"></h6>
                    </button>

                </li>
                <li class="nav-item">
                    <button class="nav-link" onclick="openModal('register-modal')" id="register">
                        <i class="fa-solid fa-pencil"></i>
                        <h6>Register</h6>
                    </button>
                    <button class="nav-link" onclick="myclose()" id="logout">
                        <i class="fa-solid fa-right-from-bracket"></i>
                        <h6>Logout</h6>
                    </button>


                </li>
                <li class="nav-item">
                    <!-- <a href="assets/wishlist.html"> -->
                    <button class="nav-link" onclick="modal('wishlist')">
                        <i class="far fa-heart"></i>
                        <h6>Wishlist</h6>
                    </button>
                    <!-- </a> -->
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">
                        <i class="fas fa-repeat"></i>
                        <h6>Compare</h6>
                    </a>
                </li>
            </ul>
        </div>
    </div>
    <div>
        <button class="navbar-toggler cart" type="button" data-bs-toggle="collapse" data-bs-target="#cart"
            aria-controls="#cart" aria-expanded="false" aria-label="Toggle navigation" order="1">
            <span> <i class="fa-solid fa-cart-shopping"></i></span>
        </button>
        <div class="collapse navbar-collapse">
            <div class="d-flex justify-content-between" id="cart">
                <h6 class="nav-item" id="cartEnquiry">0 item(s)-$0.00</h6>
                <button class="btn cart" onclick="modal('cart')">
                    <i class="fa-solid fa-cart-shopping bg-primary cartA"></i>
                </button>
            </div>
        </div>

    </div>
</div>
</nav>

<div class="disp_cart" id="disp_cart" style="width: 30rem;right: 0;height: auto;">
<button class="position-absolute" id="crossC"
    style="right:2px; border: none; background-color: white;">X</button>
<h1 class="text-center py-2">Products in cart</h1>
</div>

<div class="wishlist" id="wishlist" style="width: 30rem;right: 0;height: auto;">
<button class="position-absolute" id="crossW"
    style="right: 2px;; border: none; background-color: white;">X</button>
<h1 class="text-center py-2">Products in Wishlist</h1>
</div>


<div id="login-modal" class="modal">
<div class="modal-content">
    <button class="close">&times;</button>
    <h2>Login</h2>
    <form id="login_form">
        <input type="text" placeholder="Email" id="email_login">
        <input type="password" placeholder="Password" id="pass_login">
        <button type="submit" id="verify">Submit</button>
    </form>
</div>
</div>

<div id="register-modal" class="modal">
<div class="modal-content">
    <button class="close">&times;</button>
    <h2>Register</h2>
    <input type="text" placeholder="Email" id="email_register">
    <input type="password" placeholder="Password" id="password_register">
    <input type="password" placeholder="Confirm Password" id="confirm_password">
    <button type="submit" id="submit">Submit</button>

</div>
</div>

<nav class="navbar navbar-expand-lg bg-primary plr py-0 nb3" id="nav3" data-bs-theme="dark">
<div class="container-fluid d-flex justify-content-between">
    <div>
        <ul class="navbar-nav me-auto mb-2 mb-lg-0" id="all_dep">
            <li class="nav-item">
                <a class="menuL bg-warning d-flex ">
                    <i class="fa-solid fa-bars"></i>
                    <h6 class="position-relative">ALL DEPARTMENTS
                        <span class="position-absolute top-0 start-100 translate-middle badge  bg-danger">
                            SALE
                        </span>
                    </h6>
                </a>
            </li>
            <li class="nav-item">
                <a class="menuL ">
                    <h6>MULTILEVEL</h6>
                </a>
            </li>
            <li class="nav-item">
                <a class="menuL">
                    <h6 class="position-relative">MEGA MENU
                        <span class="position-absolute top-0 start-100 translate-middle badge  bg-warning">
                            NEW
                        </span>
                    </h6>
                </a>
            </li>
            <li class="nav-item">
                <a class="menuL ">
                    <h6>FULLWIDTH</h6>
                </a>
            </li>
        </ul>

    </div>
    <div>
        <ul class="navbar-nav me-auto mb-2 mb-lg-0" id="all_dep">
            <li class="nav-item">
                <a class="menuR d-flex">
                    <i class="fa-solid fa-phone-volume"></i>
                    <h6>1.800.555.6789</h6>
                </a>
            </li>

            <li class="nav-item">
                <a class="menuR bg-warning d-flex">
                    <i class="fa-solid fa-comment"></i>
                    <h6>BLOG</h6>
                </a>
            </li>
        </ul>

    </div>
</div>
</nav>
`
footer=document.getElementById("footer")
footer.innerHTML=`    <div class="container-fluid  bg-secondary plr mtb">
<h1>
    Most Viewed
</h1>
<div class="underline mx-0"></div>
<div class="d-flex justify-content-between" id="most_viewed" style="flex-wrap: wrap;">
</div>
</div>


<div class="container-fluid  bg-light plr ">
<div class="all_icons d-flex justify-content-center">
    <i class="fa-brands fa-facebook p-2"></i>
    <i class="fa-brands fa-twitter p-2"></i>
    <i class="fa-brands fa-instagram p-2"></i>
    <i class="fa-brands fa-linkedin p-2"></i>
    <i class="fa-brands fa-youtube p-2"></i>
    <i class="fa-brands fa-skype p-2"></i>
</div>
</div>


<div class="container-fluid  bg-white plr mtb">
<div class="row d-flex justify-content-around">
    <div class="col-md-3 ">
        <h4>
            About Us
        </h4>
        <div class="underline mx-0"></div>
        <a class="d-block" href="#">About Us</a>
        <a class="d-block" href="#">Delivery</a>
        <a class="d-block" href="#">Privacy Policy</a>
        <a class="d-block" href="#">Term & Conditions</a>
        <a class="d-block" href="#">Custom Links</a>
    </div>
    <div class="col-md-3 ">
        <h4>
            Customer Service
        </h4>
        <div class="underline mx-0"></div>
        <a class="d-block" href="#">Contact</a>
        <a class="d-block" href="#">Returns</a>
        <a class="d-block" href="#">Site Maps</a>
        <a class="d-block" href="#">Brands</a>
        <a class="d-block" href="#">Unlimited Links</a>
    </div>
    <div class="col-md-3 ">
        <h4>
            My Account
        </h4>
        <div class="underline mx-0"></div>
        <a class="d-block" href="#">My Account</a>
        <a class="d-block" href="#">Order</a>
        <a class="d-block" href="#">Affliates</a>
        <a class="d-block" href="#">Newsletter</a>
        <a class="d-block" href="#">Gift Certificates</a>
    </div>
    <div class="col-md-3">
        <h4>
            Newsletter
        </h4>
        <div class="underline mx-0"></div>
        <p style="font-size: 20px;">
            Stay up date with news and<br /> by signing up for our<br /> newsletter.
        </p>
        <div class="input-group">
            <div class="form-outline">
                <input type="search" id="form1" class="form-control" placeholder="Your Email" />
                <!-- <label class="form-label" for="form1">Your Email</label> -->
            </div>
            <button type="button" class="btn btn-primary">
                <i class="fa-regular fa-envelope"></i>Send
            </button>
        </div>
        <input type="checkbox">
        <label class="message">I have read and I agree to</label><span> <a href="#">Privacy
                Policy</a></span>

    </div>
</div>
</div>


<div class="container-fluid  bg-secondary  plr ">
<div class=" sec13 d-flex justify-content-between">
    <div class="left">
        <p style="margin-top: 10px; font-size: 20px;">Copyright @2014,Your store, All rights Reserved</p>
    </div>
    <div class="right d-flex justify-content-evenly" style="flex-wrap:wrap">
        <i class="fa-brands fa-cc-visa p-2"></i>
        <i class="fa-brands fa-cc-paypal p-2"></i>
        <i class="fa-brands fa-cc-discover p-2"></i>
        <i class="fa-brands fa-cc-amex p-2"></i>
        <i class="fa-brands fa-cc-stripe p-2"></i>
    </div>
</div>

</div>

<a class=" btn bg-primary position-fixed bottom-0 left-100" href="#nav2">
<i class="fa-solid fa-arrow-up "></i>
</a>
`