let countries;

//1. OBTENER PAISES DE LA API
async function getCountries(){
  let countriesData = await fetch("https://restcountries.com/v3.1/all");
  console.log(countriesData);
  
  countries = await countriesData.json();
  console.log(countries);

  updateCountries(countries);
}
//3. CREAR UNA FUNCIÓN QUE RECORRE Y ACTUALIZA EL DOM
function updateCountries(countries){
  countries.forEach(country => {
    printCountry(country);
  });
}

//2. CREAR UNA FUNCIÓN PARA PINTAR EL DOM
function printCountry(country){
  let countriesBox = document.querySelector("#countries-selection-box");

  let countryArticle = document.createElement("article");
  let countryName = document.createElement("h2");
  let countryFlag = document.createElement("img");
  let countryPopulation = document.createElement("p");
  let countryRegion = document.createElement("p");

  countryArticle.append(countryName, countryFlag, countryPopulation);
  countryArticle.appendChild(countryRegion);
  countriesBox.append(countryArticle);

  countryName.textContent = country.name.official;
  countryFlag.src = country.flags.png;
  countryFlag.alt = country.name.official;
  countryFlag.style.minWidth = "100%";
  countryPopulation.textContent = country.population;
  countryRegion.textContent = country.region;
}

//4. LLAMAR LA PRIMERA FUNCIÓN
getCountries();

// 5. SI BUSCAS
let inputSearch = document.querySelector("#input-field-country");

inputSearch.addEventListener("input", (event) => {

  document.querySelector("#countries-selection-box").innerHTML = "";

  //Obtener valor
  let inputValue = event.target.value.toLowerCase();

  //Filtrar paises
  let filteredCountries = countries.filter(
    (country) => country.name.common.toLowerCase().includes(inputValue)
    );

    updateCountries(filteredCountries);

});

// 6. SI SELECCIONAS
let selectRegion = document.querySelector("#countrySelect");

selectRegion.addEventListener("change", (event) => {
  
  document.querySelector("#countries-selection-box").innerHTML = "";

  //Obtener valor
  let selectValue = event.target.value.toLowerCase();

  let filterSelectRegion = countries.filter(
    (country) => country.region.toLowerCase().includes(selectValue)
  );

  updateCountries(filterSelectRegion);

})