import { StateContextProvider } from "./context/state";
import useStateContext from "./hooks/useStateContext";
import GlobalStyle from "./styles/global";
import { ThemeProvider } from "styled-components";
import themes from "./styles/themes";
import Routes from "./pages/index";

const App = () => {
	const { theme } = useStateContext();

	return (
		<ThemeProvider theme={ themes[theme] }>
			<GlobalStyle />

			<main>
				<Routes />
			</main>
		</ThemeProvider>
	);
};

const AppWrapper = () => (
	<StateContextProvider>
		<App />
	</StateContextProvider>
)

export default AppWrapper;
