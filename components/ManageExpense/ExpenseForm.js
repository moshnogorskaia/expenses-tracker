import { View, StyleSheet, Text } from "react-native";
import Input from "./Input";
import { useState } from "react";
import Button from "../ui/Button";
import { GlobalStyles } from "../../constants/styles";

function ExpenseForm({ onCancel, onSubmit, submitButtonLabel, defaultValues }) {
	const [inputValues, setInputValues] = useState({
		amount: {
			value: defaultValues ? defaultValues.amount.toString() : "",
			valid: true,
		},
		date: {
			value: defaultValues ? defaultValues.date.toISOString().slice(0, 10) : "",
			valid: true,
		},
		description: {
			value: defaultValues ? defaultValues.description : "",
			valid: true,
		},
	});

	function inputChangeHandler(inputIdentifier, enteredValue) {
		setInputValues((currentInputValues) => {
			return {
				...currentInputValues,
				[inputIdentifier]: {
					value: enteredValue,
					valid: true,
				},
			};
		});
	}

	function submitHandler() {
		const expenseData = {
			amount: +inputValues.amount.value,
			date: new Date(inputValues.date.value),
			description: inputValues.description.value,
		};

		const amountIsValid =
			!Number.isNaN(expenseData.amount) && expenseData.amount > 0;
		const dateIsValid = expenseData.date.toString() !== "Invalid Date";
		const descriptionIsValid = expenseData.description.trim().length > 0;

		if (!amountIsValid || !dateIsValid || !descriptionIsValid) {
			setInputValues((currentInputValues) => {
				return {
					amount: {
						...currentInputValues.amount,
						valid: amountIsValid,
					},
					date: {
						...currentInputValues.date,
						valid: dateIsValid,
					},
					description: {
						...currentInputValues.description,
						valid: descriptionIsValid,
					},
				};
			});
			return;
		}

		onSubmit(expenseData);
	}

	const formIsInvalid =
		!inputValues.amount.valid ||
		!inputValues.date.valid ||
		!inputValues.description.valid;

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
						value: inputValues.amount.value,
					}}
					style={styles.rowInput}
					invalid={!inputValues.amount.valid}
				/>
				<Input
					label="date"
					textInputConfig={{
						placeholder: "YYYY-MM-DD",
						maxLength: 10,
						onChangeText: inputChangeHandler.bind(this, "date"),
						value: inputValues.date.value,
					}}
					style={styles.rowInput}
					invalid={!inputValues.date.valid}
				/>
			</View>
			<Input
				label="description"
				textInputConfig={{
					multiline: true,
					onChangeText: inputChangeHandler.bind(this, "description"),
					value: inputValues.description.value,
				}}
				invalid={!inputValues.description.valid}
			/>
			{formIsInvalid && <Text style={styles.errorText}>Invalid form</Text>}
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
	errorText: {
		color: GlobalStyles.colors.error500,
		textAlign: "center",
		margin: 8,
	},
});
