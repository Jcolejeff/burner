import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../../constants";

const styles = StyleSheet.create({
	container: {
		width: "100%",
	},
	homeImage: {
		width: "100%",
		height: "50%",
		resizeMode: "cover",
	},
	spotify: {
		fontFamily: FONT.regular,
		fontSize: SIZES.medium,
		color: COLORS.white,
	},
	welcomeMessage: {
		fontFamily: FONT.regular,
		fontSize: SIZES.medium,
		color: COLORS.lightWhite,
		width: "60%",
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
		width: "95%",

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
	searchWrapper: {
		flex: 1,
		backgroundColor: COLORS.white,
		marginRight: SIZES.small,
		justifyContent: "center",
		alignItems: "center",
		borderRadius: SIZES.medium,
		height: "100%",
	},
	searchInput: {
		fontFamily: FONT.regular,
		width: "100%",
		height: "100%",
		paddingHorizontal: SIZES.medium,
	},

	searchBtnImage: {
		width: "10%",
		height: "100%",
	},
	tabsContainer: {
		width: "100%",
		marginTop: SIZES.medium,
	},
	tab: (activeJobType, item) => ({
		paddingVertical: SIZES.small / 2,
		paddingHorizontal: SIZES.small,
		borderRadius: SIZES.medium,
		borderWidth: 1,
		borderColor: activeJobType === item ? COLORS.secondary : COLORS.gray2,
	}),
	tabText: (activeJobType, item) => ({
		fontFamily: FONT.medium,
		color: activeJobType === item ? COLORS.secondary : COLORS.gray2,
	}),
});

export default styles;
