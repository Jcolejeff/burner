import React from "react";
import { SafeAreaView, ImageBackground } from "react-native";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Welcome } from "../components";

const Home = () => {
	return (
		<SafeAreaView style={{ flex: 1 }}>
			<Stack.Screen
				options={{
					headerShadowVisible: false,

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
