console.log("	С: Инициализация файла локаций.");

var locs = matrixArray(11,11);//Карта
var loc_limiter_s = 1;//Лимитер для карты
var loc_limiter_e = 10;//Лимитер для карты
//Генерация 2-Д массива locations
function matrixArray(rows,columns){
  var arr = new Array();
  for(var i=0; i<rows; i++){
    arr[i] = new Array();
    for(var j=0; j<columns; j++){
    	var index = 0;
      // arr[i][j] = "Неизведанный лес";
      // locations[[i]+":"+[j]] = {
      // 	id: index,
      // 	name:"null"
      // };
    	  locations[[i]+":"+[j]] = {};
    	  locations[[i]+":"+[j]]["id"]=keyslength(locations);
    	  locations[[i]+":"+[j]]["name"]="null location";
    	  locations[[i]+":"+[j]]["loc_x"]=i;
    	  locations[[i]+":"+[j]]["loc_y"]=j;
    	  locations[[i]+":"+[j]]["items"]={};

    	index++;

    }
  }
  return arr;
}
//Loactions
locations["4:4"].name = "Долина";
locations["4:5"].name = "Долина";
locations["4:6"].name = "Долина";
locations["5:4"].name = "Долина";
locations["5:5"].name = "Стартовая локация";

locations["5:6"].name = "Долина";
locations["6:4"].name = "Долина";
locations["6:5"].name = "Долина";
locations["6:6"].name = "Долина";

//add item to lcoation
function loc_itm_add(_id,_count=1,_x=player.coordinates.loc_x,_y=player.coordinates.loc_y){
	if (_id in bd_items) {
		if (locations[[_x]+":"+[_y]].items[_id] == null){
			locations[[_x]+":"+[_y]].items[_id] = _count;
		} else{
			locations[[_x]+":"+[_y]].items[_id] =locations[[_x]+":"+[_y]].items[_id]+ _count;
		}
	} else {console.log('Предмет не существует');}
	return ;
}
function use_food(_id) {
	// console.log(_id);
	// console.log(player.inventory.contain[_id]);

	if (player.inventory.contain[_id]==null) {} else
	{
		switch (bd_items[_id].effect.point){
		case 'HP':
		// console.log('hp');
		player.inventory.contain[_id]=player.inventory.contain[_id]-1;
		hp_edit(bd_items[_id].effect.count)
		notific2('Вы использовали '+bd_items[_id].name+', и восстановили '+bd_items[_id].effect.count+' ед. '+bd_items[_id].effect.point);
		break;
		case 'MP':
		// console.log('mp');
		player.inventory.contain[_id]=player.inventory.contain[_id]-1;
		mp_edit(bd_items[_id].effect.count)
		notific2('Вы использовали '+bd_items[_id].name+', и восстановили '+bd_items[_id].effect.count+' ед. '+bd_items[_id].effect.point);

		break;}
	}
}

