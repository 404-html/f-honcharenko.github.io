console.log("	С: Инициализация файла функций.");



//Интерфейс
function update(){
	var tim = new Date();
		document.getElementById('points-keys-writer').innerHTML = point_write_html();
	document.getElementById('write-place-cord').innerHTML = '['+player.coordinates.loc_x+';'+player.coordinates.loc_y+']';//Location cord.
	document.getElementById('write-place-loc').innerHTML =locations[[player.coordinates.loc_x]+":"+[player.coordinates.loc_y]].name;//Location name
	document.getElementById('write-place-time').innerHTML = tim.getHours()+':'+tim.getMinutes()+':'+tim.getSeconds();//time
	document.getElementById('inv-writer').innerHTML = 'Invetory ('+player.inventory.capacity+' доступно)';//time

};
//har-ki in html
function point_write_html(){
	var arr = point_writer();
	var arr2 = new Array();
	// console.log(arr);
	document.getElementById('points-keys-writer-dis').innerHTM = "1";
	for (var i = 1; i <= arr.length-1; i++) {
		// console.log(i);
		arr2[i] = document.getElementById('points-keys-writer-dis').innerHTML + arr[i]+"<br/>";
		// console.log(arr2);
	}
	return arr2;
}

//хар-ки in array
function point_writer(){
	var points = new Array();
	for (var key in player.spec) {
		points[player.spec[key].id] = ((player.spec[key].name_ru+": "+player.spec[key].value));
	}
	return points
}
//keys-numbers
function keyslength(obj){
		return (Object.keys(obj).length);
};
//keys-write-in-array
function keyswrite(obj){
	var arr = new Array();
	for (var i = 0; i <= keyslength(obj); i++) {
		arr[i] = (Object.keys(obj)[i]+" : "+Object.values(obj)[i])+"";
	}
	return arr;
};
//point_number
function point_num(id){
	return (player.spec[id].value);
};
//point_levelup
function point_up(id, number){
	player.spec[id].value = player.spec[id].value+number; 
	return player.spec[id].name_ru+": "+player.spec[id].value;
}
//Сохранение
function savetoLS(){
	localStorage['player'] = JSON.stringify(player);
};
//
function update_sub_point(){
	player.inventory.capacity = player.spec.const.value*2.5;
	player.coordinates.loc_id=locations[[player.coordinates.loc_x]+":"+[player.coordinates.loc_y]]["id"]
}

//chat
function notific2(msg){
	var tim = new Date();
	time=tim.getHours()+':'+tim.getMinutes();
	document.getElementById('notific').innerHTML =document.getElementById('notific').innerHTML+"<div class='msg_div_content'>"+"["+time+"] "+msg+"</div>";
	var msg2 =document.querySelectorAll('#notific .msg_div_content');//удаление свыше 30 сообщений
	if (msg2.length>30) {
		msg2[length].parentNode.removeChild(msg2[0]);
	}
	document.getElementById('notific').scrollTop= 1000;
};
//chat_clear
function chat_clear(){
	var msg2 =document.querySelectorAll('#notific .msg_div_content')
	for (var i = msg2.length - 1; i >= 0; i--) {
		msg2[length].parentNode.removeChild(msg2[i]);
	}
};
//Save-deleter
function save_del(msg){
	update_value = false;
	localStorage.clear();
	document.location.reload();
	update_value = true;
}