var link = "http://words.bighugelabs.com/api/2/b75996cf8d2a6f3e1933802bddc1dc3f/";

var WSL = new Array();


$(document).ready(function() {
	convertDIC();
	//getWSL('nice');
});

var getWSL = function(QUERY){
	var count = 0;
	$.getJSON(link + QUERY + "/json&callback=?", function( data ) {
		$.each(data, function(i, item1) {
			$.each(item1, function(j, item2){
				if(j === 'syn'){
					$.each(item2, function(k, item3){
						count++;
						addtoWSL(item3);
					});
				}
			});
		});
	if (count !== 0 && count === WSL.length)
		WSL.sort();
		console.log(WSL.toString());
	});
};

var convertDIC = function(){
	$.each(wordlist, function(i, item){
		console.log(item);
	});
}


var addtoWSL = function(word){
	word.toLowerCase();
	WSL.push(word);
}

//mergeSynlist(WSL);