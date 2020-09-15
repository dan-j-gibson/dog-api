// Create an app that lets users choose to display between 1 and 50 random dog images,
//  then prints the results to the console. The app should feature a form with a required 
//  input where users indicate the number of images to retrieve, and the input should default
//   to 3. Use the endpoint described in the "DISPLAY MULTIPLE RANDOM IMAGES FROM ALL DOGS 
//   COLLECTION" section of this page of the DogAPI docs.


// return random image if valid and error message of no connection
'use strict';

// proposed finished version
function getDogImages(query, displayCallback) {
  fetch(`https://dog.ceo/api/breeds/image/random/${query}`)
 .then(response => response.json())
 .then(responseJson => {
   console.log(responseJson)
   return responseJson
 }) 
 .then(responseJson => displayCallback(responseJson))
 .catch(error => alert('Something went wrong. Try again later.'));
}


// original version
function getImage(userNumber){
  if (userNumber < 3) {
    fetch("https://dog.ceo/api/breeds/image/random/3")
      .then(response => response.json())
      .then(responseJson => displayResults(responseJson));
  } else if (userNumber > 50) {
    return alert("Please choose a number equal or less than 50");
  } else {
    fetch(`https://dog.ceo/api/breeds/image/random/${userNumber}`)
      .then(response => response.json())
      .then(responseJson => console.log(responseJson));
  }
}
// $('.choose-number-form').submit(event =>{
// event.preventDefault();
// let numberOfDogs = $("#num-dog").val()};

// getImage(numberOfDogs)
// );

function watchNumberInput() {
  $(".choose-number-form").submit(event => {
    event.preventDefault();
    let numberOfDogs = $(".num-dog").val();
    //Pass the number value to getDogImage
    getImage(numberOfDogs);
  });
}





    // for(let i=0; i <= userNumber; i++){
    //     $('.results-img').replaceWith(`<img src="${responseJson[i].message}"class="results-img">`)
    // }
    // // remove hidden view class/Display results
    //     $('.dog-photo').removeClass(`hidden`)
    // }

    // reassign submit button to pull random image
 function watchForm() {
  $('.choose-number-form').submit(event => {
    event.preventDefault();
    watchNumberInput();
  });
}


$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});


function displayResults(responseJson) {
  console.log(responseJson);
  //replace the existing image with the new one
  return `<div>
    <img src="${responseJson}" class="results-img"></div>
  </div>`

}

function displayDogSearchData(data) {
  const results = data.message.map((item, index) => displayResults(item));
  $('.js-results').html(results); 
  
  //display the results section
  $('.dog-photo').removeClass('hidden');
}