import { View } from "react-native";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";

const DUMMY_EXPENSES = [
	{
		id: "e1",
		title: "New Shoes",
		amount: 69.99,
		date: new Date(2021, 7, 14),
	},
	{
		id: "e2",
		title: "Weekly Groceries",
		amount: 100.0,
		date: new Date(2021, 7, 15),
	},
	{
		id: "e3",
		title: "New TV",
		amount: 799.49,
		date: new Date(2021, 7, 16),
	},
	{
		id: "e4",
		title: "Car Insurance",
		amount: 294.67,
		date: new Date(2021, 7, 17),
	},
];

function ExpensesOutput({ expenses, expensesPeriod }) {
	return (
		<View>
			<ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod} />
			<ExpensesList />
		</View>
	);
}

export default ExpensesOutput;
