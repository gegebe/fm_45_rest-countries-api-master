async function getCountries(){
  let countriesData = await fetch("https://restcountries.com/v3.1/all");
  //console.log(countriesData);
  
  let convertedData = await countriesData.json();
  //console.log(convertedData);

  convertedData.forEach(country => {
    printCountry(country);
  });
}

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

getCountries();

// let convertedData = [];

let inputSearch = document.querySelector("#input-field-country");
inputSearch.addEventListener("input", (event) => {

  //Obtener valor
  let inputValue = event.target.value.toLowerCase();

  //Filtrar paises
  let filteredCountries = convertedData.filter(
    (country) => country.name.toLowerCase.includes(inputValue)
    );

  //Borrar DOM
  countriesBox = document.querySelector("#countries-selection-box").innerHTML = "";



  //Nostrar en el contenendor
//   filteredCountries.forEach((country) => {
//     printCountry(country);
//   }):

// })
});