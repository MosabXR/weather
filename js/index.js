'use strict';

const baseURL = `https://api.weatherapi.com/v1/forecast.json?key=9f91eec239f84aaab96111541242306&days=3&aqi=no&alerts=no`;
const weatherContainer = document.querySelector('.row');

async function loadAPI(location) {
    try {
        let data = await fetch(baseURL + `&q=${location}`);
        let response = await data.json();
        console.log(response);
        console.log(response.location.name);
        console.log(response.forecast.forecastday[1].day.avgtemp_c);
        console.log(response.current.condition.icon);
        displayWeather(response);
    } catch (e) {
        weatherContainer.innerHTML = `
        <div class="col-12 col-lg-4">
                        <div class="card rounded-end-0 text-white border-0 h-100">
                            <div class="card-header rounded-end-0 placeholder-glow bg-custom-dark-subtle d-flex justify-content-between">
                                <span class="placeholder col-12 col-lg-4"></span>
                            </div>
                            <div class="card-body bg-custom-dark">
                                <h5 class="card-title placeholder-glow">
                                    <span class="placeholder col-6"></span>
                                  </h5>
                                <div class="degree placeholder-glow">
                                    <div class="num">
                                        <span class="placeholder col-12 col-lg-4"></span>
                                    </div>
                                </div>
                            </div>
                            <div class="card-footer placeholder-glow rounded-end-0 bg-custom-dark">
                                <span class="placeholder col-12 col-lg-4"></span>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-lg-4">
                        <div class="card rounded-0 text-white border-0 h-100">
                            <div class="card-header rounded-0 placeholder-glow bg-custom-dark-bold d-flex justify-content-center">
                                <span class="placeholder col-12 col-lg-4"></span>
                            </div>
                            <div class="card-body bg-custom-dark">
                                <h5 class="card-title placeholder-glow">
                                    <span class="placeholder col-6"></span>
                                  </h5>
                                <div class="degree placeholder-glow">
                                    <div class="num">
                                        <span class="placeholder col-12 col-lg-4"></span>
                                    </div>
                                </div>
                            </div>
                            <div class="card-footer placeholder-glow rounded-0 bg-custom-dark">
                                <span class="placeholder col-12 col-lg-4"></span>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-lg-4">
                        <div class="card rounded-start-0 text-white border-0 h-100">
                            <div class="card-header rounded-start-0 placeholder-glow bg-custom-dark-subtle d-flex justify-content-center">
                                <span class="placeholder col-12 col-lg-4"></span>
                            </div>
                            <div class="card-body bg-custom-dark">
                                <h5 class="card-title placeholder-glow">
                                    <span class="placeholder col-6"></span>
                                  </h5>
                                <div class="degree placeholder-glow">
                                    <div class="num">
                                        <span class="placeholder col-12 col-lg-4"></span>
                                    </div>
                                </div>
                            </div>
                            <div class="card-footer placeholder-glow rounded-start-0 bg-custom-dark">
                                <span class="placeholder col-12 col-lg-4"></span>
                            </div>
                        </div>
                    </div>
        `
    }

}

function displayWeather(data) {

    weatherContainer.innerHTML = `
    <div class="col-12 col-lg-4">
                        <div class="card rounded-end-0 text-white border-0 h-100">
                            <div class="card-header rounded-end-0 bg-custom-dark-regular d-flex justify-content-between">
                                <div class="day">Monday</div>
                                <div class="date">24June</div>
                            </div>
                            <div class="card-body bg-custom-dark-light d-flex flex-column justify-content-evenly">
                                <h5 class="card-title location">${data.location.name}</h5>
                                <div class="degree d-flex align-items-center flex-wrap">
                                    <div class="num big-num">
                                        ${data.forecast.forecastday[0].day.avgtemp_c}<sup>o</sup>C
                                    </div>
                                    <div class="flex-grow-1 d-flex justify-content-center">
                                    <img src="${data.forecast.forecastday[0].day.condition.icon}" alt="${data.forecast.forecastday[0].day.condition.text}" class="" />
                                    </div>
                                    <div class="condition text-custom-primary w-100 text-center">
                                        <span>${data.forecast.forecastday[0].day.condition.text}</span>
                                    </div>
                                </div>
                                <div class="more-info d-flex gap-3">
                                        <span><i class="fa-solid fa-droplet"></i> ${data.current.humidity}</span>
                                        <span><i class="fa-solid fa-wind"></i> ${data.current.wind_kph}km/h</span>
                                        <span><i class="fa-solid fa-compass"></i> ${data.current.wind_dir}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-lg-4">
                        <div class="card rounded-0 text-white border-0 h-100">
                            <div class="card-header rounded-0 placeholder-glow bg-custom-dark-bold d-flex justify-content-center">
                                <div class="day">Tuesday</div>
                            </div>
                            <div class="card-body bg-custom-dark-subtle d-flex flex-column align-items-center justify-content-evenly">
                                <img src="${data.forecast.forecastday[1].day.condition.icon}" alt="">
                                <div class="degree text-center">
                                    <div class="num">
                                        <h4>${data.forecast.forecastday[1].day.maxtemp_c}<sup>o</sup>C</h4>
                                    </div>
                                    <div class="num">
                                        <p>${data.forecast.forecastday[1].day.mintemp_c}<sup>o</sup>C</p>
                                    </div>
                                    <div class="condition text-custom-primary">
                                        <span>${data.forecast.forecastday[1].day.condition.text}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-lg-4">
                        <div class="card rounded-start-0 text-white border-0 h-100">
                            <div class="card-header rounded-start-0 bg-custom-dark-regular d-flex justify-content-center ">
                                <div class="day">Wednesday</div>
                            </div>
                            <div class="card-body bg-custom-dark-light d-flex flex-column align-items-center justify-content-evenly">
                                <img src="${data.forecast.forecastday[2].day.condition.icon}" alt="">
                                <div class="degree text-center">
                                    <div class="num">
                                        <h4>${data.forecast.forecastday[2].day.maxtemp_c}<sup>o</sup>C</h4>
                                    </div>
                                    <div class="num">
                                        <p>${data.forecast.forecastday[2].day.mintemp_c}<sup>o</sup>C</p>
                                    </div>
                                    <div class="condition text-custom-primary">
                                        <span>${data.forecast.forecastday[2].day.condition.text}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
    `
}

const locationField = document.querySelector('#location-field');

locationField.addEventListener('keydown', function () {
    loadAPI(locationField.value);
});

locationField.nextElementSibling.addEventListener('click', function () {
    loadAPI(locationField.value);
})

document.forms[0].addEventListener('submit', function (e) {
    e.preventDefault();
});

loadAPI('Cairo');
