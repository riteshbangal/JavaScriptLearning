document.getElementById('issueInputForm').addEventListener('submit', youTappedMe);

function fetchDetails() {
  var mydetails = document.getElementById('mydetails');
  var utappedme = document.getElementById('utappedme');

  mydetails.innerHTML = '<div class="well">' +
                        '<h6>' + 'This is Ritesh! As of now I am a Java Developer and larning JavaScript to become a full stack Developer.' + '</h6>'+
                        '</div>';

  utappedme.innerHTML = '<h6>' + 'You are yet to tap me.' + '</h6>';
}

function youTappedMe(e) {
  var descInput = document.getElementById('descInput').value;
  var utappedme = document.getElementById('utappedme');
  
  if (descInput == undefined || descInput == "") {
    utappedme.innerHTML += '<h6>' + 'You tapped me; with empty text.' + '</h6>';
  } else {
    utappedme.innerHTML += '<h6>' + 'You tapped me. Text: ' + descInput + '</h6>';
  }
  
  document.getElementById('issueInputForm').reset();
  e.preventDefault();                        
}
