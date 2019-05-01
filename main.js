console.log("	С: Инициализация main-файла.");
var player = Object.create(null);
try {
	player = JSON.parse(localStorage['player'])
	console.log("	С: Сохарение успешно загружено");
} catch(e){
	player.loc_x=	5;
	player.loc_y=	5;
	player.loc_z=	0;
	player.met_x= 5;
	player.met_y= 5;
	console.log("	С: Сохарение не найдено. Сгенерированны базовые значения координат.");
}
console.log("	С: Ваши стартовые координаты: Х: "+player.loc_x+" Y: "+player.loc_y)
