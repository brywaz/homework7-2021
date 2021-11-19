var video = document.querySelector("#player1");

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	console.log(video.currentTime)
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	console.log("Old video speed is " + video.playbackRate);
	video.playbackRate = video.playbackRate*.95;
	console.log("New video speed is " + video.playbackRate);

});

document.querySelector("#faster").addEventListener("click", function() {
	console.log("Old video speed is " + video.playbackRate);
	video.playbackRate = video.playbackRate*1.05;
	console.log("New video speed is " + video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
	
	if (video.currentTime + 15 < video.duration){
	video.currentTime =  video.currentTime + 15;
	console.log("Current video time location: " + video.currentTime);
	}
	else {
		video.load();
		console.log("Reached the end of the video. Restarting...")
		console.log("Current video time location: " + video.currentTime);
	}
	
});


document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted){
	video.muted = false;
	document.getElementById('mute').textContent = "Mute"
	console.log("Mute");
	}
	else {
		video.muted = true;
		document.getElementById('mute').textContent = "Unmute";
		console.log("Unmute");
	}
});



document.querySelector("#slider").addEventListener("click", function() {
	video.volume = this.value/100;
	console.log("Volume is " + video.volume*100 + "%")
	document.querySelector("#volume").textContent = video.volume*100 +"%"
});


document.querySelector("#vintage").addEventListener("click", function() {
	var old = document.querySelector("#vintage");
	old.classList.add('oldSchool');
	video.classList.add('oldSchool');
});

document.querySelector("#orig").addEventListener("click", function() {
	var old = document.querySelector("#vintage");
	old.classList.remove('oldSchool');
	video.classList.remove('oldSchool');
});