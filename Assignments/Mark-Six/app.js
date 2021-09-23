var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.getElementById("txt-input");
var outputDiv = document.querySelector("#output");

var severURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";
// var severURL = "https://api.funtranslations.com/translate/minion.json";
var encodedURL = encodeURI(severURL);

function getTranslationURL(text) {
  return decodeURI(encodedURL) + "?" + "text=" + text;
}

function errorHandler(error) {
  console.log("error occured", error);
  alert("Something wrong in server");
}

function clickHandler() {
  var inputText =txtInput.value;

  fetch(getTranslationURL(inputText))
  .then(response => response.json())
  .then(json => {
    var translatedText = json.contents.translated;
    outputDiv.innerHTML = translatedText + ". I have also added Enter key event handler";
  })
  .catch(errorHandler)
};

// function enterHandler(event)
// txtInput.addEventListener("keyup", function(event){
//   if(event.keycode ===13||event.which === 13){
//     event.preventDefault();
//     clickHandler();
//   }
// });

btnTranslate.addEventListener("click", clickHandler);
