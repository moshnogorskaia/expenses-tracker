import { View, StyleSheet, Text } from "react-native";
import Input from "./Input";
import { useState } from "react";
import Button from "../ui/Button";

function ExpenseForm({ onCancel, onSubmit, submitButtonLabel }) {
	const [inputValues, setInputValues] = useState({
		amount: "",
		date: "",
		description: "",
	});

	function inputChangeHandler(inputIdentifier, enteredValue) {
		setInputValues((currentInputValues) => {
			return {
				...currentInputValues,
				[inputIdentifier]: enteredValue,
			};
		});
	}

	function submitHandler() {}

	return (
		<View style={styles.form}>
			<Text style={styles.title}>Your Expense</Text>
			<View style={styles.inputsRow}>
				<Input
					label="amount"
					textInputConfig={{
						keyboardType: "decimal-pad",
						placeholder: "0.00",
						onChangeText: inputChangeHandler.bind(this, "amount"),
						value: inputValues.amount,
					}}
					style={styles.rowInput}
				/>
				<Input
					label="date"
					textInputConfig={{
						placeholder: "YYYY-MM-DD",
						maxLength: 10,
						onChangeText: inputChangeHandler.bind(this, "date"),
						value: inputValues.date,
					}}
					style={styles.rowInput}
				/>
			</View>
			<Input
				label="description"
				textInputConfig={{
					multiline: true,
					onChangeText: inputChangeHandler.bind(this, "description"),
					value: inputValues.description,
				}}
			/>
			<View style={styles.buttons}>
				<Button mode="flat" onPress={onCancel} style={styles.button}>
					Cancel
				</Button>
				<Button onPress={submitHandler} style={styles.button}>
					{submitButtonLabel}
				</Button>
			</View>
		</View>
	);
}

export default ExpenseForm;

const styles = StyleSheet.create({
	form: {
		marginTop: 40,
	},
	title: {
		fontSize: 24,
		fontWeight: "bold",
		color: "white",
		marginVertical: 24,
		textAlign: "center",
	},
	inputsRow: {
		flexDirection: "row",
		justifyContent: "space-between",
	},
	rowInput: {
		flex: 1,
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
