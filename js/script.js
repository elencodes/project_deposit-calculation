const button = document.querySelector('.button');
const total = document.querySelector('.total');

let interestRate = 18.5;

const deposit = 30000;

const growth = 150;

const currency = 'руб.';

const finalSum = deposit + growth;

const depositMessage = `Ваш депозит на начало расчётного периода составлял ${deposit} ${currency}`;
console.log(depositMessage);

const rateMessage = `Согласно вашему тарифу, вам была присвоена ставка ${interestRate}%`;
console.log(rateMessage);

const finalMessage = `К концу расчетного периода прирост составил ${growth} ${currency}, и на данный момент ваш депозит составляет ${finalSum} ${currency}`;
console.log(finalMessage);

button.addEventListener('click', () => {
	const sum = Number(document.querySelector('.sum').value);
	const rate = 0.07;
	const finalDepositSum = sum + (sum * rate);
	const message = `Через год у вас будет ${finalDepositSum} руб. на счету`;
	total.textContent = (message); // Через год у вас будет XXX руб. на счету", где вместо ХХХ выведите сколько получится на счету с учетом процентной ставки 7% годовых
	});