import React, { useState } from "react";
import { View, Text, ScrollView, SafeAreaView, Image } from "react-native";
import { Stack, useRouter } from "expo-router";

import { COLORS, icons, images, SIZES } from "../../../constants";

const StepLayout = ({ children }) => {
	const router = useRouter();
	const [searchTerm, setSearchTerm] = useState("");

	return (
		<SafeAreaView
			style={{ flex: 1, backgroundColor: COLORS.lightWhite, height: "100%" }}
		>
			<Stack.Screen
				options={{
					headerStyle: { backgroundColor: COLORS.black },
					headerShadowVisible: false,
					// headerLeft: () => (
					// 	<ScreenHeaderBtn iconUrl={icons.menu} dimension="60%" />
					// ),
					// headerRight: () => (
					// 	<ScreenHeaderBtn iconUrl={images.profile} dimension="100%" />
					// ),
					headerTitle: "",
				}}
			/>

			<ScrollView showsVerticalScrollIndicator={false}>{children}</ScrollView>
		</SafeAreaView>
	);
};

export default StepLayout;
