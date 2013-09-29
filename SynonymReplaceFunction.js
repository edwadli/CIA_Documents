//synonym replace function needs to run interatively
//for each synonym on bigList[][]


$(document).ready(function(){


	var syno = bigList[i][0];
	var synPos = $("body").text().toLowerCase().indexOf(syno);

	$("body").text(
		$(this).text().replace(
			$("body").text().substr(synPos,syno.length),
								bigList[i][Math.floor(
									Math.random()*bigList[i].length)]
									)
		);


});
