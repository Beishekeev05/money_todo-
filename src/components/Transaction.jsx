import { useContext } from "react";
import { amountForm } from "../utils/helpers";
import { MyContext } from "../context/Context";

function Transaction({ transaction }) {
	const { deleteTransaction } = useContext(MyContext);
	const sign = transaction.amount < 0 ? "minus" : "plus";
	return (
		<li className={transaction.amount < 0 ? "minus" : "plus"}>
			{transaction.text}
			<span>{amountForm(transaction.amount)}</span>
			<button
				className="delete-btn"
				onClick={() => deleteTransaction(transaction.id)}>
				{" "}
				X
			</button>
		</li>
	);
}

export default Transaction;
