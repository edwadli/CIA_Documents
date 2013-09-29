//synonym replace function needs to run interatively
//for each synonym on bigList[][]


$(document).ready(function(){

	//
	bigList=masterList;
	//

	for(var i = 0;i<bigList.length;i++){
		var syno = bigList[i][0];
		var synPos = $("body").html().toLowerCase().indexOf(" " + syno + " ");
		if (synPos !== -1){
<<<<<<< HEAD
			var ED = Math.floor(1 + Math.random() * bigList[i].length-1);
			console.log(bigList[i].length + syno + ": " + bigList[i][ED]);
			if(bigList[i][ED]!==syno){
				$("body").html($("body").html().replace($('body').html().substr(synPos + 1,syno.length),bigList[i][ED]));
			}
=======
			var ED = 1 + Math.floor(Math.random() * (bigList[i].length-1));
			$("body").html($("body").html().replace($('body').html().substr(synPos + 1,syno.length),"<span data-tooltip class='has-tip' title=" + syno + ">" + bigList[i][ED] + "</span>"));
>>>>>>> 9f8d9ed1396f44790bf1b3462415080ae9c5e893
		}
	}

});
