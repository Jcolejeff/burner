import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { useRouter } from "expo-router";
import styles from "./style";
import { SIZES, icons, COLORS, images } from "../../../constants";
import StepLayout from "../../../components/common/stepsLayout/StepsLayout";

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
					<Text style={styles.text}>
						Unearth fresh tunes from your favourite artists.
					</Text>

					<View style={styles.btnContainer}>
						<Image
							source={icons.sliderThree}
							resizeMode="contain"
							style={{ width: "16%", height: "20%" }}
						/>
						<TouchableOpacity
							style={styles.btn}
							onPress={() => router.push(`/`)}
						>
							<Text style={styles.btnText}>Get Started</Text>
						</TouchableOpacity>
					</View>
				</View>
				<Image
					source={images.stepThree}
					resizeMode="cover"
					style={styles.image}
				/>
			</View>
		</StepLayout>
	);
};

export default OnBoardingStepThree;
