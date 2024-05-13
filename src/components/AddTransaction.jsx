import React, { useContext, useState } from "react";
import { MyContext } from "../context/Context";

function AddTransaction() {
	const { addTransaction } = useContext(MyContext);

	const [text, setText] = useState("");
	const [amount, setAmount] = useState(0);

	const submitHandler = (e) => {
		e.preventDefault();

		const newTransaction = {
			id: Math.floor(Math.random() * 9999),
			text,
			amount: +amount,
		};

		addTransaction(newTransaction);
		setText("");
    setAmount(0)
	};

	return (
		<>
			<h3>Add Transactions</h3>
			<form onSubmit={submitHandler}>
				<div>
					<label htmlFor="text">Text</label>
					<input
          placeholder="Enter your text"
						type="text"
						name="text"
						value={text}
						onChange={(e) => setText(e.target.value)}
					/>
				</div>

				<div>
					<label htmlFor="amount">Amount</label>
					<input
          placeholder="Enter your text"
						type="number"
						name="amount"
						value={amount}
						onChange={(e) => setAmount(e.target.value)}
					/>
				</div>
				<button className="btn">add</button>
			</form>
		</>
	);
}

export default AddTransaction;
