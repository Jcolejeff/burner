import React, { useState } from "react";
import {
	View,
	Text,
	ScrollView,
	SafeAreaView,
	Image,
	ImageBackground,
} from "react-native";
import { Stack, useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { COLORS, icons, images, SIZES } from "../constants";
import { ScreenHeaderBtn, Welcome } from "../components";

const Home = () => {
	const router = useRouter();
	const [searchTerm, setSearchTerm] = useState("");

	return (
		<SafeAreaView style={{ flex: 1 }}>
			<Stack.Screen
				options={{
					headerShadowVisible: false,
					// headerLeft: () => (
					// 	<ScreenHeaderBtn iconUrl={icons.spotify} dimension="100%" />
					// ),
					// headerRight: () => (
					// 	<ScreenHeaderBtn iconUrl={icons.spotify} dimension="100%" />
					// ),
					headerTitle: "",
					headerTransparent: true,
					headerBackground: () => (
						<ImageBackground
							imageStyle={{
								resizeMode: "cover",
								width: "100%",
								height: 75,
							}}
							source={require("../assets/images/header-bg.png")}
						/>
					),
				}}
			/>
			<StatusBar style="light" />

			<Welcome />
		</SafeAreaView>
	);
};

export default Home;
