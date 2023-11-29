const COLORS = {
	primary: "#AA6DFF",
	secondary: "#1161C2",
	tertiary: "#FF7754",
	black: "#0D0D0C",

	gray: "#C9C9C9",
	gray2: "#C1C0C8",

	white: "#F3F4F8",
	lightWhite: "#FAFAFC",
};

const FONT = {
	regular: "DMRegular",
	medium: "DMMedium",
	bold: "DMBold",
};

const SIZES = {
	xSmall: 10,
	small: 12,
	medium: 16,
	large: 20,
	xLarge: 24,
	xxLarge: 32,
	"2xlarge": 40,
};

const SHADOWS = {
	small: {
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
		elevation: 2,
	},
	medium: {
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 5.84,
		elevation: 5,
	},
};

export { COLORS, FONT, SIZES, SHADOWS };
