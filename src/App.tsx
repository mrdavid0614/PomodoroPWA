import { GlobalStyle } from "./styles/global";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import {
	BrowserRouter as Router,
	Switch,
	Route,

} from "react-router-dom";

import { Pomodoro } from "./components/Pomodoro";
import { PomodoroSettings } from "./components/PomodoroSettings";

const App = () => {
	return (
		<ThemeProvider theme={ theme }>
			<GlobalStyle />
      
			<main>
				<Router>
					<Switch>
						<Route path="/settings">
							<PomodoroSettings />
						</Route>
						<Route path="/">
							<Pomodoro />
						</Route>
					</Switch>
				</Router>
			</main>   
		</ThemeProvider>
	);
}

export { App };
