import van from "vanjs-core";
import { count } from "./src/state";

const { div, span, button } = van.tags;

const JointComponent0 = div(
	span({ className: "text-white" }, "❤️", count, " "),
	button({ onclick: () => ++count.val }, "👍"),
	button({ onclick: () => --count.val }, span({}, "👎")),
);

const JointComponent1 = div(
	{ class: "" },
	span({}, "❤️", count, " "),
	button({ onclick: () => ++count.val }, "👍"),
	button({ onclick: () => --count.val }, span({}, "👎")),
);

const App = () => {
	return [JointComponent0, JointComponent1];
};

export default App;
