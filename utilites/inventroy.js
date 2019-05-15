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

function write_items(){
		var _item = "";
		// var _btn = '<input type="button" value="?" onclick="alert('bd_items[i].name')">';
		// console.log(_btn);
		for (var i = 1; i <= keyslength(player.inventory.contain); i++) {
			_item = _item+"<div id='_item'>" + bd_items[i].name +'('+player.inventory.contain[i]+')'+"</div>";
		}
		return _item;
}


function upd_inv_null_check(){
	for (var i = 1; i <= keyslength(player.inventory.contain); i++) {
			if (player.inventory.contain[i]<1	) {
				delete player.inventory.contain[i]
				console.log('Inventory Item deleted');
			}
	}
}