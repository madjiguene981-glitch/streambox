// ----------------------------
// Hamburger menu
// ----------------------------
const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector("nav");

hamburger.addEventListener("click", () => {
    nav.classList.toggle("active");
});


// ----------------------------
// MOVIES DATA (6+ movies, 4 genres)
// ----------------------------
const movies = [
    {
        title: "Drama Nights",
        year: 2022,
        genre: "Drama",
        rating: 8.2,
        watched: true,
        poster: "https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg"
    },
    {
        title: "Broken Silence",
        year: 2021,
        genre: "Drama",
        rating: 9.1,
        watched: true,
        poster: "https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg"
    },
    {
        title: "Fast Horizon",
        year: 2023,
        genre: "Action",
        rating: 8.7,
        watched: true,
        poster: "https://images.pexels.com/photos/1631677/pexels-photo-1631677.jpeg"
    },
    {
        title: "Sky Warriors",
        year: 2020,
        genre: "Action",
        rating: 8.4,
        watched: false,
        poster: "https://images.pexels.com/photos/3781529/pexels-photo-3781529.jpeg"
    },
    {
        title: "Laugh Factory",
        year: 2019,
        genre: "Comedy",
        rating: 7.5,
        watched: true,
        poster: "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg"
    },
    {
        title: "Space Drift",
        year: 2024,
        genre: "Sci-Fi",
        rating: 9.2,
        watched: true,
        poster: "https://images.pexels.com/photos/2150/sky-space-dark-galaxy.jpg"
    }
];


// ----------------------------
// 1. forEach → log all titles
// ----------------------------
movies.forEach(movie => {
    console.log("Title:", movie.title);
});


// ----------------------------
// 2. filter → Drama movies
// ----------------------------
const dramas = movies.filter(movie => movie.genre === "Drama");

console.log("Drama movies:", dramas);


// ----------------------------
// 3. find → highest-rated movie
// ----------------------------
const topMovie = movies.reduce((max, movie) =>
    movie.rating > max.rating ? movie : max
);

console.log("Highest rated movie:", topMovie.title);


// ----------------------------
// 4. DISPLAY MOVIES ON PAGE
// ----------------------------
const category = document.querySelector(".category");

// clear HTML (important)
category.innerHTML = "<h2>All Movies</h2>";

// render movies
movies.forEach(movie => {
    const card = document.createElement("article");

    card.innerHTML = `
    <h3 class="movie-title">${movie.title}</h3>

    <img src="${movie.poster}">

    <p>Genre: ${movie.genre}</p>
    <p>Year: ${movie.year}</p>
    <p>⭐ Rating: ${movie.rating}</p>

    <button class="watch-btn">
        ${movie.watched ? "Watched" : "Watch Now"}
    </button>
`;

    category.appendChild(card);
});