const arrows = document.querySelectorAll(".arrow");
const movieLists = document.querySelectorAll(".movie_list");

arrows.forEach((arrow, i) => {
    const widhtRatio = Math.floor(window.innerWidth / 300);
    let clickCounter = 0;
    const imageItem = movieLists[i].querySelectorAll("img").length;
    arrow.addEventListener("click", function() {
        if (imageItem - (4 + clickCounter) + (4 - widhtRatio) >= 0) {
            clickCounter++;
            movieLists[i].style.transform = `translateX(${
        movieLists[i].computedStyleMap().get("transform")[0].x.value - 300
      }px)`;
        } else {
            movieLists[i].style.transform = "translateX(0)";
            clickCounter = 0;
        }
    });
});

// darkmode
const ball = document.querySelector(".toggle_ball");
const items = document.querySelectorAll(
    ".container,.navbar,.navbar li,.navbar  span,.sidebar,.sidebar i,.toggle,.toggle_ball,.movie_list_filter select,.movie_list_filter select,.movie_list_container h1"
);

ball.addEventListener("click", function() {
    items.forEach((item) => item.classList.toggle("active"));
});


// const arrows = document.querySelectorAll(".arrow");
// const movieLists = document.querySelectorAll(".movie_list");

// arrows.forEach((arrow, i) => {
//     arrow.addEventListener("click", function() {
//         movieLists[i].style.transform = `translateX(${movieLists[i].
//             computedStyleMap().get("transfrom")[0].x.value - 300}px)`
//     });
    
    
// });
// // const movieLists =  