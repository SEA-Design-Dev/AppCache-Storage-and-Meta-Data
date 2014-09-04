function savetext () {
        var s = document.getElementById ("idTextarea").value;
        if (s != localStorage.savedtext) {
          localStorage.savedtext = s;
          }
        document.getElementById ("idCharCount").innerHTML = s.length;
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
          self.setInterval (function () {savetext ()}, 1000); //call every second
          }
        }
startup ();
