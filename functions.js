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
var tim = new Date();

	document.getElementById('write-place-cord').innerHTML = '['+player.coordinates.loc_x+';'+player.coordinates.loc_y+']';//Location cord.
	document.getElementById('write-place-loc').innerHTML = locs[player.coordinates.loc_x][player.coordinates.loc_y];//Location name
	document.getElementById('write-place-time').innerHTML = tim.getHours()+':'+tim.getMinutes()+':'+tim.getSeconds();//time
};
//Сохранение
function savetoLS(){
	localStorage['player'] = JSON.stringify(player);
};


//chat
function notific2(msg){
	var tim = new Date();
	time=tim.getHours()+':'+tim.getMinutes();
	document.getElementById('notific').innerHTML =document.getElementById('notific').innerHTML+"<div class='msg_div_content'>"+"["+time+"] "+msg+"</div>";
	var msg2 =document.querySelectorAll('#notific .msg_div_content');
	if (msg2.length>30) {
		msg2[length].parentNode.removeChild(msg2[0]);
	}
	document.getElementById('notific').scrollTop= 1000;
};

function chat_clear(){
	var msg2 =document.querySelectorAll('#notific .msg_div_content')
	for (var i = msg2.length - 1; i >= 0; i--) {
		msg2[length].parentNode.removeChild(msg2[i]);
	}

}


//Safve-deleter
function save_del(msg){
	localStorage.clear();
	document.location.reload();
};

