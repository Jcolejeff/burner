import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../../constants";

const styles = StyleSheet.create({
	container: {
		width: "100%",
	},
	homeImage: {
		width: "100%",
		height: "50%",
	},
	spotify: {
		fontFamily: FONT.regular,
		fontSize: SIZES.large,
		color: COLORS.black,
	},
	welcomeMessage: {
		fontFamily: FONT.regular,
		fontSize: SIZES.small,
		color: COLORS.lightWhite,
	},
	heading: {
		fontFamily: FONT.bold,
		fontSize: SIZES.xxLarge,
		color: COLORS.primary,

		marginTop: 2,
	},
	btnContainer: {
		justifyContent: "center",
		alignItems: "center",
		flexDirection: "row",
		marginTop: SIZES.large,
		height: 50,
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
	btn: {
		width: "100%",
		height: "100%",
		backgroundColor: COLORS.lightWhite,
		flexDirection: "row",
		borderRadius: SIZES.medium,
		justifyContent: "center",
		alignItems: "center",
	},
	searchBtnImage: {
		width: "10%",
		height: "50%",
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
