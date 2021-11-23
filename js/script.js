const icons = [
	{name: 'cat', prefix: 'fa-', type: 'animal', family: 'fas'},
	{name: 'crow', prefix: 'fa-', type: 'animal', family: 'fas'},
	{name: 'dog', prefix: 'fa-', type: 'animal', family: 'fas'},
	{name: 'dove', prefix: 'fa-', type: 'animal', family: 'fas'},
	{name: 'dragon', prefix: 'fa-', type: 'animal', family: 'fas'},
	{name: 'horse', prefix: 'fa-', type: 'animal', family: 'fas'},
	{name: 'hippo', prefix: 'fa-', type: 'animal', family: 'fas'},
	{name: 'fish', prefix: 'fa-', type: 'animal', family: 'fas'},
	{name: 'carrot', prefix: 'fa-', type: 'vegetable', family: 'fas'},
	{name: 'apple-alt', prefix: 'fa-', type: 'vegetable', family: 'fas'},
	{name: 'lemon', prefix: 'fa-', type: 'vegetable', family: 'fas'},
	{name: 'pepper-hot', prefix: 'fa-', type: 'vegetable', family: 'fas'},
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
	{name: 'truck', prefix: 'fa-', type: 'automotive', family: 'fas'}
];

// varibili
const container = document.getElementById("icons");
const select = document.getElementById("icons-filter");
// array contenente oggetti di tipi diversi
const arrayOfObjects = [];

// creazione oggetti di tipo diverso dinamicamente e inserimento in array
createArrayObject();
// colori random per tipo
randomColorsToType();
// funzione per popolare container per tipo
const popolate = (array) => array.forEach(icon => container.innerHTML += card(icon));
// prima popolazione container con array contenente tutte le icone
popolate(arrayOfObjects[0].array);
// popolazione del select con le opzioni dinamiche
popolateOptions();
// click esclusivo sulle card
clickCards();
// funzione per selezionare il filtro nel select
select.addEventListener("change", function () {
	container.innerHTML = "";
	const value = this.value;
	popolate(arrayOfObjects[value].array); // ripopola il container a seconda del valore (numerico) del select
	clickCards();
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
// funzione per creare un option dinamico
function option(icon, num) {
	const {type} = icon;
	return `
	<option value="${num}">${type}</option>
	`;
}
// funzione per popolare il select
function popolateOptions() {
	arrayOfObjects.forEach((icon, i) => select.innerHTML += option(icon, i));
}
// funzione per creare un array con oggetti di tipi diversi
function createArrayObject() {
	let id = 0;
	createObject(id, "all");
	icons.forEach(icon => arrayOfObjects[id].array.push(icon)); //creazione primo oggetto con array con tutte le icone, id:0 e tipo:"All"
	id++; // incrementa l'id per il nuovo oggetto
	let type = icons[0].type; // variabile per il confronto fra i tipi delle icone in icons
	createObject(id, type); // creazione nuovo oggetto con array vuoto
	icons.forEach((icon, i) => { // controllo dei tipi di tutte le icone in icons
		if (icon.type != type) { // se i tipi delle icone a confronto sono diversi
			type = icon.type; // la nuova variabile di confronto è il nuovo tipo
			id++; // incrementa l'id per il nuovo oggetto
			createObject(id, type); // creazione nuovo oggetto con array vuoto
			arrayOfObjects[id].array.push(icons[i]) // inserimento icona nel nuovo array
		} else { // se i tipi delle icone a confronto sono uguali
			arrayOfObjects[id].array.push(icons[i]) // inserimento icona nell'array precedentemente creato
		}
	});
}
// funzione per creare un oggetto con id, tipo e array dinamici
function createObject(num, typeName) {
	arrayOfObjects.push({
		id: num,
		type: typeName,
		array: []
	});
}
// funzione per cliccare le card
function clickCards() {
	const cards = document.getElementsByClassName("card");
	for (let i = 0; i < cards.length; i++) {
		cards[i].addEventListener("click", function () {
			if (!(this.classList.contains("active"))) {
				for (let i = 0; i < cards.length; i++) {
					cards[i].classList.remove("active")
				}
				this.classList.add("active");
			} else {
				this.classList.remove("active")
			}
		})
		
	}
}