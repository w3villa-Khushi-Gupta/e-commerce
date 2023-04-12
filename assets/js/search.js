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
                    const link = document.createElement('a');
                    link.style.display = "block"
                    link.innerHTML = `<a onclick="searchResult();sessionStorage.setItem('myData', ${item.id})"> ${item.name}</a>`
                    // link.innerHTML = `<a onclick="searchResult(); sessionStorage.setItem('myData', ${item.id})">${item.name}</a>`;

                    searchResults.appendChild(link);
                    console.log(item.id)
                    
                });
            });
    }
})

 function searchResult() {
window.location.href = 'searchPage.html';
 }
    


// (leftSide) +/- button functionality
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
// (leftSide) +/- button functionality


// (leftSide) slider functionality
var slider = document.getElementById("slider");
var minInput = document.getElementById("min");
var maxInput = document.getElementById("max");

slider.addEventListener("input", function () {
    minInput.value = slider.value;
    maxInput.value = slider.max - slider.value;
});
// (leftSide) slider functionality


// home button to redirect to hompage
document.getElementById("home").addEventListener('click',function(){
    window.location.href = 'index.html';
})


// to display searched items in searchPage(rightSide)

// to display searched items in searchPage(rightSide)


