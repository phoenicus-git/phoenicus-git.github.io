(function(){
`use strict`;
let websiteName = `Phoenicus`;
const insertBanner = document.querySelector(`.footer-grid`);
const cookieBanner = `<div class="cookie-banner"> 
    <div class="cookie-text">
      <p>By clicking “Accept”, you allow at ${websiteName} the use of essential cookies so it can offer you the most relevant experience during your visit.</p>
    </div><!--.cookie-text-->
    <div class="cookie-buttons">
      <a href="/policy.html" class="cookie-read">Read More</a>
      <button class="cookie-accept">Accept</button>
      <button class="cookie-reject">Reject</button>
    </div><!--.cookie-buttons-->
  </div><!--cookie-banner-->`;
const cookieScripts = document.querySelectorAll(`script[type="text/plain"]`);
console.log(cookieScripts);
const permissionLocal = localStorage.getItem(`cookies`);
const permissionSession = sessionStorage.getItem(`cookies`);
if (permissionLocal == `permissionGranted`) {
  cookieScripts.forEach(function(accepted){
    accepted.removeAttribute(`type`);
  console.log(`accepted`);
  });
  console.log(`granted`);
  return;
  
} else if (permissionSession == `permissionDenied`){
  console.log(`denied`);
  return;
} else {
insertBanner.insertAdjacentHTML(`afterend`, cookieBanner);
const banner = document.querySelector(`.cookie-banner`)
const acceptCookiesBtn = document.querySelector(`.cookie-accept`);
const rejectCookieBtn = document.querySelector(`.cookie-reject`);

acceptCookiesBtn.addEventListener(`click`, function() {
  localStorage.setItem(`cookies`, `permissionGranted`);
  cookieScripts.forEach(function(accepted){
    accepted.removeAttribute(`type`);
  console.log(`accepted`);
  });
  banner.remove();
  console.log(`removed`);
});
rejectCookieBtn.addEventListener(`click`, function () {
  sessionStorage.setItem(`cookies`, `permissionDenied`);
  banner.remove();
  console.log(`removed`);
});
  console.log(`loaded`);
}
})();