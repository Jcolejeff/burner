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

import styles from "./style";
import { SIZES, icons, COLORS, images } from "../../../constants";
import StepLayout from "../../../components/common/stepsLayout/StepsLayout";

const jobTypes = ["Full-time", "Part-time", "Contract"];

const OnBoardingStepTwo = () => {
	const router = useRouter();

	return (
		<StepLayout>
			<View
				style={{
					flex: 1,

					backgroundColor: COLORS.black,

					justifyContent: "space-between",
					gap: SIZES.large,
				}}
			>
				<View
					style={{
						backgroundColor: COLORS.black,
						padding: SIZES.medium,
						justifyContent: "center",
						gap: SIZES.small,
					}}
				>
					<Text style={styles.heading}>Smooth playback controls</Text>
					<Text style={styles.welcomeMessage}>
						Play, pause, skip, and adjust volume effortlessly. Stay in charge of
						your tunes!
					</Text>

					<View style={styles.btnContainer}>
						<Image
							source={icons.sliderTwo}
							resizeMode="contain"
							style={{ width: "16%", height: "20%" }}
						/>
						<TouchableOpacity
							style={styles.btn}
							onPress={() => router.push(`/`)}
						>
							<Text style={styles.spotify}>Skip</Text>
							<Image
								source={icons.next}
								resizeMode="cover"
								style={styles.searchBtnImage}
							/>
						</TouchableOpacity>
					</View>
				</View>
				<Image
					source={images.stepTwo}
					resizeMode="cover"
					style={styles.homeImage}
				/>
			</View>
		</StepLayout>
	);
};

export default OnBoardingStepTwo;
