import { useContext } from "react";
import { MyContext } from "../context/Context";
import Transaction from "./Transaction";

function TransactionList() {
	const { transaction } = useContext(MyContext);
	return (
		<>
			<h3>History</h3>
			<ul className="list">
				{transaction?.map((item) => (
					<Transaction key={item.id} transaction={item} />
				))}
			</ul>
		</>
	);
}

export default TransactionList;
