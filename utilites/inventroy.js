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
		for (var i = 1; i <= keyslength(player.inventory.contain); i++) {
			_item = _item+"<div id='_item'  title='bd_items[i].descp'>" + bd_items[i].name +'('+player.inventory.contain[i]+')'+"</div>";
		}
		return _item;
}


function upd_inv_null_check(){
	for (var i = 1; i <= keyslength(player.inventory.contain); i++) {
			if (player.inventory.contain[i]==0	) {
				console.log(i);
				delete player.inventory.contain[i]
				console.log(player.inventory.contain[i]);

			}
	}
}