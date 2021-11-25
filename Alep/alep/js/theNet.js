const pi = document.querySelector(".the-net");
console.log('ok');
  pi.addEventListener("click", function ()
  {
  console.log('pressed');
});
pi.addEventListener('keydown', function (event) { 
  event.preventDefault();
if (event.ctrlKey && event.shiftKey) { 
  console.log('Ctrl+shift pressed')
}
});
pi.addEventListener('click', function (e) { 
  if (e.ctrlKey && e.shiftKey) { 
    console.log('ctrl+shift+click'); 
    return; } else {
      window.alert('"You know nothing, Jon Snow!"')
    }});