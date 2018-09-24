const axios = require('axios');
const CLIENTID = "1e82cb59611dbc3be9760487fc7bab2d";
const URL = "https://api.soundcloud.com/tracks";

//https://api.soundcloud.com/tracks?q=house&license=cc-by-sa&format=json&client_id=1e82cb59611dbc3be9760487fc7bab2d
//https://api.soundcloud.com/tracks/?client_id=1e82cb59611dbc3be9760487fc7bab2d0

module.exports = {
    Query: function(query) {

      let q = '';
      if (query)
        q = `&q=${query}`;
      
      let api = URL + `?client_id=${CLIENTID}&limit=20` + q;

      return axios.get(api)
        .then((response) => {
          let results = response.data;
          console.log(results);
          return results;
        })
        .catch(error => { 
          console.error(error); 
          return Promise.reject(error); 
        });
    },
  };