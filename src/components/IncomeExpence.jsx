import { useContext } from "react";
import { amountForm } from "../utils/helpers";
import { MyContext } from "../context/Context";

function IncomeExpence() {
	const { transaction } = useContext(MyContext);
	const amounts = transaction.map((item) => item.amount);
	const income = amounts
		.filter((item) => item > 0)
		.reduce((acc, item) => (acc += item), 0);
	const expence = amounts
		.filter((item) => item < 0)
		.reduce((acc, item) => (acc += item), 0);
	return (
		<div className="inc-exp-container">
			<div>
				<h4>Income</h4>
				<p className="money plus">{amountForm(income)}</p>
			</div>

			<div>
				<h4>Expence</h4>
				<p className="money minus">{amountForm(expence)}</p>
			</div>
		</div>
	);
}

export default IncomeExpence;
