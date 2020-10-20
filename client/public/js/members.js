$(document).ready(() => {
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  $.get("/api/user_data").then(data => {
    $(".member-name").text(data.email);
  });
});


const axios = require('axios');

// Make a request for a user with a given ID
axios.get("/api/user_data")
  .then(function (data) {
    // handle success
    console.log(data,email);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });