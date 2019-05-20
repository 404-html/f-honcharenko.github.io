console.log("	С: Инициализация файла функций.");



//Интерфейс
function update(){
	var tim = new Date();
		// document.getElementById('points-keys-writer').innerHTML = point_write_html();
	document.getElementById('write-place-cord').innerHTML = '['+player.coordinates.loc_x+';'+player.coordinates.loc_y+']';//Location cord.
	document.getElementById('write-place-loc').innerHTML =locations[[player.coordinates.loc_x]+":"+[player.coordinates.loc_y]].name;//Location name
	document.getElementById('write-place-time').innerHTML = tim.getHours()+':'+tim.getMinutes()+':'+tim.getSeconds();//time
	// document.getElementById('inv-writer').innerHTML = 'Inventory ['+keyslength(player.inventory.contain)+' тип(ов),'+all_item_count()+' предмет(ов)]';//inventory_btn
	document.getElementById('char-block').innerHTML = write_charac();//charac_content
	document.getElementById('hp_regen_content').innerHTML = regen_('hp');
	document.getElementById('mp_regen_content').innerHTML = regen_('mp');
	// document.getElementById('loc-items-block').innerHTML = write_loc_items();//location-invetnory content

};
function update2(){
	document.getElementById('loc-inv-table').innerHTML = write_loc_items();//location-invetnory content
	document.getElementById('inv-table').innerHTML = write_items();//inventory_content
	// write_items();

};
//write-charac
function write_charac(){
		var _item = "";
		for (var key in player.spec) {
			// console.log(key);
			_item = _item+"<div id='_item'>" + player.spec[key].name_ru +'('+player.spec[key].value+')'+"</div>";
		}
		return _item;
}
//get all items;
function get_loc_items_all(_id){
	var _temp = locations[[player.coordinates.loc_x]+":"+[player.coordinates.loc_y]].items[_id];
	get_loc_item(_id,_temp);
	return _temp;
};
//write items in location
function write_loc_items(){
		var _item = "<tr><th>Name:</th><th>Count:</th></tr>";
		for (var i in locations[[player.coordinates.loc_x]+":"+[player.coordinates.loc_y]].items) {	
				var _index = locations[[player.coordinates.loc_x]+":"+[player.coordinates.loc_y]].items[i];
			_key=i*1
			if (locations[[player.coordinates.loc_x]+":"+[player.coordinates.loc_y]].items[_key]==null) {}else{
				var a = locations[[player.coordinates.loc_x]+':'+[player.coordinates.loc_y]].items[_key];
								_item = _item +
				"<div class='_item'><tr><th>" + 
					bd_items[i].name +
					'</th><th>'+_index+'</th><th>'+i+
					'<input type="button" id="butterfly_btn" value="get" onclick="get_loc_item(_key)"></th><th><input type="button" value="get all" onclick="get_loc_items_all(_key)"></th></tr>'+
				"</div>";
				// console.log(_childrens);
				// _btn.onclick = function(){get_loc_item(i)};
		}
		}
		// console.log(_item);
		return _item;
}


function test01(_parent='parent',_child=this){
	var _parent1 = document.getElementById(_parent).children;
	var __child1 = document.getElementById(_child).children;
	console.log(_parent1+' - '+_child1.length);
	var _index;
	for (var i in _parent1) {
		if (_parent1[i]==_child1) {_index=i} else{_index=null}
	}

	console.log(_index);
	return _index;
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
	for (var i in player.inventory.contain) {
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
// console.log(_item);
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
//sub_update
function update_sub_point(){
	player.inventory.capacity = player.spec.const.value*2.5;
	player.points.HP_max=player.spec.const.value*10;
	player.points.MP_max=player.spec.int.value*10;
	player.coordinates.loc_id=locations[[player.coordinates.loc_x]+":"+[player.coordinates.loc_y]]["id"];
}//
// function mp(){
// 	return player.points.HP_now;
// }
// function mp_max(){
// 	return player.points.HP_max;
// }
// function hp(){
// 	return player.points.MP_max;
// }
// function hp_max(){
// 	return player.points.HP_now;
// }
function mp_edit(_count){
	var mp = player.points.MP_now;
	var mp_max = player.points.MP_max;;
	// console.log(mp);
	// console.log(_count);
	if (mp+(_count*1)>mp_max) {player.points.MP_now=mp_max}
	if (mp+(_count*1)<0) {notific2('Недостаточно манны.');}
	if ((mp+(_count*1)>0)&&(mp+(_count*1)<mp_max+1)) {player.points.MP_now+=_count*1;}
	// player.points.MP_now=player.points.MP_now*1+1*_count;
	return player.points.MP_now;
}

function hp_edit(_count){
	console.log('НЕМЕДЛЕННО ПЕРЕДЛАЙ ЄТУ ФУНКЦИЮ');
	var hp = player.points.HP_now;
	var hp_max = player.points.HP_max;;
	// console.log(mp);
	// console.log(_count);
	if (hp+(_count*1)>hp_max) {player.points.MP_now=mp_max}
	if (hp+(_count*1)<0) {notific2('Недостаточно здоровья.');}
	if ((hp+(_count*1)>0)&&(hp+(_count*1)<hp_max+1)) {player.points.HP_now+=_count*1;}
	// player.points.MP_now=player.points.MP_now*1+1*_count;
	return player.points.HP_now;
}
//update points
function upd_ponts(){
	var _hp = document.getElementById('hp_content');
	var _mp = document.getElementById('mp_content');
	var _hp_n = document.getElementById('hp_content_n');
	var _mp_n = document.getElementById('mp_content_n');
	_hp_n.innerHTML=player.points.HP_now+"/"+player.points.HP_max; 
	_mp_n.innerHTML=player.points.MP_now+"/"+player.points.MP_max; 
	var _widrh = (player.points.HP_now*100)/player.points.HP_max;
	var _widrh2 = (player.points.MP_now*100)/player.points.MP_max;
	// console.log( _widrh);
	_hp.style.width = _widrh+'%';
	_mp.style.width = _widrh2+'%';
}
function regen_(_chose='hp'){
	var _hp_regen = Math.floor(player.spec.const.value*0.1+1);
	var _mp_regen = Math.floor(player.spec.int.value*0.1+1);
	if (_chose=='hp') {return _hp_regen}
		if (_chose=='mp') {return _mp_regen}
}
//chat
function notific2(msg){
	var tim = new Date();
	time=tim.getHours()+':'+tim.getMinutes()+':'+tim.getSeconds();
	document.getElementById('notific').innerHTML =document.getElementById('notific').innerHTML+"<div class='msg_div_content'>"+"<small>["+time+"]</small> "+msg+"</div>";
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
//table-write-generator
function write_in_table(_id,_name='name',_count='count',_go=''){
	var _table = document.getElementById(_id);	
	var _row ="<th>"+_name+'</th><th>'+_count+'</th><th>'+_go+"</th>";
	// _table.appendChild(content);
	_table.innerHTML += _row; 
	return _row;
}
//Подсказка, не доделана.
function tooltipfunc(_id='write-place-not'){
	var _target =document.getElementById(_id);
	var _cords = _target.getBoundingClientRect();
	var _left = _cords.left;//left
	var _top = _cords.top;//top
	var _tooltip = document.createElement('div');
	_tooltip.innerHTML = _tooltip;
	_tooltip.className = 'tooltip';
	_tooltip.style.top = _top+'px';
	_tooltip.style.left = _left+'px';
	document.body.appendChild(_tooltip);//Добавить елемент нас страницу
	return _left+' '+_top;
}
