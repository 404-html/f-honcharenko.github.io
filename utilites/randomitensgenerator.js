function randomInteger(min, max) {
    var rand = min - 0.5 + Math.random() * (max - min + 1)
    rand = Math.round(rand);
    return rand;
  }
var items_gen = setInterval(function(){
	var _x = randomInteger(4,6);
	var _y = randomInteger(4,6);
	var _id = 1;
	var _count = 1;
	loc_itm_add(_id,_count,_x,_y);
	console.log('	C:Предмет ['+bd_items[_id].name+'] сгенерирован в локации с координатами ('+_x+':'+_y+') в количестве '+_count+'шт.');
	notific2('	C: Предмет ['+bd_items[_id].name+'] сгенерирован в локации с координатами ('+_x+':'+_y+') в количестве '+_count+'шт.');
	console.log();
}, 15000)
var items_gen = setInterval(function(){
	var _x = randomInteger(4,6);
	var _y = randomInteger(4,6);
	var _id = 2;
	var _count = 1;
	loc_itm_add(_id,_count,_x,_y);
	console.log('	C:Предмет ['+bd_items[_id].name+'] сгенерирован в локации с координатами ('+_x+':'+_y+') в количестве '+_count+'шт.');
	notific2('	C: Предмет ['+bd_items[_id].name+'] сгенерирован в локации с координатами ('+_x+':'+_y+') в количестве '+_count+'шт.');
	console.log();
}, 30000)