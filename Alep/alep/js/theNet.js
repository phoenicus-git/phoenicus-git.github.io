const pi = document.querySelector(".the-net");

pi.addEventListener('click', function (e) { 
  if (e.ctrlKey && e.shiftKey) { 
    console.log('ctrl+shift+click');
    window.location = "/secret/the-net.html"; 
    return; } else {
      window.alert('"You know nothing, Jon Snow!"')
    }});