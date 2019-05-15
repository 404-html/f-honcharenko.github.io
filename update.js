//Обновление с интервалом в 0,1 с.
var update_value = true;
var timerID = setInterval(function(){
		if (update_value=true) {
		update();
		upd_inv_loc_null_check();
		update_sub_point();
		upd_inv_null_check();
		savetoLS();
		// point_write_html();
		// upd_inc()

	}
}, 100)
//Update for buttons
var timerID2 = setInterval(function(){
			update2()}, 200)
