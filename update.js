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
		update2();
	}
}, 200)
function upd_control(){
	if (update_value==true) {update_value=false}else{update_value=true};
	return update_value;
}
// player.points.HP_now=player.points.HP_max;
// regen();


function regen(_chose='hp'){
	var _hp_regen = player.spec.const.value*0.1+1;
		if (player.points.HP_now+_hp_regen<player.points.HP_max) {
			player.points.HP_now+=Math.floor(_hp_regen);
		} else {player.points.HP_now=player.points.HP_max}
		var _mp_regen = player.spec.int.value*0.1+1;
		if (player.points.MP_now+_mp_regen<player.points.MP_max) {
			mp_edit(Math.floor(_mp_regen));
		}else {player.points.MP_now=player.points.MP_max}
	if (_chose=='hp') {return _hp_regen}
	if (_chose=='mp') {return _mp_regen}
}
var timerID3 = setInterval(function(){
	if (update_value=true) {
		regen();
	}
}, 1000)