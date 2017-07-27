/*jshint esversion:6*/

var url = "https://api.nytimes.com/svc/topstories/v2/";
var type = ".json";
var key = "?api-key=540858808e3a498fac733932fce4d663";

export const getAll = (category) =>
  fetch(url + category + type + key)
    .then(res => res.json())
      .then(data => data.results);
