const key ='ca725edb51dd05b0ab255bd32b4f78ee';
const idioma ="pt_br";


/*const baseURL ='http://api.openweathermap.org/data/2.5/weather?q=Santos&appid=ca725edb51dd05b0ab255bd32b4f78ee';
fetch(baseURL).then((data) => { console.log('response', data) })*/

const requestCity = async (city) => {
    const baseURL = 'http://api.openweathermap.org/data/2.5/weather'
    const query = `?q=${city}&lang=${idioma}&appid=${key}`;
    //faz a call em fetch
    const response = await fetch(baseURL + query);

    //aguarda o retorno em json
    const data = await response.json();
    return data;
}

//Sistema de tradução
  
  /*function translateDescription(description) {
      var xhttp = new XMLHttpRequest();
      xhttp.open("GET", "https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=pt&dt=t&q=" + main, false);
      xhttp.send();
      var response = JSON.parse(xhttp.responseText);
      return response[0][0][0];
  }
  
  getLocationAndWeather();
*/
