function compareArrays(arr1, arr2) {
	if (arr1.length !== arr2.length) {
		return false;
	}
	return arr1.every((element, index) => {

		return element === arr2[index];
	});
}

function getUsersNamesInAgeRange(users, gender) {
	if (!users || users.length === 0) {
		return 0;
	}
	const filteredUsers = users.filter(user => user.gender === gender);
	const ages = filteredUsers.map(user => user.age);
	if (ages.length === 0) {
		return 0;
	}

	const averageAge = ages.reduce((sum, age) => sum + age, 0) / ages.length;

	return averageAge;
}
