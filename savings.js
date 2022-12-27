const getAcuumulatedSavings = (savings) => {
	const { firstYr, amount, years } = savings;
	const interest = amount * years;

	return amount + interest;
};

const output = getAcuumulatedSavings({ firstYr: 13000, amount: 1000, years: 10 });

console.log(output);
