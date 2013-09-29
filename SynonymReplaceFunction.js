//synonym replace function needs to run interatively
//for each synonym on bigList[][]


$(document).ready(function(){


	var syno = bigList[i][0];
	var synPos = $("body").text().toLowerCase().indexOf(syno);

	$("body").text(
		$(this).text().replace(
			$(this).text().substr(synPos,syno.length+synPos),
									bigList[i][random(#SATwords)]
									)
		);


});
