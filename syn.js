var link = "http://words.bighugelabs.com/api/2/b75996cf8d2a6f3e1933802bddc1dc3f/";
var samplelist = ["abase","abash","abate","abattoir","abdicate","aberration","abet","abeyance","abhor","abject"]


$(document).ready(function() {
	convertDIC();
	//getWSL('nice');
});

var getWSL = function(QUERY){
	var WSL = new Array();
	var count = 0;
	$.getJSON(link + QUERY + "/json&callback=?", function( data ) {
		$.each(data, function(i, item1) {
			$.each(item1, function(j, item2){
				if(j === 'syn'){
					$.each(item2, function(k, item3){
						if(typeof item3 !== 'undefined'){
							count++;
							addtoWSL(WSL, item3);
						}
					});
				}
			});
		});
	if (count !== 0 && count === WSL.length)
		WSL.sort();
		addtoWSL(WSL, QUERY);
		console.log(WSL.toString());
		mergeSynList(WSL);
	});
};

var convertDIC = function(){
	$.each(samplelist, function(i, item){
		getWSL(item);
	});
}


var addtoWSL = function(list, word){
	word.toLowerCase();
	list.push(word);
}
