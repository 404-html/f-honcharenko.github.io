﻿console.log("	С: Инициализация main-файла.");
var player = Object.create(null);
try {
	player = JSON.parse(localStorage['player']);
	console.log("	С: Сохарение успешно загружено");
	// notifc2("	С: Сохарение успешно загружено");
} catch(e){
	var player = {
		spec:{
			const:{
				id: 1,
				name_ru: "Телосложение",
				name_en: "Constitution",
				value: 0
			},
			int:{
				id: 2,
				name_ru: "Интелект",
				name_en: "intelect",
				value: 0
			},
		},
		inventory:{
				name_ru: "Инвентарь",
				name_en: "Inventory",
				capacity:  0
			},
    coordinates:{
        loc_x: 5,
    		loc_y: 5,
    		loc_z: 0
    }
};

	console.log("	С: Сохарение не найдено. Сгенерированны базовые значения координат.");
	notific2("	С: Сохарение не найдено. Сгенерированны базовые значения координат.");
}
console.log("	С: Ваши координаты: Х: "+player.coordinates.loc_x+" Y: "+player.coordinates.loc_y)
notific2("	С: Ваши координаты: Х: "+player.coordinates.loc_x+" Y: "+player.coordinates.loc_y)
// player.inventory.capacity = player.spec.constitut.value*2;
// alert('Текущие время'+tim.getHours()+':'+tim.getMinutes()+':'+tim.getSeconds());