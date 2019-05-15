console.log("	С: Инициализация файла функций.");



//Интерфейс
function update(){
	var tim = new Date();
		// document.getElementById('points-keys-writer').innerHTML = point_write_html();
	document.getElementById('write-place-cord').innerHTML = '['+player.coordinates.loc_x+';'+player.coordinates.loc_y+']';//Location cord.
	document.getElementById('write-place-loc').innerHTML =locations[[player.coordinates.loc_x]+":"+[player.coordinates.loc_y]].name;//Location name
	document.getElementById('write-place-time').innerHTML = tim.getHours()+':'+tim.getMinutes()+':'+tim.getSeconds();//time
	document.getElementById('inv-writer').innerHTML = 'Inventory ('+keyslength(player.inventory.contain)+' тип(ов),'+all_item_count()+' предмет(ов))';//inventory_btn
	document.getElementById('inv-block').innerHTML = write_items();//inventory_content
	document.getElementById('char-block').innerHTML = write_charac();//charac_content
	// document.getElementById('loc-items-block').innerHTML = write_loc_items();//location-invetnory content

};
function update2(){
	document.getElementById('loc-items-block').innerHTML = write_loc_items();//location-invetnory content

};
//write-charac
function write_charac(){
		var _item = "";
		for (var key in player.spec) {
			// console.log(key);
			_item = _item+"<div id='_item'  title='bd_items[i].descp'>" + player.spec[key].name_ru +'('+player.spec[key].value+')'+"</div>";
		}
		return _item;
}
//write items in location
function write_loc_items(){
		var _item = "";
		// var _btn_get = "<input type='button' onclick='get_loc_item(1)' value='get it'";
		var _btn_get = "<u onclick='get_loc_item(1)'>get it</u>";
		// console.log(_btn_get);
		for (var i in locations[[player.coordinates.loc_x]+":"+[player.coordinates.loc_y]].items) {	
			_item = _item+"<div class='_item'>" + bd_items[i].name +'('+locations[[player.coordinates.loc_x]+":"+[player.coordinates.loc_y]].items[i]+') '+_btn_get+"</div>";}

		return _item;
}
function upd_inv_loc_null_check(){
	for (var i in locations[[player.coordinates.loc_x]+":"+[player.coordinates.loc_y]].items) {
			if (locations[[player.coordinates.loc_x]+":"+[player.coordinates.loc_y]].items[i]<1	) {
				delete locations[[player.coordinates.loc_x]+":"+[player.coordinates.loc_y]].items[i];
				console.log('Location Item deleted');
			}
	}
}
//get-loc-item-o-inv-player
function get_loc_item(_id,_count=1){
	if (_count<1) {_count=0}//взять отрицательно кол-во предметов
	if (locations[[player.coordinates.loc_x]+":"+[player.coordinates.loc_y]].items[_id]>=_count) {
		try{
				locations[[player.coordinates.loc_x]+":"+[player.coordinates.loc_y]].items[_id]=locations[[player.coordinates.loc_x]+":"+[player.coordinates.loc_y]].items[_id]-_count;
				inv_add(_id,_count);
		} catch(err){

		}
	}else{console.log('Недостаточное кол-во предметов');}
};
//untined-free
function free_unt(_item){
	if (_item == undefined){
		return ''
	} else{
		return _item
	}
}
//allitemscounter
function all_item_count(){
	var _summ = 0;
	for (var i = 1; i <= keyslength(player.inventory.contain); i++) {
			_summ = _summ+player.inventory.contain[i];
	};
	return _summ
}
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
//hide
function hide(_id){
	try{
	var _item = document.getElementById(_id);	
	_item.style.display = "none";
	return "Done";
	} catch (err){
		return "Error";
	};
}
//toggle
function toggle(_id){
var _item = document.getElementById(_id);
// console.log(_id+_item);
if (_item.style.display == "block"){
		hide(_id);
} else {
		show(_id);
}
}

//show
function show(_id){
	try{
	var _item =document.getElementById(_id);	
	_item.style.display = "block";
	return "Done";
	} catch (err){
		return "Error";
	};
}
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
	player.coordinates.loc_id=locations[[player.coordinates.loc_x]+":"+[player.coordinates.loc_y]]["id"];
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