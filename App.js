import React, { useState } from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";

export default function App() {
	const [input, setInput] = useState("");

	const handlePress = (value) => {
		setInput(input + value);
	};

	const handleClear = () => {
		setInput("");
	};

	const handleEvaluate = () => {
		try {
			setInput(eval(input).toString());
		} catch (e) {
			setInput("Error");
		}
	};

	return (
		<View style={styles.container}>
			<View style={styles.screen}>
				<Text style={styles.text}>{input}</Text>
			</View>
			<View style={styles.buttons}>
				<View style={styles.row}>
					<Pressable
						style={styles.button}
						onPress={() => handlePress("1")}
					>
						<Text style={styles.buttonText}>1</Text>
					</Pressable>
					<Pressable
						style={styles.button}
						onPress={() => handlePress("2")}
					>
						<Text style={styles.buttonText}>2</Text>
					</Pressable>
					<Pressable
						style={styles.button}
						onPress={() => handlePress("3")}
					>
						<Text style={styles.buttonText}>3</Text>
					</Pressable>
					<Pressable
						style={styles.button}
						onPress={() => handlePress("+")}
					>
						<Text style={styles.buttonText}>+</Text>
					</Pressable>
				</View>
				<View style={styles.row}>
					<Pressable
						style={styles.button}
						onPress={() => handlePress("4")}
					>
						<Text style={styles.buttonText}>4</Text>
					</Pressable>
					<Pressable
						style={styles.button}
						onPress={() => handlePress("5")}
					>
						<Text style={styles.buttonText}>5</Text>
					</Pressable>
					<Pressable
						style={styles.button}
						onPress={() => handlePress("6")}
					>
						<Text style={styles.buttonText}>6</Text>
					</Pressable>
					<Pressable
						style={styles.button}
						onPress={() => handlePress("-")}
					>
						<Text style={styles.buttonText}>-</Text>
					</Pressable>
				</View>
				<View style={styles.row}>
					<Pressable
						style={styles.button}
						onPress={() => handlePress("7")}
					>
						<Text style={styles.buttonText}>7</Text>
					</Pressable>
					<Pressable
						style={styles.button}
						onPress={() => handlePress("8")}
					>
						<Text style={styles.buttonText}>8</Text>
					</Pressable>
					<Pressable
						style={styles.button}
						onPress={() => handlePress("9")}
					>
						<Text style={styles.buttonText}>9</Text>
					</Pressable>
					<Pressable
						style={styles.button}
						onPress={() => handlePress("*")}
					>
						<Text style={styles.buttonText}>*</Text>
					</Pressable>
				</View>
				<View style={styles.row}>
					<Pressable
						style={styles.button}
						onPress={() => handlePress("0")}
					>
						<Text style={styles.buttonText}>0</Text>
					</Pressable>
					<Pressable style={styles.button} onPress={handleClear}>
						<Text style={styles.buttonText}>C</Text>
					</Pressable>
					<Pressable style={styles.button} onPress={handleEvaluate}>
						<Text style={styles.buttonText}>=</Text>
					</Pressable>
					<Pressable
						style={styles.button}
						onPress={() => handlePress("/")}
					>
						<Text style={styles.buttonText}>/</Text>
					</Pressable>
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#d3d3d3", 
		justifyContent: "flex-end",
	},
	screen: {
		flex: 1,
		justifyContent: "flex-end",
		padding: 20,
		backgroundColor: "#d3d3d3", 
	},
	text: {
		color: "white",
		fontSize: 40,
		textAlign: "right",
	},
	buttons: {
		padding: 30,
		backgroundColor: "#d3d3d3", 
	},
	row: {
		flexDirection: "row",
		justifyContent: "space-around",
		marginBottom: 10,
	},
	button: {
		width: 80, 
		height: 60,
		backgroundColor: "#3498db",
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 3,
	},
	buttonText: {
		fontSize: 26,
		color: "white",
	},
});
