import "styled-components";

declare module "styled-components" {
	export interface DefaultTheme {
		color: {
			text: string;
			background: string;
			highlight: string;
		};
	}
}
