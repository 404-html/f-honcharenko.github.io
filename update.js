//Обновление с интервалом в 0,1 с.
var update_value = true;
var timerID = setInterval(function(){
		if (update_value=true) {
		update();
		upd_inv_loc_null_check();
		update_sub_point();
		upd_inv_null_check();
		savetoLS();
		upd_ponts();
		// regen()
		// point_write_html();
		// upd_inc()

	}
}, 100)
//Update for buttons
var timerID2 = setInterval(function(){
	if (update_value=true) {
		update2()
	}
}, 200)
function upd_control(){
	if (update_value==true) {update_value=false}else{update_value=true};
	return update_value;
}
// player.points.HP_now=player.points.HP_max;
regen();
