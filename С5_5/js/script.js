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

if (localStorage.getItem("numberKey")){
	blocknumber = localStorage.getItem("numberKey");
	blocklimit = localStorage.getItem("limitKey");
	inquiry(`https://picsum.photos/v2/list?page=${blocknumber}&limit=${blocklimit}`, displayResult);
};

let result = document.querySelector('.result');

let bloсkclick = document.querySelector('.bloсkclick');
bloсkclick.addEventListener('click', () => {
	result.innerHTML = '';
	let blocknumber = document.getElementById('blocknumber').value;
	let blocklimit = document.getElementById('blocklimit').value;

	if (blocknumber > 0  && blocknumber < 11) {
		if (blocklimit > 0  && blocklimit < 11) {
		} else {
			result.innerHTML = 'Лимит вне диапазона от 1 до 10';
			return
		}
	} else {
		if (blocklimit > 0  && blocklimit < 11){
			result.innerHTML = 'Номер страницы вне диапазона от 1 до 10';
			return
		} else {
			result.innerHTML = 'Номер страницы и лимит вне диапазона от 1 до 10';
			return
		}
	};

	localStorage.setItem("numberKey", blocknumber);
	localStorage.setItem("limitKey", blocklimit);

	inquiry(`https://picsum.photos/v2/list?page=${blocknumber}&limit=${blocklimit}`, displayResult);
});