import React, { useState } from "react";
import { View, Text, ScrollView, SafeAreaView, Image } from "react-native";
import { Stack, useRouter } from "expo-router";

import { COLORS, icons, images, SIZES } from "../../../constants";

const StepLayout = ({ children }) => {
	const router = useRouter();
	const [searchTerm, setSearchTerm] = useState("");

	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: COLORS.black }}>
			<Stack.Screen
				options={{
					headerStyle: { backgroundColor: COLORS.black },
					headerShadowVisible: false,
					headerLeft: () => <></>,
					headerTitle: "",
				}}
			/>

			{children}
		</SafeAreaView>
	);
};

export default StepLayout;
