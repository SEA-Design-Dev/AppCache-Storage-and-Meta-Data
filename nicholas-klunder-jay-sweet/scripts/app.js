var fileInput = document.getElementById("fileInput");
var secretMessage = document.getElementById("secretMessage");

// listens for 'fileInput button click'
fileInput.addEventListener('change', function(e) {
  // stores uploaded image in 'userImage' variable
  var userImage = fileInput.files[0];

  var reader = new FileReader();

  // when file is finished loading, file is passed into the function
  reader.onload = function(e) {
    // file is stored in 'dataURI' variable
    var dataURI = reader.result;
    // 'dataURI' variable is used to set the background url for the CSS text-clipping effect
    var styleUpdate = "background: url(" + dataURI + "); -webkit-background-clip: text; -webkit-text-fill-color: transparent; text-shadow: 1px 2px 5px rgba(0,0,0,0.2);";
    // applies the CSS rules to the paragraph using id="secretMessage"
    secretMessage.setAttribute("style", styleUpdate);
  };
  // necessary for File API to properly display the image file
  reader.readAsDataURL(userImage);

});
