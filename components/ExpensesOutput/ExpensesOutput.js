import { View } from "react-native";
import ExpensesSummary from "../ExpensesSummary/ExpensesSummary";
import ExpensesList from "../ExpensesList/ExpensesList";

function ExpensesOutput({ expenses, expensesPeriod }) {
	return (
		<View>
			<ExpensesSummary expenses={expenses} periodName={expensesPeriod} />
			<ExpensesList />
		</View>
	);
}

export default ExpensesOutput;
