window.onload = function(){
  var fileInput = document.getElementById('fileInput');
  var fileDisplayArea = document.getElementById('fileDisplayArea');

  fileInput.addEventListener('change', function(e) {
    var file = fileInput.files[0];
    var imageType = /image.*/;

    if (file.type.match(imageType)) {
      var reader = new FileReader();

      reader.onload = function(e) {
        fileDisplayArea.innerHTML = "";

        var img = new Image();
        img.src = reader.result;

        fileDisplayArea.appendChild(img);
      }

      reader.readAsDataURL(file);
    } else {
      fileDisplayArea.innerHTML = "File not supported!"
    }
  });
}

function storeData(name, value){
  localStorage.setItem(name, value);
}

document.getElementById('firstname').onblur = function(){
  storeData(this.id, this.value);
};
document.getElementById('lastname').onblur = function(){
  storeData(this.id, this.value);
};
document.getElementById('email').onblur = function(){
  storeData(this.id, this.value);
};
document.getElementById('phone').onblur = function(){
  storeData(this.id, this.value);
};

if(localStorage) {
   document.getElementById('answers').addEventListener('onblur',
   function() {
     var firstname = document.getElementById('firstname').value;
     var lastname = document.getElementById('lastname').value;
     var email = document.getElementById('email').value;
     var phone = document.getElementById('phone').value;

     localStorage.setItem('firstname', firstname);
     localStorage.setItem('lastname', lastname);
     localStorage.setItem('email', email);
     localStorage.setItem('phone', phone);
   });
}

document.getElementById('answers').addEventListener('submit',
  function() {
  localStorage.clear();
});

