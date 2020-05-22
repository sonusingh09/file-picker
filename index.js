var fileform = document.getElementById('fileform');
fileform.onsubmit = function(eventObj){
 eventObj.preventDefault();
 var fileElem = eventObj.target.fileselector.files[0].name;
 var imageUrl = fileElem;
var coverImage = document.getElementById('cover');
//coverImage = imageUrl;
coverImage.src = imageUrl
console.log(coverImage);
}

