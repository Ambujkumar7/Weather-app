document.getElementById('form').addEventListener('submit', (e)=>{
    e.preventDefault()
    const city = document.getElementById('city').value;
    let apikey = 'eb122e2646063beb6769f83b4631f8d9';
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${ city}&appid=${apikey}&units=metric`
    fetch(apiUrl).then(response=> response.json())
    .then(data=>{
        console.log(data);
        if (data.cod === '404') {
            document.getElementById('result').innerHTML = 'Data is not found!'
        } else{
            let icon = data.weather[0].icon;
            let iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`
            let getweather = `<p>Weather Temp is ${data.main.temp} .C</p>
              <img src="${iconUrl} ">
            `
            document.getElementById('result').innerHTML = getweather;
        }
    })
})