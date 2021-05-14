import { GlobalStyle } from "./styles/global";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";

import { Pomodoro } from "./components/Pomodoro/index";

const App = () => {
	return (
		<ThemeProvider theme={ theme }>
			<GlobalStyle />
      
			<div>
				<Pomodoro /> 
			</div>   
		</ThemeProvider>
	);
}

export { App };
