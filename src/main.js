function is_numeric(str){
    return /^\d+$/.test(str);
}

function TextSearch(){
	// Setup
	var text = document.body.innerText.replace(/(\r\n|\n|\r)/gm, " ").split(' ');
	
	// Emote finding
	var position = 0;
	var emote = '';
	var emotes = [];
	for (i = 0; i < text.length; i++) {
		var word = text[i]
		for (j = 0; j < text[i].length; j++){
			// Checking for ':' positioning
			if (word[j] == ':' && position == 0){
				position = 1;
				continue;
			} else if (word[j] == ':' && position == 1) {
				position = 0;
			}
			// Grabbing text within ':'
			if (position == 1) {
				emote += word[j]
			} else if (position == 0) {
				if (emote != '') {
					emotes.push(emote);
					emote = '';
				}
			}
		}
		position = 0;
	}
	// Array Cleaning
	final = []
	for (i=0; i < emotes.length; i++) {
		if (is_numeric(emotes[i]) == false){
			final.push(emotes[i])
		}
	}
	console.log(final)

};

console.log("Is this working?");
TextSearch();
