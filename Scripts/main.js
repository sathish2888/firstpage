var heading;
heading = document.querySelector('h3');
heading.textContent = "Starks are no less";  /*Comments used*/

heading.onclick = function() {
    alert('Dont click on the image');
}

var h4heading = document.querySelector('h4');
var images = document.querySelector('img');
var btn = document.querySelector('button');

images.onclick = function(){
var mysrc = images.getAttribute('src');
if( images.getAttribute('src') === 'Images/Lannister.png' ) {
    images.setAttribute( 'src', 'Images/Starks.png' );
    }
else {
    images.setAttribute( 'src', 'Images/Lannister.png');
    }
}

function namechange(){
    var popupname = prompt('Enter your name');
    localStorage.setItem('name',popupname);
    h4heading.textContent = 'This is ' + popupname;
}

if(!localStorage.getItem('name')){
    namechange();
}
    else
    {
        var storedname = localStorage.getItem('name');
        h4heading.textContent = 'This is ' + storedname;
}

btn.onclick = function() {
        namechange();
} 
    