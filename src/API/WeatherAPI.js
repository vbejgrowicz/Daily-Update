/*jshint esversion:6*/
var url = "https://api.wunderground.com/api/bc3f337f6caaea91/conditions/q/";

export const getWeather = (state, city) =>
  fetch(url + state + "/" + city.split(" ").join("_")+ ".json")
    .then(res => res.json())
      .then(data => data.current_observation);
