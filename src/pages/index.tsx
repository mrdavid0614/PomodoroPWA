import {
	BrowserRouter,
	Switch,
	Route
} from "react-router-dom";
import { Home } from "./Home";
import { Settings } from "./Settings";

const Routes = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/" exact component={ Home } />
				<Route path="/settings" component={ Settings } />
			</Switch>
		</BrowserRouter>
	)
};

export default Routes;
