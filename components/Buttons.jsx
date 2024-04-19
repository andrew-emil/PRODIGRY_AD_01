import { Text, TouchableOpacity } from "react-native";
import React from "react";
import { styles } from "./styles/GlobalStyles";

const Buttons = ({title, isBlue, isGray, onPress}) => {
	return (
		<TouchableOpacity
			style={
				isBlue ? styles.btnBlue : isGray ? styles.btnGray : styles.btnLight
			}
			onPress={onPress}>
			<Text
				style={isBlue || isGray ? styles.smallTextLight : styles.smallTextDark}>
				{title}
			</Text>
		</TouchableOpacity>
	);
};

export default Buttons;
