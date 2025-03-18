import { createContext, useReducer } from "react";

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

export const ExpensesContext = createContext({
	expenses: [],
	addExpense: ({ description, amount, date }) => {},
	removeExpense: (id) => {},
	updateExpense: (id, { description, amount, date }) => {},
});

function expensesReducer(state, action) {
	switch (action.type) {
		case "ADD": {
			const id = new Date().toString + Math.random().toString();
			return [{ ...action.payload, id }, ...state];
		}
		case "DELETE":
			return state.filter((expense) => expense.id !== action.payload);
		case "UPDATE": {
			const updatebleExpenseIndex = state.findIndex(
				(expense) => expense.id === action.payload.id,
			);
			const updatebleExpense = state[updatebleExpenseIndex];
			const updatedItem = {
				...updatebleExpense,
				...action.payload.expenseData,
			};
			const updatedExpenses = [...state];
			updatedExpenses[updatebleExpenseIndex] = updatedItem;
			return updatedExpenses;
		}
		default:
			return state;
	}
}

function ExpensesContextProvider({ children }) {
	const [expensesState, dispatch] = useReducer(expensesReducer, DUMMY_EXPENSES);

	function addExpense(expenseData) {
		dispatch({ type: "ADD", payload: expenseData });
	}

	function deleteExpense(id) {
		dispatch({ type: "DELETE", payload: id });
	}

	function updateExpense(id, expenseData) {
		dispatch({ type: "UPDATE", payload: { id, expenseData } });
	}

	const value = {
		expenses: expensesState,
		addExpense,
		deleteExpense,
		updateExpense,
	};

	return (
		<ExpensesContext.Provider value={value}>
			{children}
		</ExpensesContext.Provider>
	);
}

export default ExpensesContextProvider;
