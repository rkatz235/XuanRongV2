/*function to update bottom footer with current playing song*/
/*called as each button on backside of album cards clicked*/
function songName(fileName, albumName) {
	var nameField = document.getElementById("songName");
	nameField.innerHTML = document.getElementById(fileName).innerHTML + " <i>from</i> " + albumName;
	
	
	/*id for each .wav source corresponds to variable name*/
	var audio = document.getElementById("player");
	audio.src = "audio/"+fileName;
	audio.pause();
	audio.currentTime = 0;
	audio.play();
	
	if(audio.ended){
		alert('um');
	}
	
};

function nextSong (){
	alert("um");
};