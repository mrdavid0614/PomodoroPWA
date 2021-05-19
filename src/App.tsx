import { GlobalStyle } from "./styles/global";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";

import { Pomodoro } from "./components/Pomodoro";
import { PomodoroSettings } from "./components/PomodoroSettings";

const App = () => {
	return (
		<ThemeProvider theme={ theme }>
			<GlobalStyle />
      
			<main>
				<Pomodoro />
				<PomodoroSettings />
			</main>   
		</ThemeProvider>
	);
}

export { App };
