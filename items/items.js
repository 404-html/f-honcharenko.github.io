var bd_items = Object.create(null);
bd_items[1] = {
	id: 1,
	name: "Яблоко",
	descp: "Фрукт.",
	type: 'food',
	effect:{
		point:'MP',
		count: 15
	}
}
bd_items[1].descp = 'Восставанливает '+bd_items[1].effect.count+' ед. '+bd_items[1].effect.point;
bd_items[2] = {
	id: 2,
	name: "Нож",
	descp: "Режущий инструмент, рабочим органом которого является клинок.",
	type: 'weapoen'
}
