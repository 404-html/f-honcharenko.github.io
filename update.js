//Обновление с интервалом в 0,1 с.
var timerID = setInterval(function(){
	update();
	savetoLS();
}, 100)
