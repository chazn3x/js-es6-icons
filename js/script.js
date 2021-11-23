const icons = [
	{name: 'cat', prefix: 'fa-', type: 'animal', family: 'fas', color: color()},
	{name: 'crow', prefix: 'fa-', type: 'animal', family: 'fas', color: color()},
	{name: 'dog', prefix: 'fa-', type: 'animal', family: 'fas', color: color()},
	{name: 'dove', prefix: 'fa-', type: 'animal', family: 'fas', color: color()},
	{name: 'dragon', prefix: 'fa-', type: 'animal', family: 'fas', color: color()},
	{name: 'horse', prefix: 'fa-', type: 'animal', family: 'fas', color: color()},
	{name: 'hippo', prefix: 'fa-', type: 'animal', family: 'fas', color: color()},
	{name: 'fish', prefix: 'fa-', type: 'animal', family: 'fas', color: color()},
	{name: 'carrot', prefix: 'fa-', type: 'vegetable', family: 'fas', color: color()},
	{name: 'apple-alt', prefix: 'fa-', type: 'vegetable', family: 'fas', color: color()},
	{name: 'lemon', prefix: 'fa-', type: 'vegetable', family: 'fas', color: color()},
	{name: 'pepper-hot', prefix: 'fa-', type: 'vegetable', family: 'fas', color: color()},
	{name: 'user-astronaut', prefix: 'fa-', type: 'user', family: 'fas', color: color()},
	{name: 'user-graduate', prefix: 'fa-', type: 'user', family: 'fas', color: color()},
	{name: 'user-ninja', prefix: 'fa-', type: 'user', family: 'fas', color: color()},
	{name: 'user-secret', prefix: 'fa-', type: 'user', family: 'fas', color: color()}
];
const container = document.getElementById("icons");
// funzione per popolare container per tipo
const popolate = (array) => array.forEach(icon => container.innerHTML += card(icon));
// prima popolazione array
popolate(icons);
// divisione array per tipo
const animal = [], vegetable = [], user = [];
icons.forEach(icon => icon.type == "animal" ? animal.push(icon) : icon.type == "vegetable" ? vegetable.push(icon) : user.push(icon));
// funzione per selezionare il filtro nel select
const filter = document.getElementById("icons-filter");
filter.addEventListener("change", function () {
	container.innerHTML = "";
	const value = this.value;
	let choose = null;
	value == "animal" ? choose = animal : value == "vegetable" ? choose = vegetable : value == "user" ? choose = user : choose = icons;
	popolate(choose);
});
// funzione per creare una card
function card(icon) {
	const {name, prefix, family, color} = icon;
	const iconElement = `${family} ${prefix}${name}`;
	return `
	<div class="card flex-center">
		<div class="card-content">
			<div class="icon" style="color: ${color}">
				<i class="${iconElement}"></i>
			</div>
			<div class="name">${name}</div>
		</div>
	</div>
	`;
}
// funzione per generare colori random
function color() {
	let color = "#";
	const chars = "0123456789abcdef";
	for (let i = 0; i < 6; i++) {
		const num = Math.floor(Math.random() * chars.length);
		color += chars[num];
	}
	return color;
}
// funzione per creare un option
function option(icon) {
	const {type} = icon;
	let name = "";
	switch (type) {
		case "animal":
			name = "Animali";
			break;
		case "vegetable":
			name = "Vegetali";
			break;
		case "user":
			name = "Utenti";
	}
	return `
	<option value="${type}">${name}</option>
	`;
}
// funzione per popolare il select
function popolateOptions() {
	let item = icons[0].type;
	filter.innerHTML += option(icons[0]);
	icons.forEach(icon => {
		if (icon.type != item) {
			filter.innerHTML += option(icon);
			item = icon.type;
		}
	});
}
popolateOptions();