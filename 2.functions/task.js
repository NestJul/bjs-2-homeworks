function getArrayParams(...arr) {
	if (arr.length === 0) {
		return {
			min: null,
			max: null,
			avg: null
		};
	}

	const min = Math.min(...arr);
	const max = Math.max(...arr);
	const sum = arr.reduce((acc, val) => acc + val, 0);

	// Важно: используем toFixed(4) для промежуточных вычислений
	// и только потом округляем до 2 знаков
	const avg = Number((sum / arr.length).toFixed(4));

	return {
		min: min,
		max: max,
		avg: Number(avg.toFixed(2))
	};
}

function summElementsWorker(...arr) {
	if (!arr || arr.length === 0) return 0;
	return arr.reduce((sum, num) => sum + num, 0);
}

function differenceMaxMinWorker(...arr) {
	if (!arr || arr.length === 0) return 0;
	let min = Math.min(...arr);
	let max = Math.max(...arr);
	return max - min;
}

function differenceEvenOddWorker(...arr) {
	if (!arr || arr.length === 0) return 0;
	let sumEven = 0;
	let sumOdd = 0;
	for (let num of arr) {
		if (num % 2 === 0) {
			sumEven += num;
		} else {
			sumOdd += num;
		}
	}
	return sumEven - sumOdd;
}

function averageEvenElementsWorker(...arr) {
	if (!arr || arr.length === 0) return 0;
	let sumEven = 0;
	let countEven = 0;
	for (let num of arr) {
		if (num % 2 === 0) {
			sumEven += num;
			countEven++;
		}
	}
	return countEven === 0 ? 0 : sumEven / countEven;
}

function makeWork(arrOfArr, func) {
	let maxWorkerResult = -Infinity; // Инициализируем переменную для хранения максимального результата

	for (let i = 0; i < arrOfArr.length; i++) {
		const result = func(...arrOfArr[i]); // Применяем функцию-насадку к текущему массиву и сохраняем результат
		if (result > maxWorkerResult) {
			maxWorkerResult = result; // Если результат больше текущего максимального значения, обновляем максимальное значение
		}
	}

	return maxWorkerResult; // Возвращаем максимальное значение
}