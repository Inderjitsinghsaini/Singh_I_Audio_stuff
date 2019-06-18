(() => {

	console.log('my js issa workin');

	let audioEl = document.querySelector('audio'),
		pauseButton = document.querySelector('#pause');
		playButton = document.querySelector('#play');
		loadButton = document.querySelector('#loadMore');


	function pauseAudio(){
		audioEl.pause();
	}
	

	function playAudio(){
		audioEl.play();
	
	}

	function logEnded(){
		console;log('Ok done')
	//run more functionality
	}

	function loadAudioTrack(){
	audioEl.src = "audio/STP_Interstate_Love_Song.mp3";


	audioEl.load();
	audioEl.play();
	}

	audioEl.addEventListener("ended", logEnded)
	pauseButton.addEventListener("click", pauseAudio)
	playButton.addEventListener("click", playAudio)
	loadButton.addEventListener("click", loadAudioTrack)

})();