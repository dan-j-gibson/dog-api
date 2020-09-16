// fetch images from dog API 
function getImages(query, callback) {
  if (query <=50 && query >0){fetch(`https://dog.ceo/api/breeds/image/random/${query}`)
 .then(response => response.json())
 .then(responseJson => {
   console.log(responseJson)
   return responseJson
 }) 
 .then(responseJson => callback(responseJson))
 .catch(error => alert('Something went wrong. Try again later.'));
}
else {
  return alert('please enter a number beetween 1 and 50')
}
}


function displayResults(responseJson) {
 return `
 <div class="img-containter">
 <h5>Check Out This Pupper</h5>
   <img src="${responseJson}" class="results-img">
 </div>
 ` ;
}

function searchData(data) {
 const results = data.message.map((item, index) => displayResults(item));
 $('.js-results').html(results);
 
 $('.results').removeClass('hidden');
}


function listenToInput() {
 $('.js-search-form').submit(event => {
   event.preventDefault();
   const queryTarget = $(event.currentTarget).find('.js-query');
   const query = queryTarget.val();
    queryTarget.val("3")
   getImages(query, searchData);
 });
}


$(function() {
 console.log('App loaded! Waiting for submit!');
 listenToInput();
}); 