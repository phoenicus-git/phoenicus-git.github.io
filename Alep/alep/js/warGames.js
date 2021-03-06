// warGames.js v.0.0.1 easter egg | MIT License | https://www.phoenicus.com/
// The script will simulate the login from Wargames.
(function(){
`use strict`;
  const insResp = document.querySelector(`.text`);
  const successResp = `<div class="resp-text"><h2>GREETINGS PROFESSOR FALKEN.</h2><br><button class="resp-btn">SHALL WE PLAY A GAME?</button></div>`;
  const errorResp = `<div class="resp-text"><h2> IDENTIFICATION NOT RECOGNIZED BY SYSTEM</h2><p class="blink">--CONNECTION TERMINATED--</p><button class="resp-btn">Ok</button></div>`;
  const helpLogon = `<div class="resp-text"><h2> HELP NOT AVAILABLE</h2><button class="resp-btn">Ok</button></div>`;
  const helpGames = `<div class="resp-text"><h2>'GAMES' REFERS TO MODELS, SIMULATIONS AND GAMES WHICH HAVE TACTICAL AND STRATEGIC APPLICATIONS.</h2><button class="resp-btn">Ok</button></div>`;
  const listGames = `<div class="resp-text"><h2 class="list">FALKEN'S MAZE<br>BLACK JACK<br>GIN RUMMY<br>HEARTS<br>BRIDGE<br>CHECKERS<br>CHESS<br>POKER<br>FIGHTER COMBAT<br>GUERILLA ENGAGEMENT<br>DESERT WARFARE<br>AIR-TO-GROUND ACTIONS<br>THEATERWIDE TACTICAL WAR<br>THEATERWIDE BIOTOXIC AND CHEMICAL WARFARE<br><br>GLOBAL THERMONUCLEAR WAR</h2><button class="resp-btn">Ok</button></div>`;
  const logon = `Joshua`;
  const helpLog = `Help Logon`;
  const helpG = `Help Games`;
  const listG = `List Games`;
  const exit = document.querySelector(`.exit-btn`);
  exit.addEventListener(`click`, function() {
    window.location = `../index.html`;
  });
  const submit = document.querySelector(`.submit`);
  submit.addEventListener(`click`, function () { 
    let userLogon = document.querySelector(`.input`).value;
      if ( userLogon.toUpperCase() === logon.toUpperCase() ){
        insResp.insertAdjacentHTML(`beforeend`, successResp);
        let respBtn = document.querySelector(`.resp-btn`);
          respBtn.addEventListener(`click`, function() {
          window.location = `/secret/the-net.html`; 
          });
      } else if ( userLogon.toUpperCase() === helpLog.toUpperCase() ) {
        insResp.insertAdjacentHTML(`beforeend`, helpLogon);
        let respText = document.querySelector(`.resp-text`);
        let respBtn = document.querySelector(`.resp-btn`);
          respBtn.addEventListener(`click`, function() {
          respText.remove();
          document.querySelector(`.input`).value = ``;
          });
      } else if ( userLogon.toUpperCase() === helpG.toUpperCase() ) {
        insResp.insertAdjacentHTML(`beforeend`, helpGames);
        let respText = document.querySelector(`.resp-text`);
        let respBtn = document.querySelector(`.resp-btn`);
          respBtn.addEventListener(`click`, function() {
          respText.remove();
          document.querySelector(`.input`).value = ``;
          });
      } else if ( userLogon.toUpperCase() === listG.toUpperCase() ) {
        insResp.insertAdjacentHTML(`beforeend`, listGames);
        let respText = document.querySelector(`.resp-text`);
        let respBtn = document.querySelector(`.resp-btn`);
          respBtn.addEventListener(`click`, function() {
          respText.remove();
          document.querySelector(`.input`).value = ``;
          });
      } else {
        insResp.insertAdjacentHTML(`beforeend`, errorResp);
        let respText = document.querySelector(`.resp-text`);
        let respBtn = document.querySelector(`.resp-btn`);
          respBtn.addEventListener(`click`, function() {
          respText.remove();
          document.querySelector(`.input`).value = ``;
          });
      }
  });
})();