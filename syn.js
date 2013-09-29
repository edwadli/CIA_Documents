var link = "http://words.bighugelabs.com/api/2/663fff93648e4bbfc4bc4a79c1371b44/";
var samplelist = ["abase","abash","abate","abattoir","abdicate","aberration","abet","abeyance","abhor","abject"]


$(document).ready(function() {
	convertDIC();
	//getWSL('nice');
});

var getWSL = function(QUERY, cb){
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
			//console.log("FInished " + QUERY);
			cb();
		});
	if (count !== 0 && count === WSL.length)
		WSL.sort();
		addtoWSL(WSL, QUERY);
		//console.log(WSL.toString());
		mergeSynList(WSL);
	});
};

var convertDIC = function(){
	var counter = 0;
	$.each(wordlist, function(i, item){
		getWSL(item, function() {
		  counter++;
		  if(counter === wordlist.length){
			  console.log(JSON.stringify(bigList));
		  }
		});
	});
}


var addtoWSL = function(list, word){
	word.toLowerCase();
	list.push(word);
}
