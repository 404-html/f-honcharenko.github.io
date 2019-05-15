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
      arr[i][j] = "Неизведанный лес";
      // locations[[i]+":"+[j]] = {
      // 	id: index,
      // 	name:"null"
      // };
    	  locations[[i]+":"+[j]] = {};
    	  locations[[i]+":"+[j]]["id"]=keyslength(locations);
    	  locations[[i]+":"+[j]]["name"]="null location";
    	  locations[[i]+":"+[j]]["loc_x"]=i;
    	  locations[[i]+":"+[j]]["loc_y"]=j;

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
