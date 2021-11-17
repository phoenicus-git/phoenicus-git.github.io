/*! randomPost.js v.0.1-beta | MIT Licence | https://github.com/AnimoPhoenicus/alep !*/
/*! The script will read a JSON file with posts, will pick a random url post and will link it to a button. !*/
const btnRandom = document.querySelector(".btn-random");
fetch('alep/js/postList.json') 
.then(function(response) { 
  if (!response.ok) { 
    throw new Error("HTTP error, status = " + response.status); 
    } 
  return response.json(); 
}) 
.then(function(json) {
  let randomNumber = Math.random() * json.length;
  randomNumber = parseInt(randomNumber, 10); 
  let link = json[randomNumber].url;
  console.log(link);
  btnRandom.addEventListener("click", function () {
    window.location= link;
  })      
});