import { createContext, useReducer } from "react";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MyContext = createContext();
const initState = {
	transaction: [],
};
const reducer = (state, action) => {
	switch (action.type) {
		case "DELETE_TRANSACTION":
			return {
				...state,
				transaction: state.transaction.filter(
					(transaction) => transaction.id !== action.payload
				),
			};
		case "ADD_TRANSACTION":
			toast("🦄 Wow so easy!", {
				position: "top-right",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: "dark",
				transition: Bounce,
			});
			return {
				...state,
				transaction: [action.payload, ...state.transaction],
			};
		default:
			return state;
	}
};

function TransactionProvaider({ children }) {
	const [state, dispatch] = useReducer(reducer, initState);
	console.log(state, "state");
	const deleteTransaction = (id) => {
		dispatch({ type: "DELETE_TRANSACTION", payload: id });
	};

	const addTransaction = (transaction) => {
		dispatch({ type: "ADD_TRANSACTION", payload: transaction });
	};

	return (
		<MyContext.Provider
			value={{
				transaction: state.transaction,
				deleteTransaction,
				addTransaction,
			}}>
			<ToastContainer />
			{children}
		</MyContext.Provider>
	);
}

export { TransactionProvaider, MyContext };
