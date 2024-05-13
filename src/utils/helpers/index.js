export const amountForm = (amount) => {
	const formMatter = new Intl.NumberFormat("en-US", {
		style: "currency",
		currency: "USD",
	});
	return formMatter.format(amount);
};
