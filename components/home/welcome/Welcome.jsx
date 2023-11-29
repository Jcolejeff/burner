import React, { useState } from "react";
import {
	View,
	Text,
	TouchableOpacity,
	FlatList,
	TextInput,
	Image,
} from "react-native";
import { useRouter } from "expo-router";

import styles from "./welcome.style";
import { SIZES, icons, COLORS, images } from "../../../constants";

const jobTypes = ["Full-time", "Part-time", "Contract"];

const Welcome = () => {
	const router = useRouter();

	return (
		<View
			style={{
				flex: 1,

				backgroundColor: COLORS.black,

				justifyContent: "center",
				gap: SIZES.large,
			}}
		>
			<Image source={images.home} resizeMode="cover" style={styles.homeImage} />
			<View
				style={{
					backgroundColor: COLORS.black,
					padding: SIZES.medium,
					justifyContent: "center",
					gap: SIZES.small,
					alignItems: "center",
				}}
			>
				<Text style={styles.heading}>Stay in tune</Text>
				<Text style={styles.welcomeMessage}>
					Catch up on releases from your favorite artists. Share new music,
					spread love
				</Text>

				<View style={styles.btnContainer}>
					<TouchableOpacity
						style={styles.btn}
						onPress={() => router.push(`/onBoardingSteps/stepOne`)}
					>
						<Image
							source={icons.spotify}
							resizeMode="contain"
							style={styles.searchBtnImage}
						/>
						<Text style={styles.spotify}>CONTINUE WITH SPOTIFY</Text>
					</TouchableOpacity>
				</View>
				<View style={{ flexDirection: "row", gap: 2 }}>
					<Text style={styles.linkText}>
						By clicking continue, you agree to our
					</Text>
					<Text style={styles.link}>Terms of Use</Text>
				</View>
			</View>

			{/* <View style={styles.tabsContainer}>
				<FlatList
					data={jobTypes}
					renderItem={({ item }) => (
						<TouchableOpacity
							style={styles.tab(activeJobType, item)}
							onPress={() => {
								setactiveJobType(item);
								router.push(`/search/${item}`);
							}}
						>
							<Text style={styles.tabText(activeJobType, item)}>{item}</Text>
						</TouchableOpacity>
					)}
					keyExtractor={(item) => item}
					contentContainerStyle={{ columnGap: SIZES.small }}
					horizontal
				/>
			</View> */}
		</View>
	);
};

export default Welcome;
