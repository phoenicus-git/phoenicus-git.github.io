/*console.log('loaded');
let sign = prompt("What's your sign?");

if (sign.toLowerCase() == "Joshua") {
  alert("GREETINGS PROFESSOR FALKEN");
} else {
  alert("** IDENTIFICATION NOT RECOGNIZED ** \n ** ACESS DENIED **")
}

// there are many ways to use the prompt feature
sign = window.prompt(); // open the blank prompt window
sign = prompt();       //  open the blank prompt window
sign = window.prompt('Are you feeling lucky'); // open the window with Text "Are you feeling lucky"
sign = window.prompt('Are you feeling lucky', 'sure'); // open the window with Text "Are you feeling lucky" and default value "sure"/

class Login { 
  // everything will go here 
  constructor(form, fields) { 
    this.form = form; 
    this.fields = fields; 
    this.validateonSubmit(); 
  }
  }*/
(function(){
`use strict`;
const insertBanner = document.querySelector(`.text`);
const logonBanner = `<div class="success-text"><h2>GREETINGS PROFESSOR FALKEN</h2><br><button class="successBtn">SHALL WE PLAY A GAME</button></div>`;
const successBanner =`<div class="success-text"><h2>GREETINGS PROFESSOR FALKEN</h2><br><button class="successBtn">SHALL WE PLAY A GAME</button></div>`
const errorBanner = `<div class="error-text"><h2>** IDENTIFICATION NOT RECOGNIZED **</h2><p>** ACCESS DENIED **</p><button class="okBtn">Ok</button></div>`
insertBanner.insertAdjacentHTML(`beforeend`, logonBanner)
const logonform = document.querySelector(`.logon-banner`);
const logon = `Joshua`;
if ( userLogon === logon ){
  banner.remove();
  insertBanner.insertAdjacentHTML(`afterend`, successBanner);

const successBtn = document.querySelector(`.successBtn`);
successBtn.addEventListener(`click`, function() {
      window.location = "/secret/the-net.html"; 
  });
} else {
  banner.remove();
  insertErrorBanner.insertAdjacentHTML(`afterend`, errorBanner);
}
  //banner.remove();

})();