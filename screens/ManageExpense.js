import { StyleSheet, View } from "react-native";
import { useLayoutEffect, useContext, useState } from "react";
import IconButton from "../components/ui/IconButton";
import { GlobalStyles } from "../constants/styles";
import { ExpensesContext } from "../store/expenses-context";
import ExpenseForm from "../components/ManageExpense/ExpenseForm";
import { storeExpense, updateExpense, deleteExpense } from "../util/http";
import LoadingOverlay from "../components/ui/LoadingOverlay";
import ErrorOverlay from "../components/ui/ErrorOverlay";

function ManageExpense({ route, navigation }) {
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [error, setError] = useState();

	const editedExpenseId = route.params?.expenseId;
	const isEditing = Boolean(editedExpenseId);
	const expensesCtx = useContext(ExpensesContext);
	const selectedExpense = expensesCtx.expenses.find(
		(expense) => expense.id === editedExpenseId,
	);

	useLayoutEffect(() => {
		navigation.setOptions({
			title: isEditing ? "Edit Expense" : "Add Expense",
		});
	}, [isEditing, navigation]);

	const deleteExpenseHandler = async () => {
		setIsSubmitting(true);
		try {
			await deleteExpense(editedExpenseId);
			expensesCtx.deleteExpense(editedExpenseId);
			navigation.goBack();
		} catch {
			setError("Could not delete expense. Please try again later.");
			setIsSubmitting(false);
		}
	};

	const cancelExpenseHandler = () => {
		navigation.goBack();
	};

	const confirmHandler = async (expenseData) => {
		setIsSubmitting(true);

		try {
			if (isEditing) {
				expensesCtx.updateExpense(editedExpenseId, expenseData);
				await updateExpense(editedExpenseId, expenseData);
			} else {
				const id = await storeExpense(expenseData);
				expensesCtx.addExpense({ ...expenseData, id });
			}
			navigation.goBack();
		} catch {
			setError("Could not save expense. Please try again later.");
			setIsSubmitting(false);
		}
	};

	function errorHandler() {
		setError(null);
	}

	if (error && !isSubmitting) {
		return <ErrorOverlay message={error} onConfirm={errorHandler} />;
	}

	if (isSubmitting) {
		return <LoadingOverlay />;
	}

	return (
		<View style={styles.container}>
			<ExpenseForm
				onCancel={cancelExpenseHandler}
				onSubmit={confirmHandler}
				submitButtonLabel={isEditing ? "Update" : "Add"}
				defaultValues={selectedExpense}
			/>
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
});
