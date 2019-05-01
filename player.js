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
			this.loc_x = loc_x;
			this.loc_y = loc_y;		
			notific("Вы телепортированы на клетку ["+this.loc_x+";"+this.loc_y+"]");
			console.log("	C: Успех.");
		} catch(e){
			console.log("	C: Ошибка. Пивышен лимитер.");
		}
	}
//Верх
player.move_up = function(){
	try{
		if (this.loc_x+1>loc_limiter_e) {throw Error}
		this.loc_x = this.loc_x + 1;		
		notific("Вы поднялись на 1 клетку.");
		console.log("Вы поднялись на 1 клетку.");
	}
	 catch(e){
	 	notific("Ошибка. Привышен лимитер.");
		console.log("	C:Ошибка. Привышен лимитер.")
	}
}

//Вниз
player.move_down = function(){
	try{
		if (this.loc_x<loc_limiter_s) {throw Error}
		this.loc_x = this.loc_x - 1;		
		notific("Вы спустились на 1 клетку.");
		console.log("Вы спустились на 1 кетку.");
	}
	 catch(e){
	 	notific("Ошибка. Привышен лимитер.");
		console.log("	C:Ошибка. Привышен лимитер.")
	}
}

//Право
player.move_right = function(){
	try{
		if (this.loc_y+1>loc_limiter_e) {throw Error}
		this.loc_y = this.loc_y + 1;		
		notific("Вы перешли на 1 вправо.");
		console.log("Вы перешли на 1 вправо.");
	}
	 catch(e){
	 	notific("Ошибка. Привышен лимитер.");
		console.log("	C:Ошибка. Привышен лимитер.")
	}
}

//Вниз
player.move_left = function(){
	try{
		if (this.loc_y<loc_limiter_s) {throw Error}
		this.loc_y = this.loc_y - 1;		
		notific("Вы перешли на 1 влево.");
		console.log("Вы перешли на 1 влево.");
	}
	 catch(e){
	 	notific("Ошибка. Привышен лимитер.");
		console.log("	C:Ошибка. Привышен лимитер.")
	}
}
player