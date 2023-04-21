header = document.getElementById("header")
header.innerHTML = `<nav class="navbar navbar-expand-lg bg-white plr nb1" id="nav1">
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
                    <a class="nav-link " href="index.html"><i class="fa-solid fa-house mx-1"></i>Home</a>
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
                        <ho/li>
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
                    <button class="nav-link" href="#">
                        <i class="fas fa-repeat"></i>
                        <h6>Compare</h6>
                    </button>
                </li>
            </ul>
        </div>
    </div>
    <div>
        <button class="navbar-toggler cart" type="button" data-bs-toggle="collapse" data-bs-target="#cart"
            aria-controls="#cart" aria-expanded="false" aria-label="Toggle navigation" order="1">
            <span> <i class="smallWincart fa-solid fa-cart-shopping"></i></span>
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
                <div class="menuAll bg-warning d-flex">
                    <i class="fa-solid fa-bars"></i>
                    <h6 class="position-relative allDepartment tttt">ALL DEPARTMENTS
                    <span class="position-absolute top-0 start-100 translate-middle badge  bg-danger">
                        SALE
                    </span>
                    </h6>
                    <div class="allDep p-2">
                        <div class="allDep-shopByCategory position-relative">
                            <i class="fa-solid fa-bars mx-1" style="color:grey"></i>Shop By Category <span  style="color:grey;float: right;">►</span>
                            <div class="shopByCategoryMenu ">
                            <div class="d-flex">
                            <div class="leftshopByCategoryMenu">
                                <div class="row1 d-flex">
                                    <div>
                                        <h5 style="color:black">FASHION</h5>
                                        <div class="links">
                                            <a>Accessories</a>
                                            <a>Dresses</a>
                                            <a>Pants</a>
                                            <a>T-shirts</a>
                                            <a style="text-decoration:underline"> See all products</a>
                                        </div>
                                    </div>
                                    <div>
                                        <h5 style="color:black">FASHION</h5>
                                        <div class="links">
                                            <a>Accessories</a>
                                            <a>Dresses</a>
                                            <a>Pants</a>
                                            <a>T-shirts</a>
                                            <a style="text-decoration:underline"> See all products</a>
                                        </div>
                                    </div>
                                    <div>
                                        <h5 style="color:black">FASHION</h5>
                                        <div class="links">
                                            <a>Accessories</a>
                                            <a>Dresses</a>
                                            <a>Pants</a>
                                            <a>T-shirts</a>
                                            <a style="text-decoration:underline"> See all products</a>
                                        </div>
                                    </div>
                                </div>
                                <div class="row2 d-flex">
                                    <div>
                                        <h5 style="color:black">FASHION</h5>
                                        <div class="links">
                                            <a>Accessories</a>
                                            <a>Dresses</a>
                                            <a>Pants</a>
                                            <a>T-shirts</a>
                                            <a style="text-decoration:underline">See all products</a>
                                        </div>
                                    </div>
                                    <div>
                                        <h5 style="color:black">FASHION</h5>
                                        <div class="links">
                                            <a>Accessories</a>
                                            <a>Dresses</a>
                                            <a>Pants</a>
                                            <a>T-shirts</a>
                                            <a style="text-decoration:underline"> See all products</a>
                                        </div>
                                    </div>
                                    <div>
                                        <h5 style="color:black">FASHION</h5>
                                        <div class="links">
                                            <a>Accessories</a>
                                            <a>Dresses</a>
                                            <a>Pants</a>
                                            <a>T-shirts</a>
                                            <a style="text-decoration:underline"> See all products</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="rightshopByCategoryMenu">
                                <div class="shopByCategoryImg"><img src="assets/images/i_g5.jpg"></div>
                            </div>
                        </div>
                        </div>
                    
                        </div>
                        <div class="allDep-shopByBrands">
                            <i class="fa-brands fa-apple mx-1" style="color:grey"></i>Shop By Brands <span  style="color:grey;float: right;">►</span>
                            <div class="shopByCategoryMenu ">
                            <div class="d-flex">
                            <div class="leftshopByCategoryMenu">
                                <div class="row1 d-flex">
                                    <div>
                                        <h5 style="color:black">FASHION</h5>
                                        <div class="links">
                                            <a>Accessories</a>
                                            <a>Dresses</a>
                                            <a>Pants</a>
                                            <a>T-shirts</a>
                                            <a style="text-decoration:underline"> See all products</a>
                                        </div>
                                    </div>
                                    <div>
                                        <h5 style="color:black">FASHION</h5>
                                        <div class="links">
                                            <a>Accessories</a>
                                            <a>Dresses</a>
                                            <a>Pants</a>
                                            <a>T-shirts</a>
                                            <a style="text-decoration:underline"> See all products</a>
                                        </div>
                                    </div>
                                    <div>
                                        <h5 style="color:black">FASHION</h5>
                                        <div class="links">
                                            <a>Accessories</a>
                                            <a>Dresses</a>
                                            <a>Pants</a>
                                            <a>T-shirts</a>
                                            <a style="text-decoration:underline"> See all products</a>
                                        </div>
                                    </div>
                                </div>
                                <div class="row2 d-flex">
                                    <div>
                                        <h5 style="color:black">FASHION</h5>
                                        <div class="links">
                                            <a>Accessories</a>
                                            <a>Dresses</a>
                                            <a>Pants</a>
                                            <a>T-shirts</a>
                                            <a style="text-decoration:underline">See all products</a>
                                        </div>
                                    </div>
                                    <div>
                                        <h5 style="color:black">FASHION</h5>
                                        <div class="links">
                                            <a>Accessories</a>
                                            <a>Dresses</a>
                                            <a>Pants</a>
                                            <a>T-shirts</a>
                                            <a style="text-decoration:underline"> See all products</a>
                                        </div>
                                    </div>
                                    <div>
                                        <h5 style="color:black">FASHION</h5>
                                        <div class="links">
                                            <a>Accessories</a>
                                            <a>Dresses</a>
                                            <a>Pants</a>
                                            <a>T-shirts</a>
                                            <a style="text-decoration:underline"> See all products</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="rightshopByCategoryMenu">
                                <div class="shopByCategoryImg"><img src="assets/images/i_g5.jpg"></div>
                            </div>
                        </div>
                        

                        </div>
                        <div class="allDep-specialDeals">
                            <i class="fa-solid fa-percent" style="color:grey"></i> Special Deals<span class="sale text-white bg-danger mx-1">SALE</span> <span  style="color:grey;float: right;">►</span>
                            <div class="shopByCategoryMenu ">
                            <div class="d-flex">
                            <div class="leftshopByCategoryMenu">
                                <div class="row1 d-flex">
                                    <div>
                                        <h5 style="color:black">FASHION</h5>
                                        <div class="links">
                                            <a>Accessories</a>
                                            <a>Dresses</a>
                                            <a>Pants</a>
                                            <a>T-shirts</a>
                                            <a style="text-decoration:underline"> See all products</a>
                                        </div>
                                    </div>
                                    <div>
                                        <h5 style="color:black">FASHION</h5>
                                        <div class="links">
                                            <a>Accessories</a>
                                            <a>Dresses</a>
                                            <a>Pants</a>
                                            <a>T-shirts</a>
                                            <a style="text-decoration:underline"> See all products</a>
                                        </div>
                                    </div>
                                    <div>
                                        <h5 style="color:black">FASHION</h5>
                                        <div class="links">
                                            <a>Accessories</a>
                                            <a>Dresses</a>
                                            <a>Pants</a>
                                            <a>T-shirts</a>
                                            <a style="text-decoration:underline"> See all products</a>
                                        </div>
                                    </div>
                                </div>
                                <div class="row2 d-flex">
                                    <div>
                                        <h5 style="color:black">FASHION</h5>
                                        <div class="links">
                                            <a>Accessories</a>
                                            <a>Dresses</a>
                                            <a>Pants</a>
                                            <a>T-shirts</a>
                                            <a style="text-decoration:underline">See all products</a>
                                        </div>
                                    </div>
                                    <div>
                                        <h5 style="color:black">FASHION</h5>
                                        <div class="links">
                                            <a>Accessories</a>
                                            <a>Dresses</a>
                                            <a>Pants</a>
                                            <a>T-shirts</a>
                                            <a style="text-decoration:underline"> See all products</a>
                                        </div>
                                    </div>
                                    <div>
                                        <h5 style="color:black">FASHION</h5>
                                        <div class="links">
                                            <a>Accessories</a>
                                            <a>Dresses</a>
                                            <a>Pants</a>
                                            <a>T-shirts</a>
                                            <a style="text-decoration:underline"> See all products</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="rightshopByCategoryMenu">
                                <div class="shopByCategoryImg"><img src="assets/images/i_g5.jpg"></div>
                            </div>
                        </div>
                        

                        </div>
                        <div class="allDep-bestsellers">
                            <i class="fa-solid fa-crown mx-1" style="color:grey"></i>Bestsellers <span  style="color:grey;float: right;">►</span>
                            <div class="shopByCategoryMenu ">
                            <div class="d-flex">
                            <div class="leftshopByCategoryMenu">
                                <div class="row1 d-flex">
                                    <div>
                                        <h5 style="color:black">FASHION</h5>
                                        <div class="links">
                                            <a>Accessories</a>
                                            <a>Dresses</a>
                                            <a>Pants</a>
                                            <a>T-shirts</a>
                                            <a style="text-decoration:underline"> See all products</a>
                                        </div>
                                    </div>
                                    <div>
                                        <h5 style="color:black">FASHION</h5>
                                        <div class="links">
                                            <a>Accessories</a>
                                            <a>Dresses</a>
                                            <a>Pants</a>
                                            <a>T-shirts</a>
                                            <a style="text-decoration:underline"> See all products</a>
                                        </div>
                                    </div>
                                    <div>
                                        <h5 style="color:black">FASHION</h5>
                                        <div class="links">
                                            <a>Accessories</a>
                                            <a>Dresses</a>
                                            <a>Pants</a>
                                            <a>T-shirts</a>
                                            <a style="text-decoration:underline"> See all products</a>
                                        </div>
                                    </div>
                                </div>
                                <div class="row2 d-flex">
                                    <div>
                                        <h5 style="color:black">FASHION</h5>
                                        <div class="links">
                                            <a>Accessories</a>
                                            <a>Dresses</a>
                                            <a>Pants</a>
                                            <a>T-shirts</a>
                                            <a style="text-decoration:underline">See all products</a>
                                        </div>
                                    </div>
                                    <div>
                                        <h5 style="color:black">FASHION</h5>
                                        <div class="links">
                                            <a>Accessories</a>
                                            <a>Dresses</a>
                                            <a>Pants</a>
                                            <a>T-shirts</a>
                                            <a style="text-decoration:underline"> See all products</a>
                                        </div>
                                    </div>
                                    <div>
                                        <h5 style="color:black">FASHION</h5>
                                        <div class="links">
                                            <a>Accessories</a>
                                            <a>Dresses</a>
                                            <a>Pants</a>
                                            <a>T-shirts</a>
                                            <a style="text-decoration:underline"> See all products</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="rightshopByCategoryMenu">
                                <div class="shopByCategoryImg"><img src="assets/images/i_g5.jpg"></div>
                            </div>
                        </div>
                        </div>
                        <div class="allDep-customLinks">
                            <i class="fa-solid fa-certificate mx-1" style="color:grey"></i></i>Custom Links <span  style="color:grey;float: right;">►</span>
                            <div class="shopByCategoryMenu ">
                            <div class="d-flex">
                            <div class="leftshopByCategoryMenu">
                                <div class="row1 d-flex">
                                    <div>
                                        <h5 style="color:black">FASHION</h5>
                                        <div class="links">
                                            <a>Accessories</a>
                                            <a>Dresses</a>
                                            <a>Pants</a>
                                            <a>T-shirts</a>
                                            <a style="text-decoration:underline"> See all products</a>
                                        </div>
                                    </div>
                                    <div>
                                        <h5 style="color:black">FASHION</h5>
                                        <div class="links">
                                            <a>Accessories</a>
                                            <a>Dresses</a>
                                            <a>Pants</a>
                                            <a>T-shirts</a>
                                            <a style="text-decoration:underline"> See all products</a>
                                        </div>
                                    </div>
                                    <div>
                                        <h5 style="color:black">FASHION</h5>
                                        <div class="links">
                                            <a>Accessories</a>
                                            <a>Dresses</a>
                                            <a>Pants</a>
                                            <a>T-shirts</a>
                                            <a style="text-decoration:underline"> See all products</a>
                                        </div>
                                    </div>
                                </div>
                                <div class="row2 d-flex">
                                    <div>
                                        <h5 style="color:black">FASHION</h5>
                                        <div class="links">
                                            <a>Accessories</a>
                                            <a>Dresses</a>
                                            <a>Pants</a>
                                            <a>T-shirts</a>
                                            <a style="text-decoration:underline">See all products</a>
                                        </div>
                                    </div>
                                    <div>
                                        <h5 style="color:black">FASHION</h5>
                                        <div class="links">
                                            <a>Accessories</a>
                                            <a>Dresses</a>
                                            <a>Pants</a>
                                            <a>T-shirts</a>
                                            <a style="text-decoration:underline"> See all products</a>
                                        </div>
                                    </div>
                                    <div>
                                        <h5 style="color:black">FASHION</h5>
                                        <div class="links">
                                            <a>Accessories</a>
                                            <a>Dresses</a>
                                            <a>Pants</a>
                                            <a>T-shirts</a>
                                            <a style="text-decoration:underline"> See all products</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="rightshopByCategoryMenu">
                                <div class="shopByCategoryImg"><img src="assets/images/i_g5.jpg"></div>
                            </div>
                        </div>
                        </div>

                            
                        </div>
                        <div class="allDep-seeAllProducts">
                            <i class="fa-solid fa-shop mx-1" style="color:grey"></i>See All Products<span
                            class="new text-white bg-success mx-1">NEW</span> </p>
                        </div>
                    </div>
                </div>
            </li>
            <li class="nav-item">
                <a class="menuMulti ">
                    <h6>MULTILEVEL</h6>
                    <div class="multilevel ">
                    <div class="accessories d-flex justify-content-between position-relative">
                        <div>Accessories</div>
                        <div>►</div>
                        <div class="accessoriesMenu">
                            <div>Belts</div>
                            <div>Hats</div>
                            <div class="jewellery position-relative">Jewellery<span  style="color:grey;float: right;">►</span>
                                <div class="jewelleryMenu">
                                    <div>Bracelets</div>
                                    <div>Necklaces</div>
                                    <div>Rings</div>
                                    <div>Earrings</div>
                                    <div>Bangles</div>
                                </div>
                            </div>
                            <div>Scarves</div>
                            <div>Sunglasses</div>
                        </div>
                    </div>
                    <div class="dresses d-flex justify-content-between">
                        <div>Dresses</div>
                        <div>►</div>
                        <div class="dressesMenu">
                            <div>Casual</div>
                            <div>Evening</div>
                            <div>Occassion</div>
                            <div>Skirt</div>
                            <div>Summer</div>
                        </div>
                    </div>
                    <div class="t-shirt d-flex justify-content-between">
                        <div>T-shirts</div>
                    </div>
                    <div class="pants d-flex justify-content-between">
                        <div>Pants</div>
                        <div> ►</div>
                        <div class="pantMenu">
                            <div>Formals</div>
                            <div>Jeans</div>
                            <div>Jeggings></div>
                            <div>Training</div>
                        </div>
                    </div>
                    <div class="tops d-flex justify-content-between">
                        <div>Tops</div>
                        <div>►</div>
                        <div class="topMenu">
                            <div class="jacket">Jackets
                                <span  style="color:grey;float: right;">►</span>
                                <div class="jacketMenu">
                                    <div>Blazers</div>
                                    <div>Coat</div>
                                    <div>Leather</div>
                                    <div>Suit</div>
                            </div>
                            </div>
                            <div>Shirts</div>
                            <div>Sleeveless</div>
                            <div>Summer</div>
                        </div>

                    </div>
            
                </div>
            
                </a>
            </li>
            <li class="nav-item">
                <div class="megaMenuList">
                    <h6 class="position-relative" >MEGA MENU
                        <span class="position-absolute top-0 start-100 translate-middle badge  bg-warning">
                            NEW
                        </span>
                    </h6>
                    <div class="megaMenu p-2">
                        <h6 class=" mx-0" style="color:black">Top Categories</h6>
                        <div class="d-flex">
                            <div class="col1">
                                <a>Fashion</a>
                                <a>Bags</a>
                                <a>Health & Beauty</a>
                                <a>Footwear</a>
                                <a>Home Decor<span class="new text-white bg-success mx-1">NEW</span></a>
                                <a>Electronics</a>
                                <a>Food</a>
                                <a>Baby & Kids</a>
                                <a>Flowers</a>
                                <a>Appliances</a>
                                <a>Sports</a>
                            </div>
                
                            <div class="col2">
                                <a>Fashion</a>
                                <a>Bags</a>
                                <a>Health & Beauty<span class="new text-white bg-primary mx-1">UNLIMITED</span></a>
                                <a>Footwear</a>
                                <a>Home Decor<span class="new text-white bg-success mx-1">NEW</span></a>
                                <a>Electronics</a>
                                <a>Food</a>
                                <a>Baby & Kids<span class="new text-white bg-danger mx-1">OUT OF STOCK</span></a>
                                <a>Flowers</a>
                                <a>Appliances</a>
                                <a>Sports</a>
                            </div>
                            <div class="col3">
                                <a>Fashion</a>
                                <a>Bags</a>
                                <a>Health & Beauty</a>
                                <a>Footwear</a>
                                <a>Home Decor</a>
                                <a>Electronics</a>
                                <a>Food<span class="new text-white bg-warning mx-1">CUSTOM</span></a>
                                <a>Baby & Kids</a>
                                <a>Flowers</a>
                                <a>Appliances<span class="new text-white bg-black mx-1">TRENDING</span></a>
                                <a>Sports</a>
                            </div>
                            <div class="col4">
                                <a>Fashion</a>
                                <a>Bags</a>
                                <a>Health & Beauty</a>
                                <a>Footwear</a>
                                <a>Home Decor<span class="new text-white bg-success mx-1">NEW</span></a>
                                <a>Electronics</a>
                                <a>Food</a>
                                <a>Baby & Kids</a>
                                <a>Flowers</a>
                                <a>Appliances</a>
                                <a>Sports</a>
                            </div>
                            <div class="col5">
                                <div class="text-center">
                                    <img src="	https://www.journal-theme.com/1/image/cache/catalog/journal3/banners/17-tall-220x280w.jpg">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
            <li class="nav-item">
                <div class="menuFull">
                    <h6>FULLWIDTH</h6>
                    <div class="fullWidth">
                        <div class="p-2 d-flex plr" >
                            <div class="leftInFullWidth">
                                <div class="topInLeftPart d-flex">
                                    <div class="fashion">
                                        <h5 style="color:black">FASHION</h5>
                                        <div class="d-flex">
                                            <div class="imgInFashion"><img src="https://www.journal-theme.com/1/image/cache/catalog/journal3/categories/demo09-150x150.jpg"></div>
                                            <div class="links">
                                                <a>Accessories</a>
                                                <a>Dresses</a>
                                                <a>Pants</a>
                                                <a>T-shirts</a>
                                                <a> See all products</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="electronics">
                                        <h5 style="color:black">ELECTRONICS</h5>
                                        <div class="d-flex">
                                            <div class="imgInElectronics"><img src="https://www.journal-theme.com/1/image/cache/catalog/journal3/categories/elec-150x150.jpg"></div>
                                            <div class="links">
                                                <a>Accessories</a>
                                                <a>Dresses</a>
                                                <a>Pants</a>
                                                <a>T-shirts</a>
                                                <a> See all products</a>
                    
                                            </div>
                                        </div>
                                    </div>
                    
                                    <div class="bags">
                                        <h5 style="color:black">BAGS</h5>
                                        <div class="d-flex">
                                            <div class="imgInBags"><img src="https://www.journal-theme.com/1/image/cache/catalog/journal3/categories/bagcat-150x150.jpg"></div>
                                            <div class="links">
                                                <a>Accessories</a>
                                                <a>Dresses</a>
                                                <a>Pants</a>
                                                <a>T-shirts</a>
                                                <a> See all products</a>
                    
                                            </div>
                                        </div>
                                    </div>
                    
                                </div>
                                <div class="bottomInLeftPart d-flex">
                                    <div class="Health&Beauty">
                                        <h5 style="color:black">HEALTH & BEAUTY</h5>
                                        <div class="d-flex">
                                            <div class="imgInHealth"><img src="	https://www.journal-theme.com/1/image/cache/catalog/journal3/categories/beauty-150x150.jpg"></div>
                                            <div class="links">
                                                <a>Accessories</a>
                                                <a>Dresses</a>
                                                <a>Pants</a>
                                                <a>T-shirts</a>
                                                <a> See all products</a>
                    
                                            </div>
                                        </div>
                                    </div>
                                    <div class="footwear">
                                        <h5 style="color:black">FOOTWEAR</h5>
                                        <div class="d-flex">
                                            <div class="imgInFootwear"><img src="https://www.journal-theme.com/1/image/cache/catalog/journal3/categories/f6-150x150.jpg"></div>
                                            <div class="links">
                                                <a>Accessories</a>
                                                <a>Dresses</a>
                                                <a>Pants</a>
                                                <a>T-shirts</a>
                                                <a> See all products</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="food">
                                        <h5 style="color:black">FOOD</h5>
                                        <div class="d-flex">
                                            <div class="imgInFood"><img src="https://www.journal-theme.com/1/image/cache/catalog/journal3/categories/elec-150x150.jpg"></div>
                                            <div class="links">
                                                <a>Accessories</a>
                                                <a>Dresses</a>
                                                <a>Pants</a>
                                                <a>T-shirts</a>
                                                <a> See all products</a>
                                            </div>
                                        </div>
                                    </div>
                    
                                </div>
                            </div>
                            <div class="rightInFullWidth">
                                <div class="headInFullWidth d-flex">
                                    <h6 style="color:black" class="d-flex mx-2">TOP SELLARS</h6>
                                    <h6 style="color:black">SPECIAL DEALS</h6>
                                </div>
                                <div class="cardsInFullWidth d-flex">
                                    <div class="card  p-1 m-4" style="width: 15rem; " id="hell">
                                        <img src="https://www.journal-theme.com/1/image/cache/catalog/demo/iphone_1-190x190h.jpg" width="190"
                                            height="190" alt="iPhone" title="iPhone" class="img-responsive img-first lazyload lazyloaded"
                                            srcset="https://www.journal-theme.com/1/image/cache/catalog/demo/iphone_1-190x190h.jpg 1x, https://www.journal-theme.com/1/image/cache/catalog/demo/iphone_1-380x380h.jpg 2x"
                                            data-ll-status="loaded">
                                        <div class="headphones ">
                                            <a class="card-title text-primary px-2" href="#">iphone </a>
                                            <p class="card-text px-2">$101</p>
                                        </div>
                                        <span class="position-absolute  pre_order">Out Of Stock</span>
                                        <hr>
                                        <div class="action d-flex justify-content-around">
                                            <button class="btn btn-primary my-2" style="border-radius:5px">ADD TO CART</button>
                                            <div class="emo d-flex ">
                                                <i class="fa-regular fa-heart mx-2 my-3"></i>
                                                <i class="fa-solid fa-right-left mx-2 my-3"></i>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="card   p-1 m-4" style="width: 15rem; " id="hell">
                                        <img src="https://www.journal-theme.com/1/image/cache/catalog/demo/iphone_1-190x190h.jpg" width="190"
                                            height="190" alt="iPhone" title="iPhone" class="img-responsive img-first lazyload lazyloaded"
                                            srcset="https://www.journal-theme.com/1/image/cache/catalog/demo/iphone_1-190x190h.jpg 1x, https://www.journal-theme.com/1/image/cache/catalog/demo/iphone_1-380x380h.jpg 2x"
                                            data-ll-status="loaded">
                                        <div class="headphones ">
                                            <a class="card-title text-primary px-2" href="#">iphone </a>
                                            <p class="card-text px-2">$101</p>
                                        </div>
                                        <span class="position-absolute  pre_order">Out Of Stock</span>
                                        <hr>
                                        <div class="action d-flex justify-content-around">
                                            <button class="btn btn-primary my-2" style="border-radius:5px">ADD TO CART</button>
                                            <div class="emo d-flex ">
                                                <i class="fa-regular fa-heart mx-2 my-3"></i>
                                                <i class="fa-solid fa-right-left mx-2 my-3"></i>
                                            </div>
                                        </div>
                                    </div>
                        
                                </div>
                            </div>
                        </div>
                     </div>
            
                </div>
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
footer = document.getElementById("footer")
footer.innerHTML = `<div class="container-fluid  bg-secondary plr mtb">
<h1>
    Most Viewed
</h1>
<div class="underline mx-0"></div>
<div class="d-flex justify-content-evenly" id="most_viewed" style="flex-wrap: wrap;">
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