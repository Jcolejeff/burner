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
import { StepLayout } from "../../../components";

const jobTypes = ["Full-time", "Part-time", "Contract"];

const OnBoardingStepThree = () => {
	const router = useRouter();

	return (
		<StepLayout>
			<View
				style={{
					flex: 1,

					backgroundColor: COLORS.black,
					padding: SIZES.medium,
					justifyContent: "center",
					gap: SIZES.small,

					minHeight: 770,
				}}
			>
				<Image
					source={images.home}
					resizeMode="cover"
					style={styles.homeImage}
				/>
				<Text style={styles.heading}>Stay in tune</Text>
				<Text style={styles.welcomeMessage}>
					Catch up on releases from your favorite artists. Share new music,
					spread love
				</Text>

				<View style={styles.btnContainer}>
					<TouchableOpacity style={styles.btn} onPress={() => router.push(`/`)}>
						<Image
							source={icons.spotify}
							resizeMode="contain"
							style={styles.searchBtnImage}
						/>
						<Text style={styles.spotify}>Go to home</Text>
					</TouchableOpacity>
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
		</StepLayout>
	);
};

export default OnBoardingStepThree;
