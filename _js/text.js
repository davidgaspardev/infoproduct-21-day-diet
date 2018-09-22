
function insertTexts() {

	let text = new Array();

	// <h1>
	text.push('Top 10 dos infoprodutos mais vendidos no Hotmart');

	// <p>
	text.push('" <strong>A Dieta de 21 dias é um método inovador e cientificamente comprovado, para você' +
		' perder de 5 a 10 quilos de gordura corporal em apenas 21 dias.</strong> " </br>' +
		' - Dr. Rodolfo Aurelio');

	// <h1>
	text.push('O que é a Dieta de 21 dias');

	// <p>
	text.push('A Dieta de 21 dias é um revolucionário protocolo de emagrecimento (100% Natural) que foi ' +
		'baseado em mais de 1.200 experimentos científicos para ajudar você a perder peso e gordura Corporal. </br>' +
		' Mais rápido do que qualquer outro método que você já tentou.' +
		' Sem passar fome, sem contar calorias, sem abrir mão de alimentos deliciosos e sem ter que fazer exercícios monótonos e chatos.');

	// Objects array of elements with class name "text"
	let pText = document.getElementsByClassName('text');

	
	for(var i = 0; i < pText.length; i++) {
		pText[i].innerHTML = text[i];
	}

}

insertTexts();
