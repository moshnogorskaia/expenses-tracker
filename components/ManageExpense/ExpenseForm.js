import { View, StyleSheet, Text } from "react-native";
import Input from "./Input";

function ExpenseForm() {
	function amountChangeHandler() {}

	return (
		<View style={styles.form}>
			<Text style={styles.title}>Your Expense</Text>
			<View style={styles.inputsRow}>
				<Input
					label="amount"
					textInputConfig={{
						keyboardType: "decimal-pad",
						placeholder: "0.00",
						onChangeText: amountChangeHandler,
					}}
					style={styles.rowInput}
				/>
				<Input
					label="date"
					textInputConfig={{
						placeholder: "YYYY-MM-DD",
						maxLength: 10,
						onChangeText: () => {},
					}}
					style={styles.rowInput}
				/>
			</View>
			<Input
				label="description"
				textInputConfig={{
					multiline: true,
					onChangeText: () => {},
				}}
			/>
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
});
