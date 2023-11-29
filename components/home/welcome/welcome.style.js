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
		fontFamily: FONT.bold,
		fontSize: SIZES.medium,
		color: COLORS.black,
	},
	welcomeMessage: {
		fontFamily: FONT.regular,
		fontSize: SIZES.medium,
		color: COLORS.lightWhite,
		textAlign: "center",
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
		textAlign: "center",

		marginTop: 2,
	},
	btnContainer: {
		justifyContent: "center",
		alignItems: "center",
		flexDirection: "row",
		marginTop: SIZES.large,
	},
	btn: {
		width: "72%",
		height: "100%",
		backgroundColor: COLORS.lightWhite,
		flexDirection: "row",
		borderRadius: SIZES["2xlarge"],
		justifyContent: "center",
		alignItems: "center",
		paddingVertical: SIZES.large,
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
	modalWrapper: {
		backgroundColor: COLORS.gray,
		width: "100%",

		paddingVertical: SIZES.medium,
		borderRadius: SIZES.medium,
	},
	modalBtn: {
		flexDirection: "row",
		borderRadius: SIZES["2xlarge"],
		justifyContent: "center",
		alignItems: "center",
		borderRightColor: COLORS.gray2,
		borderRightWidth: 1,
		width: "50%",
	},
	modalBtnContainer: {
		justifyContent: "space-around",
		alignItems: "center",
		flexDirection: "row",
		marginTop: SIZES.large,
	},
	modalHeaderText: {
		fontFamily: FONT.bold,
		fontSize: SIZES.medium,
		color: COLORS.black,
		textAlign: "center",
		marginTop: SIZES.small,
		paddingBottom: SIZES.medium,
		paddingHorizontal: SIZES.medium,
		borderBottomWidth: 1,
		borderBottomColor: COLORS.gray2,
	},
	btnText: {
		fontFamily: FONT.regular,
		fontSize: SIZES.medium,
		color: COLORS.secondary,
	},
	tabText: (activeJobType, item) => ({
		fontFamily: FONT.medium,
		color: activeJobType === item ? COLORS.secondary : COLORS.gray2,
	}),
});

export default styles;
