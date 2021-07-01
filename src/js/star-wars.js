const axios = require('axios').default;

export default class StarWars {

  static async get(choice) {
    try {
      return await axios.get(`https://swapi.dev/api/${choice}/?page=1`);
    } catch(err) {
      console.log('err', err);
    }
  }
}
// export default class StarWars {  
//   static async get(choice) {
//     try {
//       const response = await fetch(`https://swapi.dev/api/${choice}/?page=1`);
//       if (!response.ok) {
//         throw Error(response.statusText);
//       }
//       return response.json();
//     } catch(error) {
//       return error.message;
//     }
//   }
// }