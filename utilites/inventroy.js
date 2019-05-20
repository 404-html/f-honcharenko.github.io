var inventory = Object.create(null);


function inv_add(_id,_count=1){
	if (_id in bd_items) {
		if (player.inventory.contain[_id] == null){
			player.inventory.contain[_id] = _count;
		} else{
			player.inventory.contain[_id] =player.inventory.contain[_id]+ _count;
		}
	} else {console.log('Предмет не существует');}
	return ;
}
function inv_del(_id,_){
	if (_id in bd_items) {
		if (player.inventory.contain[_id] == null){
			pconsole.log('item not exist');
		} else{
			delete player.inventory.contain[_id]
				console.log('Inventory Item deleted');
		}
	} else {console.log('Предмет не существует');}
	return ;
}

function write_items(){
		var _item = "<tr><th>Name:</th><th>Count:</th><th>describe:</th><th>func:</th></tr>";
		for (var i in player.inventory.contain) {
			_i=i*1;
			_item = _item+"<div id='_item'><tr><th>" + bd_items[i].name +"</th><th>"+player.inventory.contain[i]+"</th><th><i>"+bd_items[i].descp+"</i></th><th><input type='button' value='use it' onclick='use_food(_i)'></th></tr></div>";
			// _item = write_in_table('inv-table',bd_items[i].name,player.inventory.contain[i],i);
		}
		return _item;
}

// }


function upd_inv_null_check(){
	for (var i = 1; i <= keyslength(player.inventory.contain); i++) {
			if (player.inventory.contain[i]<1	) {
				delete player.inventory.contain[i]
				console.log('Inventory Item deleted');
			}
	}
}
