const icons = [
	{name: 'cat', prefix: 'fa-', type: 'animals', family: 'fas'},
	{name: 'crow', prefix: 'fa-', type: 'animals', family: 'fas'},
	{name: 'dog', prefix: 'fa-', type: 'animals', family: 'fas'},
	{name: 'dove', prefix: 'fa-', type: 'animals', family: 'fas'},
	{name: 'dragon', prefix: 'fa-', type: 'animals', family: 'fas'},
	{name: 'horse', prefix: 'fa-', type: 'animals', family: 'fas'},
	{name: 'hippo', prefix: 'fa-', type: 'animals', family: 'fas'},
	{name: 'fish', prefix: 'fa-', type: 'animals', family: 'fas'},
	{name: 'carrot', prefix: 'fa-', type: 'food', family: 'fas'},
	{name: 'apple-alt', prefix: 'fa-', type: 'food', family: 'fas'},
	{name: 'lemon', prefix: 'fa-', type: 'food', family: 'fas'},
	{name: 'pepper-hot', prefix: 'fa-', type: 'food', family: 'fas'},
	{name: 'user-astronaut', prefix: 'fa-', type: 'user', family: 'fas'},
	{name: 'user-graduate', prefix: 'fa-', type: 'user', family: 'fas'},
	{name: 'user-ninja', prefix: 'fa-', type: 'user', family: 'fas'},
	{name: 'user-secret', prefix: 'fa-', type: 'user', family: 'fas'},
	{name: 'facebook', prefix: 'fa-', type: 'brands', family: 'fab'},
	{name: 'instagram', prefix: 'fa-', type: 'brands', family: 'fab'},
	{name: 'google', prefix: 'fa-', type: 'brands', family: 'fab'},
	{name: 'linkedin', prefix: 'fa-', type: 'brands', family: 'fab'},
	{name: 'youtube', prefix: 'fa-', type: 'brands', family: 'fab'},
	{name: 'amazon', prefix: 'fa-', type: 'brands', family: 'fab'},
	{name: 'smile', prefix: 'fa-', type: 'emoji', family: 'fas'},
	{name: 'angry', prefix: 'fa-', type: 'emoji', family: 'fas'},
	{name: 'flushed', prefix: 'fa-', type: 'emoji', family: 'fas'},
	{name: 'grin-wink', prefix: 'fa-', type: 'emoji', family: 'fas'},
	{name: 'laugh', prefix: 'fa-', type: 'emoji', family: 'fas'},
	{name: 'sad-tear', prefix: 'fa-', type: 'emoji', family: 'fas'},
	{name: 'car', prefix: 'fa-', type: 'automotive', family: 'fas'},
	{name: 'bus', prefix: 'fa-', type: 'automotive', family: 'fas'},
	{name: 'ambulance', prefix: 'fa-', type: 'automotive', family: 'fas'},
	{name: 'car-side', prefix: 'fa-', type: 'automotive', family: 'fas'},
	{name: 'truck', prefix: 'fa-', type: 'automotive', family: 'fas'},
	{name: 'globe-europe', prefix: 'fa-', type: 'travel', family: 'fas'},
	{name: 'caravan', prefix: 'fa-', type: 'travel', family: 'fas'},
	{name: 'map', prefix: 'fa-', type: 'travel', family: 'fas'},
	{name: 'plane', prefix: 'fa-', type: 'travel', family: 'fas'},
	{name: 'umbrella-beach', prefix: 'fa-', type: 'travel', family: 'fas'},
	{name: 'monument', prefix: 'fa-', type: 'travel', family: 'fas'},
	{name: 'suitcase', prefix: 'fa-', type: 'travel', family: 'fas'},
	{name: 'spa', prefix: 'fa-', type: 'travel', family: 'fas'},
	{name: 'playstation', prefix: 'fa-', type: 'brands', family: 'fab'},
	{name: 'city', prefix: 'fa-', type: 'buildings', family: 'fas'},
	{name: 'home', prefix: 'fa-', type: 'buildings', family: 'fas'},
	{name: 'kaaba', prefix: 'fa-', type: 'travel', family: 'fas'},
	{name: 'landmark', prefix: 'fa-', type: 'travel', family: 'fas'},
	{name: 'compact-disc', prefix: 'fa-', type: 'music', family: 'fas'},
	{name: 'headphones', prefix: 'fa-', type: 'music', family: 'fas'},
	{name: 'play', prefix: 'fa-', type: 'music', family: 'fas'},
	{name: 'soundcloud', prefix: 'fa-', type: 'brands', family: 'fab'},
	{name: 'volume-up', prefix: 'fa-', type: 'music', family: 'fas'},
	{name: 'hospital', prefix: 'fa-', type: 'buildings', family: 'fas'},
	{name: 'hotel', prefix: 'fa-', type: 'buildings', family: 'fas'}
];

// varibili ++++

const container = document.getElementById("icons");
const select = document.getElementById("icons-filter");

// codice da eseguire ++++

// ordinamento tipi in ordine alfabetico
reorderTypes();
// colori random per tipo
randomColorsToType();
// popolazione container
popolate();
// popolazione del select con le opzioni dinamiche
popolateOptions();
// click esclusivo sulle card
clickCards();
// funzione per selezionare il filtro nel select
select.addEventListener("change", function () {
	const value = this.value;
	const cards = document.querySelectorAll(".card");
	cards.forEach(card => card.classList.contains(`${value}`) ? card.classList.add("active") : card.classList.remove("active"));
});

// funzioni ++++

// funzione per ordinare i tipi in ordine alfabetico
function reorderTypes() {
	function reorder(a, b) {
		if (a.type == b.type) {
			return a.name < b.name ? -1 : 1
		} else {
			return a.type < b.type ? -1 : 1
		}
	}
	icons.sort(reorder);
}
// funzione per assegnare colori random per tipo
function randomColorsToType() {
	let type = icons[0].type; // variabile per il confronto fra i tipi delle icone in icons
	let newColor = color(); // nuovo colore random ad una variabile
	icons.forEach((icon) => { // controllo dei tipi di tutte le icone in icons
		if (icon.type != type) { // se i tipi delle icone a confronto sono diversi
			type = icon.type; // la nuova variabile di confronto è il nuovo tipo
			newColor = color(); // il nuovo colore è un nuovo colore random
			icon.color = newColor; // il nuovo tipo avrà un nuovo colore random
		} else {
			icon.color = newColor; // le icone dello stesso tipo avranno lo stesso colore random
		}
	});
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
// funzione per popolare container
function popolate() {icons.forEach(icon => container.innerHTML += card(icon))}
// funzione per creare una card
function card(icon) {
	const {name, prefix, family, color, type} = icon;
	return `
	<div class="card flex-center all ${type} active">
		<div class="card-content">
			<div class="icon" style="color: ${color}">
				<i class="${family} ${prefix}${name}"></i>
			</div>
			<div class="name">${name}</div>
		</div>
	</div>
	`;
}
// funzione per popolare il select
function popolateOptions() {
	let type = icons[0].type; // variabile per il confronto fra i tipi delle icone in icons
	select.innerHTML += option(type);
	icons.forEach((icon, i) => { // controllo dei tipi di tutte le icone in icons
		if (icon.type != type) { // se i tipi delle icone a confronto sono diversi
			type = icons[i].type
			select.innerHTML += option(type);
		}
	});
}
// funzione per creare un option dinamico
function option(type) {
	return `<option value="${type}">${type}</option>`;
}
// funzione per cliccare le card
function clickCards() {
	const cards = document.querySelectorAll(".card");
	cards.forEach(card => card.addEventListener("click", function () {
		if (!(this.classList.contains("select"))) {
			cards.forEach(card => card.classList.remove("select"));
			this.classList.add("select");
		} else {this.classList.remove("select")}
	}));
}