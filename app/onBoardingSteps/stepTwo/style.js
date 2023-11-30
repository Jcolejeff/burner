import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../../constants";

const styles = StyleSheet.create({
	container: {
		width: "100%",
	},
	image: {
		width: "100%",
		height: "50%",
		resizeMode: "cover",
	},
	btnText: {
		fontFamily: FONT.regular,
		fontSize: SIZES.medium,
		color: COLORS.white,
	},
	text: {
		fontFamily: FONT.regular,
		fontSize: SIZES.medium,
		color: COLORS.lightWhite,
		width: "90%",
	},
	linkText: {
		fontFamily: FONT.regular,
		fontSize: SIZES.xSmall,
		color: COLORS.lightWhite,
		textAlign: "center",
		marginTop: SIZES.xxLarge,
		opacity: 0.7,
	},
	link: {
		fontFamily: FONT.regular,
		fontSize: SIZES.xSmall,
		color: COLORS.lightWhite,
		textDecorationLine: "underline",
		textAlign: "center",
		marginTop: SIZES.xxLarge,
	},
	heading: {
		fontFamily: FONT.bold,
		fontSize: SIZES["2xlarge"],
		color: COLORS.primary,
		width: "90%",

		marginTop: 2,
	},
	btnContainer: {
		justifyContent: "space-between",
		alignItems: "center",
		flexDirection: "row",
		marginTop: SIZES["2xlarge"],
	},
	btn: {
		width: "30%",
		height: "100%",
		backgroundColor: COLORS.primary,
		flexDirection: "row",
		color: COLORS.white,
		borderRadius: SIZES["2xlarge"],
		justifyContent: "center",
		alignItems: "center",
		alignContent: "center",
		gap: SIZES.small,
		paddingVertical: SIZES.small,
	},
	btnImage: {
		width: "10%",
		height: "100%",
	},
});

export default styles;
