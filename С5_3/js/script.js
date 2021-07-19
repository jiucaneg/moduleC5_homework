function inquiry(url, callback){
	let xhr = new XMLHttpRequest();
	xhr.open('GET', url, true);
	xhr.onload = function() {
		const result = JSON.parse(xhr.response);
		if (callback) {
			callback(result);
		}
	};

	xhr.send();
};

function displayResult(apiData) {
	let cards = '';
	apiData.forEach(item => {
		const cardBlock = `
		<div>
		<img src="${item.download_url}" width="800" height="auto"/>
		<p>${item.author}</p>
		</div>
		`;
		cards = cards + cardBlock;
	});

	result.innerHTML = cards;
};

let result = document.querySelector('.result');

let bloсkclick = document.querySelector('.bloсkclick');
bloсkclick.addEventListener('click', () => {
	const textinput = document.querySelector('input').value;
	if (textinput > 0  && textinput < 11 && (textinput % 1 == 0)) {
	} else {
		result.innerHTML = 'Число вне диапазона от 1 до 10';
		return
	};
	inquiry(`https://picsum.photos/v2/list/?limit=${textinput}`, displayResult);
});