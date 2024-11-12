import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { tmaBeforeRun } from "./utils/tmaBeforeRun";

tmaBeforeRun();

const rootEl = document.getElementById("root");
if (rootEl) {
	const root = ReactDOM.createRoot(rootEl);
	root.render(
		<React.StrictMode>
			<App />
		</React.StrictMode>,
	);
}
