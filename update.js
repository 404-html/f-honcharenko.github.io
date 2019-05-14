//Обновление с интервалом в 0,1 с.
var update_value = true;
var timerID = setInterval(function(){
		if (update_value=true) {
		update();
		update_sub_point()
		// point_write_html();
		savetoLS();
	}
}, 100)
