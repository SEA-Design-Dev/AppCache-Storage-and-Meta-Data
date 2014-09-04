var fileInput = document.getElementById("fileInput");
var secretMessage = document.getElementById("secretMessage");

fileInput.addEventListener('change', function(e) {
  var userImage = fileInput.files[0];

  var reader = new FileReader();

  reader.onload = function(e) {

    var dataURI = reader.result;
    var styleUpdate = "background: url(" + dataURI + "); -webkit-background-clip: text; -webkit-text-fill-color: transparent; text-shadow: 1px 2px 5px rgba(0,0,0,0.2);";

    secretMessage.setAttribute("style", styleUpdate);
  };

  reader.readAsDataURL(userImage);

});
