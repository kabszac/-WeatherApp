const searchInput = document.querySelector('.search-input')
const searchButton = document.querySelector('.submit')
const weatherDescription = document.querySelector('.weather-description')
const city = document.querySelector('.city')
const temperature = document.querySelector('.temp')
const degrees = document.querySelector('.degrees')
const high = document.querySelector('.high ')
const low = document.querySelector('.low')
const windSpeed = document.querySelector('.wind')
const img = document.querySelector('.gif-img')
const toggleBtn = document.querySelector('.toggle-btn')



async function getData(){
    const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=' + searchInput.value + '&units=metric&appid=79b6d5e53a405e5e8026bdda648d1a01', {mode: 'cors'})
    const data = await response.json();
    const a = data.weather[0].main
    const b = data.name
    const c = data.main.temp
    const d = data.main.temp_max
    const e = data.main.temp_min
    const f = data.wind.speed
    degrees.textContent = '°C'
    datahtml(a,b,c,d,e,f)
    gifImage(a)

}

getData()

function datahtml(description, location, temp, toHigh, tolow, wind){
    weatherDescription.textContent = description
    city.textContent = location
    temperature.textContent = Math.round(temp)
    high.textContent = "Today's High:" + toHigh
    low.textContent = "Today's Low:" + tolow
    windSpeed.textContent = "Wind Speed:" + wind + "km/h";

}

async function fData(){
    const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=' + searchInput.value + '&units=imperial&appid=79b6d5e53a405e5e8026bdda648d1a01', {mode: 'cors'})
    const data = await response.json();
    const a = data.weather[0].main
    const b = data.name
    const c = data.main.temp
    const d = data.main.temp_max
    const e = data.main.temp_min
    const f = data.wind.speed
    degrees.textContent = '°F'
    datahtml(a,b,c,d,e,f)
    gifImage(a)

}


async function gifImage(dataInput){
    response = await fetch('https://api.giphy.com/v1/gifs/translate?api_key=D8mXjH75uhEQQb6e0ctSwAOdxtDpoSZ7&s=' + dataInput, {mode: 'cors'})
    datas = await response.json()
    img.src = datas.data.images.original.url;
}



searchButton.addEventListener('click', getData)
toggleBtn.addEventListener('click', () => {
    toggleBtn.classList.toggle('active')
    if(toggleBtn.classList.contains('active')){
        fData()
        degrees.textContent = '°F'
    }else{
        getData()
    }

    

})