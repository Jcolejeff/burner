import React from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import { SwiperFlatList } from "react-native-swiper-flatlist";
import OnBoardingStepOne from "./stepOne";
import OnBoardingStepThree from "./stepThree";
import OnBoardingStepTwo from "./stepTwo";

const onBoardingSteps = () => (
	<SwiperFlatList
		autoplay={false}
		autoplayDelay={6}
		autoplayLoop
		index={0}
		showPagination={false}
	>
		<View style={[styles.child]}>
			<OnBoardingStepOne />
		</View>
		<View style={[styles.child]}>
			<OnBoardingStepTwo />
		</View>
		<View style={[styles.child]}>
			<OnBoardingStepThree />
		</View>
	</SwiperFlatList>
);

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
	child: { width, justifyContent: "center" },
});

export default onBoardingSteps;
