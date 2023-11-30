import React, { useState } from "react";
import {
	View,
	Text,
	TouchableOpacity,
	FlatList,
	TextInput,
	Image,
	Modal,
	SafeAreaView,
} from "react-native";
import { useRouter } from "expo-router";

import styles from "./welcome.style";
import { SIZES, icons, COLORS, images } from "../../../constants";

const Welcome = () => {
	const router = useRouter();
	const [isModalVisible, setIsModalVisible] = useState(false);

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
						onPress={() => setIsModalVisible(true)}
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
			<Modal
				animationType="slide"
				transparent={true}
				visible={isModalVisible}
				onRequestClose={() => setIsModalVisible(false)}
			>
				<SafeAreaView
					style={{
						flex: 1,
						backgroundColor: "#1818179E",
						padding: 60,
						justifyContent: "center",
						alignItems: "center",
					}}
				>
					<View style={styles.modalWrapper}>
						<Text style={styles.modalHeaderText}>
							“Burner” wants to open “Spotify”
						</Text>
						<View style={styles.modalBtnContainer}>
							<TouchableOpacity
								style={styles.modalBtn}
								onPress={() => setIsModalVisible(false)}
							>
								<Text style={styles.btnText}>Close</Text>
							</TouchableOpacity>
							<TouchableOpacity
								style={styles.modalBtn}
								onPress={() => {
									setIsModalVisible(false);
									router.push("/onBoardingSteps");
								}}
							>
								<Text style={styles.btnText}>Open</Text>
							</TouchableOpacity>
						</View>
					</View>
				</SafeAreaView>
			</Modal>
		</View>
	);
};

export default Welcome;
