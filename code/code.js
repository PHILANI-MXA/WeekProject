let li = document.querySelectorAll("ul li");

let circle = document.querySelector(".circle");

let icon = document.querySelectorAll(".icon");

let getWidth = li[0].offsetWidth;

li.forEach((el, index) => {

    el.addEventListener("click", function(ev) {

        ev.preventDefault();

        icon.forEach(r => r.classList.remove("active"));

        icon[index].classList.add("active");

        circle.style.transform = "translateX(" + getWidth * index + "px)";

    })
});


function myFunction() {
    // Declare variables
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById('myInput');
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName('li');

    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}