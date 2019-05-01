console.log("	С: Инициализация файла функций.");


//Генерация 2-Д массива
function matrixArray(rows,columns){
  var arr = new Array();
  for(var i=0; i<rows; i++){
    arr[i] = new Array();
    for(var j=0; j<columns; j++){
      arr[i][j] = "Неизведанный лес";
    }
  }
  return arr;
}
//Интерфейс
function update(){
	document.getElementById('write-place-cord').innerHTML = '['+player.loc_x+';'+player.loc_y+']';//Location cord.
	document.getElementById('write-place-loc').innerHTML = locs[player.loc_x][player.loc_y];//Location name
};
//Сохранение
function savetoLS(){
	localStorage['player'] = JSON.stringify(player);
};
//Обновлнние logging
function update_l(){
	document.getElementById('logging').innerHTML = JSON.stringify(player);
};
//Обновлнние logging
function notific(msg){
	document.getElementById('write-place-not').innerHTML = msg;
};
//Safve-deleter
function save_del(msg){
	localStorage.clear();
	document.location.reload();
};
//Обновление с интервалом в 1 с.
var timerID = setInterval(function(){
	update();
	savetoLS();
})