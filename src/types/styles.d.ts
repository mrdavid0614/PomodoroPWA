import "styled-components";

type ColorTheme = {
	color: {
		text: string;
		background: string;
		highlight: string;
	};
};

declare module "styled-components" {
	export interface DefaultTheme {
		light: ColorTheme;
		dark: ColorTheme;
	}
}
