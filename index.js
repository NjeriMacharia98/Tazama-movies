const apiKey = 'da7944363589a5d4fbdb1e574abce6df';
const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
const movieList = document.getElementById('movie-list');
// Fetch top 20 movies on page load
const endpoint = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&sort_by=popularity.desc&page=1&include_adult=false`;
fetch(endpoint)
  .then(response => response.json())
  .then(data => {
    movieList.innerHTML = '';
    data.results.forEach(movie => {
      const li = document.createElement('li');
      const title = document.createElement('h3');
      title.textContent = movie.title;
      li.appendChild(title);
      if (movie.poster_path) {
        const img = document.createElement('img');
        img.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
        img.alt = `${movie.title} poster`;
        li.appendChild(img);
      }
      movieList.appendChild(li);
    });
  })
  .catch(error => console.error(error));
// Fetch movies when search button is clicked
searchBtn.addEventListener('click', () => {
  const query = searchInput.value.trim();
  if (query) {
    const endpoint = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`;
    fetch(endpoint)
      .then(response => response.json())
      .then(data => {
movieList.innerHTML = '';
        data.results.forEach(movie => {
          const li = document.createElement('li');
          const title = document.createElement('h3');
          title.textContent = movie.title;
          li.appendChild(title);
          if (movie.poster_path) {
            const img = document.createElement('img');
            img.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
            img.alt = `${movie.title} poster`;
            li.appendChild(img);
            movieList.appendChild(li); 
        }
        });
      })
      .catch(error => console.error(error));
  }
});







