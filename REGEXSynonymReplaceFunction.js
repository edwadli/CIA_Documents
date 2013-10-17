//synonym replace function needs to run interatively
//for each synonym on bigList[][]


//can be more efficient if we replace item with highest index first,
//then we dont have to keep refreshing page

var bigList = vocabList;
$(document).ready(function(){
	
	var page = $("body").html();

	//var i = 0;
	var i = Math.floor(Math.random()*10);
	for(;i<bigList.length;i+=10){

		var syno = bigList[i][0];
		var synPos = page.toLowerCase().indexOf(" " + syno + " ");
		//skips words that are already replaced
		if (page.substr(synPos+syno.length+2,7)=="</span>"){continue;}

		if (synPos !== -1 ){
			var ED = 1 + Math.floor(Math.random() * (bigList[i].length-1));
			
			var regex = new RegExp(syno, "i");
			page = 
				page.replace(
					//page.substr(synPos,syno.length + 2),
					regex,
					"<span data-tooltip class='has-tip' data-width='300' title=" + syno + "> " + bigList[i][ED] + " </span>"
				);
			
			console.log(syno,bigList[i][ED]);
		
		}
	}

	$("body").html(page);


});

/* How to deal with first letter capitalization:
var syno = syno[0].toUpperCase() + syno.substring(1);
*/