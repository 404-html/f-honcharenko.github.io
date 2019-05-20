console.log("	С: Инициализация файла объекта.");

//Телепорт
//Функция под вопросм, ибо не безопасна
player.tp = function(loc_x,loc_y){
		console.log("	С: Попытка телепортации по координатам: ["+loc_x+";"+loc_y+"]");
		try{
			if (loc_x>loc_limiter_e) {throw Error();}
			if (loc_y>loc_limiter_e) {throw Error();}
			if (loc_x<loc_limiter_s) {throw Error();}
			if (loc_y<loc_limiter_s) {throw Error();}
			this.coordinates.loc_x = loc_x;
			this.coordinates.loc_y = loc_y;		
			notific2("Вы телепортированы на клетку ["+this.coordinates.loc_x+";"+this.coordinates.loc_y+"]");
			console.log("	C: Успех.");
		} catch(e){
			console.log("	C: Ошибка. Пивышен лимитер.");
		}
	}
//
player.move = function(_direction){
	console.log(player.points.MP_now);
	if (player.points.MP_now>3) {
		switch (_direction){
			case 'up':
	try{
		if (player.coordinates.loc_x+1>loc_limiter_e) {throw Error}
		this.coordinates.loc_x = this.coordinates.loc_x + 1;		
		mp_edit(-3);
		notific2("Вы поднялись на 1 клетку.");
		console.log("Вы поднялись на 1 клетку.");
	}
	 catch(e){
	 	notific2("Ошибка. Привышен лимитер.");
		console.log("	C:Ошибка. Привышен лимитер.")
	}			
			break;
			case 'down':
				try{
		if (this.coordinates.loc_x<loc_limiter_s) {throw Error}
		mp_edit(-3);
		this.coordinates.loc_x = this.coordinates.loc_x - 1;		
		notific2("Вы спустились на 1 клетку.");
		console.log("Вы спустились на 1 кетку.");
	}
	 catch(e){
	 	notific2("Ошибка. Привышен лимитер.");
		console.log("	C:Ошибка. Привышен лимитер.")
	}
			break;
			case 'right':
	try{
		if (this.coordinates.loc_y+1>loc_limiter_e) {throw Error}
		mp_edit(-3);
		this.coordinates.loc_y = this.coordinates.loc_y + 1;		
		notific2("Вы перешли на 1 вправо.");
		console.log("Вы перешли на 1 вправо.");
	}
	 catch(e){
	 	notific2("Ошибка. Привышен лимитер.");
		console.log("	C:Ошибка. Привышен лимитер.")
	}
			break;
			case 'left':
				try{
		if (this.coordinates.loc_y<loc_limiter_s) {throw Error}
		mp_edit(-3);
		this.coordinates.loc_y = this.coordinates.loc_y - 1;		
		notific2("Вы перешли на 1 влево.");
		console.log("Вы перешли на 1 влево.");
	}
	 catch(e){
	 	notific2("Ошибка. Привышен лимитер.");
		console.log("	C:Ошибка. Привышен лимитер.")
	}
			break;
		}
	} else {
		notific2('Недостаточно манны для этого действия');
	}
}