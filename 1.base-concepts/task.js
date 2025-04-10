"use strict";

function solveEquation(a, b, c) {
	if (a === 0) {
		throw new Error('Коэффициент a не может быть равен 0');
	}

	let discriminant = b * b - 4 * a * c;
	let arr = [];

	// Если дискриминант больше 0 - два различных корня
	if (discriminant > 0) {
		let x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
		let x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
		arr.push(x1);
		arr.push(x2);
	}
	// Если дискриминант равен 0 - один корень
	else if (discriminant === 0) {
		let x = -b / (2 * a);
		arr.push(x);
	}
	// Если дискриминант меньше 0 - корней нет
	else {
		arr = [];
	}

	return arr;
}

console.log(solveEquation(1, -3, 2)); // [2, 1]
console.log(solveEquation(1, 4, 4)); // [-2]
console.log(solveEquation(1, 0, 1)); // []

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
	// Проверка входных данных
	if (isNaN(percent) || isNaN(contribution) || isNaN(amount) || isNaN(countMonths)) {
		throw new Error('Все параметры должны быть числами');
	}

	if (percent < 0 || contribution < 0 || amount <= 0 || countMonths <= 0) {
		throw new Error('Все параметры должны быть неотрицательными числами');
	}

	if (contribution >= amount) {
		return 0; // Если взнос больше или равен сумме кредита, возвращать нечего
	}

	// Преобразуем процентную ставку в месячную (от 0 до 1)
	let monthlyPercent = (percent / 100) / 12;

	// Вычисляем тело кредита
	let creditBody = amount - contribution;

	// Вычисляем ежемесячный платеж
	let payment = creditBody * (monthlyPercent + (monthlyPercent /
		(Math.pow(1 + monthlyPercent, countMonths) - 1)));

	// Вычисляем общую сумму выплат
	let totalAmount = payment * countMonths;

	// Округляем до двух знаков после запятой
	return parseFloat(totalAmount.toFixed(2));
}

// Примеры использования:
console.log(calculateTotalMortgage(10, 0, 50000, 12)); // 52749.53
console.log(calculateTotalMortgage(10, 1000, 50000, 12)); // 51694.54
console.log(calculateTotalMortgage(10, 0, 20000, 24)); // 22149.56
console.log(calculateTotalMortgage(10, 1000, 20000, 24)); // 21042.09
console.log(calculateTotalMortgage(10, 20000, 20000, 24)); // 0
console.log(calculateTotalMortgage(10, 0, 10000, 36)); // 11616.19
console.log(calculateTotalMortgage(15, 0, 10000, 36)); // 12479.52