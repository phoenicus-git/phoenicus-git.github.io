`use strict`;
let websiteName = `Phoenicus`;
const insertBanner = document.querySelector('.footer-grid');
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
insertBanner.insertAdjacentHTML('afterend', cookieBanner);
//document.body.innerHTML = cookieBanner;

const acceptCookiesBtn = document.querySelector('.cookie-accept');
const rejectCookieBtn = document.querySelector('.cookie-reject');
console.log('loaded');