//  https://restcountries.com/v3.1/all
// const URL = "https://restcountries.com/v3.1/name/usa";

const countries = ["iraq", "germany", "saudi arabia", "brazil", "palestine", "turkey", "south korea", "iran"];

const container = document.querySelector(".container");

const savedCountriesPromises = countries.map((country) => {
    return fetch(`https://restcountries.com/v3.1/name/${country}`)
        .then((res) => res.json())
        .then((data) => {
            return data[0];
        });
});

Promise.all(savedCountriesPromises)
    .then((savedCountries) => {
        savedCountries.map((countryData) => {
            CountryDetails(countryData);
        });
    })
    .catch((error) => {
        console.log("Error fetching the data.", error);
    });

function CountryDetails(countryObj) {
    const div = document.createElement("div");
    const h3 = document.createElement("h3");
    const span = document.createElement("span");
    const capital = document.createElement("div");

    span.textContent = countryObj.borders;
    span.classList.add("borders");
    capital.innerHTML = countryObj.capital;

    h3.classList.add("country-name");
    h3.textContent = countryObj.name.common;
    div.classList.add("country");
    const img = document.createElement("img");
    img.src = countryObj.flags.png;
    img.classList.add("country-img")

    div.appendChild(img);
    div.appendChild(h3);
    div.appendChild(span);
    div.appendChild(capital);
    container.append(div);
    console.log(countryObj);
}
