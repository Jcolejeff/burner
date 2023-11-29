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
import StepLayout from "../../../components/common/stepsLayout/StepsLayout";

const jobTypes = ["Full-time", "Part-time", "Contract"];

const OnBoardingStepThree = () => {
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
					<Text style={styles.heading}>
						Discover new releases from your favorites
					</Text>
					<Text style={styles.welcomeMessage}>
						Unearth fresh tunes from your favourite artists.
					</Text>

					<View style={styles.btnContainer}>
						<Image source={icons.sliderThree} resizeMode="contain" style={{}} />
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
					source={images.stepThree}
					resizeMode="cover"
					style={styles.homeImage}
				/>
			</View>
		</StepLayout>
	);
};

export default OnBoardingStepThree;
