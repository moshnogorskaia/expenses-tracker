import { Text, StyleSheet } from "react-native";
import { useLayoutEffect } from "react";

function ManageExpense({ route, navigation }) {
	const editedExpenseId = route.params?.expenseId;
	const isEditing = Boolean(editedExpenseId);

	useLayoutEffect(() => {
		navigation.setOptions({
			title: isEditing ? "Edit Expense" : "Add Expense",
		});
	}, [isEditing, navigation]);

	return <Text>ManageExpense</Text>;
}

export default ManageExpense;

const styles = StyleSheet.create({});
