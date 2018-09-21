

let text = new Array();

text.push('" <strong>A Dieta de 21 dias é um método inovador e cientificamente comprovado, para você' + 
	' perder de 5 a 10 quilos de gordura corporal em apenas 21 dias.</strong> " </br>' + 
	' - Dr. Rodolfo Aurelio');

text.push('A Dieta de 21 dias é um revolucionário protocolo de emagrecimento (100% Natural) que foi ' + 
	'baseado em mais de 1.200 experimentos científicos para ajudar você a perder peso e gordura Corporal. </br>' + 
	' Mais rápido do que qualquer outro método que você já tentou.' + 
	' Sem passar fome, sem contar calorias, sem abrir mão de alimentos deliciosos e sem ter que fazer exercícios monótonos e chatos.');


let pText = document.getElementsByClassName('text');

for(var i = 0; i < pText.length; i++) {
	pText[i].innerHTML = text[i];
}