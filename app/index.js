import React, { useState } from "react";
import { View, Text, ScrollView, SafeAreaView, Image } from "react-native";
import { Stack, useRouter } from "expo-router";

import { COLORS, icons, images, SIZES } from "../constants";
import { ScreenHeaderBtn, Welcome } from "../components";

const Home = () => {
	const router = useRouter();
	const [searchTerm, setSearchTerm] = useState("");

	return (
		<SafeAreaView style={{ flex: 1 }}>
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
					headerBackground: () => (
						<Image
							source={require("../assets/images/header-bg.png")}
							style={{
								flex: 1,
								resizeMode: "contain",
								width: "100%",
								height: "100%",
							}}
						/>
					),
				}}
			/>

			<Welcome />
		</SafeAreaView>
	);
};

export default Home;
