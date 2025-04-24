import "./theme";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RootComponent } from "./routes/__root";
import { HomeComponent } from "./routes/index";
import { ThemeComponent } from "./routes/theme";
import { LottiesComponent } from "./routes/lotties";
import { LottiesTonPackComponent } from "./routes/lotties_tonpack";

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<RootComponent />}>
					<Route index element={<HomeComponent />} />
					<Route path="theme" element={<ThemeComponent />} />
					<Route path="lotties" element={<LottiesComponent />} />
					<Route path="lotties_tonpack" element={<LottiesTonPackComponent />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

export default App;
