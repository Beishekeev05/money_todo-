import { useContext } from "react";
import { MyContext } from "../context/Context";
import { amountForm } from "../utils/helpers";

function Balance() {
	const { transaction } = useContext(MyContext);
	const amounts = transaction.map((item) => item.amount);
	const total = amounts.reduce((acc, amount) => (acc += amount), 0);
	return (
		<div>
			<h4>Your Balance</h4>
			<h1>{amountForm(total)}</h1>
		</div>
	);
}

export default Balance;
