import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import StarWars from './js/star-wars.js';
// import { Project } from 'js/project';


let getElements = (response) => {
  let results;
  if(response.data) {
    results = response.data.results;
  } else {
    results = response.results;
  }
  
  
  let outputStr = '';
  console.log('results[0].name', results[0].name);

  if (results[0].name) {
    for (let choice of results) {
      console.log(choice.name);
      outputStr += `<li>${choice.name}</li>`;
    }
    console.log('outputStr', outputStr);
  } else {
    for (let choice of results) {
      console.log(choice.title);
      outputStr += `<li>${choice.title}</li>`;
    }
    console.log('outputStr', outputStr);
  }
  $('.list').append(outputStr);

};
async function getMore(choice) {
  console.log('getmore choice', choice.next);
  try {
    const results = await fetch(choice.next);
      if (!results.ok) {
        throw Error(results.statusText);
      }
      let parsed = await results.json();
      console.log('parsed, results', parsed.results);
      console.log('parsed', parsed);
      getElements(parsed);
  } catch(error) {
    return error.message;
  }
}
async function makeApiCall(choice) {
  const response = await StarWars.get(choice);
  console.log('starwars response', response);
  getElements(response);
  getMore(response.data);
}



$(document).ready(() => {
  $('.form-elements').submit((e) => {
    e.preventDefault();
    let selected = $('#dropdown').val();
    console.log('selected', selected);

    let response = makeApiCall(selected);
    console.log('response after submitting', response);

  });
});