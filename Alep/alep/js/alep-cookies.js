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
 // sessionStorage.setItem(`cookies`, `permissionDenied`);
  
    var hostname = document.location.hostname.replace(/^www\./, ''),
    commonSuffix = '; expires=Thu, 01-Jan-1970 00:00:01 GMT; path=/';
console.log(hostname);
document.cookie = `_ga_YMCRZXGLS8` + '=; domain=.' + hostname + commonSuffix;
document.cookie = `_ga_YMCRZXGLS8` + '=' + commonSuffix;
document.cookie = `_ga` + '=; domain=.' + hostname + commonSuffix;
document.cookie = `_ga` + '=' + commonSuffix;
console.log(document.cookie);
console.log(`removed`);

  //banner.remove();
 
});
  console.log(`loaded`);
}
})();