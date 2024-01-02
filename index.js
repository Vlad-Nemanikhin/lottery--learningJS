const items = document.documentElement.querySelectorAll('.item');
const set = document.documentElement.querySelector('.item-set');

const winNumber = Math.floor((Math.random() * 12) + 1);

let attempt = 0;

items.forEach((item) => {
	item.addEventListener('click', () => {
		attempt++;
		if (attempt > 3) {
			set.innerHTML = '';
			setTimeout(() => { location.reload() }, 1000);
		}
		else{
			if (Number(item.textContent) === winNumber) {
				item.classList.add('success');
				item.innerHTML = '';
				item.insertAdjacentHTML('afterbegin', '<h2>Вітаю, ти виграв!</h2>');
			
			} else {
				item.classList.add('failure');
				item.innerHTML = '';
				item.insertAdjacentHTML('afterbegin', '<h2>Спробуй ще!</h2>');
			}
		}
	})
})

