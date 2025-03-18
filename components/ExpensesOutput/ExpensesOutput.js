import { View } from "react-native";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";

const DUMMY_EXPENSES = [
	{
		id: "e1",
		description: "New Shoes",
		amount: 69.99,
		date: new Date(2021, 7, 14),
	},
	{
		id: "e2",
		description: "Weekly Groceries",
		amount: 100.0,
		date: new Date(2021, 7, 15),
	},
	{
		id: "e3",
		description: "New TV",
		amount: 799.49,
		date: new Date(2021, 7, 16),
	},
	{
		id: "e4",
		description: "Car Insurance",
		amount: 294.67,
		date: new Date(2021, 7, 17),
	},
];

function ExpensesOutput({ expensesPeriod }) {
	return (
		<View>
			<ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod} />
			<ExpensesList expenses={DUMMY_EXPENSES} />
		</View>
	);
}

export default ExpensesOutput;
