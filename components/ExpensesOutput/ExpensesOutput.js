import { View, StyleSheet } from "react-native";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";
import { GlobalStyles } from "../../constants/styles";

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
	{
		id: "e5",
		description: "Weekly Groceries",
		amount: 100.0,
		date: new Date(2021, 7, 15),
	},
	{
		id: "e6",
		description: "New TV",
		amount: 799.49,
		date: new Date(2021, 7, 16),
	},
	{
		id: "e7",
		description: "Car Insurance",
		amount: 294.67,
		date: new Date(2021, 7, 17),
	},
	{
		id: "e8",
		description: "Weekly Groceries",
		amount: 100.0,
		date: new Date(2021, 7, 15),
	},
	{
		id: "e9",
		description: "New TV",
		amount: 799.49,
		date: new Date(2021, 7, 16),
	},
	{
		id: "e10",
		description: "Car Insurance",
		amount: 294.67,
		date: new Date(2021, 7, 17),
	},
];

function ExpensesOutput({ expensesPeriod }) {
	return (
		<View style={styles.container}>
			<ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod} />
			<ExpensesList expenses={DUMMY_EXPENSES} />
		</View>
	);
}

export default ExpensesOutput;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingHorizontal: 24,
		backgroundColor: GlobalStyles.colors.primary700,
	},
});
