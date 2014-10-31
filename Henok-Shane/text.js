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
  })
  fname.value = localStorage.getItem(fname.id);
  lname.value = localStorage.getItem(lname.id);
  email.value = localStorage.getItem(email.id);
  phone.value = localStorage.getItem(phone.id);
};

var fname = document.getElementById("firstname");
var lname = document.getElementById("lastname");
var email = document.getElementById("email");
var phone = document.getElementById("phone");

fname.onblur = function(){
  storeData(this.id, this.value);
};
lname.onblur = function(){
  storeData(this.id, this.value);
};
email.onblur = function(){
  storeData(this.id, this.value);
};
phone.onblur = function(){
  storeData(this.id, this.value);
};

function storeData(name, value){
  localStorage.setItem(name, value);
}

document.getElementById('submit').addEventListener("click",
  function() {
  localStorage.clear();
});

