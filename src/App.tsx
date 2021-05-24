import { GlobalStyle } from "./styles/global";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import {
	BrowserRouter as Router,
	Switch,
	Route,

} from "react-router-dom";

import { Home } from "./pages/Home";
import { Settings } from "./pages/Settings";

const App = () => {
	return (
		<ThemeProvider theme={ theme }>
			<GlobalStyle />

			<main>
				<Router>
					<Switch>
						<Route path="/settings" component={ Settings } />
						<Route path="/" component={ Home }>
						</Route>
					</Switch>
				</Router>
			</main>   
		</ThemeProvider>
	);
}

export { App };
