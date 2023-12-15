
fetch('https://restcountries.com/v3.1/all', { method: 'GET' })
    .then(req => req.json())
    .then(data => createCards(data))
    .catch(error => console.error(error))

function createCards(data) {
    //console.log(data)

    data.forEach((e) => {

      const lat = e.latlng[0];
      const lng = e.latlng[1];
      const name = e.name.common;
        console.log(e)
        let div = document.getElementById('root');
        
        div.innerHTML += `<div class="container mt-3" >
 
        <div class="card" style="width:400px;background-image: linear-gradient(to right, #D3D3D3,#696969);">
        <nav class="navbar navbar-expand-sm bg-dark navbar-dark ">
        <div class="container-fluid">
           <span class="navbar-text" d-flex justify-content-center"> 
           <p style="font-color:white;text-align: center !important; width: 100%; padding-left: 100px;"> ${e.name.common}</p>
           </span>
        </div>
      </nav>
          <img src="${e.flags.png}" alt="Card image" style="width:100%;padding:30px 20px 10px 20px">
          <div class="card-body" style="padding:30px 40px 30px 100px;">
            
            <p class="card-text">Capital:${e.capital}</p>
            <p class="card-text">Region:${e.region}</p>
            <p class="card-text">Country Code:${e.borders}</p>
            <p class="card-text">Latlng:${e.latlng}</p>
            
            
            <div class="btn-group" style="text-align:center;align-items:center;padding: 0px 0px 0px 20px;">
  <button type="button" class="btn btn-default" style="border-color:white;" onclick="getBlockWeather(${lat}, ${lng}, '${name}')">Click For Weather</button>
            </div>
            
          </div>
        </div>`

        
    })

}

function getBlockWeather(lat, lng, name) {
  const apiKey = 'e418336268a8afaca72130ab5aa02bb6';

  fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${apiKey}`)
      .then((response) => response.json())
      .then((data) => {
          alert(`
              For ${name}  
              Current Humidity is ${data.main.humidity}
              Current Pressure is ${data.main.pressure}
              Current Temperature is ${data.main.temp}`);
      })
      .catch((error) => {
          console.error('Error fetching weather data:', error);
      });
}