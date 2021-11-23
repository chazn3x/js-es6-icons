const icons = [
	{name: 'cat', prefix: 'fa-', type: 'animal', family: 'fas', color: 'orange'},
	{name: 'crow', prefix: 'fa-', type: 'animal', family: 'fas', color: 'orange'},
	{name: 'dog', prefix: 'fa-', type: 'animal', family: 'fas', color: 'orange'},
	{name: 'dove', prefix: 'fa-', type: 'animal', family: 'fas', color: 'orange'},
	{name: 'dragon', prefix: 'fa-', type: 'animal', family: 'fas', color: 'orange'},
	{name: 'horse', prefix: 'fa-', type: 'animal', family: 'fas', color: 'orange'},
	{name: 'hippo', prefix: 'fa-', type: 'animal', family: 'fas', color: 'orange'},
	{name: 'fish', prefix: 'fa-', type: 'animal', family: 'fas', color: 'orange'},
	{name: 'carrot', prefix: 'fa-', type: 'vegetable', family: 'fas', color: 'green'},
	{name: 'apple-alt', prefix: 'fa-', type: 'vegetable', family: 'fas', color: 'green'},
	{name: 'lemon', prefix: 'fa-', type: 'vegetable', family: 'fas', color: 'green'},
	{name: 'pepper-hot', prefix: 'fa-', type: 'vegetable', family: 'fas', color: 'green'},
	{name: 'user-astronaut', prefix: 'fa-', type: 'user', family: 'fas', color: 'blue'},
	{name: 'user-graduate', prefix: 'fa-', type: 'user', family: 'fas', color: 'blue'},
	{name: 'user-ninja', prefix: 'fa-', type: 'user', family: 'fas', color: 'blue'},
	{name: 'user-secret', prefix: 'fa-', type: 'user', family: 'fas', color: 'blue'}
];
const container = document.getElementById("icons");
// ciclo forEach per popolare il container con tutte le icone
icons.forEach(icon => container.innerHTML += card(icon));
// divisione array per tipo
const animal = [], vegetable = [], user = [];
icons.forEach(icon => icon.type == "animal" ? animal.push(icon) : icon.type == "vegetable" ? vegetable.push(icon) : user.push(icon));

// funzione per creare una card
function card(icon) {
	const {name, prefix, type, family, color} = icon;
	const iconElement = `${family} ${prefix}${name}`;
	return `
	<div class="card flex-center">
		<div class="card-content">
			<div class="icon ${color}">
				<i class="${iconElement}"></i>
			</div>
			<div class="name">${name}</div>
		</div>
	</div>
	`;
}