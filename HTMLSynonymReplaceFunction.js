//synonym replace function needs to run interatively
//for each synonym on bigList[][]


$(document).ready(function(){
	bigList = masterList;

	var i = Math.floor(Math.random()*10);
		for(;i<bigList.length;i+=10){
		console.log("x");
		var syno = bigList[i][0];
		var synPos = $("body").text().toLowerCase().indexOf(" " + syno + " ");
		console.log($("body").text().substr(synPos, syno.length + 2));
		if (synPos !== -1 ){
			var ED = 1 + Math.floor(Math.random() * (bigList[i].length-1));
			$("body").html($("body").html().replace($('body').text().substr(synPos,syno.length + 2),"<span data-tooltip class='has-tip' title=" + syno + "> " + bigList[i][ED] + " </span>"));
		}
	}
/*	//
	bigList=masterList;
	//
	var i = Math.floor(Math.random()*10);
	for(;i<bigList.length;i=i+10){
		console.log("x");
		var syno = bigList[i][0];
		var synPos = $("body").html().toLowerCase().indexOf("\s" + syno + "\s");
		//console.log($('body').html().substr(synPos + 1, syno.length).toString());
		console.log($('body').html().substr(synPos,1));
		if (synPos >= 0 && $('body').html().substr(synPos,1) === ""){
			var ED = 1 + Math.floor(Math.random() * (bigList[i].length-1));
			$("body").html($("body").html().replace($('body').html().substr(synPos + 1,syno.length),"<span data-tooltip class='has-tip' title=" + syno + "> " + bigList[i][ED] + " </span>"));
		}
	}*/

});
