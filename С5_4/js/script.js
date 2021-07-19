let result = document.querySelector('.result');

let bloсkclick = document.querySelector('.bloсkclick');
bloсkclick.addEventListener('click', () => {
	result.innerHTML = '';
	let inputwidth = document.getElementById('blockwidth').value;
	let inputheight = document.getElementById('blockheight').value;
	inputwidth = Math.round(inputwidth);
	inputheight = Math.round(inputheight);
	if (inputwidth > 99  && inputwidth < 301 && inputheight > 99  && inputheight < 301) {
	} else {
		result.innerHTML = 'Одно из чисел вне диапазона от 100 до 300';
		return
	};

	fetch(`https://picsum.photos/${inputwidth}/${inputheight}`)
            .then((response) => {
                document.getElementById('imgresult').src = response.url;
            });
});