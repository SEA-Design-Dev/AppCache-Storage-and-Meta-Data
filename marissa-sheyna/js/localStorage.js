/* code adapted from Dave Winer's at:
http://scripting.com/misc/localStorageDemo.html

Additional information:
http://threads2.scripting.com/2013/march/html5LocalstorageDemo
*/

function savetext () {
  var s = document.getElementById ("idTextarea").value;
  if (s != localStorage.savedtext) {
    localStorage.savedtext = s;
    }
  }
function startup () {
  if (typeof (Storage) == undefined) {
    document.getElementById ("idCaveat").innerHTML = ", which unfortunately is not available in this browser";
    }
  else {
    if (localStorage.savedtext == undefined) {
      localStorage.savedtext = "";
      }
    document.getElementById ("idTextarea").value = localStorage.savedtext;
    self.setInterval (function() {savetext()}, 1000); //call every second
    }
  }

startup();
