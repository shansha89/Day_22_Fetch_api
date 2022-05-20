const row = document.querySelector(".row");
fetch(
  "https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json"
)
  .then((res) => res.json())
  .then((data) => countries(data));

const countries = (data) => {
  data.forEach((country) => {
    const div = document.createElement("div");
    div.className = "col-lg-4 col-sm-12";
    div.innerHTML = `<div class="card" style="width: 18rem;">
    <div class="card-header text-center">${country.name}</div>
    <img src=${country.flag} class="card-img-top" alt="...">
    <div class="card-body text-center">
      <h5 class="card-title">Capital: ${country.capital}</h5>
      <h5 class="card-title">Region: ${country.region}</h5>
      <h5 class="card-title">Country Code ${country.alpha3Code}</h5>
      <a href="https://api.openweathermap.org/data/2.5/weather?lat=${country.latlng[0]}&lon=${country.latlng[1]}&appid=016ce45c906240f839172d3f50e746af" 
      class="btn btn-primary">Click for Weather</a>
    </div>
  </div></br>`;
    row.appendChild(div);
  });
};
