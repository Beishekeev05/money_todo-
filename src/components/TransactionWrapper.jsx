import { TransactionProvaider } from "../context/Context";
import AddTransaction from "./AddTransaction";
import Balance from "./Balance";
import IncomeExpence from "./IncomeExpence";
import TransactionList from "./TransactionList";

function TramsactionWrapper() {
	return (
		<TransactionProvaider>
			<Balance />
			<IncomeExpence />
			<TransactionList />
			<AddTransaction />
		</TransactionProvaider>
	);
}

export default TramsactionWrapper;
