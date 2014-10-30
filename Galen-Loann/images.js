//from treehouse tutorial

window.onload = function() {
  var fileInput = document.getElementById('fileInput');
  var fileDisplayArea = document.getElementById('fileDisplayArea');

  fileInput.addEventListener('change', function(e) {
    var file = fileInput.files[0];
    var imageType = /image.*/;
    if (file.type.match(imageType)) {
      var reader = new FileReader();
      reader.onload = function(e) {
        var img = new Image();
        img.src = reader.result;

        fileDisplayArea.appendChild(img);
        }
        reader.readAsDataURL(file);
        }
        else {
          fileDisplayArea.innerHTML = "File not supported!"
        }
  });
}

//name Gallery: retrieves onclick makeTitle

function makeTitle() {
  var x = document.getElementById("gallery-name").value;
  document.getElementById("gallery-title").innerHTML = x;

}

//adapted from David Winer scripting.com

function LocalStore(){
  var gn = document.getElementById("gallery-name").value;
  if (gn != localStorage.savedtext){
    localStorage.savedtext = gn;
  }
}
function startup(){
  if (localStorage.savedtext == undefined) {
    localStorage.savedtext = "";
    }
  document.getElementById("gallery-name").value = localStorage.savedtext;
  document.getElementById("gallery-title").innerHTML = localStorage.savedtext;
}


