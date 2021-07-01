import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import StarWars from './js/star-wars.js';
// import { Project } from 'js/project';


let getElements = (response) => {
  let results = response.results;
  
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
  $('.list').html(outputStr);

};

async function makeApiCall(choice) {
  const response = await StarWars.get(choice);
  console.log('starwars response', response);
  getElements(response.data);
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