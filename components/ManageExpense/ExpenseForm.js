import { View, StyleSheet } from "react-native";
import Input from "./Input";

function ExpenseForm() {
	function amountChangeHandler() {}

	return (
		<View>
			<Input
				label="amount"
				textInputConfig={{
					keyboardType: "decimal-pad",
					placeholder: "0.00",
					onChangeText: amountChangeHandler,
				}}
			/>
			<Input
				label="date"
				textInputConfig={{
					placeholder: "YYYY-MM-DD",
					maxLength: 10,
					onChangeText: () => {},
				}}
			/>
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

const styles = StyleSheet.create({});
