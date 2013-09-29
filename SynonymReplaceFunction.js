//synonym replace function needs to run interatively
//for each synonym on bigList[][]


$(document).ready(function(){

	//
	bigList=masterList;
	//

	for(var i = 0;i<bigList.length;i++){
		console.log("x");
		var syno = bigList[i][0];
		var synPos = $("body").text().toLowerCase().indexOf(" " + syno + " ");
		if (synPos !== -1){
			var ED = 1 + Math.floor(Math.random() * bigList[i].length-1);
			$("body").text($("body").text().replace($('body').text().substr(synPos + 1,syno.length),bigList[i][ED]));
		// $("body").text(
		// 	$(this).text().replace(
		// 		$("body").text().substr(synPos,syno.length),
		// 							bigList[i][Math.floor(
		// 									Math.random()
		// 									*bigList[i].length)]
		// 								)
		// );
		}
	}

});
