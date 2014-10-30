if (Modernizr.localstorage) {
  // window.localStorage is available!
} else {
  // no native support for HTML5 storage :(
  // maybe try dojox.storage or a third-party solution
}






// $('#name').blur(function(){
//   localStorage.setItem("name", $(this).val())
// });

// $('#email').blur(function(){
//   localStorage.setItem("email", $(this).val())
// });

// $('#class').blur(function(){
//   localStorage.setItem("class", $(this).val())
// });

// $('#number').blur(function(){
//   localStorage.setItem("number", $(this).val())
// });

// $('#chapter').blur(function(){
//   localStorage.setItem("chapter", $(this).val())
// });

// $('#heading').blur(function(){
//   localStorage.setItem("heading", $(this).val())
// });

// $('#issue').blur(function(){
//   localStorage.setItem("issue", $(this).val())
// });

// $('#goal').blur(function(){
//   localStorage.setItem("goal", $(this).val())
// });


window.onload = function() {
    var input1 = localStorage.getItem("name");
    var input2 = localStorage.getItem("email");
    var input3 = localStorage.getItem("class");
    var input4 = localStorage.getItem("number");
    var input5 = localStorage.getItem("chapter");
    var input6 = localStorage.getItem("heading");
    var input7 = localStorage.getItem("issues");
    var input8 = localStorage.getItem("goal");

    $("#name").val(input1);
    $("#email").val(input2);
    $("#class").val(input3);
    $("#number").val(input4);
    $("#chapter").val(input5);
    $("#heading").val(input6);
    $("#issues").val(input7);
    $("#goal").val(input8);

}



//IMAGE FILE READER


window.onload = function() {


    var input1 = localStorage.getItem("name");
    var input2 = localStorage.getItem("email");
    var input3 = localStorage.getItem("class");
    var input4 = localStorage.getItem("number");
    var input5 = localStorage.getItem("chapter");
    var input6 = localStorage.getItem("heading");
    var input7 = localStorage.getItem("issues");
    var input8 = localStorage.getItem("goal");

    $("#name").val(input1);
    $("#email").val(input2);
    $("#class").val(input3);
    $("#number").val(input4);
    $("#chapter").val(input5);
    $("#heading").val(input6);
    $("#issues").val(input7);
    $("#goal").val(input8);

    var fileInput = document.getElementById('fileInput');
    var fileDisplayArea = document.getElementById('fileDisplayArea');

    fileInput.addEventListener('change', function(e) {
      var file = fileInput.files[0];
      var imageType = /image.*/;

      if (file.type.match(imageType)) {
        var reader = new FileReader();

        reader.onload = function(e) {
          fileDisplayArea.innerHTML = "";

          // Create a new image.
          var img = new Image();
          // Set the img src property using the data URL.
          img.src = reader.result;

          // Add the image to the page.
          fileDisplayArea.appendChild(img);
        }

        reader.readAsDataURL(file);
      } else {
        fileDisplayArea.innerHTML = "File not supported!";
      }
    });
}



//Nick did it better below

// $(document).ready(function(){
//   $('#contact-form input').each(function(){
//     $(this).val(localStorage[$(this).attr('id')]);
//   }).blur(function(){
//     console.log($(this));
//     localStorage.setItem($(this).attr('id'), $(this).val());
//   });
// });

