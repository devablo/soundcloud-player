const axios = require('axios');
const CLIENTID = "TJ3pAMUCLJAGmlRHCQ3KFKIMMex3Azp3";
const URL = "https://api.soundcloud.com/tracks";

//https://api.soundcloud.com/tracks?q=house&license=cc-by-sa&format=json&client_id=1e82cb59611dbc3be9760487fc7bab2d
//https://api.soundcloud.com/tracks?q=ferry%20corsten&variant_ids=&facet=genre&user_id=835824-931576-513886-737733&client_id=TJ3pAMUCLJAGmlRHCQ3KFKIMMex3Azp3&limit=50&offset=0&linked_partitioning=1&app_locale=en
//https://api-v2.soundcloud.com/search/tracks?q=ferry%20corsten&sc_a_id=91ea82e5-60f4-4417-8d09-c2c850af8062&variant_ids=&facet=genre&user_id=835824-931576-513886-737733&client_id=TJ3pAMUCLJAGmlRHCQ3KFKIMMex3Azp3&limit=10&offset=0&linked_partitioning=1&app_version=1538486777&app_locale=en
module.exports = {
    Query: function(query) {

      let q = '';
      if (query)
        q = `&q=${query}`;
      
      let api = URL + `?client_id=${CLIENTID}&limit=20&facet=genre` + q;

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