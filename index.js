

const searchButton = document.querySelector('.btn').addEventListener('click', function(){
    const inputKeywoard = document.querySelector('.form-control');
    fetch("https://newsapi.org/v2/everything?q=" + (inputKeywoard.value) + "&apiKey=74f0cb22ba5245b493bd7b8ed4e8b130")
    .then(Response =>Response.json())
    .then(Response => {
      const berita = Response.articles;
      let card = '';
      berita.forEach(m => card += showCards(m));
      const beritaContainer = document.querySelector('.berita-container');
      beritaContainer.innerHTML = card;
    });
});


function showCards(m) {
  return `
    <div class="container col-md-4 col-sm-6">
      <div class="card mb-3">
      <img src="${m.urlToImage}" class="card-img-top" alt="">
      <div class="card-body">
        <h5 class="card-title">${m.title}</h5>
        <p class="card-text">${m.description}</p>
        <a href="${m.url}" class="btn btn-primary">Lihat selengkapya</a>
      </div>
      </div>
      </div>`

};

fetch("https://newsapi.org/v2/top-headlines?country=id&apiKey=74f0cb22ba5245b493bd7b8ed4e8b130")
.then(Response =>Response.json())
.then(Response => {
  const berita = Response.articles;
  let card = '';
  berita.forEach(m => card += showCards(m));
  const beritaContainer = document.querySelector('.berita-container');
  beritaContainer.innerHTML = card;
});

function show(d) {
  return `
    <div class="container col-md-4">
      <div class="card" style="width: 18rem;">
      <img src="${d.urlToImage}" class="card-img-top" alt="">
      <div class="card-body">
        <h5 class="card-title">${d.title}</h5>
        <p class="card-text">${d.description}</p>
        <p class="card-text penulis">${d.publisheadAt}</p>
        <a href="${d.url}" class="btn btn-primary">Lihat selengkapya</a>
      </div>
      </div>
      </div>`
};
show();