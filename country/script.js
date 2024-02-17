// let data = {
//     nome: "Junior",
//     idade: 25,
//     isStundent: true
// };

// fetch("https://webhook.site/23fdb80b-b6bc-4f92-9ca8-2d330a088b30", {
//     method: "POST",
//     body: JSON.stringify(data)
// });

function list(data) {
  var url = "https://restcountries.com/v3.1/all"
  if (data) {
    url = "https://restcountries.com/v3.1/name/" + data
  }
  fetch(url)
    .then(json => json.json())
    .then(countries => {
      let row = document.querySelector("#row");
      let countriesHtml = "";
      for (let index = 0; index < countries.length; index++) {
        const country = countries[index];
        //nome: country.translation.por common
        //imagem: country.flags.png
        //alt: country.flags.alt
        //flag: country.flag
        //região country.region

        countriesHtml += `
                <div class="col-4 mt-3">
                  <div class="card" style="width: 18rem;">
                    <img src="${country.flags.png}" class="card-img-top" alt="${country.flags.alt}">
                      <div class="card-body">
                        <h5 class="card-title">${country.translations.por.common}</h5>
                        <p class="card-text"> Região: ${country.region} </p>
                      </div>
                  </div>
                </div>`


      }
      row.innerHTML = countriesHtml;
    })


}
 const searchInput = document.getElementById('searchInput');

 searchInput.addEventListener('keyup', function name(params) {
  const searchTerm = searchInput.value.toLowerCase();
  list(searchTerm);
 });


list();


