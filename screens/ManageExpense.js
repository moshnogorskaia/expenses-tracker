import { Text, StyleSheet, View } from "react-native";
import { useLayoutEffect, useContext } from "react";
import IconButton from "../components/ui/IconButton";
import { GlobalStyles } from "../constants/styles";
import Button from "../components/ui/Button";
import { ExpensesContext } from "../store/expenses-context";
import ExpenseForm from "../components/ManageExpense/ExpenseForm";

function ManageExpense({ route, navigation }) {
	const editedExpenseId = route.params?.expenseId;
	const isEditing = Boolean(editedExpenseId);
	const expensesCtx = useContext(ExpensesContext);

	useLayoutEffect(() => {
		navigation.setOptions({
			title: isEditing ? "Edit Expense" : "Add Expense",
		});
	}, [isEditing, navigation]);

	const deleteExpenseHandler = () => {
		expensesCtx.deleteExpense(editedExpenseId);
		navigation.goBack();
	};

	const cancelExpenseHandler = () => {
		navigation.goBack();
	};

	const confirmHandler = () => {
		if (isEditing) {
			expensesCtx.updateExpense(editedExpenseId, {
				description: "!!!test",
				amount: 90.99,
				date: new Date("2025-03-18"),
			});
		} else {
			expensesCtx.addExpense({
				description: "test",
				amount: 90.99,
				date: new Date("2025-03-18"),
			});
		}
		navigation.goBack();
	};

	return (
		<View style={styles.container}>
			<ExpenseForm />
			<View style={styles.buttons}>
				<Button
					mode="flat"
					onPress={cancelExpenseHandler}
					style={styles.button}
				>
					Cancel
				</Button>
				<Button onPress={confirmHandler} style={styles.button}>
					{isEditing ? "Update" : "Add"}
				</Button>
			</View>
			{isEditing && (
				<View style={styles.deleteContainer}>
					<IconButton
						icon="trash"
						color={GlobalStyles.colors.error500}
						size={36}
						onPress={deleteExpenseHandler}
					/>
				</View>
			)}
		</View>
	);
}

export default ManageExpense;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 24,
		backgroundColor: GlobalStyles.colors.primary800,
	},
	deleteContainer: {
		marginTop: 16,
		paddingTop: 8,
		borderTopWidth: 2,
		borderTopColor: GlobalStyles.colors.primary200,
		alignItems: "center",
	},
	buttons: {
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
	},
	button: {
		minWidth: 120,
		marginHorizontal: 8,
	},
});
