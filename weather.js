//
document.getElementById("submit_search").addEventListener("click", displayDate);
async function displayDate() {
  let search = document.getElementById("cityInput").value;
  console.log("search input " + search);
  await getResults(search);
}

async function getResults(query) {
  let city = query;
  //api key
  let apikey = "cdf5a999b6a94552a45125501242101";
  //create search url
  let searchUrl =
    "http://api.weatherapi.com/v1/current.json?key=" +
    apikey +
    "&q=" +
    city +
    "&aqi=no";
    let response = await fetch(searchUrl);
    let data = await response.json();
  
    showResults(data);
    return data;
}
function showResults(data) {
    //DISPLAY RESULTS
    console.log(JSON.stringify(data.location));
  
    document.getElementById("city").innerHTML =
      data.location.name + "\n" + data.location.region;
    document.getElementById("weather").innerHTML = data.current.condition.text;
  
    document.getElementById("temprature").innerHTML = data.current.temp_c;
    document.getElementById("wind").innerHTML = data.current.wind_kph;
  
    // city.innerText =data.location.name+"\n"+data.location.region
  }
